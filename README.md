# Nefis & Özgün — Türk Mutfağı Tarif Platformu

## Proje Hakkında
Nefis & Özgün, geleneksel Türk mutfağının zengin mirasını modern web teknolojileriyle buluşturan, kapsamlı ve görsel açıdan zengin bir dijital yemek kitabıdır. Platform; sıcak yemekler, soğuk yemekler ve zeytinyağlılar, mezeler ve tatlılar olmak üzere dört ana kategoride özenle araştırılmış tarifleri barındırır. Her tarif için yapay zeka tarafından üretilmiş iştah açıcı ve tutarlı görseller, porsiyon miktarına göre dinamik malzeme ölçekleme, interaktif alışveriş/hazırlık listesi, favorilere ekleme ve kullanıcıların elindeki malzemelere göre akıllı öneriler sunan yapay zeka destekli bir şef asistanı içerir.

## Teknoloji Yığını
*   **Framework:** Next.js 14 (App Router, TypeScript) - Statik ve dinamik sayfaların en optimize şekilde sunulması için.
*   **Stil ve Tasarım:** Tailwind CSS - Tasarım sözleşmesindeki sıcak toprak, zeytin ve krem tonlarının katı kurallarla uygulanması ve mobil uyumluluk için.
*   **Animasyonlar:** Framer Motion - Sayfa geçişleri, kaydırma efektleri, interaktif kartlar ve akıcı mikro etkileşimler için.
*   **İkonlar:** Lucide React - UI genelinde tutarlı ve temiz SVG ikonlar için.
*   **AI Şef Asistanı:** Gemini REST API (`gemini-flash-latest` modeli) - Doğrudan REST fetch ile entegre edilmiş, sadece sitemizdeki tarif kataloğunu referans alan akıllı asistan.
*   **Yerel Depolama:** LocalStorage - Favori tariflerin ve interaktif malzeme kontrol listelerinin tarayıcıda saklanması için.

## Proje Yapısı
Proje, Next.js App Router standartlarına ve kolayca genişletilebilir, ölçeklenebilir bir içerik mimarisine uygun olarak yapılandırılmıştır:

```
turk-mutfagi/
├── app/                      # Sayfalar ve API rotaları (App Router)
│   ├── api/asistan/          # AI Şef Asistanı REST API uç noktası
│   ├── ara/                  # Gelişmiş arama ve filtreleme sayfası
│   ├── favorilerim/          # Favorilere eklenen tariflerin listelendiği sayfa
│   ├── kategori/[slug]/      # Dinamik kategori ve alt kategori sayfaları
│   ├── tarif/[id]/           # Detaylı tarif, porsiyon ölçekleyici ve yapılış adımları
│   ├── globals.css           # Global CSS ve Tailwind direktifleri
│   ├── layout.tsx            # Yazı tipleri, Navbar, Footer ve global sağlayıcılar
│   └── page.tsx              # Ana sayfa (Hero, kategoriler, öne çıkanlar, popülerler)
├── components/               # Yeniden kullanılabilir UI bileşenleri
│   ├── home/                 # Ana sayfaya özel bileşenler (HomeClient vb.)
│   ├── category/             # Kategori sayfasına özel bileşenler
│   ├── recipe/               # Tarif detay sayfasına özel bileşenler
│   ├── search/               # Arama sayfasına özel bileşenler
│   ├── favorites/            # Favoriler sayfasına özel bileşenler
│   ├── AIAssistant.tsx       # Floating AI Şef Asistanı sohbet arayüzü
│   ├── FavoritesProvider.tsx # LocalStorage destekli favori bağlamı (Context)
│   ├── FilterBar.tsx         # Ortak gelişmiş filtreleme ve arama paneli
│   ├── RecipeCard.tsx        # Ortak tarif önizleme kartı (animasyonlu ve favori butonlu)
│   ├── Navbar.tsx            # Mobil uyumlu, arama entegreli yapışkan menü
│   └── Footer.tsx            # Detaylı, kurumsal ve şık alt bilgi alanı
├── lib/                      # Veri erişim ve yardımcı fonksiyonlar
│   ├── data/                 # Kategori bazlı ham tarif verileri (JSON/TS)
│   │   ├── mezeler.ts
│   │   ├── sicak-yemekler.ts
│   │   ├── soguk-yemekler.ts
│   │   └── tatlilar.ts
│   ├── categories.ts         # Kategori ve alt kategori meta verileri
│   ├── recipes.ts            # Tarif arama, filtreleme ve benzer tarifleri bulma motoru
│   └── types.ts              # Katı TypeScript arayüz tanımlamaları (Recipe, Ingredient vb.)
└── public/                   # Statik varlıklar (Görseller, logolar)
    └── images/recipes/       # Tariflere ait yapay zeka üretimi JPG fotoğrafları
```

