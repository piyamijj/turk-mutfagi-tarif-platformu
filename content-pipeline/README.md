# İçerik Üretim Hattı (Content Pipeline) — Otomasyon Talimatları

Bu klasör, **Nefis & Özgün** platformunun 80 tariflik tam kataloğunun içerik ve görsel üretim sürecini kullanıcının kendi yerel ortamında (Termux) çalıştırabileceği hazır bir script ile yönetebilmesi için tasarlanmış bir altyapıdır.

---

## 0. Hazır Script ile Çalıştırma (ÖNERİLEN YÖNTEM)

Elle talimat takip etmek yerine, doğrudan çalıştırılabilir `generate.js` scriptini kullanabilirsiniz. Bu script, bu dosyanın altındaki tüm adımları (Adım 1-6) otomatik olarak yürütür.

**Gereksinim:** Termux üzerinde Node.js 18 veya üstü (`pkg install nodejs` ile kurulabilir).

**Çalıştırma Komutu:**
```bash
GEMINI_API_KEY="kendi-api-anahtariniz" node content-pipeline/generate.js
```

**Ne yapar:**
1.  `progress.json`'dan durumu `bekliyor` veya `hata` olan, öncelik sırasına göre (batch 1 önce) en fazla 15 tarifi alır.
2.  Her tarif için Gemini REST API'sini (`gemini-flash-latest`, kendi anahtarınızla, SDK kullanılmadan) çağırarak eksiksiz bir tarif içeriği (malzemeler, adımlar, ipuçları) üretir.
3.  Üretilen içeriği otomatik olarak ilgili `lib/data/<kategori>.ts` dosyasına ekler.
4.  `progress.json`'daki durumu günceller (`tamamlandi` veya hata olursa `hata`).
5.  Bir tarifte hata oluşursa scripti DURDURMAZ, hatayı kaydedip sıradaki tarife geçer.

**Görsel Üretimi Hakkında Not:** Script varsayılan olarak İÇERİK üretimine odaklanır ve görsel üretimini GEMINI_IMAGE_MODEL ortam değişkeni tanımlanmadığı sürece atlar (bu durumda `hasImage: false` olarak işaretlenir, görseli daha sonra manuel olarak `public/images/recipes/<id>.jpg` konumuna ekleyebilirsiniz). Bu, içerik üretiminin görsel üretimindeki olası bir sorundan asla etkilenmemesini garanti eder.

**Bu flow session'ın kendi ürettiği içerik/görsellerle çakışma yaşanmaz:** Bu script, sadece `progress.json`'da durumu hâlâ `bekliyor`/`hata` olan kayıtları işler; `tamamlandi` olarak işaretlenmiş hiçbir kayda dokunmaz. Bu sayede script ile flow session paralel/farklı zamanlarda çalışsa bile aynı tarif iki kez üretilmez.

**Birden fazla çalıştırma:** Script her çalıştığında sıradaki 15 bekleyen tarifi işler. 80 tarifin tamamını tamamlamak için scripti birkaç kez art arda çalıştırmanız gerekir.

---

