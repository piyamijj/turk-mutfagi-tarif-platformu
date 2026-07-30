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

// Her tarif id'sinin hangi dosyaya ait olduğunu belirten eşleşme tablosu
const FILE_FOR_ID = {};

// Sıcak Yemekler (18 adet)
[
  "karniyarik", "izmir-kofte", "ankara-tava", "tavuk-sote", "sac-kavurma",
  "zeytinyagli-taze-fasulye", "kuru-fasulye", "nohut-yemegi", "firinda-mucver",
  "etli-yaprak-sarmasi", "imam-bayildi", "ezogelin-corbasi", "tarhana-corbasi",
  "yayla-corbasi", "beyran-corbasi", "kelle-paca-corbasi", "dugun-corbasi", "domates-corbasi"
].forEach(id => { FILE_FOR_ID[id] = 'lib/data/sicak-yemekler.ts'; });

// Soğuk Yemekler ve Zeytinyağlılar (18 adet)
[
  "zeytinyagli-yaprak-sarmasi", "zeytinyagli-barbunya-pilaki", "zeytinyagli-kereviz",
  "zeytinyagli-pirasa", "zeytinyagli-sevketi-bostan", "zeytinyagli-kabak-cicegi-dolmasi",
  "zeytinyagli-yer-elmasi", "zeytinyagli-biber-dolmasi", "zeytinyagli-lahana-sarmasi",
  "zeytinyagli-pazi-sarmasi", "mercimek-koftesi", "cilbir", "saksuka",
  "zeytinyagli-bakla", "piyaz", "gavurdagi-salatasi", "coban-salatasi", "borulce-salatasi"
].forEach(id => { FILE_FOR_ID[id] = 'lib/data/soguk-yemekler.ts'; });

// Mezeler (18 adet)
[
  "humus", "muhammara", "babagannus", "koz-patlican-salatasi", "kopoglu",
  "tarator", "fava", "deniz-borulcesi", "cacik", "atom", "girit-ezmesi",
  "muallim", "cevizli-kabak-tarator", "arnavut-cigeri", "tereyagli-karides-tava",
  "kalamar-tava", "sicak-humus", "icli-kofte"
].forEach(id => { FILE_FOR_ID[id] = 'lib/data/mezeler.ts'; });

// Tatlılar (17 adet)
[
  "kunefe", "sekerpare", "revani", "tulumba-tatlisi", "kemalpasa-tatlisi",
  "kadayif", "firin-sutlac", "tavuk-gogsu", "keskul",
  "muhallebi", "gullac", "supangle", "irmik-helvasi", "un-helvasi", "kabak-tatlisi",
  "ayva-tatlisi", "asure"
].forEach(id => { FILE_FOR_ID[id] = 'lib/data/tatlilar.ts'; });


async function main() {
  console.log('\x1b[35m=== Eksik Açıklama (Description) Ekleme Aracı Başlatıldı ===\x1b[0m\n');

  // Dosya içeriklerini hafızada önbelleğe al (tekrar tekrar okuyup yazmamak için)
  const fileCache = {};
  const filePaths = {
    'lib/data/sicak-yemekler.ts': path.join(PROJECT_ROOT, 'lib/data/sicak-yemekler.ts'),
    'lib/data/soguk-yemekler.ts': path.join(PROJECT_ROOT, 'lib/data/soguk-yemekler.ts'),
    'lib/data/mezeler.ts': path.join(PROJECT_ROOT, 'lib/data/mezeler.ts'),
    'lib/data/tatlilar.ts': path.join(PROJECT_ROOT, 'lib/data/tatlilar.ts')
  };

  // Dosyaları oku ve önbelleğe yükle
  for (const [relPath, absPath] of Object.entries(filePaths)) {
    if (fs.existsSync(absPath)) {
      fileCache[relPath] = fs.readFileSync(absPath, 'utf8');
    } else {
      console.log(`\x1b[33m⚠ Dosya bulunamadı (atlanıyor): ${relPath}\x1b[0m`);
    }
  }

  let addedCount = 0;
  let skippedCount = 0;
  let notFoundCount = 0;
  const notFoundIds = [];

  // Her bir açıklamayı ilgili dosyaya yerleştir
  for (const [id, desc] of Object.entries(DESCRIPTIONS)) {
    const relPath = FILE_FOR_ID[id];
    if (!relPath || !fileCache[relPath]) {
      notFoundCount++;
      notFoundIds.push(id);
      continue;
    }

    let content = fileCache[relPath];

    // id'nin dosyada nerede olduğunu bul (örn: id: "humus" veya "id": "humus")
    const idRegex = new RegExp(`(["']?id["']?\\s*:\\s*["']${id}["'])`, 'i');
    const idMatch = idRegex.exec(content);

    if (!idMatch) {
      notFoundCount++;
      notFoundIds.push(id);
      continue;
    }

    // Bu id'den geriye doğru giderek nesnenin başlangıç parantezini bul
    const objStart = content.lastIndexOf('{', idMatch.index);
    if (objStart === -1) {
      notFoundCount++;
      notFoundIds.push(id);
      continue;
    }

    // Başlangıç parantezinden ileriye doğru giderek nesnenin kapanış parantezini bul (derinlik sayarak)
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

    if (objEnd === -1) {
      notFoundCount++;
      notFoundIds.push(id);
      continue;
    }

    // Nesne bloğunu izole et
    const objectBlock = content.substring(objStart, objEnd + 1);

    // Bu nesnede zaten bir description alanı var mı kontrol et
    const hasDescription = /["']?description["']?\s*:/.test(objectBlock);
    if (hasDescription) {
      skippedCount++;
      continue;
    }

    // id satırının hemen ardına description alanını ekle
    const idLineEnd = content.indexOf('\n', idMatch.index);
    if (idLineEnd === -1) {
      notFoundCount++;
      notFoundIds.push(id);
      continue;
    }

    // Güvenli JSON-escaped açıklama metni oluştur
    const escapedDesc = JSON.stringify(desc);
    const insertText = `\n    description: ${escapedDesc},`;

    // Dosya içeriğini güncelle
    content = content.substring(0, idLineEnd) + insertText + content.substring(idLineEnd);
    fileCache[relPath] = content;
    addedCount++;
  }

  // Güncellenen dosyaları diske geri yaz
  for (const [relPath, content] of Object.entries(fileCache)) {
    const absPath = filePaths[relPath];
    fs.writeFileSync(absPath, content, 'utf8');
    console.log(`\x1b[32m✓ ${path.basename(relPath)} dosyası güncellendi.\x1b[0m`);
  }

  console.log(`\n\x1b[35m=== İşlem Tamamlandı ===\x1b[0m`);
  console.log(`\x1b[32mEklendi: ${addedCount} adet açıklama\x1b[0m`);
  console.log(`\x1b[36mAtlandı (Zaten Mevcut): ${skippedCount} adet\x1b[0m`);
  if (notFoundCount > 0) {
    console.log(`\x1b[33mBulunamadı/Atlandı: ${notFoundCount} adet (${notFoundIds.join(', ')})\x1b[0m`);
  }

  if (addedCount > 0) {
    console.log('\n\x1b[32mŞimdi projenizi yerelde "npm run build" ile derleyip Vercel\'e güvenle push edebilirsiniz.\x1b[0m');
  }
}

main().catch(err => {
  console.error('Kritik hata:', err);
  process.exit(1);
});