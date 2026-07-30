/**
 * Nefis & Özgün — Türk Mutfağı Tarif Platformu
 * 
 * Bu script, generate.js otomasyon aracının ürettiği tarif nesnelerini
 * lib/data/*.ts dosyalarına eklerken oluşan "virgül eksikliği" (missing comma)
 * sözdizimi hatasını otomatik olarak tarayıp düzeltmek için tasarlanmıştır.
 * 
 * Çalıştırma Komutu:
 * node content-pipeline/fix-missing-commas.js
 */

const fs = require('fs');
const path = require('path');

// Proje kök dizini (bu script content-pipeline/ altında olduğu için bir üst dizin)
const PROJECT_ROOT = path.join(__dirname, '..');

// Taranacak ve düzeltilecek 4 veri dosyası
const TARGET_FILES = [
  'lib/data/sicak-yemekler.ts',
  'lib/data/soguk-yemekler.ts',
  'lib/data/mezeler.ts',
  'lib/data/tatlilar.ts'
];

async function main() {
  console.log('\x1b[35m=== Eksik Virgül Düzeltme Aracı Başlatıldı ===\x1b[0m\n');
  let totalFixes = 0;

  for (const relativePath of TARGET_FILES) {
    const filePath = path.join(PROJECT_ROOT, relativePath);
    const fileName = path.basename(relativePath);

    try {
      if (!fs.existsSync(filePath)) {
        console.log(`\x1b[33m⚠ Dosya bulunamadı (atlanıyor): ${fileName}\x1b[0m`);
        continue;
      }

      let fileContent = fs.readFileSync(filePath, 'utf8');
      let fixCount = 0;

      // --- DÜZELTME 1: Eksik virgüller ---
      // Regex Açıklaması:
      // ^(\s*\})  -> Satır başındaki kapatan süslü parantez (ve önündeki boşluklar)
      // (\s*\n\s*) -> Aradaki boşluklar, satır sonu ve yeni satır boşlukları
      // (\{)       -> Yeni açılan süslü parantez
      // g (global) ve m (multiline) bayrakları ile tüm dosyada eşleşme aranır.
      // Eşleşen yerlerin arasına virgül yerleştirilir: $1,$2$3
      const commaRegex = /^(\s*\})(\s*\n\s*)(\{)/gm;
      let commaFixCount = 0;

      let updatedContent = fileContent.replace(commaRegex, (match, p1, p2, p3) => {
        commaFixCount++;
        return `${p1},${p2}${p3}`;
      });

      // --- DÜZELTME 2: "alan": null şeklindeki değerleri kaldır ---
      // Recipe TypeScript arayüzü opsiyonel alanlar (note/tip/groupTitle/region/calories)
      // için `string | undefined` bekliyordu (artık `string | null | undefined` kabul ediyor,
      // ama generate.js'in ürettiği ESKİ null değerlerini de temizleyip en sağlam hale getirelim).
      // Regex, bir satırdaki `"alanAdi": null` (virgüllü veya virgülsüz) kalıbını bulup
      // TÜM satırı (başındaki girinti ve varsa satır sonu virgülüyle birlikte) siler.
      // Bu, JSON.stringify'ın undefined alanları hiç yazmamasıyla aynı sonucu üretir.
      const nullFieldRegex = /^[ \t]*"[a-zA-Z]+"\s*:\s*null\s*,?\s*\n/gm;
      let nullFixCount = 0;

      updatedContent = updatedContent.replace(nullFieldRegex, (match) => {
        nullFixCount++;
        return '';
      });

      // Not: Bir grup/dizinin İLK elemanı silinirse ve bir sonraki satır zaten
      // virgülle bitiyorsa sözdizimi sorunu oluşmaz çünkü sildiğimiz satırın kendi
      // virgülü zaten kaldırılıyor; ama eğer silinen alan bir nesnenin SON alanıysa
      // ve öncesindeki alan virgülle bitiyorsa (trailing comma before `}`), bu da
      // modern TS/JS'de geçerlidir (trailing comma desteklenir), ek işlem gerekmez.

      fixCount = commaFixCount + nullFixCount;

      if (fixCount > 0) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`\x1b[32m✓ ${fileName}: ${commaFixCount} eksik virgül + ${nullFixCount} geçersiz 'null' alanı düzeltildi.\x1b[0m`);
        totalFixes += fixCount;
      } else {
        console.log(`\x1b[36m- ${fileName}: Herhangi bir sözdizimi/tip hatası bulunmadı.\x1b[0m`);
      }

      // --- KONTROL 3: Eksik ZORUNLU alan taraması (otomatik düzeltilemez, sadece uyarı) ---
      // "description" gibi zorunlu bir alan eksikse, bunu tahmini bir metinle
      // doldurmak YANLIŞ olur (gerçek tarife uygun olmayabilir) - bu yüzden burada
      // sadece HANGİ tarif id'lerinde description eksik olduğunu tespit edip
      // ekrana Türkçe bir uyarı olarak yazıyoruz; gerçek içeriği elle veya
      // flow session'a bildirerek eklemeniz gerekir.
      //
      // ÖNEMLİ: Bir önceki sürümdeki regex yaklaşımı ("\n  }" ile bloğun bittiğini
      // varsaymak) iç içe geçmiş nesneler/diziler yüzünden güvenilir değildi ve
      // bazı dosyalarda hiç eşleşme bulamıyordu. Bunun yerine parantez derinliği
      // SAYARAK (basit bir "brace depth counter") her tarif nesnesinin GERÇEK
      // başlangıç ve bitiş noktasını buluyoruz - bu, iç içe geçme seviyesi ne
      // olursa olsun doğru çalışır.
      const missingDescriptionIds = [];
      const idPattern = /["']?id["']?\s*:\s*"([a-z0-9-]+)"/g;
      let idMatch;
      while ((idMatch = idPattern.exec(updatedContent)) !== null) {
        const id = idMatch[1];
        // Bu id eşleşmesinden başlayarak, id'den önceki en yakın "{" karakterini bul
        // (bu tarif nesnesinin gerçek başlangıcı).
        let objStart = updatedContent.lastIndexOf('{', idMatch.index);
        if (objStart === -1) continue;

        // objStart'tan itibaren parantez derinliğini sayarak nesnenin bittiği
        // noktayı (eşleşen kapanış "}") bul.
        let depth = 0;
        let objEnd = -1;
        for (let i = objStart; i < updatedContent.length; i++) {
          const ch = updatedContent[i];
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

        const objectBlock = updatedContent.substring(objStart, objEnd + 1);
        const hasDescription = /["']?description["']?\s*:/.test(objectBlock);
        if (!hasDescription) {
          missingDescriptionIds.push(id);
        }
      }

      if (missingDescriptionIds.length > 0) {
        console.log(`\x1b[33m⚠ ${fileName}: 'description' alanı eksik olan tarifler (elle eklenmeli): ${missingDescriptionIds.join(', ')}\x1b[0m`);
      } else {
        console.log(`\x1b[36m- ${fileName}: Tüm tariflerde 'description' alanı mevcut.\x1b[0m`);
      }

    } catch (err) {
      console.error(`\x1b[31m✗ ${fileName} işlenirken hata oluştu: ${err.message}\x1b[0m`);
    }
  }

  console.log(`\n\x1b[35m=== İşlem Tamamlandı. Toplam Düzeltilen Hata: ${totalFixes} ===\x1b[0m`);
  if (totalFixes > 0) {
    console.log('\x1b[32mŞimdi projenizi yerelde "npm run build" ile derleyip Vercel\'e güvenle push edebilirsiniz.\x1b[0m');
  }
}

main().catch(err => {
  console.error('Kritik hata:', err);
  process.exit(1);
});