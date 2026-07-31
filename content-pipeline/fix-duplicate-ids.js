/**
 * Nefis & Özgün — Türk Mutfağı Tarif Platformu
 * 
 * Bu script, generate.js otomasyon aracının mükerrer (duplicate) çalıştırmalar
 * veya senkronizasyon sorunları nedeniyle lib/data/*.ts dosyalarına aynı tarif
 * kimliğiyle (id) birden fazla kez eklediği mükerrer tarif nesnelerini tespit
 * edip temizlemek için tasarlanmıştır.
 * 
 * Mükerrer ID'ler, Next.js dinamik yönlendirmesinde (routing) getRecipeById
 * fonksiyonunun her zaman dizideki ilk eşleşen nesneyi dönmesine ve dolayısıyla
 * "Yayla Çorbası linkine tıklayınca Domates Çorbası açılması" gibi kritik
 * yönlendirme hatalarına yol açar.
 * 
 * Çalıştırma Komutu:
 * node content-pipeline/fix-duplicate-ids.js
 */

const fs = require('fs');
const path = require('path');

// Proje kök dizini (bu script content-pipeline/ altında olduğu için bir üst dizin)
const PROJECT_ROOT = path.join(__dirname, '..');

// Taranacak 4 veri dosyası
const TARGET_FILES = [
  'lib/data/sicak-yemekler.ts',
  'lib/data/soguk-yemekler.ts',
  'lib/data/mezeler.ts',
  'lib/data/tatlilar.ts'
];

/**
 * Bir dosya içeriğinde bulunan TÜM tarif nesnelerini (id + başlangıç/bitiş
 * konumlarıyla birlikte) parantez derinliği sayarak bulur.
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

    results.push({ id, objStart, objEnd });
  }
  return results;
}

/**
 * Proje genelindeki tüm dosyaları tarayıp mükerrer ID'leri gruplar.
 */
function scanForDuplicates(fileCache) {
  const globalRecipes = [];
  let globalOrder = 0;

  for (const relPath of TARGET_FILES) {
    const content = fileCache[relPath];
    if (content === undefined) continue;

    const fileRecipes = findAllRecipeObjects(content);
    for (const recipe of fileRecipes) {
      globalRecipes.push({
        id: recipe.id,
        file: relPath,
        objStart: recipe.objStart,
        objEnd: recipe.objEnd,
        order: globalOrder++
      });
    }
  }

  // ID'ye göre grupla
  const grouped = {};
  for (const r of globalRecipes) {
    if (!grouped[r.id]) {
      grouped[r.id] = [];
    }
    grouped[r.id].push(r);
  }

  // Sadece mükerrer olanları filtrele (2 veya daha fazla kez geçenler)
  const duplicates = {};
  let totalObjects = 0;
  let uniqueIds = 0;

  for (const [id, occurrences] of Object.entries(grouped)) {
    totalObjects += occurrences.length;
    uniqueIds++;
    if (occurrences.length > 1) {
      duplicates[id] = occurrences;
    }
  }

  return { duplicates, totalObjects, uniqueIds, globalRecipes };
}

