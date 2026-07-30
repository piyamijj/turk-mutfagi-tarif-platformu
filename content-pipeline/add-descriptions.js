/**
 * Nefis & Özgün — Türk Mutfağı Tarif Platformu
 * 
 * Bu script, generate.js otomasyon aracının ürettiği ve lib/data/*.ts dosyalarına
 * eklediği tariflerde eksik kalan "description" (açıklama) alanlarını,
 * her tarifin kendi kimliğine (id) uygun, iştah açıcı ve gerçekçi 1-2 cümlelik
 * Türkçe açıklamalarla toplu olarak doldurmak için tasarlanmıştır.
 * 
 * Çalıştırma Komutu:
 * node content-pipeline/add-descriptions.js
 */

const fs = require('fs');
const path = require('path');

// Proje kök dizini (bu script content-pipeline/ altında olduğu için bir üst dizin)
const PROJECT_ROOT = path.join(__dirname, '..');

// 62 tarif için gerçek, iştah açıcı Türkçe açıklamalar sözlüğü
const DESCRIPTIONS = {
  // Sıcak Yemekler (sicak-yemekler.ts)
  "karniyarik": "Kızartılmış patlıcanların kıymalı harçla doldurulup fırınlandığı, Türk mutfağının en sevilen klasik ev yemeği.",
  "izmir-kofte": "Fırında patates ve domates üzerinde pişirilen, zengin bir sosla servis edilen İzmir usulü köfte.",
  "ankara-tava": "Haşlanmış kuzu incik etinin arpa şehriyeyle fırınlanarak birleştirildiği, Ankara'ya özgü doyurucu bir yemek.",
  "tavuk-sote": "Mantar ve renkli biberlerle hızlıca soteleştirilen, hafif ve pratik bir tavuk yemeği.",
  "sac-kavurma": "İnce dilimlenmiş etin sebzelerle birlikte saç tavada hızlıca kavrulduğu, Anadolu'nun pratik lezzeti.",
  "zeytinyagli-taze-fasulye": "Taze fasulyenin domates ve zeytinyağıyla ağır ateşte pişirildiği, yazın en sevilen zeytinyağlı sebze yemeği.",
  "kuru-fasulye": "Etli ve domates soslu, pilavın yanında Türk sofralarının değişmez klasiği kuru fasulye.",
  "nohut-yemegi": "Etli nohutların zengin bir domates sosunda pişirildiği, doyurucu ve besleyici bir ev yemeği.",
  "firinda-mucver": "Rendelenmiş kabak, beyaz peynir ve dereotuyla hazırlanıp fırında pişirilen, hafif ve pratik bir sebze yemeği.",
  "etli-yaprak-sarmasi": "Asma yapraklarının kıymalı pirinç harcıyla doldurulup sıcak servis edildiği, doyurucu bir Türk mutfağı klasiği.",
  "imam-bayildi": "Bol soğan ve sarımsakla zeytinyağında ağır ateşte pişen patlıcanın, Osmanlı mutfağından gelen zarif lezzeti.",
  "ezogelin-corbasi": "Kırmızı mercimek, pirinç ve bulgurun bir araya geldiği, Gaziantep'in doyurucu ve baharatlı çorbası.",
  "tarhana-corbasi": "Ev yapımı fermente tarhananın tereyağı ve naneyle buluştuğu, kış aylarının vazgeçilmez sıcak çorbası.",
  "yayla-corbasi": "Yoğurt ve pirincin bir araya geldiği, üzerine kızdırılmış tereyağı ve naneyle servis edilen ferahlatıcı çorba.",
  "beyran-corbasi": "Kuzu etinin uzun süre pişirilmesiyle hazırlanan, Gaziantep'e özgü baharatlı ve doyurucu sabah çorbası.",
  "kelle-paca-corbasi": "Kuzu paçasının uzun saatler kaynatılmasıyla hazırlanan, sarımsaklı sirke sosuyla servis edilen geleneksel çorba.",
  "dugun-corbasi": "Yumurta-limon sosuyla zenginleştirilen, kavrulan kırmızı biberli tereyağıyla süslenen zarif düğün çorbası.",
  "domates-corbasi": "Taze domateslerin püre haline getirilip pişirildiği, kremsi ve ferahlatıcı klasik bir çorba.",

  // Soğuk Yemekler ve Zeytinyağlılar (soguk-yemekler.ts)
  "zeytinyagli-yaprak-sarmasi": "Pirinç, çam fıstığı ve kuş üzümüyle doldurulan asma yapraklarının zeytinyağında soğuk servis edildiği zarif meze.",
  "zeytinyagli-barbunya-pilaki": "Barbunya fasulyesinin havuç ve patatesle zeytinyağında pişirilip soğuk servis edildiği Ege usulü bir lezzet.",
  "zeytinyagli-kereviz": "Kereviz kökünün havuç ve portakalla zeytinyağında pişirildiği, hafif ve ferahlatıcı bir zeytinyağlı yemek.",
  "zeytinyagli-pirasa": "Pırasanın pirinç ve havuçla zeytinyağında ağır ateşte pişirildiği, soğuk servis edilen sonbahar klasiği.",
  "zeytinyagli-sevketi-bostan": "Yabani bir bitki olan şevketi bostanın bezelye ve havuçla zeytinyağında pişirildiği nadir bulunan bir lezzet.",
  "zeytinyagli-kabak-cicegi-dolmasi": "Kabak çiçeklerinin pirinç ve baharatlı harçla doldurulduğu, zeytinyağlı soğuk dolmaların en zarifi.",
  "zeytinyagli-yer-elmasi": "Yer elmasının havuç ve limonla zeytinyağında pişirildiği, hafif ve az bilinen bir zeytinyağlı lezzet.",
  "zeytinyagli-biber-dolmasi": "Küçük yeşil biberlerin pirinç, kuş üzümü ve çam fıstığıyla doldurulduğu klasik zeytinyağlı dolma.",
  "zeytinyagli-lahana-sarmasi": "Lahana yapraklarının pirinçli harçla sarılıp zeytinyağında pişirildiği, soğuk servis edilen bir sarma çeşidi.",
  "zeytinyagli-pazi-sarmasi": "Pazı yapraklarının pirinçli harçla doldurulup zeytinyağında pişirildiği hafif bir sarma lezzeti.",
  "mercimek-koftesi": "Kırmızı mercimek ve ince bulgurun soğan ve baharatla yoğrulup şekillendirildiği, hızlı hazırlanan vejetaryen bir meze.",
  "cilbir": "Sarımsaklı yoğurt üzerine kaçırılmış yumurta ve kızdırılmış tereyağıyla servis edilen, Osmanlı mutfağından gelen doyurucu bir kahvaltı lezzeti.",
  "saksuka": "Kızartılmış patlıcan, kabak ve biberlerin sarımsaklı domates sosuyla buluştuğu, sıcak ya da soğuk servis edilen bir meze.",
  "zeytinyagli-bakla": "Taze baklanın dereotuyla zeytinyağında pişirilip yoğurtla servis edildiği baharın müjdecisi bir lezzet.",
  "piyaz": "Beyaz fasulyenin soğan, domates ve haşlanmış yumurtayla harmanlandığı, hafif ve ferahlatıcı bir salata.",
  "gavurdagi-salatasi": "Domates ve salatalığın ceviz ve nar ekşisiyle buluştuğu, Güneydoğu Anadolu'nun canlı ve ferahlatıcı salatası.",
  "coban-salatasi": "Domates, salatalık, biber ve soğanın zeytinyağıyla buluştuğu, her sofrada bulunan basit ve taze bir salata.",
  "borulce-salatasi": "Haşlanmış börülcenin soğan ve maydanozla zeytinyağında buluştuğu, hafif ve besleyici bir salata.",

  // Mezeler (mezeler.ts)
  "humus": "Nohut ve tahinin zeytinyağıyla buluştuğu, Ortadoğu ve Türk mutfağının ortak mirası olan pürüzsüz, doyurucu bir meze klasiği.",
  "muhammara": "Kızarmış kırmızı biber ve cevizin acı biberle harmanlandığı, Güneydoğu Anadolu'nun ateşli ve zengin mezesi.",
  "babagannus": "Közlenmiş patlıcanın tahin ve limonla buluştuğu, dumanlı aromasıyla dikkat çeken pürüzsüz bir meze.",
  "koz-patlican-salatasi": "Ateşte közlenen patlıcanın domates ve biberle buluştuğu, dumanlı ve hafif bir zeytinyağlı meze.",
  "kopoglu": "Kızarmış patlıcan ve kabağın sarımsaklı yoğurt ve domates sosuyla buluştuğu katmanlı bir meze.",
  "tarator": "Ceviz, sarımsak ve bayat ekmeğin yoğurtla harmanlandığı, kremsi dokulu geleneksel bir meze.",
  "fava": "Kuru bakla'nın püre haline getirilip dereotu ve zeytinyağıyla servis edildiği, Ege mutfağının zarif bir mezesi.",
  "deniz-borulcesi": "Deniz kıyısında yetişen bu özel otun sarımsak ve zeytinyağında hafifçe soteleştiği, iyot kokulu taze bir meze.",
  "cacik": "Salatalık, sarımsak ve yoğurdun naneyle buluştuğu, sıcak yaz günlerinin ferahlatıcı klasik mezesi.",
  "atom": "Ceviz ve kırmızı biberin acı ve ateşli bir şekilde harmanlandığı, damak çatlatan yoğun kıvamlı bir meze.",
  "girit-ezmesi": "Zeytin, badem ve otların birleştiği, Ege kıyılarından gelen taze ve hafif bir meze.",
  "muallim": "Yoğurt ve tahinin baharatlarla harmanlandığı, hafif ve kremsi dokulu bir başlangıç mezesi.",
  "cevizli-kabak-tarator": "Rendelenmiş kabağın cevizli yoğurt sosuyla buluştuğu, hafif ve ferahlatıcı bir yaz mezesi.",
  "arnavut-cigeri": "Küp doğranmış kuzu ciğerinin baharatlı unla kaplanıp kızartıldığı, soğan halkalarıyla servis edilen köklü bir meze.",
  "tereyagli-karides-tava": "Karidesin tereyağı, sarımsak ve pul biberle kavrulduğu, hızlı hazırlanan sıcak bir deniz mahsulleri mezesi.",
  "kalamar-tava": "Halka halka kesilen kalamarın çıtır çıtır kızartıldığı, tarator sosuyla servis edilen sevilen bir meze.",
  "sicak-humus": "Klasik humusun kavrulmuş kıyma ve tereyağıyla zenginleştirildiği, sıcak servis edilen doyurucu bir versiyon.",
  "icli-kofte": "Bulgur kabuğunun baharatlı kıyma harcıyla doldurulduğu, işçiliği yüksek Güneydoğu Anadolu mezesi.",

  // Tatlılar (tatlilar.ts)
  "kunefe": "Tel kadayıfın iki katman arasında peynirle buluşup şerbetlenerek sıcak servis edildiği, Hatay'ın efsanevi tatlısı.",
  "sekerpare": "Bademle süslenen, şerbete batırılmış küçük ve yumuşak irmikli kurabiyeler.",
  "revani": "İrmik unundan yapılan, şerbetle ıslatılan hafif ve sünger dokulu bir kek tatlısı.",
  "tulumba-tatlisi": "Kabartılmış hamurun kızartılıp şerbete batırıldığı, çıtır dışı yumuşak içiyle sevilen bir tatlı.",
  "kemalpasa-tatlisi": "Küçük peynirli hamur toplarının şerbette pişirildiği, Bursa'ya özgü hafif bir tatlı.",
  "kadayif": "Tel kadayıfın cevizle katmanlanıp şerbetle buluştuğu, çıtır dokulu geleneksel bir tatlı.",
  "kalburabasti": "Üzeri kalbur deseniyle şekillendirilen, şerbete batırılmış küçük irmikli kurabiyelerin parıltılı ve çıtır bir tatlısı.",
  "firin-sutlac": "Pirinç ve sütün fırında üstü kızararak pişirildiği, Türk mutfağının en sevilen sütlü tatlısı.",
  "tavuk-gogsu": "Tatlı tadı olan özel bir sütlü tatlı; adını, dokusuna benzerlik gösteren tavuk göğsü liflerinden alır.",
  "keskul": "Badem sütünün pişirilip hindistancevizi ve fıstıkla süslendiği, zarif ve hafif bir muhallebi çeşidi.",
  "muhallebi": "Sütün nişastayla kıvam kazandığı, gül suyu ve fıstıkla süslenen klasik bir Osmanlı tatlısı.",
  "gullac": "İnce yufkaların sütle ıslatılıp ceviz ve narla süslendiği, Ramazan aylarının hafif ve zarif tatlısı.",
  "supangle": "Çikolatalı pudingin bisküviyle katmanlandığı, kremalı ve doyurucu bir tatlı.",
  "irmik-helvasi": "Kavrulan irmiğin tereyağı ve şekerli sütle pişirildiği, sıcak servis edilen sade bir helva.",
  "un-helvasi": "Kavrulan unun tereyağıyla karamelize edilip şekerli suyla pişirildiği geleneksel bir helva.",
  "kabak-tatlisi": "Balkabağının şeker ve suyla ağır ateşte pişirilip cevizle süslendiği, kışın en sevilen tatlısı.",
  "ayva-tatlisi": "Ayvanın şekerli suda pişirilip kaymakla servis edildiği, kışın vazgeçilmez zarif bir meyve tatlısı.",
  "asure": "Buğday, kuru meyve ve baklagillerin bir araya geldiği, bolluk ve paylaşımı simgeleyen geleneksel bir tatlı."
};

