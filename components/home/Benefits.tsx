import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  ShieldCheck,
  Target,
  Rocket,
  Award,
} from "lucide-react";

const benefits = [
  {
    title: "Calidad Premium",
    description:
      "Seleccionamos productos duraderos, funcionales y de alta calidad para acompañarte en tu día a día.",
    icon: Award,
  },
  {
    title: "Enfocados en el crecimiento",
    description:
      "Cada producto está pensado para ayudarte a trabajar mejor, viajar mejor, entrenar mejor o desarrollar hábitos más sólidos.",
    icon: Target,
  },
  {
    title: "Compra 100 % segura",
    description:
      "Compra con confianza mediante pagos seguros, protección de datos y una experiencia profesional de principio a fin.",
    icon: ShieldCheck,
  },
  {
    title: "Catálogo en constante evolución",
    description:
      "Incorporamos nuevos productos, ebooks y herramientas para acompañarte en cada etapa de tu crecimiento.",
    icon: Rocket,
  },
];

export default function Benefits() {
  return (
    <section className="bg-black py-24 text-white">
      <Container>
        <SectionTitle
          badge="¿POR QUÉ ELEGIR DCV SHOP?"
          title="Herramientas que impulsan tu crecimiento."
          description="No vendemos productos por vender. Seleccionamos herramientas que impulsan la disciplina, la productividad y el crecimiento personal."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="min-h-[380px] rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-yellow-500/10 p-5">
                  <Icon size={38} className="text-yellow-500" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-7 text-neutral-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}