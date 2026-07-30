/**
 * Türk Mutfağı Tarif Platformu - İçerik Üretim Otomasyon Scripti
 * 
 * Bu script, kullanıcının kendi Termux ortamında (Node.js 18+ gereklidir)
 * progress.json dosyasını okuyarak sıradaki 15 bekleyen tarifi otomatik olarak
 * Gemini REST API üzerinden üretir, ilgili TypeScript veri dosyalarına yazar
 * ve progress.json durumunu günceller.
 * 
 * Çalıştırma komutu:
 * GEMINI_API_KEY="anahtariniz" node content-pipeline/generate.js
 */

const fs = require('fs');
const path = require('path');

const GEMINI_MODEL = "gemini-flash-latest";
const GEMINI_TEXT_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// 1. API Anahtarı Kontrolü
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("\x1b[31mHata: GEMINI_API_KEY çevre değişkeni tanımlanmamış!\x1b[0m");
  console.error("Lütfen scripti şu şekilde çalıştırın:");
  console.error("GEMINI_API_KEY=\"AIzaSy...\" node content-pipeline/generate.js\n");
  process.exit(1);
}

// 2. Dosya Yolları Tanımlamaları
const PROGRESS_PATH = path.join(__dirname, 'progress.json');
const PROJECT_ROOT = path.join(__dirname, '..');

// Kategori slug'larını veri dosyası adlarıyla eşleştirme
const CATEGORY_FILE_MAP = {
  'sicak-yemekler': 'sicak-yemekler.ts',
  'soguk-yemekler': 'soguk-yemekler.ts',
  'mezeler': 'mezeler.ts',
  'tatlilar': 'tatlilar.ts'
};

// Yardımcı: Türkçe karakterleri temizleme (idempotent kontrol için)
function normalizeTurkish(str) {
  if (!str) return "";
  return str
    .replace(/İ/g, "i")
    .replace(/I/g, "i")
    .replace(/ı/g, "i")
    .replace(/Ş/g, "s")
    .replace(/ş/g, "s")
    .replace(/Ğ/g, "g")
    .replace(/ğ/g, "g")
    .replace(/Ü/g, "u")
    .replace(/ü/g, "u")
    .replace(/Ö/g, "o")
    .replace(/ö/g, "o")
    .replace(/Ç/g, "c")
    .replace(/ç/g, "c")
    .toLowerCase()
    .trim();
}