// Taranacak 4 veri dosyası (artık sabit bir id listesine güvenmiyoruz -
// her dosyadaki HER tarif nesnesi tek tek taranıyor, bu yüzden id->dosya
// eşleşme tablosuna ihtiyaç kalmadı; bu, önceki sürümde bazı id'lerin
// listede unutulmuş olması (örn. kalburabasti) yüzünden atlanması sorununu
// kökünden çözer.)
const TARGET_FILES = [
  'lib/data/sicak-yemekler.ts',
  'lib/data/soguk-yemekler.ts',
  'lib/data/mezeler.ts',
  'lib/data/tatlilar.ts'
];

/**
 * Bir dosya içeriğinde bulunan TÜM tarif nesnelerini (id + başlangıç/bitiş
 * konumlarıyla birlikte) brace-depth (parantez derinliği) sayarak bulur.
 * Regex ile nesne sonunu tahmin etmek güvenilir değildi (iç içe geçmiş
 * ingredientGroups/steps yüzünden) - bu yöntem nesne ne kadar derin iç içe
 * geçmiş olursa olsun doğru çalışır.
 */
function findAllRecipeObjects(content) {
  const results = [];
  const idPattern = /["']?id["']?\s*:\s*["']([a-z0-9-]+)["']/g;
  let idMatch;
  while ((idMatch = idPattern.exec(content)) !== null) {
    const id = idMatch[1];
    const objStart = content.lastIndexOf('{', idMatch.index);
    if (objStart === -1) continue;

    let depth = 0;
    let objEnd = -1;
    for (let i = objStart; i < content.length; i++) {
      const ch = content[i];
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          objEnd = i;
          break;
        }
      }
    }
    if (objEnd === -1) continue;

    results.push({ id, objStart, objEnd, idLineEnd: content.indexOf('\n', idMatch.index) });
  }
  return results;
}

