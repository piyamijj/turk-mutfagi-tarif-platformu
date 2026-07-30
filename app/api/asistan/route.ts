import { NextRequest, NextResponse } from "next/server";
import { getAllRecipes } from "@/lib/recipes";

const GEMINI_MODEL = "gemini-flash-latest";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

interface ChatMessage {
  role: string;
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply: "Şu anda AI asistan servisi yapılandırılmamış. Lütfen site yöneticisiyle iletişime geçin ve GEMINI_API_KEY çevre değişkeninin tanımlandığından emin olun.",
        suggestedRecipeIds: [],
      });
    }

    const body = await req.json();
    const { message, history } = body as { message: string; history?: ChatMessage[] };

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Geçersiz veya boş mesaj gönderildi." },
        { status: 400 }
      );
    }

    // Build a compact catalog context string to ground the model
    const recipes = getAllRecipes();
    const catalogContext = recipes
      .slice(0, 150) // Cap to prevent token overflow
      .map(
        (r) =>
          `- ${r.title} (ID: ${r.id}) | Malzemeler: ${r.mainIngredients.join(
            ", "
          )} | Kategori: ${r.subCategoryLabel}`
      )
      .join("\n");

    // Construct the system prompt
    const systemPrompt = `Sen "Nefis & Özgün" Türk yemek tarifleri platformunun cana yakın, bilgili ve profesyonel Şef Asistanısın. Görevin, kullanıcılara yemek pişirme, malzeme ikameleri, mutfak teknikleri ve tarif önerileri konusunda yardımcı olmaktır.

AŞAĞIDAKİ KURALLARA KESİNLİKLE UYMALISIN:
1. Sadece ve sadece sana aşağıda verilen tarif kataloğundaki tarifleri önerebilirsin. Kataloğumuzda bulunmayan hiçbir yemeği varmış gibi önerme veya uydurma.
2. Eğer kullanıcının elindeki malzemelere göre veya isteğine göre katalogdan bir veya birden fazla tarif önereceksen, yanıtının EN SON SATIRINA makine tarafından okunabilecek şu formatta tarif ID'lerini eklemelisin:
   RECIPE_IDS: id1,id2,id3
   (Buradaki id'ler, katalogda belirtilen tam "ID" değerleri olmalıdır. Aralarında boşluk olmadan sadece virgülle ayrılmalıdır. Eğer hiçbir tarif önermiyorsan bu satırı asla ekleme.)
3. Genel mutfak teknikleri, yemek pişirme sırları veya malzeme ikameleri (örneğin "un yerine ne kullanabilirim?") gibi soruları, katalogda doğrudan bir tarif olmasa bile şef bilgini kullanarak serbestçe yanıtlayabilirsin.
4. Yanıtlarını her zaman Türkçe dilinde, dil bilgisi kurallarına ve Türkçe karakterlere (ç, ğ, ı, i, ö, ş, ü, â, î, û) tam uyumlu olarak yaz.
5. Samimi, iştah açıcı, yapıcı ve kısa (en fazla 3-4 cümle) yanıtlar ver.

KULLANABİLECEĞİN TARİF KATALOĞU:
${catalogContext}`;

    // Map history to Gemini API format
    const contents = [];
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        });
      }
    }

    // Append current user message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    // Construct Gemini REST API request body
    const requestBody = {
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800,
      },
    };

    const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error response:", errText);
      return NextResponse.json({
        reply: "Üzgünüm, şu anda şef asistanı servisinde teknik bir aksaklık yaşanıyor. Lütfen biraz sonra tekrar deneyin.",
        suggestedRecipeIds: [],
      });
    }

    const data = await response.json();
    
    // Safely extract text from Gemini response
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText || typeof rawText !== "string") {
      console.error("Unexpected Gemini response shape:", JSON.stringify(data));
      return NextResponse.json({
        reply: "Şu anda yanıt oluşturamadım. Lütfen sorunuzu farklı bir şekilde sormayı deneyin.",
        suggestedRecipeIds: [],
      });
    }

    // Post-process the response to extract suggested recipe IDs
    let cleanedText = rawText.trim();
    const suggestedRecipeIds: string[] = [];

    // Find the RECIPE_IDS line (case-insensitive, matching trailing line or anywhere in text)
    const recipeIdsRegex = /RECIPE_IDS:\s*([a-z0-9,-]+)/i;
    const match = cleanedText.match(recipeIdsRegex);

    if (match && match[1]) {
      const ids = match[1]
        .split(",")
        .map((id) => id.trim())
        .filter((id) => id.length > 0);

      // Filter to only include IDs that actually exist in our catalog to prevent hallucinations
      const validIds = recipes.map((r) => r.id);
      for (const id of ids) {
        if (validIds.includes(id) && !suggestedRecipeIds.includes(id)) {
          suggestedRecipeIds.push(id);
        }
      }

      // Strip the RECIPE_IDS line from the visible text
      cleanedText = cleanedText.replace(recipeIdsRegex, "").trim();
    }

    return NextResponse.json({
      reply: cleanedText,
      suggestedRecipeIds,
    });
  } catch (error) {
    console.error("Error in AI Assistant API route:", error);
    return NextResponse.json({
      reply: "Sistemde beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      suggestedRecipeIds: [],
    });
  }
}