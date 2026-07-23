import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/app/data/products";



export default function ProductGrid() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}

      </div>

    </section>
  );
}