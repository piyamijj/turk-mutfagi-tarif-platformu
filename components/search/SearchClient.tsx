"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, RotateCcw, Inbox, SlidersHorizontal } from "lucide-react";
import { Recipe } from "@/lib/types";
import { CATEGORIES } from "@/lib/categories";
import RecipeCard from "@/components/RecipeCard";
import FilterBar from "@/components/FilterBar";
import { normalizeTurkish } from "@/lib/recipes";

interface SearchClientProps {
  allRecipes: Recipe[];
  initialQuery: string;
}

export default function SearchClient({ allRecipes, initialQuery }: SearchClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(initialQuery);
  const [mainCategory, setMainCategory] = useState<string | undefined>(undefined);
  const [difficulty, setDifficulty] = useState<string | undefined>(undefined);
  const [maxTime, setMaxTime] = useState<number | undefined>(undefined);

  // Sync URL query parameter with local state
  useEffect(() => {
    const currentQuery = searchParams.get("q") || "";
    setQuery(currentQuery);
  }, [searchParams]);

  // Update URL query parameter when search input changes
  const handleQueryChange = (val: string) => {
    setQuery(val);
    const params = new URLSearchParams(searchParams.toString());
    if (val.trim()) {
      params.set("q", val);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleResetFilters = () => {
    setQuery("");
    setMainCategory(undefined);
    setDifficulty(undefined);
    setMaxTime(undefined);
    router.replace(pathname, { scroll: false });
  };

  // Combined client-side filtering logic
  const filteredRecipes = useMemo(() => {
    return allRecipes.filter((recipe) => {
      // 1. Text search query filter
      if (query.trim()) {
        const normalizedQuery = normalizeTurkish(query);
        const titleMatch = normalizeTurkish(recipe.title).includes(normalizedQuery);
        const descMatch = normalizeTurkish(recipe.description).includes(normalizedQuery);
        const ingredientMatch = recipe.mainIngredients.some((ing) =>
          normalizeTurkish(ing).includes(normalizedQuery)
        );
        const tagMatch = recipe.tags.some((tag) =>
          normalizeTurkish(tag).includes(normalizedQuery)
        );

        if (!titleMatch && !descMatch && !ingredientMatch && !tagMatch) {
          return false;
        }
      }

      // 2. Main category filter
      if (mainCategory && recipe.mainCategory !== mainCategory) {
        return false;
      }

      // 3. Difficulty filter
      if (difficulty && recipe.difficulty !== difficulty) {
        return false;
      }

      // 4. Max time filter
      if (maxTime && recipe.totalTimeMinutes > maxTime) {
        return false;
      }

      return true;
    });
  }, [allRecipes, query, mainCategory, difficulty, maxTime]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 1. Header Section */}
      <section className="bg-gradient-to-b from-cream-dark/40 to-cream border-b border-cardborder py-10 sm:py-14 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col gap-6 max-w-3xl text-left">
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                Tarif Ara
              </h1>
              <p className="font-sans text-sm sm:text-base text-ink/60 leading-relaxed">
                Nefis & Özgün tarif kataloğunda arama yapın. Malzemeye, kategoriye, zorluk derecesine veya hazırlama süresine göre filtreleyerek aradığınız lezzeti anında bulun.
              </p>
            </div>

            {/* Large Search Input */}
            <div className="relative w-full max-w-2xl bg-white border border-cardborder rounded-2xl p-1.5 shadow-md flex items-center gap-2 focus-within:border-terracotta focus-within:ring-1 focus-within:ring-terracotta transition-all duration-200">
              <div className="pl-3.5 text-ink/60">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Malzeme, yemek adı veya etiket arayın... (örn: patlıcan, fırın, vejetaryen)"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                className="flex-grow bg-transparent border-none outline-none py-3 text-sm sm:text-base text-ink placeholder-ink/40"
              />
              {query && (
                <button
                  onClick={() => handleQueryChange("")}
                  className="text-xs font-bold text-ink/60 hover:text-terracotta px-3 py-2 rounded-xl hover:bg-cream-dark transition-colors"
                >
                  Temizle
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-12 sm:py-16 bg-cream/20 flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Filters (Sticky on Desktop) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start z-20 flex flex-col gap-5 w-full">
              {/* Category Filter Card */}
              <div className="bg-white rounded-2xl border border-cardborder p-4 sm:p-6 shadow-sm flex flex-col gap-3 text-left">
                <span className="text-[10px] font-bold text-ink/60 uppercase tracking-wider px-1 flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-olive/70" /> Ana Kategoriler
                </span>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => setMainCategory(undefined)}
                    className={`relative w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-colors duration-200 flex items-center justify-between ${
                      mainCategory === undefined
                        ? "bg-terracotta text-white"
                        : "bg-cream-dark text-ink/80 hover:bg-cream-dark/80 hover:text-terracotta"
                    }`}
                  >
                    <span>Tüm Kategoriler</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${mainCategory === undefined ? "bg-white/20 text-white" : "bg-ink/5 text-ink/65"}`}>
                      {allRecipes.length}
                    </span>
                  </button>

                  {CATEGORIES.map((cat) => {
                    const isActive = mainCategory === cat.slug;
                    const count = allRecipes.filter((r) => r.mainCategory === cat.slug).length;
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => setMainCategory(cat.slug)}
                        className={`relative w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-colors duration-200 flex items-center justify-between ${
                          isActive
                            ? "bg-terracotta text-white"
                            : "bg-cream-dark text-ink/80 hover:bg-cream-dark/80 hover:text-terracotta"
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isActive ? "bg-white/20 text-white" : "bg-ink/5 text-ink/65"}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Other Filters (Difficulty, Time) */}
              <FilterBar
                activeDifficulty={difficulty}
                onDifficultyChange={setDifficulty}
                activeMaxTime={maxTime}
                onMaxTimeChange={setMaxTime}
                resultCount={filteredRecipes.length}
              />
            </div>

            {/* Right Column: Recipe Grid */}
            <div className="lg:col-span-8 w-full">
              <AnimatePresence mode="wait">
                {filteredRecipes.length > 0 ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                  >
                    {filteredRecipes.map((recipe, idx) => (
                      <RecipeCard key={recipe.id} recipe={recipe} index={idx} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white rounded-2xl border border-cardborder p-12 text-center flex flex-col items-center justify-center gap-5 shadow-sm min-h-[350px] w-full"
                  >
                    <div className="p-4 bg-cream-dark rounded-full text-ink/60">
                      <Inbox className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col gap-1.5 max-w-md">
                      <h3 className="font-serif text-xl font-bold text-ink">Tarif Bulunamadı</h3>
                      <p className="text-sm text-ink/60 leading-relaxed">
                        Arama kriterlerinize veya seçtiğiniz filtrelere uygun tarif bulunamadı. Arama kelimesini değiştirmeyi veya filtreleri temizlemeyi deneyebilirsiniz.
                      </p>
                    </div>
                    <button
                      onClick={handleResetFilters}
                      className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors duration-150 shadow-sm"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Aramayı Sıfırla</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}