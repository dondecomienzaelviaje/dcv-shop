import ProductCard from "@/components/ui/ProductCard";

type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  createdAt: string;
  featuredImage?: {
    url: string;
    altText?: string | null;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
};

type ProductGridProps = {
  products: ShopifyProduct[];
};

const NEW_THRESHOLD_DAYS = 30;

function isRecentlyCreated(createdAt: string) {
  const createdTime = new Date(createdAt).getTime();
  const daysSinceCreated =
    (Date.now() - createdTime) / (1000 * 60 * 60 * 24);

  return daysSinceCreated <= NEW_THRESHOLD_DAYS;
}

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
            usdCents={Math.round(
              Number(product.priceRange.minVariantPrice.amount) * 100
            )}
            image={
              product.featuredImage?.url ??
              "/placeholder-product.png"
            }
            isNew={isRecentlyCreated(product.createdAt)}
          />
        ))}
      </div>
    </section>
  );
}