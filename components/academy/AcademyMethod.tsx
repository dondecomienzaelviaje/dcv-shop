import Container from "@/components/ui/Container";
import {
  BookOpen,
  MonitorPlay,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Aprende",
    description:
      "Accede a contenido claro, práctico y diseñado para aplicar desde el primer día.",
  },
  {
    icon: MonitorPlay,
    title: "Aplica",
    description:
      "Convierte el conocimiento en hábitos mediante ejercicios y retos prácticos.",
  },
  {
    icon: Trophy,
    title: "Transforma",
    description:
      "Construye resultados sostenibles desarrollando disciplina, enfoque y constancia.",
  },
];

export default function AcademyMethod() {
  return (
    <section className="bg-black py-28 text-white">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            METODOLOGÍA DCV
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Aprender. Aplicar. Transformar.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Nuestro modelo está diseñado para que el aprendizaje no se quede en
            teoría. Cada programa busca generar cambios reales mediante la acción
            constante.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 text-center transition hover:border-[#C8A04A]"
            >

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A04A]/10">

                <step.icon
                  size={30}
                  className="text-[#C8A04A]"
                />

              </div>

              <span className="text-sm font-bold text-[#C8A04A]">
                PASO {index + 1}
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-neutral-400">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}