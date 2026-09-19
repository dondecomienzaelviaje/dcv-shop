import { cookies } from "next/headers";

import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { getFeaturedProducts } from "@/lib/products";

export default async function FeaturedProducts() {
  const country = (await cookies()).get("country")?.value || "CO";
  const products = await getFeaturedProducts(country);

  return (
    <section className="bg-neutral-950 py-32 text-white">
      <Container>
        <SectionTitle
          badge="TIENDA DCV"
          title="Productos para acompañar tu camino"
          description="Explora los productos disponibles de DCV y encuentra herramientas creadas para acompañar tu proceso."
        />

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              handle={product.handle}
              title={product.title}
              usdCents={Math.round(
                Number(product.priceRange.minVariantPrice.amount) * 100
              )}
              image={
                product.featuredImage?.url ||
                "/placeholder-product.png"
              }
              rating={product.rating}
              availableForSale={
                product.availability?.availableForSale ?? false
              }
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
          >
            Explorar todos los productos
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
