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

      // Regex Açıklaması:
      // ^(\s*\})  -> Satır başındaki kapatan süslü parantez (ve önündeki boşluklar)
      // (\s*\n\s*) -> Aradaki boşluklar, satır sonu ve yeni satır boşlukları
      // (\{)       -> Yeni açılan süslü parantez
      // g (global) ve m (multiline) bayrakları ile tüm dosyada eşleşme aranır.
      // Eşleşen yerlerin arasına virgül yerleştirilir: $1,$2$3
      const regex = /^(\s*\})(\s*\n\s*)(\{)/gm;

      const updatedContent = fileContent.replace(regex, (match, p1, p2, p3) => {
        fixCount++;
        return `${p1},${p2}${p3}`;
      });

      if (fixCount > 0) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`\x1b[32m✓ ${fileName}: ${fixCount} adet eksik virgül başarıyla düzeltildi.\x1b[0m`);
        totalFixes += fixCount;
      } else {
        console.log(`\x1b[36m- ${fileName}: Herhangi bir sözdizimi hatası (eksik virgül) bulunmadı.\x1b[0m`);
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