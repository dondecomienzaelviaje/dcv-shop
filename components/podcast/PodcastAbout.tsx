import Container from "@/components/ui/Container";
import { PlayCircle } from "lucide-react";

const episodes = [
  {
    title: "La disciplina vence al talento",
    description:
      "Descubre por qué la constancia supera cualquier habilidad cuando se trata de alcanzar grandes resultados.",
    duration: "28 min",
  },
  {
    title: "Construye hábitos que cambien tu vida",
    description:
      "Aprende cómo pequeños cambios diarios pueden generar transformaciones extraordinarias con el paso del tiempo.",
    duration: "35 min",
  },
  {
    title: "El precio del éxito",
    description:
      "Una conversación sobre sacrificio, enfoque y las decisiones necesarias para construir una vida extraordinaria.",
    duration: "42 min",
  },
];

export default function PodcastEpisodes() {
  return (
    <section className="bg-neutral-950 py-28 text-white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            EPISODIOS
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Algunos de nuestros próximos episodios.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Muy pronto encontrarás conversaciones diseñadas para ayudarte a crecer,
            pensar diferente y actuar con disciplina.
          </p>

        </div>

        <div className="space-y-8">

          {episodes.map((episode) => (
            <div
              key={episode.title}
              className="flex flex-col justify-between gap-8 rounded-3xl border border-neutral-800 bg-black p-8 transition hover:border-[#C8A04A] md:flex-row md:items-center"
            >
              <div>

                <h3 className="text-2xl font-bold">
                  {episode.title}
                </h3>

                <p className="mt-4 max-w-3xl leading-8 text-neutral-400">
                  {episode.description}
                </p>

              </div>

              <div className="flex items-center gap-5">

                <span className="text-sm font-semibold text-neutral-500">
                  {episode.duration}
                </span>

                <button className="rounded-full bg-[#C8A04A] p-4 text-black transition hover:bg-[#D7AF56]">
                  <PlayCircle size={28} />
                </button>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}