import { CategoryMeta, MainCategory } from "./types";

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "sicak-yemekler",
    label: "Sıcak Yemekler",
    description: "Türk mutfağının en seçkin sıcak ana yemekleri, çorbaları ve tencere lezzetleri.",
    icon: "Soup",
    subCategories: [
      { slug: "et-yemekleri", label: "Et ve Tavuk Yemekleri" },
      { slug: "sebze-yemekleri", label: "Sebze ve Bakliyat Yemekleri" },
      { slug: "corbalar", label: "Çorbalar" }
    ]
  },
  {
    slug: "soguk-yemekler",
    label: "Soğuk Yemekler ve Zeytinyağlılar",
    description: "Ege ve Akdeniz esintili, zeytinyağlı hafif sebze yemekleri, dolmalar ve soğuk başlangıçlar.",
    icon: "Salad",
    subCategories: [
      { slug: "zeytinyaglilar", label: "Zeytinyağlılar" },
      { slug: "dolma-sarma-soguk", label: "Dolmalar ve Sarmalar" },
      { slug: "salatalar", label: "Salatalar ve Soğuk Başlangıçlar" }
    ]
  },
  {
    slug: "mezeler",
    label: "Mezeler",
    description: "Sofraları şenlendiren, paylaşım kültürünün en güzel örneği sıcak ve soğuk mezeler.",
    icon: "UtensilsCrossed",
    subCategories: [
      { slug: "soguk-mezeler", label: "Soğuk Mezeler" },
      { slug: "sicak-mezeler", label: "Sıcak Mezeler" }
    ]
  },
  {
    slug: "tatlilar",
    label: "Tatlılar",
    description: "Geleneksel şerbetli tatlılardan hafif sütlü tatlılara ve helvalara uzanan tatlı bir yolculuk.",
    icon: "Cake",
    subCategories: [
      { slug: "serbetli-tatlilar", label: "Şerbetli Tatlılar" },
      { slug: "sutlu-tatlilar", label: "Sütlü Tatlılar" },
      { slug: "hamur-isleri-helva", label: "Helvalar ve Hamur İşleri" }
    ]
  }
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getSubCategoryLabel(mainCategory: string, subCategorySlug: string): string {
  const cat = getCategoryBySlug(mainCategory);
  if (!cat) return subCategorySlug;
  const sub = cat.subCategories.find((s) => s.slug === subCategorySlug);
  return sub ? sub.label : subCategorySlug;
}