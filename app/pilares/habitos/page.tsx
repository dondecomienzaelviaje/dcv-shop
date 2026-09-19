import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const images = {
  hero: "/images/pilares/habitos/agenda-dcv-hero.webp",
  detalle: "/images/pilares/habitos/agenda-dcv-detalle.webp",
  abierta: "/images/pilares/habitos/agenda-dcv-abierta.webp",
  uso: "/images/pilares/habitos/agenda-dcv-uso-diario.webp",
  habitos: "/images/pilares/habitos/agenda-dcv-habitos.webp",
  mentalidad: "/images/pilares/habitos/agenda-dcv-mentalidad.webp",
  angulo: "/images/pilares/habitos/agenda-dcv-angulo.webp",
  cierre: "/images/pilares/habitos/agenda-dcv-cierre.webp",
};

export default function HabitosPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src={images.hero}
          alt="Agenda DCV 90 — Hábitos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        <div className="relative z-10 flex h-full items-end">
          <Container>
            <div className="max-w-3xl pb-16 md:pb-20">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                HÁBITOS
              </p>

              <h1 className="mt-4 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                Agenda
                <br />
                DCV 90.
              </h1>

              <h2 className="mt-6 max-w-2xl text-2xl font-bold leading-tight md:text-3xl">
                Lo que repites, se convierte en quién eres.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-200 md:text-lg md:leading-8">
                Una herramienta diseñada para convertir tus objetivos diarios
                en acciones constantes y construir hábitos que permanezcan.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C8A04A] px-7 py-4 font-bold text-black transition hover:bg-[#d8b45c]"
                >
                  Conocer la Agenda DCV
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Ver productos
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-neutral-950 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              badge="CONSTRUYE MEJORES HÁBITOS"
              title="Un día a la vez"
              description="La Agenda DCV 90 convierte tus intenciones en acciones que puedes observar, registrar y repetir."
            />
          </div>
        </Container>
      </section>

      {/* DETALLE */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={images.detalle}
                alt="Detalle de la Agenda DCV 90"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                EL DETALLE
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Tus acciones también cuentan
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Cada página representa una oportunidad para tomar una
                decisión concreta y acercarte a la persona que quieres ser.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Porque los grandes cambios también empiezan con acciones
                pequeñas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ABIERTA */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                PLANIFICA
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Dale dirección a tus días
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Organiza lo que necesitas hacer, identifica lo que realmente
                importa y empieza cada día con una dirección clara.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                La intención se convierte en hábito cuando la llevas a la
                acción.
              </p>
            </div>

            <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-3xl lg:order-2">
              <Image
                src={images.abierta}
                alt="Agenda DCV 90 abierta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* USO DIARIO */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={images.uso}
                alt="Uso diario de la Agenda DCV 90"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                USO DIARIO
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Hazlo parte de tu rutina
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                La agenda está diseñada para acompañarte durante el día,
                ayudarte a mantener tus objetivos presentes y registrar el
                avance que normalmente pasa desapercibido.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Un espacio para planear, ejecutar y revisar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* HÁBITOS */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                REPETICIÓN
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Lo que haces repetidamente empieza a formar tu identidad
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Registrar tus hábitos hace visible aquello que normalmente
                ocurre de manera automática.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Cada día es una nueva oportunidad para volver a intentarlo.
              </p>
            </div>

            <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-3xl lg:order-2">
              <Image
                src={images.habitos}
                alt="Seguimiento de hábitos en la Agenda DCV 90"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* MENTALIDAD */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={images.mentalidad}
                alt="Mentalidad y planificación en la Agenda DCV 90"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                MENTALIDAD
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Tus hábitos empiezan con una decisión
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Antes de cambiar lo que haces, necesitas decidir qué quieres
                construir.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                La Agenda DCV 90 une planificación, intención y acción en un
                mismo proceso.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ÁNGULO */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-900">
              <Image
                src={images.angulo}
                alt="Diseño de la Agenda DCV 90"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                DISEÑO DCV
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Diseñada para acompañarte
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Una herramienta física, sencilla y funcional para convertir
                tus objetivos en acciones diarias.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Pensada como un producto DCV que pueda desarrollarse y
                fabricarse en Colombia.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CIERRE */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src={images.cierre}
          alt="Agenda DCV 90"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative z-10 flex h-full items-end">
          <Container>
            <div className="max-w-2xl pb-16 md:pb-20">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8A04A]">
                HÁBITOS
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Lo que repites, se convierte en quién eres.
              </h2>

              <p className="mt-6 text-xl font-medium text-neutral-200">
                Agenda DCV 90
              </p>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}