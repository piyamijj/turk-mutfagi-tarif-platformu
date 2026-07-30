import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecipeById, getAllRecipes, getRelatedRecipes } from "@/lib/recipes";
import RecipeDetailClient from "@/components/recipe/RecipeDetailClient";

interface RecipePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const recipes = getAllRecipes();
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const recipe = getRecipeById(params.id);
  if (!recipe) {
    return {
      title: "Tarif Bulunamadı | Nefis & Özgün",
    };
  }

  return {
    title: `${recipe.title} Tarifi | Nefis & Özgün`,
    description: recipe.description,
    openGraph: {
      images: [
        {
          url: recipe.imageUrl,
          width: 800,
          height: 600,
          alt: recipe.title,
        },
      ],
    },
  };
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = getRecipeById(params.id);
  if (!recipe) {
    notFound();
  }

  const relatedRecipes = getRelatedRecipes(recipe, 4);

  return (
    <RecipeDetailClient
      recipe={recipe}
      relatedRecipes={relatedRecipes}
    />
  );
}