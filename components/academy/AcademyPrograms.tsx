import Container from "@/components/ui/Container";
import {
  Brain,
  Target,
  TrendingUp,
  Briefcase,
} from "lucide-react";

const programs = [
  {
    icon: Brain,
    title: "Mentalidad",
    description:
      "Desarrolla una mentalidad fuerte para enfrentar retos y alcanzar tus metas.",
  },
  {
    icon: Target,
    title: "Disciplina y Hábitos",
    description:
      "Construye sistemas y hábitos que te permitan mantener resultados a largo plazo.",
  },
  {
    icon: TrendingUp,
    title: "Productividad",
    description:
      "Aprende a gestionar tu tiempo, enfocarte y ejecutar con eficiencia.",
  },
  {
    icon: Briefcase,
    title: "Emprendimiento",
    description:
      "Adquiere habilidades para crear proyectos sostenibles y generar nuevas oportunidades.",
  },
];

export default function AcademyPrograms() {
  return (
    <section className="bg-neutral-950 py-28 text-white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            ÁREAS DE FORMACIÓN
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Formación diseñada para el mundo real.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Cada programa está pensado para ayudarte a desarrollar habilidades
            que impacten tu vida personal y profesional.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl border border-neutral-800 bg-black p-8 transition hover:border-[#C8A04A]"
            >
              <program.icon
                size={40}
                className="text-[#C8A04A]"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {program.title}
              </h3>

              <p className="mt-4 leading-8 text-neutral-400">
                {program.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}