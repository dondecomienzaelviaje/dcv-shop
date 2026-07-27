import ProductsClient from "./ProductsClient";

import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
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
            Descubre herramientas diseñadas para ayudarte a construir una vida
            extraordinaria.
          </p>

          <ProductsClient products={products} />
        </div>
      </div>
    </main>
  );
}