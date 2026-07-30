import React from "react";
import { Metadata } from "next";
import { getFeaturedRecipes, getPopularRecipes } from "@/lib/recipes";
import { CATEGORIES } from "@/lib/categories";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Nefis & Özgün | Geleneksel Türk Mutfağı Tarif Platformu",
  description: "Yapay zeka destekli şef asistanı, iştah açıcı görseller ve özenle araştırılmış 80 geleneksel tarifle Türk mutfağının en seçkin lezzetlerini keşfedin.",
};

export default function HomePage() {
  // Fetch data on the server
  const featuredRecipes = getFeaturedRecipes(6);
  const popularRecipes = getPopularRecipes(8);

  return (
    <HomeClient
      featuredRecipes={featuredRecipes}
      popularRecipes={popularRecipes}
      categories={CATEGORIES}
    />
  );
}