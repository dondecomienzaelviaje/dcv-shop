"use client";

import { useMemo, useState } from "react";

import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";

type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  featuredImage?: {
    url: string;
    altText?: string | null;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  productType?: string;
};

type Props = {
  products: ShopifyProduct[];
  initialCategory?: string;
};

const normalizeText = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function ProductsClient({
  products,
  initialCategory = "Todos",
}: Props) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(initialCategory);
  const [sortBy, setSortBy] =
    useState("recent");

  const filteredProducts = useMemo(() => {
    const normalizedSearch =
      normalizeText(search);

    const filtered = products.filter(
      (product) => {
        const matchesSearch =
          normalizeText(product.title).includes(
            normalizedSearch
          );

        const category =
          product.productType || "";

        const matchesCategory =
          selectedCategory === "Todos" ||
          category === selectedCategory;

        return (
          matchesSearch && matchesCategory
        );
      }
    );

    return [...filtered].sort((a, b) => {
      const priceA = Number(
        a.priceRange.minVariantPrice.amount
      );

      const priceB = Number(
        b.priceRange.minVariantPrice.amount
      );

      switch (sortBy) {
        case "price-asc":
          return priceA - priceB;

        case "price-desc":
          return priceB - priceA;

        case "name-asc":
          return a.title.localeCompare(
            b.title
          );

        case "name-desc":
          return b.title.localeCompare(
            a.title
          );

        default:
          return 0;
      }
    });
  }, [
    products,
    search,
    selectedCategory,
    sortBy,
  ]);

  return (
    <>
      <ProductFilters
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <ProductGrid
        products={filteredProducts}
      />
    </>
  );
}