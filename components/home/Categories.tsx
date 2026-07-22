import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    title: "Libros",
    description: "Los mejores libros para transformar tu mentalidad.",
    icon: "📚",
  },
  {
    title: "Productividad",
    description: "Herramientas para organizar tu vida y alcanzar tus metas.",
    icon: "📝",
  },
  {
    title: "Accesorios",
    description: "Productos premium para acompañar tu disciplina diaria.",
    icon: "☕",
  },
  {
    title: "Digital",
    description: "Ebooks, cursos y contenido exclusivo de DCV.",
    icon: "💻",
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-24 text-white">
      <Container>
        <SectionTitle
          badge="CATEGORÍAS"
          title="Todo para tu crecimiento"
          description="Seleccionamos productos diseñados para ayudarte a construir hábitos, disciplina y una vida extraordinaria."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl"
            >
              <div className="text-5xl">{category.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}