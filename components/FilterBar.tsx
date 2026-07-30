"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Clock, ChefHat } from "lucide-react";

interface FilterBarProps {
  subCategories?: { slug: string; label: string }[];
  activeSubCategory?: string;
  onSubCategoryChange?: (slug: string | undefined) => void;
  activeDifficulty?: string;
  onDifficultyChange: (difficulty: string | undefined) => void;
  activeMaxTime?: number;
  onMaxTimeChange: (minutes: number | undefined) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearchInput?: boolean;
  resultCount: number;
}

export default function FilterBar({
  subCategories,
  activeSubCategory,
  onSubCategoryChange,
  activeDifficulty,
  onDifficultyChange,
  activeMaxTime,
  onMaxTimeChange,
  searchQuery = "",
  onSearchChange,
  showSearchInput = false,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="w-full bg-white rounded-2xl border border-cardborder p-4 sm:p-6 shadow-sm flex flex-col gap-5">
      {/* 1. Search Input (Optional) */}
      {showSearchInput && onSearchChange && (
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-ink/40">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Sonuçlar içinde ara..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-cream-dark border border-cardborder-dark rounded-xl py-2.5 pl-11 pr-4 text-sm text-ink placeholder-ink/40 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all duration-150"
          />
        </div>
      )}

      {/* 2. Subcategory Chips (Optional) */}
      {subCategories && subCategories.length > 0 && onSubCategoryChange && (
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold text-ink/40 uppercase tracking-wider px-1">
            Alt Kategoriler
          </span>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 w-[calc(100%+2rem)] sm:w-full">
            <button
              onClick={() => onSubCategoryChange(undefined)}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 shrink-0 ${
                activeSubCategory === undefined
                  ? "text-white"
                  : "bg-cream-dark text-ink/80 hover:bg-cream-dark/80 hover:text-terracotta"
              }`}
            >
              {activeSubCategory === undefined && (
                <motion.span
                  layoutId="activeSubCategoryPill"
                  className="absolute inset-0 bg-terracotta rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Tümü
            </button>

            {subCategories.map((sub) => {
              const isActive = activeSubCategory === sub.slug;
              return (
                <button
                  key={sub.slug}
                  onClick={() => onSubCategoryChange(sub.slug)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 shrink-0 ${
                    isActive
                      ? "text-white"
                      : "bg-cream-dark text-ink/80 hover:bg-cream-dark/80 hover:text-terracotta"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSubCategoryPill"
                      className="absolute inset-0 bg-terracotta rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {sub.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Dropdown Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-cardborder/60">
        {/* Difficulty Filter */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="difficulty-select" className="text-[10px] font-bold text-ink/40 uppercase tracking-wider px-1 flex items-center gap-1">
            <ChefHat className="w-3.5 h-3.5 text-olive/70" /> Zorluk Derecesi
          </label>
          <div className="relative">
            <select
              id="difficulty-select"
              value={activeDifficulty || ""}
              onChange={(e) => onDifficultyChange(e.target.value || undefined)}
              className="w-full bg-cream-dark border border-cardborder-dark rounded-xl py-2.5 px-3.5 text-xs text-ink font-medium focus:outline-none focus:border-terracotta appearance-none cursor-pointer"
            >
              <option value="">Tümü</option>
              <option value="kolay">Kolay</option>
              <option value="orta">Orta</option>
              <option value="zor">Zor</option>
            </select>
            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-ink/40">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Max Time Filter */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="time-select" className="text-[10px] font-bold text-ink/40 uppercase tracking-wider px-1 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-olive/70" /> Toplam Süre
          </label>
          <div className="relative">
            <select
              id="time-select"
              value={activeMaxTime || ""}
              onChange={(e) => onMaxTimeChange(e.target.value ? Number(e.target.value) : undefined)}
              className="w-full bg-cream-dark border border-cardborder-dark rounded-xl py-2.5 px-3.5 text-xs text-ink font-medium focus:outline-none focus:border-terracotta appearance-none cursor-pointer"
            >
              <option value="">Tümü</option>
              <option value="20">20 dakika altı</option>
              <option value="45">45 dakika altı</option>
              <option value="60">60 dakika altı</option>
              <option value="120">120 dakika altı</option>
            </select>
            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-ink/40">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Result Count */}
      <div className="flex items-center justify-between pt-3 border-t border-cardborder/60 text-xs text-ink/50 font-medium">
        <span>Filtreleme Seçenekleri</span>
        <span className="bg-cream-dark px-2.5 py-1 rounded-lg text-ink/70">
          {resultCount} tarif bulundu
        </span>
      </div>
    </div>
  );
}