async function main() {
  console.log('\x1b[35m=== Mükerrer Tarif ID Tespit ve Temizleme Aracı Başlatıldı ===\x1b[0m\n');

  const fileCache = {};
  const filePaths = {};

  // Dosyaları oku ve önbelleğe yükle
  for (const relPath of TARGET_FILES) {
    const absPath = path.join(PROJECT_ROOT, relPath);
    filePaths[relPath] = absPath;
    if (fs.existsSync(absPath)) {
      fileCache[relPath] = fs.readFileSync(absPath, 'utf8');
    } else {
      console.log(`\x1b[33m⚠ Dosya bulunamadı (atlanıyor): ${relPath}\x1b[0m`);
    }
  }

  // 1. AŞAMA: İlk Tarama ve Raporlama
  const initialScan = scanForDuplicates(fileCache);
  console.log(`\x1b[36mİstatistikler:\x1b[0m`);
  console.log(`- Toplam taranan dosya: ${TARGET_FILES.length}`);
  console.log(`- Toplam bulunan tarif nesnesi: ${initialScan.totalObjects}`);
  console.log(`- Benzersiz tarif kimliği (ID) sayısı: ${initialScan.uniqueIds}`);

  const duplicateKeys = Object.keys(initialScan.duplicates);
  if (duplicateKeys.length === 0) {
    console.log('\n\x1b[32m✓ Harika! Projede hiçbir mükerrer tarif ID\'si bulunmadı.\x1b[0m');
    process.exit(0);
  }

  console.log(`\n\x1b[31m⚠ TESPİT EDİLEN MÜKERRER TARİFLER (${duplicateKeys.length} adet):\x1b[0m`);
  for (const [id, occurrences] of Object.entries(initialScan.duplicates)) {
    console.log(`\x1b[33m• ID: "${id}" (${occurrences.length} kez eklenmiş)\x1b[0m`);
    occurrences.forEach((occ, idx) => {
      console.log(`  [${idx + 1}] Dosya: ${occ.file} (Konum: ${occ.objStart}-${occ.objEnd}) ${idx === 0 ? '\x1b[32m[KORUNACAK İLK KAYIT]\x1b[0m' : '\x1b[31m[SİLİNECEK MÜKERRER]\x1b[0m'}`);
    });
  }

  console.log('\n\x1b[35m=== Temizleme İşlemi Başlatılıyor ===\x1b[0m');

  // Her dosya için silinecek mükerrer nesneleri topla
  const removalsByFile = {};
  for (const relPath of TARGET_FILES) {
    removalsByFile[relPath] = [];
  }

  for (const [id, occurrences] of Object.entries(initialScan.duplicates)) {
    // İlk kaydı (index 0) koruyoruz, sonraki tüm kayıtları (index >= 1) silinecekler listesine ekliyoruz
    for (let i = 1; i < occurrences.length; i++) {
      const occ = occurrences[i];
      removalsByFile[occ.file].push(occ);
    }
  }

  // Her dosyayı kendi içinde, SONDAN BAŞA doğru (büyük index'ten küçük index'e) işleyerek sil
  // Bu sayede önceki silmeler dosyadaki karakter konumlarını (index) kaydırsa bile,
  // henüz silinmemiş olan daha üstteki nesnelerin konumları bozulmaz.
  for (const relPath of TARGET_FILES) {
    const removals = removalsByFile[relPath];
    if (removals.length === 0) continue;

    // Sondan başa sırala
    removals.sort((a, b) => b.objStart - a.objStart);

    let content = fileCache[relPath];
    let fileRemovedCount = 0;

    for (const rem of removals) {
      // Silinecek nesne bloğunun başlangıç ve bitiş sınırları
      let start = rem.objStart;
      let end = rem.objEnd;

      // Nesnenin hemen önündeki boşlukları ve satır sonlarını da temizle (girintiyi korumak için)
      while (start > 0 && (content[start - 1] === ' ' || content[start - 1] === '\t')) {
        start--;
      }

      // Nesnenin hemen ardındaki virgülü, boşlukları ve satır sonunu da temizle
      let hasTrailingComma = false;
      let scanEnd = end + 1;
      while (scanEnd < content.length) {
        const ch = content[scanEnd];
        if (ch === ' ' || ch === '\t') {
          scanEnd++;
        } else if (ch === ',') {
          hasTrailingComma = true;
          scanEnd++;
        } else {
          break;
        }
      }

      // Satır sonu karakterini de yut (\n veya \r\n)
      if (scanEnd < content.length && content[scanEnd] === '\r') scanEnd++;
      if (scanEnd < content.length && content[scanEnd] === '\n') scanEnd++;

      // Nesneyi dosyadan çıkar
      content = content.substring(0, start) + content.substring(scanEnd);
      fileRemovedCount++;
    }

    // Dosyadaki son elemandan sonra virgül kalıp kalmadığını kontrol et ve gerekirse düzelt
    // (Dizinin son elemanından sonra virgül kalması TS'de geçerlidir ama temizlik iyidir)
    const closingIndex = content.lastIndexOf('];');
    if (closingIndex !== -1) {
      let beforeClosing = content.substring(0, closingIndex);
      const trimmedBefore = beforeClosing.replace(/\s+$/, '');
      const lastChar = trimmedBefore.charAt(trimmedBefore.length - 1);
      
      // Eğer son elemandan sonra gereksiz bir virgül kalmışsa ve dizi boş değilse temizle
      if (lastChar === ',' && trimmedBefore.length > 1) {
        const secondLastChar = trimmedBefore.charAt(trimmedBefore.length - 2);
        if (secondLastChar !== '[') {
          beforeClosing = trimmedBefore.substring(0, trimmedBefore.length - 1) + beforeClosing.substring(trimmedBefore.length);
          content = beforeClosing + content.substring(closingIndex);
        }
      }
    }

    // Güncellenen içeriği diske yaz ve önbelleği güncelle
    fs.writeFileSync(filePaths[relPath], content, 'utf8');
    fileCache[relPath] = content;
    console.log(`\x1b[32m✓ ${path.basename(relPath)}: ${fileRemovedCount} mükerrer tarif nesnesi başarıyla silindi.\x1b[0m`);
  }

  // 3. AŞAMA: Nihai Doğrulama (Diskten taze okuyarak)
  console.log('\n\x1b[35m=== Nihai Doğrulama Taraması Başlatılıyor ===\x1b[0m');
  const freshCache = {};
  for (const relPath of TARGET_FILES) {
    freshCache[relPath] = fs.readFileSync(filePaths[relPath], 'utf8');
  }

  const finalScan = scanForDuplicates(freshCache);
  const finalDuplicateKeys = Object.keys(finalScan.duplicates);

  if (finalDuplicateKeys.length === 0) {
    console.log('\x1b[32m✓ DOĞRULANDI: Projedeki tüm mükerrer tarif ID\'leri başarıyla temizlendi (0 mükerrer kaldı).\x1b[0m');
    console.log(`- Güncel toplam tarif nesnesi sayısı: ${finalScan.totalObjects}`);
    console.log('\x1b[32mŞimdi projenizi yerelde "npm run build" ile derleyip Vercel\'e güvenle push edebilirsiniz.\x1b[0m');
  } else {
    console.log(`\x1b[31m✗ HATA: Bazı mükerrer ID\'ler temizlenemedi: ${finalDuplicateKeys.join(', ')}\x1b[0m`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Kritik hata:', err);
  process.exit(1);
});