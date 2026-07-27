import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PodcastHero() {
  return (
    <section className="bg-neutral-950 py-32 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-[#C8A04A]/30 bg-[#C8A04A]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A04A]">
            DCV Podcast
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Conversaciones que transforman tu manera de pensar.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-400">
            Descubre entrevistas, reflexiones y conversaciones sobre
            disciplina, crecimiento personal, emprendimiento y desarrollo
            profesional para impulsar la mejor versión de ti.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button
              type="button"
              className="rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
            >
              Escuchar ahora
            </button>

            <Link
              href="/podcast/episodes"
              className="rounded-xl border border-neutral-700 px-8 py-4 font-bold transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
            >
              Ver episodios
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}