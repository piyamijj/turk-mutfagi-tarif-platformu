/**
 * Türk Mutfağı Tarif Platformu - TypeScript Type Definitions
 * 
 * This file defines the core data structures for the recipe catalog,
 * categories, and filtering metadata. All content values are in Turkish,
 * while the schema and comments are documented in English.
 */

export type MainCategory = 'sicak-yemekler' | 'soguk-yemekler' | 'mezeler' | 'tatlilar';

export type Difficulty = 'kolay' | 'orta' | 'zor';

export interface Ingredient {
  /** Name of the ingredient in Turkish (e.g., "Süzme Yoğurt", "Kuzu Eti") */
  item: string;
  /** Human-readable measurement/amount (e.g., "2 su bardağı", "500 gram", "1 yemek kaşığı") */
  amount: string;
  /**
   * Optional preparation note (e.g., "ince kıyılmış", "oda sıcaklığında", "kabuğu soyulmuş").
   * Widened to accept `null` in addition to `undefined`/omitted: the content-generation
   * script (content-pipeline/generate.js) may write a literal JSON `null` for empty optional
   * fields returned by the AI, and TypeScript would otherwise reject `null` here.
   */
  note?: string | null;
}

export interface IngredientGroup {
  /**
   * Optional title for grouping ingredients (e.g., "Köfte Harcı İçin", "Sosu İçin", "Üzeri İçin").
   * Widened to accept `null` for the same reason as `Ingredient.note` above.
   */
  groupTitle?: string | null;
  /** List of ingredients belonging to this group */
  items: Ingredient[];
}

export interface RecipeStep {
  /** Sequential step number starting from 1 */
  stepNumber: number;
  /** Detailed instruction in Turkish using active verbs (e.g., "Soğanları pembeleşene kadar soteleyin.") */
  instruction: string;
  /**
   * Optional chef's tip specific to this step (e.g., "Kısık ateşte pişirmek lezzeti artıracaktır.").
   * Widened to accept `null` for the same reason as `Ingredient.note` above.
   */
  tip?: string | null;
}

export interface Recipe {
  /** Unique URL-friendly slug identifier (e.g., "hunkar-begendi", "zeytinyagli-enginar") */
  id: string;
  /** Display title of the recipe in Turkish (e.g., "Hünkar Beğendi") */
  title: string;
  /** Short 1-2 sentence appetizing teaser description */
  description: string;
  /** Primary category classification */
  mainCategory: MainCategory;
  /** Subcategory slug (e.g., "et-yemekleri", "serbetli-tatlilar") */
  subCategory: string;
  /** Display label of the subcategory in Turkish (e.g., "Et Yemekleri", "Şerbetli Tatlılar") */
  subCategoryLabel: string;
  /**
   * Regional origin or historical note (e.g., "Saray Mutfağı", "Gaziantep", "Ege").
   * Widened to accept `null` for the same reason as `Ingredient.note` above.
   */
  region?: string | null;
  /** Preparation time in minutes */
  prepTimeMinutes: number;
  /** Cooking time in minutes */
  cookTimeMinutes: number;
  /** Total time in minutes (usually prepTimeMinutes + cookTimeMinutes) */
  totalTimeMinutes: number;
  /** Number of servings (e.g., 4, 6) */
  servings: number;
  /** Difficulty level */
  difficulty: Difficulty;
  /** List of main ingredients for filtering (e.g., ["patlıcan", "kuzu eti", "tereyağı"]) */
  mainIngredients: string[];
  /** Searchable and filterable tags (e.g., ["vejetaryen", "glutensiz", "fırın", "saray-mutfagi"]) */
  tags: string[];
  /** Grouped ingredients list */
  ingredientGroups: IngredientGroup[];
  /** Step-by-step cooking instructions */
  steps: RecipeStep[];
  /** General tips, serving suggestions, variations, or storage advice */
  tips: string[];
  /**
   * Optional estimated calories per serving.
   * Widened to accept `null` for the same reason as `Ingredient.note` above.
   */
  calories?: number | null;
  /** Path to the AI-generated recipe image (e.g., "/images/recipes/hunkar-begendi.jpg") */
  imageUrl: string;
  /** Flag to feature this recipe on the home page hero/carousel */
  isFeatured?: boolean;
  /** Flag to display this recipe in the "Popular Recipes" section */
  isPopular?: boolean;
  /** Internal QA: Sourced research cross-references used to build this complete version */
  sources?: string[];
}

export interface CategoryMeta {
  /** URL-friendly slug of the main category */
  slug: MainCategory;
  /** Display label in Turkish (e.g., "Sıcak Yemekler") */
  label: string;
  /** Short appetizing description of the category */
  description: string;
  /** Lucide icon name to render dynamically */
  icon: string;
  /** List of subcategories belonging to this main category */
  subCategories: {
    slug: string;
    label: string;
  }[];
}