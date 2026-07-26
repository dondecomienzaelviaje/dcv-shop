import Container from "@/components/ui/Container";

export default function CommunityHero() {
  return (
    <section className="bg-neutral-950 py-32 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-[#C8A04A]/30 bg-[#C8A04A]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A04A]">
            DCV Community
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Crece junto a personas que comparten tu visión.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-400">
            Una comunidad creada para aprender, compartir experiencias,
            desarrollar disciplina y avanzar junto a personas comprometidas con
            su crecimiento personal y profesional.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D7AF56]">
              Unirme a la comunidad
            </button>

            <a
  href="#beneficios"
  className="rounded-xl border border-neutral-700 px-8 py-4 font-bold transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
>
  Conocer los beneficios
</a>

          </div>

        </div>
      </Container>
    </section>
  );
}