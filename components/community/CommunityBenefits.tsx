import Container from "@/components/ui/Container";
import {
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Entorno positivo",
    description:
      "Forma parte de una comunidad donde el compromiso, el respeto y el crecimiento son la prioridad.",
  },
  {
    icon: Users,
    title: "Aprendizaje colaborativo",
    description:
      "Comparte experiencias, recibe retroalimentación y aprende junto a personas con objetivos similares.",
  },
  {
    icon: TrendingUp,
    title: "Motivación constante",
    description:
      "Mantén el impulso gracias a retos, eventos y una comunidad que te anima a seguir avanzando.",
  },
];

export default function CommunityReasons() {
  return (
    <section
  id="beneficios"
  className="bg-neutral-950 py-28 text-white"
>
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            ¿POR QUÉ UNIRTE?
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Crecer acompañado siempre será más poderoso.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            En DCV Community creemos que el entorno correcto multiplica las
            posibilidades de alcanzar tus metas.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-neutral-800 bg-black p-8 transition hover:border-[#C8A04A]"
            >
              <reason.icon
                size={40}
                className="text-[#C8A04A]"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {reason.title}
              </h3>

              <p className="mt-4 leading-8 text-neutral-400">
                {reason.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}