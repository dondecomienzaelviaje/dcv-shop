import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const pillars = [
  {
    pillar: "Disciplina",
    title: "Botellón DCV",
    description: "Hazlo parte de tu rutina.",
    image: "/images/pilares/disciplina/botellon-dcv-hero.webp",
    href: "/pilares/disciplina",
  },
  {
    pillar: "Mentalidad",
    title: "DCV Focus Board",
    description: "Piensa con intención.",
    image: "/images/pilares/mentalidad/focus-board-hero.webp",
    href: "/pilares/mentalidad",
  },
  {
    pillar: "Hábitos",
    title: "Agenda DCV 90",
    description: "Construye mejores hábitos.",
    image: "/images/pilares/habitos/agenda-dcv-hero.webp",
    href: "/pilares/habitos",
  },
  {
    pillar: "Crecimiento",
    title: "DCV Progress",
    description: "Diseña tu siguiente nivel.",
    image: "/images/pilares/crecimiento/dcv-progress-hero.webp",
    href: "/pilares/crecimiento",
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-24 text-white md:py-32">
      <Container>
        <SectionTitle
          badge="LOS 4 PILARES DCV"
          title="Construye la vida que quieres"
          description="Cuatro pilares. Cuatro productos diseñados para acompañarte en el proceso."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((item) => (
            <Link
              key={item.pillar}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
            >
              {/* Imagen */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.pillar}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Contenido */}
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                  {item.pillar}
                </p>

                <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-300 md:text-base">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                  Descubrir
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}