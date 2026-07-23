import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

const products = [
  {
    id: 1,
    title: "Hábitos Atómicos",
    price: "$89.900",
    image: "/products/habitos-atomicos.png",
  },
  {
    id: 2,
    title: "Agenda DCV 2027",
    price: "$59.900",
    image: "/products/agenda-dcv.png",
  },
  {
    id: 3,
    title: "Mug Modo Disciplina",
    price: "$39.900",
    image: "/products/taza-disciplina.png",
  },
  {
    id: 4,
    title: "Kit Productividad",
    price: "$129.900",
    image: "/products/kit-productividad.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-neutral-950 py-32 text-white">
      <Container>
        <SectionTitle
          badge="PRODUCTOS DESTACADOS"
          title="Herramientas para construir una vida extraordinaria"
          description="Cada producto de DCV ha sido seleccionado para ayudarte a desarrollar disciplina, fortalecer tu mentalidad y avanzar todos los días."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}