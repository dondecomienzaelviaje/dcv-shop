import Container from "@/components/ui/Container";

export default function AcademyAbout() {
  return (
    <section className="bg-black py-28 text-white">
      <Container>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
              NUESTRA MISIÓN
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              La educación es el punto de partida para una vida extraordinaria.
            </h2>

          </div>

          <div className="space-y-6 text-lg leading-9 text-neutral-400">

            <p>
              En DCV Academy creemos que el conocimiento solo genera resultados
              cuando se convierte en acción. Por eso diseñamos programas
              prácticos que te ayudan a desarrollar hábitos, disciplina y
              habilidades para alcanzar tus objetivos.
            </p>

            <p>
              Nuestro propósito es construir una comunidad de personas que
              entienden que el crecimiento personal es un proceso continuo y
              que la educación es una inversión para toda la vida.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}