"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Inbox, ArrowRight, BookOpen } from "lucide-react";
import { Recipe } from "@/lib/types";
import { useFavorites } from "../FavoritesProvider";
import RecipeCard from "../RecipeCard";

interface FavoritesClientProps {
  allRecipes: Recipe[];
}

export default function FavoritesClient({ allRecipes }: FavoritesClientProps) {
  const { favorites } = useFavorites();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter recipes based on favorites list
  const favoritedRecipes = useMemo(() => {
    if (!mounted) return [];
    return allRecipes.filter((recipe) => favorites.includes(recipe.id));
  }, [allRecipes, favorites, mounted]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 1. Header Section */}
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
              <Heart className="w-12 h-12 fill-terracotta" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                  Favorilerim
                </h1>
                {mounted && (
                  <span className="bg-terracotta/10 text-terracotta text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {favoritedRecipes.length} Tarif
                  </span>
                )}
              </div>
              <p className="font-sans text-sm sm:text-base text-ink/60 leading-relaxed">
                Nefis & Özgün platformunda beğendiğiniz ve kaydettiğiniz tüm geleneksel Türk yemek tarifleri tek bir yerde.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="py-12 sm:py-16 bg-cream/20 flex-grow w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {!mounted ? (
            /* Loading Skeleton State */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-full h-[380px] rounded-2xl bg-cream-dark/40 border border-cardborder animate-pulse flex flex-col overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-cream-dark/60 w-full" />
                  <div className="p-5 flex-grow flex flex-col gap-3">
                    <div className="h-3 bg-cream-dark/60 rounded w-1/4" />
                    <div className="h-5 bg-cream-dark/60 rounded w-3/4" />
                    <div className="h-4 bg-cream-dark/60 rounded w-full mt-1" />
                    <div className="h-4 bg-cream-dark/60 rounded w-5/6" />
                    <div className="h-8 bg-cream-dark/60 rounded w-full mt-auto" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {favoritedRecipes.length > 0 ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                >
                  {favoritedRecipes.map((recipe, idx) => (
                    <motion.div
                      key={recipe.id}
                      layout
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        opacity: { duration: 0.2 },
                      }}
                      className="w-full"
                    >
                      <RecipeCard recipe={recipe} index={idx} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* Empty State */
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
                    <h3 className="font-serif text-xl font-bold text-ink">Henüz Favori Tarifiniz Yok</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">
                      Beğendiğiniz tarifleri kartların üzerindeki kalp ikonuna dokunarak favorilerinize ekleyebilir, daha sonra kolayca ulaşmak için burada listeleyebilirsiniz.
                    </p>
                  </div>
                  <Link
                    href="/ara"
                    className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors duration-150 shadow-sm group"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Tarifleri Keşfet</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </section>
    </div>
  );
}