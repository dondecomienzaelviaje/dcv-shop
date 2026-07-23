import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-32 pb-24 text-white">

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

          <ProductFilters />
        </div>

        <ProductGrid />

      </main>

      <Footer />
    </>
  );
}