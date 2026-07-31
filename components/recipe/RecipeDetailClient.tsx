"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  ChefHat,
  Heart,
  Minus,
  Plus,
  Lightbulb,
  Star,
  ArrowLeft,
  Check,
  Flame,
} from "lucide-react";
import { Recipe } from "@/lib/types";
import { useFavorites } from "../FavoritesProvider";
import RecipeCard from "../RecipeCard";

interface RecipeDetailClientProps {
  recipe: Recipe;
  relatedRecipes: Recipe[];
}

/**
 * Helper function to scale ingredient amounts.
 * Tries to parse leading numbers or fractions (e.g., "1/2", "1.5", "2")
 * and multiplies them by the serving multiplier.
 */
function scaleAmount(amount: string, multiplier: number): string {
  if (!amount || multiplier === 1) return amount;

  // Match fractions like "1/2", "3/4", "1/3"
  const fractionRegex = /^(\d+)\/(\d+)(\s.*)?$/;
  const fractionMatch = amount.match(fractionRegex);

  if (fractionMatch) {
    const num = parseInt(fractionMatch[1], 10);
    const den = parseInt(fractionMatch[2], 10);
    const rest = fractionMatch[3] || "";
    const scaledVal = (num / den) * multiplier;
    return `${formatNumber(scaledVal)}${rest}`;
  }

  // Match mixed numbers like "1 1/2"
  const mixedRegex = /^(\d+)\s+(\d+)\/(\d+)(\s.*)?$/;
  const mixedMatch = amount.match(mixedRegex);

  if (mixedMatch) {
    const whole = parseInt(mixedMatch[1], 10);
    const num = parseInt(mixedMatch[2], 10);
    const den = parseInt(mixedMatch[3], 10);
    const rest = mixedMatch[4] || "";
    const scaledVal = (whole + num / den) * multiplier;
    return `${formatNumber(scaledVal)}${rest}`;
  }

  // Match standard decimals or integers like "1.5", "2", "500"
  const numberRegex = /^(\d+(?:\.\d+)?)(.*)$/;
  const numberMatch = amount.match(numberRegex);

  if (numberMatch) {
    const val = parseFloat(numberMatch[1]);
    const rest = numberMatch[2] || "";
    const scaledVal = val * multiplier;
    return `${formatNumber(scaledVal)}${rest}`;
  }

  return amount;
}

function formatNumber(num: number): string {
  // Round to at most 2 decimal places
  const rounded = Math.round(num * 100) / 100;
  // Convert to string and strip trailing zeros
  return rounded.toString().replace(/\.0+$/, "");
}