## 1. Altyapı Dosyaları
*   `generate.js`: Yukarıda açıklanan, çalıştırılabilir Node.js otomasyon scripti.
*   `progress.json`: 80 tarifin tamamını, kategorilerini, alt kategorilerini, üretim durumlarını ve hata geçmişlerini tutan tek veri kaynağıdır (Single Source of Truth).
*   `README.md`: Bu talimat dosyası (script otomatik çalıştığı için elle takip etmeniz gerekmez, ama script'in ne yaptığını anlamak isterseniz Adım 1-6 aşağıda detaylandırılmıştır).

---

## 2. `progress.json` Veri Yapısı
Her tarif nesnesi şu alanları içerir:
*   `id`: Tarifin benzersiz URL-safe slug tanımlayıcısı (örn: `karniyarik`).
*   `title`: Tarifin Türkçe adı (örn: `Karnıyarık`).
*   `mainCategory`: Ana kategori (`sicak-yemekler`, `soguk-yemekler`, `mezeler`, `tatlilar`).
*   `subCategory`: Alt kategori slug değeri (örn: `et-yemekleri`).
*   `batch`: Üretim önceliği grubu (`1` = ilk 60 tariflik hedef, `2` = kalan 20 tarif).
*   `status`: Tarifin güncel durumu (`bekliyor`, `tamamlandi`, `hata`).
*   `hasContent`: Tarif içeriğinin (malzemeler, adımlar, ipuçları) yazılıp yazılmadığı (`true`/`false`).
*   `hasImage`: Tarif görselinin üretilip üretilmediği (`true`/`false`).
*   `attempts`: Deneme sayısı (hata durumunda artırılır).
*   `lastError`: Son denemede alınan hata mesajı (hata yoksa `null`).

---

## 3. Otomasyon Aracı Çalışma Algoritması (İş Akışı)

Otomasyon aracı her çalıştırıldığında aşağıdaki adımları sırasıyla ve **kesinlikle idempotent (tekrarlanabilir ve güvenli)** olarak yürütmelidir:

### Adım 1: İş Listesini Belirleme (Batching)
1.  `progress.json` dosyasını okuyun.
2.  `status` değeri `"bekliyor"` (veya `"hata"`) olan ve `batch` değeri `1` olan tarifleri filtreleyin.
3.  Bu listeden **en fazla 15 adet** tarifi sıradaki iş paketi olarak seçin.
4.  **TEKRAR-ÇEKME KORUMASI (Kritik):** Durumu `"tamamlandi"` olan hiçbir tarife asla dokunmayın, yeniden işlemeyin veya üzerine yazmayın.

### Adım 2: İçerik Araştırması ve Yazımı
Seçilen her bir tarif için:
1.  Tarifi internet kaynaklarından araştırarak en doğru, eksiksiz ve geleneksel versiyonunu oluşturun.
2.  İçeriği `lib/types.ts` dosyasındaki `Recipe` TypeScript arayüzüne tam uyumlu bir JSON nesnesi olarak hazırlayın:
    *   `id`, `title`, `mainCategory`, `subCategory`, `subCategoryLabel` alanlarını `progress.json` ve `lib/categories.ts` ile birebir eşleştirin.
    *   `ingredientGroups` (porsiyon ölçeklemeye uygun ölçülerle), `steps` (adım adım yapılış ve şef ipuçları), `tips` (püf noktaları), `prepTimeMinutes`, `cookTimeMinutes`, `servings`, `difficulty` ve `calories` alanlarını eksiksiz doldurun.
    *   `imageUrl` alanını `"/images/recipes/<id>.jpg"` olarak ayarlayın.

### Adım 3: Dosyaya Yazma (İçerik Entegrasyonu)
1.  Üretilen tarif nesnesini, ana projedeki ilgili kategori dosyasına ekleyin:
    *   `sicak-yemekler` -> `lib/data/sicak-yemekler.ts`
    *   `soguk-yemekler` -> `lib/data/soguk-yemekler.ts`
    *   `mezeler` -> `lib/data/mezeler.ts`
    *   `tatlilar` -> `lib/data/tatlilar.ts`
2.  Nesneyi ilgili dosyadaki varsayılan dizi (array) içerisine ekleyin/ekletin.

### Adım 4: Görsel Üretimi ve Kaydı
1.  Tarif için tutarlı bir görsel dilde (45 derece açı, sıcak doğal ışık, rustik seramik sunum, krem/toprak tonları) yapay zeka görseli üretin veya uygun lisanslı bir fotoğraf bulun.
2.  Görseli `public/images/recipes/` klasörüne `<id>.jpg` adıyla (örn: `karniyarik.jpg`) kaydedin.

### Adım 5: Durum Güncelleme ve Hata Toleransı
*   **Başarılı Durumda:**
    *   `progress.json` dosyasında ilgili tarifin durumunu güncelleyin:
        *   `status`: `"tamamlandi"`
        *   `hasContent`: `true`
        *   `hasImage`: `true`
*   **Hata Durumunda:**
    *   Eğer içerik yazımı veya görsel üretiminde bir hata oluşursa, o tarifi pas geçip sıradakine ilerleyin.
    *   Hata alan tarifin durumunu güncelleyin:
        *   `status`: `"hata"`
        *   `attempts`: `attempts + 1`
        *   `lastError`: `"Hata detayını buraya yazın"`
    *   Bu sayede bir sonraki çalıştırmada bu tarif tekrar denenecektir.

### Adım 6: Özet ve Zaman Damgası Güncelleme
Tüm iş paketi tamamlandığında:
1.  `progress.json` dosyasının en üstündeki `summary` alanını (`bekliyor`, `tamamlandi`, `hata` sayılarını) yeniden hesaplayarak güncelleyin.
2.  `lastUpdated` alanına güncel ISO zaman damgasını yazın.
3.  `progress.json` dosyasını kaydedin.

---

## 4. Dosya Konumları ve Entegrasyon
*   `progress.json` ve bu talimat dosyası `content-pipeline/` klasöründe yer alır.
*   Üretilen içeriklerin yazılacağı veri dosyaları bir üst dizindeki `lib/data/` klasöründedir.
*   Görsellerin kaydedileceği klasör bir üst dizindeki `public/images/recipes/` klasörüdür.
*   Tüm sistem statik ve dinamik olarak bu dosyalara bağlıdır; otomasyon aracınız verileri yazdığı anda site üzerinde anında görüntülenecektir.