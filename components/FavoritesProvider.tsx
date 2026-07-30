"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface FavoritesContextType {
  favorites: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export default function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    setHasMounted(true);
    try {
      const stored = localStorage.getItem("turk-mutfagi-favorites");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load favorites from localStorage:", error);
    }
  }, []);

  const isFavorite = (id: string): boolean => {
    return favorites.includes(id);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter((favId) => favId !== id);
      } else {
        updated = [...prev, id];
      }

      try {
        localStorage.setItem("turk-mutfagi-favorites", JSON.stringify(updated));
      } catch (error) {
        console.error("Failed to save favorites to localStorage:", error);
      }

      return updated;
    });
  };

  // Avoid hydration mismatch by rendering children immediately,
  // but providing the correct favorites state only after mounting.
  const value = {
    favorites: hasMounted ? favorites : [],
    isFavorite,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}