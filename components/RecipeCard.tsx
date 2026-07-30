"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Clock, Users, ChefHat } from "lucide-react";
import { Recipe } from "@/lib/types";
import { useFavorites } from "./FavoritesProvider";

interface RecipeCardProps {
  recipe: Recipe;
  index?: number;
}

export default function RecipeCard({ recipe, index = 0 }: RecipeCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [imgError, setImgError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "kolay":
        return (
          <span className="bg-olive/10 text-olive px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide">
            Kolay
          </span>
        );
      case "orta":
        return (
          <span className="bg-gold/10 text-gold-dark px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide">
            Orta
          </span>
        );
      case "zor":
        return (
          <span className="bg-terracotta/10 text-terracotta px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide">
            Zor
          </span>
        );
      default:
        return null;
    }
  };

  const delay = (index % 3) * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full"
    >
      <Link
        href={`/tarif/${recipe.id}`}
        className="block rounded-2xl overflow-hidden bg-white border border-cardborder hover:border-cardborder-dark hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
      >
        {/* Image Area */}
        <div className="aspect-[4/3] relative overflow-hidden bg-cream-dark w-full">
          {!imgError ? (
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 to-gold/10 flex items-center justify-center">
              <ChefHat className="w-12 h-12 text-terracotta/30" />
            </div>
          )}

          {/* Difficulty Badge */}
          <div className="absolute top-3 left-3 z-10">
            {getDifficultyBadge(recipe.difficulty)}
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-md border border-cardborder/50 shadow-sm hover:bg-white transition-colors duration-200"
            aria-label="Favorilere ekle"
          >
            <motion.div
              animate={mounted && isFavorite(recipe.id) ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart
                className={`w-[18px] h-[18px] transition-colors duration-200 ${
                  mounted && isFavorite(recipe.id)
                    ? "fill-terracotta text-terracotta"
                    : "text-ink/60 hover:text-terracotta"
                }`}
              />
            </motion.div>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <span className="text-[10px] font-bold text-olive uppercase tracking-wider mb-1.5">
            {recipe.subCategoryLabel}
          </span>
          <h3 className="font-serif font-bold text-lg text-ink leading-snug group-hover:text-terracotta transition-colors duration-200 line-clamp-1">
            {recipe.title}
          </h3>
          <p className="text-sm text-ink/60 mt-1.5 line-clamp-2 leading-relaxed flex-grow">
            {recipe.description}
          </p>

          {/* Meta Row */}
          <div className="flex items-center gap-4 text-xs text-ink/50 mt-4 pt-3.5 border-t border-cardborder w-full">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-olive/70" />
              <span>{recipe.totalTimeMinutes} dk</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-olive/70" />
              <span>{recipe.servings} kişilik</span>
            </div>
            {recipe.region && (
              <div className="ml-auto text-[10px] font-medium bg-cream-dark px-2 py-0.5 rounded text-ink/60">
                {recipe.region}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}