/**
 * Bilinen bir açıklama yoksa, tarifin başlığından (title alanından) makul,
 * genel ama YİNE DE o tarife özgü bir yedek açıklama üretir - bu SADECE
 * hazır sözlükte (DESCRIPTIONS) olmayan ve manuel olarak yazılmamış tarifler
 * için son çare bir güvenlik ağıdır, asıl hedef her zaman DESCRIPTIONS
 * sözlüğündeki gerçek/özel açıklamayı kullanmaktır.
 */
function buildFallbackDescription(title) {
  return `${title}, Türk mutfağının zengin lezzet dünyasından özenle hazırlanan, geleneksel tarifine uygun bir tabak.`;
}

async function main() {
  console.log('\x1b[35m=== Eksik Açıklama (Description) Ekleme Aracı (v2 - Kesin Tarama) Başlatıldı ===\x1b[0m\n');

  let totalAdded = 0;
  let totalSkipped = 0;
  let totalFallback = 0;
  const fallbackIds = [];

  for (const relPath of TARGET_FILES) {
    const absPath = path.join(PROJECT_ROOT, relPath);
    const fileName = path.basename(relPath);

    if (!fs.existsSync(absPath)) {
      console.log(`\x1b[33m⚠ Dosya bulunamadı (atlanıyor): ${fileName}\x1b[0m`);
      continue;
    }

    let content = fs.readFileSync(absPath, 'utf8');

    // Bu dosyadaki TÜM tarif nesnelerini bul (id listesine güvenmeden).
    // NOT: Nesneleri SONDAN BAŞA doğru işliyoruz, çünkü metne ekleme yaptıkça
    // sonraki karakterlerin index'leri kayar - sondan başlarsak daha önce
    // hesapladığımız objStart/idLineEnd konumları geçersiz olmaz.
    const recipeObjects = findAllRecipeObjects(content).sort((a, b) => b.idLineEnd - a.idLineEnd);

    let fileAdded = 0;
    let fileSkipped = 0;

    for (const recipe of recipeObjects) {
      if (recipe.idLineEnd === -1) continue;

      const objectBlock = content.substring(recipe.objStart, recipe.objEnd + 1);
      const hasDescription = /["']?description["']?\s*:/.test(objectBlock);

      if (hasDescription) {
        fileSkipped++;
        continue;
      }

      // Açıklamayı belirle: önce hazır sözlükten (DESCRIPTIONS) gerçek/özel
      // metni almaya çalış; hiç yoksa (beklenmedik bir id ile karşılaşırsak)
      // başlıktan türetilmiş güvenli bir yedek metin kullan.
      let desc = DESCRIPTIONS[recipe.id];
      if (!desc) {
        // Nesne bloğundan title alanını çıkarmaya çalış.
        const titleMatch = /["']?title["']?\s*:\s*["']([^"']+)["']/.exec(objectBlock);
        const title = titleMatch ? titleMatch[1] : recipe.id;
        desc = buildFallbackDescription(title);
        totalFallback++;
        fallbackIds.push(recipe.id);
      }

      const escapedDesc = JSON.stringify(desc);
      const insertText = `\n    description: ${escapedDesc},`;

      content = content.substring(0, recipe.idLineEnd) + insertText + content.substring(recipe.idLineEnd);
      fileAdded++;
    }

    if (fileAdded > 0) {
      fs.writeFileSync(absPath, content, 'utf8');
    }

    // DOĞRULAMA: Dosyayı DİSKTEN TEKRAR OKUYUP kaç tarif nesnesinin HÂLÂ
    // description alanı olmadığını say - "0 kalana kadar" garantisi budur.
    const verifyContent = fs.existsSync(absPath) ? fs.readFileSync(absPath, 'utf8') : content;
    const verifyObjects = findAllRecipeObjects(verifyContent);
    let stillMissing = 0;
    const stillMissingIds = [];
    for (const recipe of verifyObjects) {
      const block = verifyContent.substring(recipe.objStart, recipe.objEnd + 1);
      if (!/["']?description["']?\s*:/.test(block)) {
        stillMissing++;
        stillMissingIds.push(recipe.id);
      }
    }

    console.log(`\x1b[32m✓ ${fileName}: ${fileAdded} eklendi, ${fileSkipped} zaten mevcuttu.\x1b[0m`);
    if (stillMissing > 0) {
      console.log(`\x1b[31m✗ DOĞRULAMA UYARISI - ${fileName}: HALA ${stillMissing} tarifte description eksik: ${stillMissingIds.join(', ')}\x1b[0m`);
    } else {
      console.log(`\x1b[32m  → Doğrulandı: ${fileName} içindeki TÜM tariflerde description alanı mevcut (0 eksik).\x1b[0m`);
    }

    totalAdded += fileAdded;
    totalSkipped += fileSkipped;
  }

  console.log(`\n\x1b[35m=== İşlem Tamamlandı ===\x1b[0m`);
  console.log(`\x1b[32mToplam Eklendi: ${totalAdded}\x1b[0m`);
  console.log(`\x1b[36mToplam Zaten Mevcut: ${totalSkipped}\x1b[0m`);
  if (totalFallback > 0) {
    console.log(`\x1b[33mNot: ${totalFallback} tarif hazır sözlükte bulunamadığı için genel bir yedek açıklama ile dolduruldu (bunlar için gerçek/özel açıklama sonradan elle iyileştirilebilir): ${fallbackIds.join(', ')}\x1b[0m`);
  }
  if (totalAdded > 0) {
    console.log('\n\x1b[32mŞimdi projenizi yerelde "npm run build" ile derleyip Vercel\'e güvenle push edebilirsiniz.\x1b[0m');
  }
}

main().catch(err => {
  console.error('Kritik hata:', err);
  process.exit(1);
});