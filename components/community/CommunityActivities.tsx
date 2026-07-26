import Container from "@/components/ui/Container";
import {
  Calendar,
  Users,
  BookOpen,
  Rocket,
} from "lucide-react";

const activities = [
  {
    icon: Calendar,
    title: "Retos mensuales",
    description:
      "Participa en desafíos diseñados para fortalecer hábitos, disciplina y constancia.",
  },
  {
    icon: Users,
    title: "Sesiones en vivo",
    description:
      "Comparte con la comunidad, resuelve dudas y aprende de experiencias reales.",
  },
  {
    icon: BookOpen,
    title: "Recursos exclusivos",
    description:
      "Accede a guías, plantillas y material complementario para acelerar tu crecimiento.",
  },
  {
    icon: Rocket,
    title: "Crecimiento continuo",
    description:
      "Nuevas actividades, eventos y contenidos llegarán constantemente para mantener tu progreso.",
  },
];

export default function CommunityActivities() {
  return (
    <section className="bg-black py-28 text-white">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
            ACTIVIDADES
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Una comunidad que evoluciona contigo.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Nuestro objetivo es crear un entorno donde siempre tengas oportunidades
            para aprender, participar y seguir creciendo.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {activities.map((activity) => (
            <div
              key={activity.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 transition hover:border-[#C8A04A]"
            >
              <activity.icon
                size={40}
                className="text-[#C8A04A]"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {activity.title}
              </h3>

              <p className="mt-4 leading-8 text-neutral-400">
                {activity.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}