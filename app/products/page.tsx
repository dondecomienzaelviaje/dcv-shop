import { cookies } from "next/headers";
import { getProducts } from "@/lib/products";
import ProductsClient from "./ProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | DCV Shop",
  description:
    "Descubre todos los productos disponibles en DCV Shop.",
};

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: Props) {
  const country = (await cookies()).get("country")?.value || "CO";
  const { category } = await searchParams;

  const products = await getProducts(country);

  return (
    <main className="min-h-screen bg-black text-white">
      <ProductsClient
        products={products}
        initialCategory={category || "Todos"}
      />
    </main>
  );
}