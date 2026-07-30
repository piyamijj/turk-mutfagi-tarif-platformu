import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug, CATEGORIES } from "@/lib/categories";
import { getRecipesByCategory } from "@/lib/recipes";
import CategoryClient from "@/components/category/CategoryClient";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return {
      title: "Kategori Bulunamadı | Nefis & Özgün",
    };
  }

  return {
    title: `${category.label} Tarifleri | Nefis & Özgün`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    notFound();
  }

  const recipes = getRecipesByCategory(params.slug);

  return (
    <CategoryClient
      category={category}
      initialRecipes={recipes}
    />
  );
}