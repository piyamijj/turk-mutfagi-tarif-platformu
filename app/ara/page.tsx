import React, { Suspense } from "react";
import { Metadata } from "next";
import { getAllRecipes } from "@/lib/recipes";
import SearchClient from "@/components/search/SearchClient";

export const metadata: Metadata = {
  title: "Tarif Ara | Nefis & Özgün",
  description: "Nefis & Özgün tarif kataloğunda arama yapın. Malzemeye, kategoriye, zorluk derecesine veya hazırlama süresine göre filtreleyerek aradığınız lezzeti anında bulun.",
};

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const allRecipes = getAllRecipes();
  const initialQuery = searchParams.q || "";

  return (
    <Suspense fallback={null}>
      <SearchClient
        allRecipes={allRecipes}
        initialQuery={initialQuery}
      />
    </Suspense>
  );
}