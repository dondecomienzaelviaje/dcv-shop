import ProductCard from "@/components/ui/ProductCard";

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
};

type ProductGridProps = {
  products: ShopifyProduct[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
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
              product.featuredImage?.url ??
              "/placeholder-product.png"
            }
          />
        ))}
      </div>
    </section>
  );
}