
"use client";

import { useEffect, useState } from "react";
import { getProducts, type Product } from "./lib/products";

const categories = ["সব পণ্য", "চাল", "ডাল", "তেল", "সবজি", "মাছ"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("সব পণ্য");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("পণ্যের তথ্য লোড করা যায়নি। পরে আবার চেষ্টা করুন।");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "সব পণ্য"
      ? products
      : products.filter(
          (product) => product.categoryNameBn === selectedCategory
        );

  return (
    <main className="min-h-screen bg-[#f7faf7] text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="text-2xl font-extrabold text-green-700">
            বাজারদর<span className="text-orange-500">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium sm:flex">
            <a href="/" className="text-green-700">হোম</a>
            <a href="#products" className="hover:text-green-700">পণ্যসমূহ</a>
            <a href="#about" className="hover:text-green-700">
              আমাদের সম্পর্কে
            </a>
          </div>

          <a
            href="/sign-in"
            className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
          >
            সাইন ইন
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <div className="rounded-2xl bg-green-800 px-6 py-10 text-white sm:px-12 sm:py-14">
          <p className="mb-3 text-sm font-medium text-green-200">
            বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর
          </p>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">
            বাজারের দাম জানুন,
            <br />
            কেনাকাটা করুন বুঝেশুনে।
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-green-100 sm:text-base">
            চাল, ডাল, তেল ও অন্যান্য নিত্যপ্রয়োজনীয় পণ্যের দাম এক জায়গায়
            দেখুন এবং দামের পরিবর্তন সম্পর্কে জানুন।
          </p>

          <a
            href="#products"
            className="mt-7 inline-block rounded-lg bg-white px-5 py-3 font-bold text-green-800 hover:bg-green-50"
          >
            পণ্যের দাম দেখুন →
          </a>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 pb-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold">নিত্যপ্রয়োজনীয় পণ্য</h2>
            <p className="mt-2 text-sm text-gray-500">
              পণ্যের দাম ও সাম্প্রতিক পরিবর্তন দেখুন
            </p>
          </div>

          <span className="text-sm text-gray-500">
            API থেকে প্রাপ্ত তথ্য
          </span>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium ${
                selectedCategory === category
                  ? "border-green-700 bg-green-700 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-green-600 hover:text-green-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="col-span-full py-10 text-center text-gray-500">
              পণ্যের তথ্য লোড হচ্ছে...
            </p>
          ) : error ? (
            <p className="col-span-full py-10 text-center text-red-600">
              {error}
            </p>
          ) : filteredProducts.length === 0 ? (
            <p className="col-span-full py-10 text-center text-gray-500">
              এই মুহূর্তে কোনো পণ্যের তথ্য পাওয়া যায়নি।
            </p>
          ) : (
            filteredProducts.map((product) => (
              <article
                key={product.id}
                className="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-green-300 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-800">
                      {product.categoryNameBn}
                    </span>

                    <h3 className="mt-4 text-lg font-bold">
                      {product.nameBn}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      প্রতি {product.unit}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-xl">
                    {product.categoryIcon}
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-xs text-gray-500">বর্তমান দাম</p>
                    <p className="mt-1 text-2xl font-extrabold text-gray-900">
                      ৳{product.today}
                    </p>
                  </div>

                  <span
                    className={`rounded-md px-2 py-1 text-xs font-semibold ${
                      product.change.dir === "down"
                        ? "bg-green-50 text-green-700"
                        : product.change.dir === "up"
                          ? "bg-red-50 text-red-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {product.change.dir === "up"
                      ? "↑ "
                      : product.change.dir === "down"
                        ? "↓ "
                        : ""}
                    {product.change.dir === "flat"
                      ? "পরিবর্তন নেই"
                      : `${product.change.pct}%`}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <footer id="about" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-sm text-gray-500">
          বাজারদর — নিত্যপ্রয়োজনীয় পণ্যের দাম জানুন।
        </div>
      </footer>
    </main>
  );
}
