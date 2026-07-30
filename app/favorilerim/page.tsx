import React from "react";
import { Metadata } from "next";
import { getAllRecipes } from "@/lib/recipes";
import FavoritesClient from "@/components/favorites/FavoritesClient";

export const metadata: Metadata = {
  title: "Favorilerim | Nefis & Özgün",
  description: "Nefis & Özgün platformunda beğendiğiniz ve kaydettiğiniz tüm geleneksel Türk yemek tarifleri tek bir yerde.",
};

export default function FavoritesPage() {
  const allRecipes = getAllRecipes();

  return (
    <FavoritesClient allRecipes={allRecipes} />
  );
}