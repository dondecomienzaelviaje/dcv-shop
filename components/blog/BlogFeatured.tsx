import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "La disciplina supera al talento",
    category: "Disciplina",
    description:
      "Descubre por qué la constancia es el factor que marca la diferencia entre quienes sueñan y quienes logran resultados.",
  },
  {
    title: "Cómo construir hábitos que perduren",
    category: "Crecimiento Personal",
    description:
      "Aprende estrategias prácticas para crear hábitos sostenibles que transformen tu vida a largo plazo.",
  },
  {
    title: "El verdadero significado del éxito",
    category: "Reflexión",
    description:
      "Una mirada profunda sobre el éxito, el propósito y las decisiones que definen nuestro camino.",
  },
];

export default function BlogFeatured() {
  return (
    <section className="bg-black py-28 text-white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            DESTACADOS
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Próximos artículos del Blog.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Muy pronto encontrarás contenido diseñado para ayudarte a crecer
            personal y profesionalmente.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 transition hover:border-[#C8A04A]"
            >
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                {article.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                {article.title}
              </h3>

              <p className="mt-5 leading-8 text-neutral-400">
                {article.description}
              </p>

              <button className="mt-8 inline-flex items-center gap-2 font-bold text-[#C8A04A] transition hover:gap-3">
                Leer más
                <ArrowRight size={18} />
              </button>
            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}