export default function RecipeDetailClient({ recipe, relatedRecipes }: RecipeDetailClientProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [scaleServings, setScaleServings] = useState(recipe.servings);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());
  const [imgError, setImgError] = useState(false);
  const [mounted, setMounted] = useState(false);
  // GÜVENLİK AĞI: whileInView/IntersectionObserver tetikleyicisi güvenilmez
  // olabildiği için (bkz. ana sayfadaki aynı sınıf hata), tarif adımları gibi
  // İŞLEVSEL içerik ASLA sadece scroll tetiklemesine bağımlı kalmamalı.
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setForceVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const multiplier = useMemo(() => {
    return scaleServings / recipe.servings;
  }, [scaleServings, recipe.servings]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(recipe.id);
  };

  const handleIngredientToggle = (itemKey: string) => {
    setCheckedIngredients((prev) => {
      const next = new Set(prev);
      if (next.has(itemKey)) {
        next.delete(itemKey);
      } else {
        next.add(itemKey);
      }
      return next;
    });
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "kolay": return "Kolay";
      case "orta": return "Orta";
      case "zor": return "Zor";
      default: return difficulty;
    }
  };

  const incrementServings = () => {
    setScaleServings((prev) => Math.min(20, prev + 1));
  };

  const decrementServings = () => {
    setScaleServings((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="w-full min-h-screen bg-cream/10 pb-24">
      {/* 1. HERO IMAGE SECTION */}
      <section className="relative h-[45vh] sm:h-[55vh] w-full overflow-hidden bg-ink">
        {!imgError ? (
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            fill
            priority
            className="object-cover opacity-85"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-gold/20 flex items-center justify-center">
            <ChefHat className="w-20 h-20 text-white/30" />
          </div>
        )}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Top Navigation & Favorite Button */}
        <div className="absolute top-6 inset-x-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href={`/kategori/${recipe.mainCategory}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-white/20 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kategoriye Dön</span>
            </Link>

            <button
              onClick={handleFavoriteClick}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Favorilere ekle"
            >
              <motion.div
                animate={mounted && isFavorite(recipe.id) ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Heart
                  className={`w-5 h-5 transition-colors duration-200 ${
                    mounted && isFavorite(recipe.id)
                      ? "fill-terracotta text-terracotta"
                      : "text-white hover:text-terracotta"
                  }`}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Overlaid Content */}
        <div className="absolute bottom-0 inset-x-0 pb-8 sm:pb-12 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-3 sm:gap-4 text-left"
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-cream-dark/80 uppercase tracking-wider">
                <span>{recipe.mainCategory === "sicak-yemekler" ? "Sıcak Yemekler" : recipe.mainCategory === "soguk-yemekler" ? "Soğuk Yemekler" : recipe.mainCategory === "mezeler" ? "Mezeler" : "Tatlılar"}</span>
                <span>&gt;</span>
                <span className="text-gold-light">{recipe.subCategoryLabel}</span>
              </div>

              {/* Title & Region */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  {recipe.title}
                </h1>
                {recipe.region && (
                  <span className="bg-gold text-ink text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {recipe.region}
                  </span>
                )}
              </div>

              {/* Quick Glance Meta Chips */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-2">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-white">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>{recipe.totalTimeMinutes} dk (Hazırlık: {recipe.prepTimeMinutes} dk)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-white">
                  <Users className="w-4 h-4 text-gold" />
                  <span>{recipe.servings} Kişilik</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-white">
                  <ChefHat className="w-4 h-4 text-gold" />
                  <span>Zorluk: {getDifficultyLabel(recipe.difficulty)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full">
          {/* Left Column: Description, Steps, Tips */}
          <div className="lg:col-span-8 flex flex-col gap-10 text-left w-full">
            {/* Description */}
            <div className="bg-white rounded-2xl border border-cardborder p-6 sm:p-8 shadow-sm">
              <p className="font-serif italic text-lg sm:text-xl text-ink/80 leading-relaxed">
                &ldquo;{recipe.description}&rdquo;
              </p>
            </div>

            {/* Instructions (Steps) */}
            <div className="flex flex-col gap-6 w-full">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight border-b border-cardborder pb-3">
                Nasıl Yapılır?
              </h2>
              <div className="flex flex-col gap-6 w-full">
                {recipe.steps.map((step, idx) => (
                  <motion.div
                    key={step.stepNumber}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={forceVisible ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true, margin: "200px", amount: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white rounded-2xl border border-cardborder p-5 sm:p-6 shadow-sm flex gap-4 sm:gap-5 items-start w-full"
                  >
                    {/* Step Number Badge */}
                    <div className="w-10 h-10 rounded-full bg-terracotta text-white font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
                      {step.stepNumber}
                    </div>

                    {/* Step Content */}
                    <div className="flex flex-col gap-3 flex-grow">
                      <p className="font-sans text-sm sm:text-base text-ink/90 leading-relaxed">
                        {step.instruction}
                      </p>
                      {step.tip && (
                        <div className="bg-gold/5 border border-gold/20 rounded-xl p-3.5 flex gap-2.5 items-start text-left">
                          <Lightbulb className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">
                            <span className="font-bold text-gold-dark">Şefin İpucu:</span> {step.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* General Tips & Suggestions */}
            {recipe.tips && recipe.tips.length > 0 && (
              <div className="bg-gradient-to-br from-olive/5 to-olive/10 border border-olive/10 rounded-2xl p-6 sm:p-8 text-left w-full">
                <h3 className="font-serif text-xl font-bold text-olive-dark flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-gold fill-gold" /> Püf Noktaları & Servis Önerileri
                </h3>
                <ul className="flex flex-col gap-3">
                  {recipe.tips.map((tip, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-sm sm:text-base text-ink/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive shrink-0 mt-2.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Ingredients Sidebar (Sticky on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 self-start z-20 w-full flex flex-col gap-6">
            {/* Ingredients Card */}
            <div className="bg-white rounded-2xl border border-cardborder p-6 shadow-sm flex flex-col gap-6 w-full">
              <div className="flex items-center justify-between border-b border-cardborder pb-4">
                <h3 className="font-serif text-xl font-bold text-ink">Malzemeler</h3>

                {/* Serving Size Scaler */}
                <div className="flex items-center gap-3 bg-cream-dark px-3 py-1.5 rounded-xl border border-cardborder-dark">
                  <button
                    onClick={decrementServings}
                    disabled={scaleServings <= 1}
                    className="p-1 rounded-lg hover:bg-white text-ink/60 hover:text-terracotta disabled:opacity-30 transition-all"
                    aria-label="Porsiyon azalt"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-sans text-xs font-bold text-ink shrink-0 min-w-[40px] text-center">
                    {scaleServings} Kişilik
                  </span>
                  <button
                    onClick={incrementServings}
                    disabled={scaleServings >= 20}
                    className="p-1 rounded-lg hover:bg-white text-ink/60 hover:text-terracotta disabled:opacity-30 transition-all"
                    aria-label="Porsiyon artır"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Ingredient Groups */}
              <div className="flex flex-col gap-5 text-left">
                {recipe.ingredientGroups.map((group, gIdx) => (
                  <div key={gIdx} className="flex flex-col gap-2.5">
                    {group.groupTitle && (
                      <span className="text-xs font-bold text-olive uppercase tracking-wider border-l-2 border-olive pl-2 mb-1">
                        {group.groupTitle}
                      </span>
                    )}
                    <ul className="flex flex-col gap-1.5">
                      {group.items.map((ing, iIdx) => {
                        const itemKey = `${gIdx}-${iIdx}-${ing.item}`;
                        const isChecked = checkedIngredients.has(itemKey);
                        const scaledAmt = scaleAmount(ing.amount, multiplier);

                        return (
                          <li
                            key={iIdx}
                            onClick={() => handleIngredientToggle(itemKey)}
                            className={`flex items-start gap-3 py-2 px-2.5 rounded-xl cursor-pointer transition-all duration-150 select-none ${
                              isChecked
                                ? "bg-cream-dark/40 text-ink/40"
                                : "hover:bg-cream/30 text-ink/90"
                            }`}
                          >
                            {/* Checkbox Indicator */}
                            <div
                              className={`w-[18px] h-[18px] rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-150 ${
                                isChecked
                                  ? "bg-olive border-olive text-white"
                                  : "border-cardborder-dark bg-white text-transparent"
                              }`}
                            >
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>

                            {/* Ingredient Text */}
                            <div className="flex flex-wrap gap-x-1.5 text-sm leading-tight flex-grow">
                              <span className={`font-bold shrink-0 ${isChecked ? "line-through" : "text-terracotta"}`}>
                                {scaledAmt}
                              </span>
                              <span className={isChecked ? "line-through" : "font-medium"}>
                                {ing.item}
                              </span>
                              {ing.note && (
                                <span className={`text-xs ${isChecked ? "line-through" : "text-ink/50"}`}>
                                  ({ing.note})
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Calories Card (Optional) */}
            {recipe.calories && (
              <div className="bg-white rounded-2xl border border-cardborder p-4 shadow-sm flex items-center gap-3 text-left w-full">
                <div className="p-2.5 bg-terracotta/10 rounded-xl text-terracotta">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-ink/40 uppercase tracking-wider block">Porsiyon Başına Enerji</span>
                  <span className="font-sans text-sm font-bold text-ink">{recipe.calories} kcal</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. RELATED RECIPES SECTION */}
      {relatedRecipes.length > 0 && (
        <section className="py-16 bg-cream-dark/10 border-t border-cardborder w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col gap-2 mb-10 text-left">
              <span className="text-xs font-bold text-terracotta uppercase tracking-widest">Öneriler</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                Benzer Tarifler
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {relatedRecipes.map((r, idx) => (
                <RecipeCard key={r.id} recipe={r} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}