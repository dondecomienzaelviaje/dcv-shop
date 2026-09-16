import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const pillars = [
  {
    pillar: "Disciplina",
    title: "Botella de Agua Deportiva DCV",
    description: "Tu hidratación diaria, sin excusas.",
    icon: "🎯",
    href: "/products/botella-agua-deportiva-dcv-400-560ml",
  },
  {
    pillar: "Mentalidad",
    title: "Reloj de Arena LED 3D",
    description: "El ritmo correcto para pensar con claridad.",
    icon: "🧠",
    href: "/products/reloj-arena-led-3d",
  },
  {
    pillar: "Hábitos",
    title: "Mochila AERO BLACK",
    description:
      "La que te acompaña en cada rutina, todos los días.",
    icon: "✅",
    href: "/products/aero-black-premium-laptop-backpack",
  },
  {
    pillar: "Éxito",
    title: "Kit de Productividad Inalámbrico",
    description:
      "El kit de quien ya tomó la decisión.",
    icon: "🏆",
    href: "/products/kit-productividad-inalambrico-dcv",
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-32 text-white">
      <Container>
        <SectionTitle
          badge="LOS 4 PILARES"
          title="Todo comienza con una decisión"
          description="Un producto por cada pilar: disciplina, mentalidad, hábitos y éxito."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item) => (
            <Link
              key={item.pillar}
              href={item.href}
              className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white p-8 text-center text-neutral-900 transition-all duration-500 hover:-translate-y-3 hover:border-[#C8A04A] hover:shadow-[0_0_40px_rgba(200,160,74,0.25)]"
            >
              <div className="text-5xl transition duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-wide text-[#C8A04A]">
                {item.pillar}
              </p>

              <h3 className="mt-2 text-lg font-bold leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {item.description}
              </p>

              <span className="mt-6 rounded-lg bg-[#F0A93A] px-5 py-2 text-sm font-semibold text-neutral-900 transition group-hover:brightness-105">
                Ver producto
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}