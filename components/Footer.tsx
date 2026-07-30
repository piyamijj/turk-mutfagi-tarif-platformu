import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream-dark border-t border-olive/20 pt-16 pb-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-cardborder-dark/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-terracotta tracking-tight">
              Nefis & Özgün
            </span>
            <p className="font-sans text-sm text-cream-dark/70 leading-relaxed max-w-md">
              Geleneksel sıcak yemeklerden zeytinyağlılara, mezelerden şerbetli tatlılara uzanan, yapay zeka destekli ve iştah açıcı görsellerle donatılmış en kapsamlı dijital Türk yemekleri kitabı.
            </p>
          </div>

          {/* Categories Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-sans text-xs font-bold text-olive-light uppercase tracking-wider">
              Kategoriler
            </span>
            <ul className="flex flex-col gap-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/kategori/${cat.slug}`}
                    className="font-sans text-sm text-cream-dark/80 hover:text-terracotta transition-colors duration-150"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-sans text-xs font-bold text-olive-light uppercase tracking-wider">
              Hızlı Bağlantılar
            </span>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/"
                  className="font-sans text-sm text-cream-dark/80 hover:text-terracotta transition-colors duration-150"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/favorilerim"
                  className="font-sans text-sm text-cream-dark/80 hover:text-terracotta transition-colors duration-150"
                >
                  Favorilerim
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Assistant Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-sans text-xs font-bold text-olive-light uppercase tracking-wider">
              AI Asistan
            </span>
            <p className="font-sans text-sm text-cream-dark/60 leading-relaxed">
              Ekranın sağ alt köşesindeki akıllı şef asistanımızla elinizdeki malzemelere göre tarif önerebilir, pişirme teknikleri hakkında sorular sorabilirsiniz.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream-dark/50">
            &copy; {currentYear} Nefis & Özgün. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-cream-dark/40">
              Geleneksel Türk Mutfağı Mirası
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}