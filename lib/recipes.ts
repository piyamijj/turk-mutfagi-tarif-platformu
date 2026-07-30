import { Recipe } from "./types";
import sicakYemekler from "./data/sicak-yemekler";
import sogukYemekler from "./data/soguk-yemekler";
import mezeler from "./data/mezeler";
import tatlilar from "./data/tatlilar";

/**
 * Single source of truth for accessing recipe data.
 * Concatenates all category arrays into a single scalable list.
 */
export const ALL_RECIPES: Recipe[] = [
  ...sicakYemekler,
  ...sogukYemekler,
  ...mezeler,
  ...tatlilar
];

/**
 * Normalizes Turkish characters to lowercase ASCII-equivalent characters
 * for robust, diacritic-insensitive search matching.
 */
export function normalizeTurkish(str: string): string {
  if (!str) return "";
  return str
    .replace(/İ/g, "i")
    .replace(/I/g, "i")
    .replace(/ı/g, "i")
    .replace(/Ş/g, "s")
    .replace(/ş/g, "s")
    .replace(/Ğ/g, "g")
    .replace(/ğ/g, "g")
    .replace(/Ü/g, "u")
    .replace(/ü/g, "u")
    .replace(/Ö/g, "o")
    .replace(/ö/g, "o")
    .replace(/Ç/g, "c")
    .replace(/ç/g, "c")
    .replace(/Â/g, "a")
    .replace(/â/g, "a")
    .replace(/Î/g, "i")
    .replace(/î/g, "i")
    .replace(/Û/g, "u")
    .replace(/û/g, "u")
    .toLowerCase()
    .trim();
}

export function getAllRecipes(): Recipe[] {
  return ALL_RECIPES;
}

export function getRecipeById(id: string): Recipe | undefined {
  return ALL_RECIPES.find((recipe) => recipe.id === id);
}

export function getRecipesByCategory(mainCategory: string): Recipe[] {
  return ALL_RECIPES.filter((recipe) => recipe.mainCategory === mainCategory);
}

export function getRecipesBySubCategory(mainCategory: string, subCategory: string): Recipe[] {
  return ALL_RECIPES.filter(
    (recipe) => recipe.mainCategory === mainCategory && recipe.subCategory === subCategory
  );
}

export function getFeaturedRecipes(limit = 6): Recipe[] {
  return ALL_RECIPES.filter((recipe) => recipe.isFeatured).slice(0, limit);
}

export function getPopularRecipes(limit = 8): Recipe[] {
  return ALL_RECIPES.filter((recipe) => recipe.isPopular).slice(0, limit);
}

export function searchRecipes(query: string): Recipe[] {
  const normalizedQuery = normalizeTurkish(query);
  if (!normalizedQuery) return ALL_RECIPES;

  return ALL_RECIPES.filter((recipe) => {
    const titleMatch = normalizeTurkish(recipe.title).includes(normalizedQuery);
    const descMatch = normalizeTurkish(recipe.description).includes(normalizedQuery);
    const ingredientMatch = recipe.mainIngredients.some((ing) =>
      normalizeTurkish(ing).includes(normalizedQuery)
    );
    const tagMatch = recipe.tags.some((tag) =>
      normalizeTurkish(tag).includes(normalizedQuery)
    );

    return titleMatch || descMatch || ingredientMatch || tagMatch;
  });
}

export interface FilterOptions {
  mainCategory?: string;
  subCategory?: string;
  maxTotalTime?: number;
  difficulty?: string;
  mainIngredient?: string;
  query?: string;
}

export function filterRecipes(options: FilterOptions): Recipe[] {
  let results = ALL_RECIPES;

  if (options.query) {
    results = searchRecipes(options.query);
  }

  if (options.mainCategory) {
    results = results.filter((r) => r.mainCategory === options.mainCategory);
  }

  if (options.subCategory) {
    results = results.filter((r) => r.subCategory === options.subCategory);
  }

  if (options.maxTotalTime) {
    results = results.filter((r) => r.totalTimeMinutes <= (options.maxTotalTime as number));
  }

  if (options.difficulty) {
    results = results.filter((r) => r.difficulty === options.difficulty);
  }

  if (options.mainIngredient) {
    const normalizedIng = normalizeTurkish(options.mainIngredient);
    results = results.filter((r) =>
      r.mainIngredients.some((ing) => normalizeTurkish(ing).includes(normalizedIng))
    );
  }

  return results;
}

export function getRelatedRecipes(recipe: Recipe, limit = 4): Recipe[] {
  // Find recipes in the same subcategory or sharing main ingredients, excluding itself
  const candidates = ALL_RECIPES.filter((r) => r.id !== recipe.id);

  const scored = candidates.map((r) => {
    let score = 0;
    if (r.subCategory === recipe.subCategory) {
      score += 5;
    } else if (r.mainCategory === recipe.mainCategory) {
      score += 2;
    }

    // Count overlapping main ingredients
    const overlap = r.mainIngredients.filter((ing) =>
      recipe.mainIngredients.includes(ing)
    ).length;
    score += overlap * 3;

    // Count overlapping tags
    const tagOverlap = r.tags.filter((tag) => recipe.tags.includes(tag)).length;
    score += tagOverlap * 1;

    return { recipe: r, score };
  });

  // Sort by score descending and return top recipes
  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.recipe)
    .slice(0, limit);
}