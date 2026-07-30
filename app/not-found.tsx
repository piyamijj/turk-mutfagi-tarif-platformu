import React from "react";
import Link from "next/link";
import { ChefHat, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-cream/20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-md w-full text-center flex flex-col items-center justify-center gap-6">
        {/* Stylized 404 & Icon */}
        <div className="relative flex items-center justify-center">
          <span className="font-serif text-9xl font-extrabold text-terracotta/10 select-none">
            404
          </span>
          <div className="absolute p-4 bg-white rounded-2xl border border-cardborder shadow-md text-terracotta">
            <ChefHat className="w-12 h-12" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Bu Tarif Kaybolmuş Görünüyor!
          </h1>
          <p className="font-sans text-sm sm:text-base text-ink/60 leading-relaxed">
            Aradığınız sayfa veya tarif bulunamadı. Belki de ismi değişti ya da mutfaktan geçici olarak kaldırıldı. Ana sayfaya dönüp diğer lezzetli tariflerimize göz atabilirsiniz.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-2xl transition-colors duration-150 shadow-md group"
        >
          <span>Ana Sayfaya Dön</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}