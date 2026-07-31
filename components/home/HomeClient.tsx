"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Soup, Salad, UtensilsCrossed, Cake, Sparkles, ArrowRight, BookOpen, ChefHat } from "lucide-react";
import { Recipe, CategoryMeta } from "@/lib/types";
import RecipeCard from "@/components/RecipeCard";

interface HomeClientProps {
  featuredRecipes: Recipe[];
  popularRecipes: Recipe[];
  categories: CategoryMeta[];
}

export default function HomeClient({ featuredRecipes, popularRecipes, categories }: HomeClientProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  // GÜVENLİK AĞI: canlı sitede category/featured/popular bölümlerindeki
  // whileInView tetikleyicisi bazı durumlarda hiç ateşlenmeyip kartların
  // kalıcı olarak opacity:0 (görünmez) kalmasına yol açan gerçek bir hataydı.
  // forceVisible, sayfa yüklendikten kısa bir süre sonra true olur ve tüm
  // whileInView animasyonlu bölümler `animate` prop'u üzerinden kesin
  // olarak görünür hale getirilir - scroll tetiklemesi çalışsa da çalışmasa da.
  const [forceVisible, setForceVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/ara?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const getCategoryIcon = (iconName: string, className = "w-8 h-8") => {
    switch (iconName) {
      case "Soup": return <Soup className={className} />;
      case "Salad": return <Salad className={className} />;
      case "UtensilsCrossed": return <UtensilsCrossed className={className} />;
      case "Cake": return <Cake className={className} />;
      default: return <ChefHat className={className} />;
    }
  };

  // Stagger container for hero entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-cream via-cream/95 to-cream-dark/30 pt-10 pb-20 lg:py-0 overflow-hidden w-full">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-[5%] w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-olive/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text & Search */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 text-left"
            >
              <motion.div variants={itemVariants} className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-1.5 bg-terracotta/10 text-terracotta px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase self-start">
                  <Sparkles className="w-3.5 h-3.5" /> Geleneksel Türk Mutfağı Mirası
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1] tracking-tight">
                  Türk Mutfağının Tüm <span className="text-terracotta">Lezzetleri</span>, Tek Adreste
                </h1>
              </motion.div>

              <motion.p variants={itemVariants} className="font-sans text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl">
                Sıcak yemeklerden zeytinyağlılara, mezelerden şerbetli tatlılara uzanan, özenle araştırılmış 80+ geleneksel tarif. Yapay zeka destekli şef asistanımız ve iştah açıcı görsellerle donatılmış en kapsamlı dijital yemek kitabınız.
              </motion.p>

              {/* Search Bar */}
              <motion.form
                variants={itemVariants}
                onSubmit={handleSearchSubmit}
                className="relative w-full max-w-xl bg-white border border-cardborder-dark rounded-2xl p-2 shadow-lg flex items-center gap-2 focus-within:border-terracotta focus-within:ring-1 focus-within:ring-terracotta transition-all duration-200"
              >
                <div className="pl-3 text-ink/60">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Malzeme veya tarif adı arayın... (örn: patlıcan, baklava)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow bg-transparent border-none outline-none py-2.5 text-sm sm:text-base text-ink placeholder-ink/40"
                />
                <button
                  type="submit"
                  className="bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm sm:text-base px-5 py-2.5 rounded-xl transition-colors duration-150 flex items-center gap-1.5 shrink-0"
                >
                  <span>Ara</span>
                </button>
              </motion.form>

              {/* Stat Chips */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white border border-cardborder px-4 py-2 rounded-xl shadow-sm">
                  <BookOpen className="w-4 h-4 text-terracotta" />
                  <span className="text-xs sm:text-sm font-bold text-ink">80+ Özgün Tarif</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-cardborder px-4 py-2 rounded-xl shadow-sm">
                  <Soup className="w-4 h-4 text-olive" />
                  <span className="text-xs sm:text-sm font-bold text-ink">4 Ana Kategori</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-cardborder px-4 py-2 rounded-xl shadow-sm">
                  <ChefHat className="w-4 h-4 text-gold" />
                  <span className="text-xs sm:text-sm font-bold text-ink">AI Şef Asistanı</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Asymmetric Collage */}
            <div className="lg:col-span-5 relative h-[350px] sm:h-[450px] lg:h-[500px] w-full flex items-center justify-center">
              {featuredRecipes.length > 0 && (
                <div className="relative w-full h-full max-w-md lg:max-w-none">
                  {/* Main Large Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: -3 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-[8%] left-[8%] w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 bg-cream-dark"
                  >
                    <Image
                      src={featuredRecipes[0].imageUrl}
                      alt={featuredRecipes[0].title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                      <span className="text-[10px] font-bold text-gold uppercase tracking-wider">Öne Çıkan</span>
                      <h3 className="font-serif text-base sm:text-lg font-bold leading-tight">{featuredRecipes[0].title}</h3>
                    </div>
                  </motion.div>

                  {/* Second Overlapping Image */}
                  {featuredRecipes.length > 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, rotate: 6, x: 30, y: 30 }}
                      animate={{ opacity: 1, scale: 1, rotate: 6, x: 0, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-[8%] right-[8%] w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 bg-cream-dark"
                    >
                      <Image
                        src={featuredRecipes[1].imageUrl}
                        alt={featuredRecipes[1].title}
                        fill
                        sizes="(max-width: 1024px) 40vw, 25vw"
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
                        <h3 className="font-serif text-sm font-bold leading-tight">{featuredRecipes[1].title}</h3>
                      </div>
                    </motion.div>
                  )}

                  {/* Small Decorative Accent Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
                    className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-gold flex items-center justify-center text-white shadow-lg z-30 -rotate-12"
                  >
                    <span className="font-serif text-xs font-bold text-center leading-none">%100<br />Özgün</span>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY BROWSING SECTION */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="flex flex-col gap-2 mb-12 text-left max-w-2xl">
            <span className="text-xs font-bold text-terracotta uppercase tracking-widest">Kategoriler</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Kategorilere Göz Atın
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink/60 leading-relaxed">
              Türk mutfağının zengin mirasını oluşturan dört temel kategorideki geleneksel lezzetleri keşfedin.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {categories.map((cat, idx) => {
              // Assign distinct warm gradients per category
              const gradients = [
                "from-terracotta/5 to-terracotta/15 hover:from-terracotta/10 hover:to-terracotta/20 border-terracotta/10 hover:border-terracotta/30",
                "from-olive/5 to-olive/15 hover:from-olive/10 hover:to-olive/20 border-olive/10 hover:border-olive/30",
                "from-gold/5 to-gold/15 hover:from-gold/10 hover:to-gold/20 border-gold/10 hover:border-gold/30",
                "from-terracotta/5 to-gold/10 hover:from-terracotta/10 hover:to-gold/15 border-terracotta/5 hover:border-terracotta/20",
              ];
              const iconColors = [
                "text-terracotta",
                "text-olive",
                "text-gold-dark",
                "text-terracotta",
              ];
              const gradient = gradients[idx % gradients.length];
              const iconColor = iconColors[idx % iconColors.length];

              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={forceVisible ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true, margin: "200px", amount: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <Link
                    href={`/kategori/${cat.slug}`}
                    className={`block h-full rounded-2xl p-6 sm:p-8 border bg-gradient-to-br ${gradient} transition-all duration-300 group flex flex-col justify-between min-h-[240px]`}
                  >
                    <div className="flex flex-col gap-4">
                      <div className={`p-3 bg-white rounded-xl shadow-sm inline-block self-start ${iconColor}`}>
                        {getCategoryIcon(cat.icon)}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-ink group-hover:text-terracotta transition-colors duration-200">
                          {cat.label}
                        </h3>
                        <p className="text-xs sm:text-sm text-ink/60 mt-2 leading-relaxed line-clamp-3">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-ink/80 group-hover:text-terracotta transition-colors duration-200 mt-6">
                      <span>Keşfet</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED RECIPES SECTION */}
      {featuredRecipes.length > 0 && (
        <section className="py-20 bg-cream-dark/20 border-y border-cardborder w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Section Header */}
            <div className="flex flex-col gap-2 mb-12 text-left max-w-2xl">
              <span className="text-xs font-bold text-terracotta uppercase tracking-widest">Seçkiler</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                Öne Çıkan Tarifler
              </h2>
              <p className="font-sans text-sm sm:text-base text-ink/60 leading-relaxed">
                Şeflerimizin bu hafta sizin için seçtiği, yapılışı detaylıca anlatılmış en özel geleneksel lezzetler.
              </p>
            </div>

            {/* Recipes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {featuredRecipes.slice(0, 6).map((recipe, idx) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. POPULAR RECIPES SECTION */}
      {popularRecipes.length > 0 && (
        <section className="py-20 bg-white w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="text-xs font-bold text-terracotta uppercase tracking-widest">En Çok Beğenilenler</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                  En Popüler Tarifler
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink/60 leading-relaxed">
                  Kullanıcılarımız tarafından en çok aranan, defalarca denenmiş ve tam not almış klasik tarifler.
                </p>
              </div>
              <Link
                href="/ara"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-terracotta hover:text-terracotta-dark transition-colors duration-150 shrink-0"
              >
                <span>Tüm Tarifleri Gör</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Recipes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {popularRecipes.slice(0, 8).map((recipe, idx) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. AI ASSISTANT TEASER SECTION */}
      <section className="py-10 pb-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={forceVisible ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "200px", amount: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-olive to-olive-dark text-cream rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden w-full"
          >
            {/* Decorative background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-terracotta/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Content */}
              <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6 text-left">
                <div className="bg-white/10 p-2 rounded-xl inline-block self-start text-gold">
                  <ChefHat className="w-8 h-8" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Elinizde Ne Var? <br className="hidden sm:inline" />Akıllı Şefe Sorun!
                </h2>
                <p className="font-sans text-sm sm:text-base text-cream-dark/80 leading-relaxed max-w-xl">
                  Dolabınızda kalan malzemeleri yazın, yapay zeka destekli şef asistanımız size sitemizdeki tariflerden en uygun olanları anında önersin. Malzeme ikameleri veya pişirme teknikleri hakkında da dilediğinizi sorabilirsiniz.
                </p>
              </div>

              {/* Right Visual Pointer */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-4">
                <div className="hidden lg:flex flex-col items-end gap-2 text-right text-cream-dark/60">
                  <span className="text-xs font-bold uppercase tracking-wider">Şimdi Deneyin</span>
                  <p className="text-xs max-w-[180px]">Sağ alttaki şef ikonuna tıklayarak sohbete başlayın!</p>
                </div>
                <div className="flex items-center gap-2 bg-gold text-ink font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  <span>Şef Asistanı Aktif</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}