import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  ShieldCheck,
  BookOpen,
  Rocket,
  Award,
} from "lucide-react";

const benefits = [
  {
    title: "Calidad Premium",
    description:
      "Seleccionamos productos que realmente aportan valor a tu crecimiento.",
    icon: Award,
  },
  {
    title: "Enfoque en Disciplina",
    description:
      "Todo nuestro catálogo está pensado para ayudarte a construir mejores hábitos.",
    icon: BookOpen,
  },
  {
    title: "Compra Segura",
    description:
      "Pagos confiables y una experiencia de compra profesional.",
    icon: ShieldCheck,
  },
  {
    title: "Crecimiento Constante",
    description:
      "Nuevos productos, ebooks y cursos llegarán continuamente.",
    icon: Rocket,
  },
];

export default function Benefits() {
  return (
    <section className="bg-black py-24 text-white">
      <Container>
        <SectionTitle
          badge="BENEFICIOS"
          title="¿Por qué elegir DCV Shop?"
          description="No solo vendemos productos. Construimos herramientas para transformar vidas."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-yellow-500/10 p-4">
                  <Icon size={34} className="text-yellow-500" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-gray-400">
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