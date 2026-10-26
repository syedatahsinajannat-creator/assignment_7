import Link from "next/link";
import { getProducts, type Product } from "../../lib/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const allProducts = await getProducts();
  
  const filteredProducts = allProducts.filter(
    (p: Product) => p.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-emerald-50/30 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <Link
          href="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm"
        >
          ← হোমপেজে ফিরে যান
        </Link>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
          <h1 className="text-2xl font-bold text-gray-800 capitalize mb-1">
            ক্যাটাগরি: {slug}
          </h1>
          <p className="text-sm text-gray-500">
            মোট পণ্য পাওয়া গেছে: {filteredProducts.length}টি
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-emerald-100">
            <p className="text-gray-500">এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map((product: Product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white p-4 rounded-xl border border-emerald-100 hover:shadow-md transition block"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                    {product.categoryNameBn || product.category}
                  </span>
                  <span className="text-sm font-extrabold text-emerald-600">
                    ৳{product.today} / {product.unit}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{product.nameBn}</h3>
                {product.change && (
                  <p
                    className={`text-xs font-semibold mt-2 ${
                      product.change.dir === "up"
                        ? "text-red-500"
                        : product.change.dir === "down"
                        ? "text-emerald-500"
                        : "text-gray-500"
                    }`}
                  >
                    পরিবর্তন: {product.change.dir === "up" ? "▲" : product.change.dir === "down" ? "▼" : ""} {product.change.pct}%
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}