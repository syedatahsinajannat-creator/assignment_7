export type Market = {
  market: string;
  division: string;
  min: number;
  max: number;
};

export type Product = {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: Market[];
};

const API_URL = "https://openapi.programming-hero.com/api/bazardor";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const result = await response.json();

    const products: Product[] = Array.isArray(result) ? result : result.data || [];
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProduct(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const result = await response.json();

    return result.data || result;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const products = await getProducts();
  if (!categorySlug || categorySlug === "all" || categorySlug === "সব পণ্য") {
    return products;
  }
  return products.filter(
    (p) => p.category.toLowerCase() === categorySlug.toLowerCase()
  );
}