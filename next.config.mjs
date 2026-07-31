/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // NOT: "unoptimized: true" idi - bu, Next.js'in görselleri optimize edip
    // uygun boyutlarda (responsive srcset) sunmasını TAMAMEN devre dışı
    // bırakıyordu. Sonuç: tarayıcı her zaman orijinal, ham çözünürlükteki
    // (AI üretilen görseller 2368x1776 / 2048x2048, birkaç MB) dosyayı
    // indiriyordu ve sadece CSS ile küçültüyordu - bu hem "görseller çok
    // büyük" şikayetinin hem de gereksiz yavaş yüklemenin gerçek nedeniydi.
    // Vercel, Next.js Image optimizasyonunu native olarak destekler, bu
    // yüzden unoptimized modu burada gereksizdi ve kaldırıldı.
    formats: ['image/webp'],
  },
};

export default nextConfig;