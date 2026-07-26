import Container from "@/components/ui/Container";

export default function BlogAbout() {
  return (
    <section className="bg-black py-28 text-white">
      <Container>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
              NUESTRO BLOG
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              Conocimiento que impulsa la acción.
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-9 text-neutral-400">

            <p>
              DCV Blog será el espacio donde compartiremos artículos,
              reflexiones, aprendizajes y recursos sobre disciplina,
              crecimiento personal, productividad y emprendimiento.
            </p>

            <p>
              Nuestro objetivo es ayudarte a desarrollar nuevas habilidades,
              fortalecer tu mentalidad y tomar mejores decisiones en cada etapa
              de tu vida.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}