"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Soup, Salad, UtensilsCrossed, Cake, ChefHat, RotateCcw, Inbox } from "lucide-react";
import { Recipe, CategoryMeta } from "@/lib/types";
import RecipeCard from "@/components/RecipeCard";
import FilterBar from "@/components/FilterBar";
import { normalizeTurkish } from "@/lib/recipes";

interface CategoryClientProps {
  category: CategoryMeta;
  initialRecipes: Recipe[];
}

export default function CategoryClient({ category, initialRecipes }: CategoryClientProps) {
  const [subCategory, setSubCategory] = useState<string | undefined>(undefined);
  const [difficulty, setDifficulty] = useState<string | undefined>(undefined);
  const [maxTime, setMaxTime] = useState<number | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryIcon = (iconName: string, className = "w-12 h-12") => {
    switch (iconName) {
      case "Soup": return <Soup className={className} />;
      case "Salad": return <Salad className={className} />;
      case "UtensilsCrossed": return <UtensilsCrossed className={className} />;
      case "Cake": return <Cake className={className} />;
      default: return <ChefHat className={className} />;
    }
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSubCategory(undefined);
    setDifficulty(undefined);
    setMaxTime(undefined);
    setSearchQuery("");
  };

  // Client-side filtering logic
  const filteredRecipes = useMemo(() => {
    return initialRecipes.filter((recipe) => {
      // 1. Subcategory filter
      if (subCategory && recipe.subCategory !== subCategory) {
        return false;
      }

      // 2. Difficulty filter
      if (difficulty && recipe.difficulty !== difficulty) {
        return false;
      }

      // 3. Max time filter
      if (maxTime && recipe.totalTimeMinutes > maxTime) {
        return false;
      }

      // 4. Local search query filter
      if (searchQuery.trim()) {
        const normalizedQuery = normalizeTurkish(searchQuery);
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

      return true;
    });
  }, [initialRecipes, subCategory, difficulty, maxTime, searchQuery]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 1. Category Hero Header */}
      <section className="bg-gradient-to-b from-cream-dark/40 to-cream border-b border-cardborder py-14 sm:py-20 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-4 max-w-3xl text-left"
          >
            <div className="p-4 bg-white rounded-2xl shadow-sm text-terracotta border border-cardborder">
              {getCategoryIcon(category.icon)}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                  {category.label}
                </h1>
                <span className="bg-terracotta/10 text-terracotta text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  {initialRecipes.length} Tarif
                </span>
              </div>
              <p className="font-sans text-sm sm:text-base text-ink/70 leading-relaxed">
                {category.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-12 sm:py-16 bg-cream/20 flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Filter Bar (Sticky on Desktop) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start z-20">
              <FilterBar
                subCategories={category.subCategories}
                activeSubCategory={subCategory}
                onSubCategoryChange={setSubCategory}
                activeDifficulty={difficulty}
                onDifficultyChange={setDifficulty}
                activeMaxTime={maxTime}
                onMaxTimeChange={setMaxTime}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                showSearchInput={true}
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
                    <div className="p-4 bg-cream-dark rounded-full text-ink/40">
                      <Inbox className="w-10 h-10" />
                    </div>
                    <div className="flex flex-col gap-1.5 max-w-md">
                      <h3 className="font-serif text-xl font-bold text-ink">Tarif Bulunamadı</h3>
                      <p className="text-sm text-ink/60 leading-relaxed">
                        Seçtiğiniz filtrelere veya arama kriterlerine uygun tarif bulunamadı. Filtreleri temizleyerek tüm tarifleri tekrar listeleyebilirsiniz.
                      </p>
                    </div>
                    <button
                      onClick={handleResetFilters}
                      className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors duration-150 shadow-sm"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Filtreleri Temizle</span>
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