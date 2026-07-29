import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { getFeaturedProducts } from "@/lib/products";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section className="bg-neutral-950 py-32 text-white">
      <Container>
        <SectionTitle
          badge="PRODUCTOS DESTACADOS"
          title="Nuestros Productos"
          description="Productos seleccionados para potenciar tu estilo de vida, productividad y crecimiento."
        />

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              handle={product.handle}
              title={product.title}
              price={new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
              }).format(
                Number(product.priceRange.minVariantPrice.amount)
              )}
              image={
                product.featuredImage?.url ||
                "/placeholder-product.png"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}