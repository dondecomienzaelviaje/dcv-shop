"use client";

import { useMemo, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";

import { products } from "@/data/products";

const normalizeText = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("recent");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = normalizeText(search);

    const filtered = products.filter((product) => {
      const matchesSearch = normalizeText(product.title).includes(
        normalizedSearch
      );

      const matchesCategory =
        selectedCategory === "Todos" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
      const priceA = Number(a.price.replace("$", "").replace(".", ""));
      const priceB = Number(b.price.replace("$", "").replace(".", ""));

      switch (sortBy) {
        case "price-asc":
          return priceA - priceB;

        case "price-desc":
          return priceB - priceA;

        case "name-asc":
          return a.title.localeCompare(b.title);

        case "name-desc":
          return b.title.localeCompare(a.title);

        default:
          return 0;
      }
    });
  }, [search, selectedCategory, sortBy]);

  return (
    <>
      <Navbar />

      <main className="bg-black pb-24 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.5em] text-[#C8A04A]">
              DCV SHOP
            </p>

            <h1 className="mt-6 text-5xl font-black md:text-6xl">
              Todos nuestros productos
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
              Descubre herramientas diseñadas para ayudarte a construir una vida extraordinaria.
            </p>
          </div>

          <ProductFilters
            search={search}
            onSearchChange={setSearch}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        <ProductGrid products={filteredProducts} />
      </main>

      <Footer />
    </>
  );
}