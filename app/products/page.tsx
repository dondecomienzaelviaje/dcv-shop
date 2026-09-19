import { cookies } from "next/headers";
import { getProducts } from "@/lib/products";
import ProductsClient from "./ProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | DCV Shop",
  description:
    "Descubre la colección de productos DCV para disciplina, mentalidad, hábitos, productividad y crecimiento.",
};

export default async function ProductsPage() {
  const country =
    (await cookies()).get("country")?.value || "CO";

  const products = await getProducts(country);

  return (
    <main className="bg-black text-white">
      <ProductsClient products={products} />
    </main>
  );
}