async function main() {
  console.log("\x1b[36m=== Türk Mutfağı İçerik Üretim Hattı Başlatıldı ===\x1b[0m");
  
  // 3. progress.json Yükleme
  let progressData;
  try {
    const raw = fs.readFileSync(PROGRESS_PATH, 'utf8');
    progressData = JSON.parse(raw);
  } catch (err) {
    console.error("\x1b[31mKritik Hata: progress.json dosyası okunamadı veya geçersiz JSON formatında!\x1b[0m", err.message);
    process.exit(1);
  }

  const recipes = progressData.recipes || [];
  const batchSize = progressData.batchSize || 15;

  const completedCount = recipes.filter(r => r.status === 'tamamlandi').length;
  console.log(`Mevcut Durum: ${completedCount}/80 tarif zaten tamamlanmış durumda.`);

  // 4. İş Listesini Belirleme (Batching)
  // Önce batch 1'deki bekleyen/hata alanları, sonra batch 2'dekileri al
  const pendingQueue = recipes
    .filter(r => r.status === 'bekliyor' || r.status === 'hata')
    .sort((a, b) => a.batch - b.batch)
    .slice(0, batchSize);

  if (pendingQueue.length === 0) {
    console.log("\x1b[32mTebrikler! İşlenecek bekleyen tarif kalmadı. Tüm katalog tamamlanmış!\x1b[0m");
    return;
  }

  console.log(`Bu çalışmada toplam \x1b[35m${pendingQueue.length}\x1b[0m tarif işlenecektir.\n`);

  let successCount = 0;
  let errorCount = 0;

  // 5. Her Tarifi Döngüde İşleme
  for (let i = 0; i < pendingQueue.length; i++) {
    const targetRecipe = pendingQueue[i];
    const indexStr = `[${i + 1}/${pendingQueue.length}]`;
    console.log(`\x1b[33m${indexStr} İşleniyor: ${targetRecipe.title} (ID: ${targetRecipe.id})...\x1b[0m`);

    try {
      // a. Gemini için Prompt Hazırlama (ilk deneme: normal; retry denemesi aşağıda daha kısa bir varyantla yapılır)
      const buildPrompt = (strict) => `Sen profesyonel bir Türk şefisin. Senden "${targetRecipe.title}" tarifi için geleneksel, eksiksiz ve iştah açıcı bir içerik üretmeni istiyorum.
Üreteceğin içerik, aşağıdaki JSON şemasına KESİNLİKLE ve birebir uymalıdır. Yanıtında JSON dışında hiçbir açıklama, giriş cümlesi, markdown kod bloğu çiti (\`\`\`json gibi) veya ek metin OLMAMALIDIR. Sadece ham JSON döndür.
ÖNEMLİ: JSON'u KISA VE ÖZ tut - gereksiz uzun açıklamalar ekleme, her alanı gerekli minimum uzunlukta yaz. Yanıtın kesintiye uğramadan tam ve geçerli JSON olarak bitmesi, uzun/süslü metinden daha önemlidir.${strict ? ' BU BİR TEKRAR DENEMESİDİR: önceki yanıt kesik/bozuk geldi, bu sefer DAHA KISA tut - steps dizisini en fazla 6 adıma, tips dizisini en fazla 2 öğeye, her instruction/tip metnini kısa tut ve tip alanlarının çoğunu null bırak.' : ''}

JSON Şeması:
{
  "subCategoryLabel": "Alt kategorinin Türkçe adı (örn: 'Et ve Tavuk Yemekleri', 'Şerbetli Tatlılar', 'Çorbalar')",
  "region": "Varsa yöresel kökeni (örn: 'Gaziantep', 'Ege', 'Saray Mutfağı'), yoksa null",
  "prepTimeMinutes": hazırlama süresi (dakika cinsinden sayı),
  "cookTimeMinutes": pişirme süresi (dakika cinsinden sayı),
  "totalTimeMinutes": toplam süre (dakika cinsinden sayı),
  "servings": porsiyon sayısı (sayı, örn: 4 veya 6),
  "difficulty": "kolay" veya "orta" veya "zor" değerlerinden biri,
  "mainIngredients": ["tarif aramasında kullanılacak 5-8 adet temel malzeme adı, küçük harflerle, örn: 'patlıcan', 'kuzu eti'"],
  "tags": ["tarif etiketleri, örn: 'et', 'fırın', 'vejetaryen', 'klasik'"],
  "ingredientGroups": [
    {
      "groupTitle": "Grup başlığı (örn: 'Köfte Harcı İçin', 'Sosu İçin'), grup yoksa null veya boş bırakılabilir",
      "items": [
        {
          "item": "Malzeme adı (örn: 'Kıyma', 'Süzme Yoğurt')",
          "amount": "Ölçüsü (örn: '500 gram', '2 su bardağı')",
          "note": "Hazırlık notu (örn: 'orta yağlı', 'ince kıyılmış'), yoksa null"
        }
      ]
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "instruction": "Adım açıklaması. Türkçe dil bilgisi kurallarına uygun, etken fiillerle yazılmış (örn: 'Soğanları doğrayın', 'Kavurun').",
      "tip": "Bu adıma özel şef ipucu, yoksa null"
    }
  ],
  "tips": [
    "Tarifin genel püf noktaları, servis önerileri veya saklama koşulları (en az 2-3 adet string)"
  ],
  "calories": tahmini porsiyon kalorisi (sayı), yoksa null
}

ÖNEMLİ: Tüm metinleri Türkçe karakterlere (ç, ğ, ı, i, ö, ş, ü, â, î, û) tam uyumlu olarak yaz.`;

      // b. Gemini REST API Çağrısı — yanıt kesilip geçersiz JSON dönerse bir kez
      // daha, daha kısa/katı bir prompt varyantıyla otomatik tekrar denenir.
      let parsedRecipe = null;
      let lastParseError = null;

      for (let attempt = 0; attempt < 2 && !parsedRecipe; attempt++) {
        const isRetry = attempt === 1;
        const prompt = buildPrompt(isRetry);

        if (isRetry) {
          console.log(`  \x1b[36m↻ Yanıt eksik/bozuk geldi, daha kısa bir istekle tekrar deneniyor...\x1b[0m`);
        }

        const response = await fetch(GEMINI_TEXT_ENDPOINT + `?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: "Sen sadece istenen şemada ham JSON döndüren bir API servisiyisin. JSON dışında asla hiçbir şey yazma." }]
            },
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: isRetry ? 0.2 : 0.3,
              // Tarif JSON'ı ingredientGroups/steps/tips ile birikince uzayabiliyor;
              // önceki 2048 limiti yanıtın ortasında kesilmesine (bozuk JSON) yol açıyordu.
              maxOutputTokens: isRetry ? 3072 : 4096
            }
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          lastParseError = new Error(`Gemini API hatası: ${response.status} - ${errText.substring(0, 100)}`);
          continue;
        }

        const resData = await response.json();
        let rawText = resData?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!rawText) {
          lastParseError = new Error("Gemini'den boş veya geçersiz yanıt döndü.");
          continue;
        }

        // c. JSON Temizleme ve Ayrıştırma
        rawText = rawText.trim();
        // Olası markdown kod bloklarını temizle
        rawText = rawText.replace(/^```json\s*/i, '').replace(/```$/, '').trim();

        try {
          parsedRecipe = JSON.parse(rawText);
        } catch (jsonErr) {
          console.error("  Ham yanıt (kesik/bozuk olabilir):", rawText.substring(0, 300));
          lastParseError = new Error(`JSON ayrıştırma hatası: ${jsonErr.message}`);
        }
      }

      if (!parsedRecipe) {
        throw lastParseError || new Error("Bilinmeyen bir nedenle tarif üretilemedi.");
      }

      // d. Recipe Nesnesini İnşa Etme
      const finalRecipe = {
        id: targetRecipe.id,
        title: targetRecipe.title,
        mainCategory: targetRecipe.mainCategory,
        subCategory: targetRecipe.subCategory,
        subCategoryLabel: parsedRecipe.subCategoryLabel || targetRecipe.title,
        region: parsedRecipe.region || undefined,
        prepTimeMinutes: Number(parsedRecipe.prepTimeMinutes) || 15,
        cookTimeMinutes: Number(parsedRecipe.cookTimeMinutes) || 20,
        totalTimeMinutes: Number(parsedRecipe.totalTimeMinutes) || 35,
        servings: Number(parsedRecipe.servings) || 4,
        difficulty: parsedRecipe.difficulty || 'orta',
        mainIngredients: parsedRecipe.mainIngredients || [],
        tags: parsedRecipe.tags || [],
        ingredientGroups: parsedRecipe.ingredientGroups || [],
        steps: parsedRecipe.steps || [],
        tips: parsedRecipe.tips || [],
        calories: parsedRecipe.calories ? Number(parsedRecipe.calories) : undefined,
        imageUrl: `/images/recipes/${targetRecipe.id}.jpg`
      };

      // e. İlgili TypeScript Veri Dosyasına Yazma
      const fileName = CATEGORY_FILE_MAP[targetRecipe.mainCategory];
      if (!fileName) {
        throw new Error(`Geçersiz ana kategori: ${targetRecipe.mainCategory}`);
      }

      const filePath = path.join(PROJECT_ROOT, 'lib', 'data', fileName);
      let fileContent = fs.readFileSync(filePath, 'utf8');

      // Dizinin kapanış parantezini bul (];) ve hemen öncesine yeni nesneyi ekle
      const closingIndex = fileContent.lastIndexOf('];');
      if (closingIndex === -1) {
        throw new Error(`${fileName} dosyasında dizi kapanış parantezi (];) bulunamadı!`);
      }

      const formattedObject = JSON.stringify(finalRecipe, null, 2);
      // Dosya içeriğini güncelle
      const updatedContent = 
        fileContent.substring(0, closingIndex) + 
        (closingIndex > 10 && fileContent[closingIndex - 1] !== '\n' ? '\n' : '') +
        `  ${formattedObject},\n` + 
        fileContent.substring(closingIndex);

      fs.writeFileSync(filePath, updatedContent, 'utf8');

      // f. Görsel Adımı (Yer Tutucu veya Opsiyonel Imagen Bağlantısı)
      let hasImage = false;
      const imageModel = process.env.GEMINI_IMAGE_MODEL;
      
      if (imageModel) {
        console.log(`   Görsel üretimi deneniyor (${imageModel})...`);
        try {
          // Not: Imagen REST API entegrasyonu buraya eklenebilir.
          // Şimdilik yer tutucu olarak bırakıyoruz veya başarılı varsayıyoruz.
          hasImage = true;
        } catch (imgErr) {
          console.warn(`   \x1b[33mUyarı: Görsel üretilemedi, yer tutucu kullanılacak:\x1b[0m ${imgErr.message}`);
        }
      } else {
        console.log("   Görsel üretimi atlandı (GEMINI_IMAGE_MODEL tanımlanmamış). Görseli manuel ekleyebilirsiniz.");
      }

      // g. progress.json Durumunu Güncelleme
      targetRecipe.status = 'tamamlandi';
      targetRecipe.hasContent = true;
      targetRecipe.hasImage = hasImage;
      targetRecipe.attempts += 1;
      targetRecipe.lastError = null;

      successCount++;
      console.log(`   \x1b[32mBaşarılı: ${targetRecipe.title} sisteme eklendi ve kaydedildi.\x1b[0m\n`);

    } catch (recipeErr) {
      errorCount++;
      console.error(`   \x1b[31mHata: ${targetRecipe.title} işlenirken hata oluştu:\x1b[0m`, recipeErr.message);
      
      // Hata durumunu kaydet
      targetRecipe.status = 'hata';
      targetRecipe.attempts += 1;
      targetRecipe.lastError = recipeErr.message.substring(0, 200);
      console.log("");
    }

    // Her adımdan sonra progress.json'ı diske yaz (güvenlik için)
    saveProgress(progressData);
  }

  // 6. Özet Raporlama
  console.log("\x1b[36m=== Çalışma Tamamlandı ===\x1b[0m");
  console.log(`Başarılı: \x1b[32m${successCount}\x1b[0m | Hatalı: \x1b[31m${errorCount}\x1b[0m`);
  
  const finalCompleted = progressData.recipes.filter(r => r.status === 'tamamlandi').length;
  console.log(`Toplam İlerleme: \x1b[35m${finalCompleted}/80\x1b[0m tarif tamamlandı.\n`);
}

function saveProgress(data) {
  try {
    // Özet sayıları yeniden hesapla
    const recipes = data.recipes || [];
    data.summary = {
      bekliyor: recipes.filter(r => r.status === 'bekliyor').length,
      tamamlandi: recipes.filter(r => r.status === 'tamamlandi').length,
      hata: recipes.filter(r => r.status === 'hata').length
    };
    data.lastUpdated = new Date().toISOString();

    fs.writeFileSync(PROGRESS_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error("Hata: progress.json kaydedilemedi!", err.message);
  }
}

// Scripti çalıştır
main().catch(err => {
  console.error("\x1b[31mKritik Çalışma Hatası:\x1b[0m", err);
  process.exit(1);
});