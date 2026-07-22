import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "Hábitos Atómicos",
      price: "$89.900",
    },
    {
      id: 2,
      title: "Agenda DCV 2027",
      price: "$59.900",
    },
    {
      id: 3,
      title: "Mug Modo Disciplina",
      price: "$39.900",
    },
    {
      id: 4,
      title: "Kit Productividad",
      price: "$129.900",
    },
  ];

  return (
    <section className="bg-neutral-950 py-24 text-white">
      <Container>
        <SectionTitle
          badge="PRODUCTOS"
          title="Productos destacados"
          description="Herramientas diseñadas para ayudarte a construir hábitos, disciplina y una vida extraordinaria."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}