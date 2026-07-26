import Container from "@/components/ui/Container";
import {
  BookOpen,
  Target,
  Briefcase,
  TrendingUp,
  Brain,
  PenTool,
} from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "Crecimiento Personal",
    description:
      "Desarrolla una mentalidad fuerte para alcanzar tus objetivos.",
  },
  {
    icon: Target,
    title: "Disciplina",
    description:
      "Construye hábitos sólidos que transformen tu vida.",
  },
  {
    icon: TrendingUp,
    title: "Productividad",
    description:
      "Aprende a gestionar mejor tu tiempo y aumentar tu rendimiento.",
  },
  {
    icon: Briefcase,
    title: "Emprendimiento",
    description:
      "Ideas, estrategias y experiencias para crear y hacer crecer proyectos.",
  },
  {
    icon: BookOpen,
    title: "Libros",
    description:
      "Resúmenes, aprendizajes y recomendaciones de grandes autores.",
  },
  {
    icon: PenTool,
    title: "Reflexiones",
    description:
      "Artículos para cuestionar tu forma de pensar y crecer constantemente.",
  },
];

export default function BlogCategories() {
  return (
    <section
    id="categorias"
    className="scroll-mt-28 bg-neutral-950 py-28 text-white"
  >
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            CATEGORÍAS
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
          Explora los temas que impulsan tu crecimiento.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Organizaremos nuestros artículos para que encuentres fácilmente el
            contenido que más aporte a tu desarrollo.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-neutral-800 bg-black p-8 transition hover:border-[#C8A04A]"
            >
              <category.icon
                size={40}
                className="text-[#C8A04A]"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-4 leading-8 text-neutral-400">
                {category.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}