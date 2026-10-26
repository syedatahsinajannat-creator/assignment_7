import Link from "next/link";
import { getProduct } from "@/lib/products"; // Adjust to "./lib/products" if lib is inside app
import { notFound } from "next/navigation";
import Link from "next/link";

<Link key={product.id} href={`/products/${product.id}`}>
  <div className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition cursor-pointer">
    { }
  </div>
</Link>

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-emerald-50/30 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Navigation / Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm"
        >
          ← হোমপেজে ফিরে যান
        </Link>

        {/* Product Card Details */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-800 mt-2">
                {product.name}
              </h1>
            </div>
            <div className="text-left md:text-right">
              <p className="text-3xl font-extrabold text-emerald-600">
                ৳{product.currentPrice}{" "}
                <span className="text-sm text-gray-500 font-normal">
                  / {product.unit}
                </span>
              </p>
              {product.priceChange !== undefined && (
                <p
                  className={`text-sm font-semibold mt-1 ${
                    product.priceChange > 0
                      ? "text-red-500"
                      : product.priceChange < 0
                      ? "text-emerald-500"
                      : "text-gray-500"
                  }`}
                >
                  {product.priceChange > 0 ? "▲" : product.priceChange < 0 ? "▼" : ""}{" "}
                  {Math.abs(product.priceChange)}৳
                </p>
              )}
            </div>
          </div>

          {/* Market-level Price Ranges */}
          {product.markets && product.markets.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                বিভিন্ন বাজারের দরদাম
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.markets.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <span className="text-gray-700 font-medium">{m.name}</span>
                    <span className="font-bold text-gray-900">৳{m.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}