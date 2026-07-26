import Container from "@/components/ui/Container";

export default function CommunityAbout() {
  return (
    <section className="bg-black py-28 text-white">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
              NUESTRA COMUNIDAD
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              Nadie alcanza grandes metas completamente solo.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-neutral-400">

            <p>
              DCV Community reúne personas comprometidas con el crecimiento
              personal, la disciplina y el desarrollo profesional. Es un espacio
              para aprender, compartir experiencias y avanzar junto a quienes
              también buscan construir una vida extraordinaria.
            </p>

            <p>
              Creemos que rodearte de personas con propósito acelera tu
              crecimiento y fortalece el compromiso con tus objetivos.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}