import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    title: "Libros",
    description: "Las ideas que transforman la manera de pensar y vivir.",
    icon: "📚",
  },
  {
    title: "Productividad",
    description: "Herramientas para construir hábitos y ejecutar con disciplina.",
    icon: "⚡",
  },
  {
    title: "Accesorios",
    description: "Productos seleccionados para acompañar tu crecimiento diario.",
    icon: "☕",
  },
  {
    title: "Academia",
    description: "Cursos, ebooks y contenido exclusivo de Donde Comienza el Viaje.",
    icon: "🎓",
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-32 text-white">

      <Container>

        <SectionTitle
          badge="CATEGORÍAS"
          title="Todo comienza con una decisión"
          description="Cada producto de DCV tiene un propósito: ayudarte a desarrollar disciplina, elevar tu mentalidad y construir una vida extraordinaria."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((category) => (

            <div
              key={category.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-b
                from-neutral-900
                to-black
                p-10
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#C8A04A]
                hover:shadow-[0_0_40px_rgba(200,160,74,0.15)]
              "
            >

              <div className="text-6xl transition duration-500 group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="mt-8 text-2xl font-black">
                {category.title}
              </h3>

              <p className="mt-5 leading-8 text-neutral-400">
                {category.description}
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-[#C8A04A] to-transparent opacity-40" />

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}