import Container from "@/components/ui/Container";
import {
  PlayCircle,
  Headphones,
  Mic2,
  RadioTower,
} from "lucide-react";

const platforms = [
  {
    icon: PlayCircle,
    title: "YouTube",
    description:
      "Mira los episodios completos con video y contenido exclusivo.",
  },
  {
    icon: Headphones,
    title: "Spotify",
    description:
      "Escucha cada episodio desde cualquier lugar y en cualquier momento.",
  },
  {
    icon: Mic2,
    title: "Apple Podcasts",
    description:
      "Accede a nuestros episodios desde el ecosistema de Apple.",
  },
  {
    icon: RadioTower,
    title: "Más plataformas",
    description:
      "Próximamente estaremos disponibles en nuevas plataformas de audio.",
  },
];

export default function PodcastPlatforms() {
  return (
    <section className="bg-black py-28 text-white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            PLATAFORMAS
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Escucha DCV Podcast donde prefieras.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Nuestro objetivo es que puedas acceder al contenido desde las
            principales plataformas de podcast del mundo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {platforms.map((platform) => (
            <div
              key={platform.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 transition hover:border-[#C8A04A]"
            >
              <platform.icon
                size={40}
                className="text-[#C8A04A]"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {platform.title}
              </h3>

              <p className="mt-4 leading-8 text-neutral-400">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}