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

/**
 * Fetch all products from the API
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const result = await response.json();
    
    // Handles both direct array responses or wrapped data structures (e.g., { data: [...] })
    const products: Product[] = Array.isArray(result) ? result : result.data || [];
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Fetch a single product by its numeric ID
 */
export async function getProduct(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const result = await response.json();
    
    // Handles wrapped or direct single object responses
    return result.data || result;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
}