## Yeni Tarif Ekleme
Platform, kod yazmayı gerektirmeyen son derece kolay ve ölçeklenebilir bir tarif ekleme yapısına sahiptir. Yeni bir tarif eklemek için:

1.  `lib/data/` altındaki ilgili kategori dosyasına (örneğin sıcak yemekler için `sicak-yemekler.ts`) gidin.
2.  Dosyadaki dizi içerisine `Recipe` arayüzüne (bkz. `lib/types.ts`) tam uyumlu yeni bir tarif nesnesi ekleyin.
3.  Tarif için ürettiğiniz görseli `public/images/recipes/` klasörüne, tarif nesnesindeki `id` değeriyle eşleşecek şekilde (örn: `yeni-tarif-id.jpg`) kaydedin.
4.  **Sonuç:** Yeni tarifiniz ana sayfada, ilgili kategori sayfasında, arama sonuçlarında ve AI Şef Asistanının öneri havuzunda otomatik olarak listelenecektir. Başka hiçbir dosyayı güncellemeniz gerekmez.

## Yerel Geliştirme
Projeyi yerel bilgisayarınızda veya Termux üzerinde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```
2.  **Çevre Değişkenlerini Ayarlayın:**
    `.env.local.example` dosyasını `.env.local` adıyla kopyalayın:
    ```bash
    cp .env.local.example .env.local
    ```
    Dosyayı açın ve Google AI Studio'dan aldığınız ücretsiz Gemini API anahtarını ekleyin:
    ```env
    GEMINI_API_KEY=AIzaSy...
    ```
3.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
4.  Tarayıcınızda `http://localhost:3000` adresini açarak platformu test edin.

## Build Öncesi Kontrol
Kodlarınızı GitHub'a göndermeden ve Vercel'e dağıtmadan önce, olası TypeScript veya Next.js derleme hatalarını yakalamak için **mutlaka** yerel olarak build testi yapın:
```bash
npm run build
```
Bu komut sıfır hata ile tamamlanıyorsa projeniz sorunsuz bir şekilde dağıtıma hazırdır.

## Dağıtım
Proje, Termux üzerinden GitHub'a push edilip Vercel üzerinde barındırılacak şekilde tasarlanmıştır:

1.  Kodlarınızı GitHub deponuza gönderin (`git push origin main`).
2.  Vercel paneline gidin ve deponuzu yeni bir proje olarak içe aktarın (Import).
3.  **ÖNEMLİ:** Vercel proje ayarlarında (Project Settings > Environment Variables) `GEMINI_API_KEY` değişkenini tanımlayın ve değer olarak kendi API anahtarınızı girin.
4.  "Deploy" butonuna tıklayın. Vercel build işlemini tamamlayıp sitenizi yayına alacaktır.
5.  Daha sonra DuckDNS üzerinden aldığınız ücretsiz alan adını Vercel projenize yönlendirerek kendi özel alan adınızla yayına devam edebilirsiniz.

## Mevcut Durum
Şu anda projenin tüm altyapısı, tasarımı, animasyonları, filtreleme motoru ve AI asistan entegrasyonu tamamlanmıştır. Platformun veri şemasını ve tüm özelliklerini uçtan uca doğrulamak amacıyla her kategoriden 2'şer adet olmak üzere toplam **8 adet tam detaylı, gerçekçi ve iştah açıcı görsellere sahip örnek tarif** sisteme yüklenmiştir. Önerilen 80 tariflik listenin onaylanmasının ardından, kalan tariflerin içerik yazımı ve görsel üretim aşamasına geçilecektir.