import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const images = {
  hero: "/images/pilares/crecimiento/dcv-progress-hero.webp",
  detalle: "/images/pilares/crecimiento/dcv-progress-detalle.webp",
  uso: "/images/pilares/crecimiento/dcv-progress-uso.webp",
  pared: "/images/pilares/crecimiento/dcv-progress-pared.webp",
  marcadores: "/images/pilares/crecimiento/dcv-progress-marcadores.webp",
  meta: "/images/pilares/crecimiento/dcv-progress-meta.webp",
  angulo: "/images/pilares/crecimiento/dcv-progress-angulo.webp",
  cierre: "/images/pilares/crecimiento/dcv-progress-cierre.webp",
};

export default function CrecimientoPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src={images.hero}
          alt="DCV Progress — Crecimiento"
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
                CRECIMIENTO
              </p>

              <h1 className="mt-4 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                DCV
                <br />
                Progress.
              </h1>

              <h2 className="mt-6 max-w-2xl text-2xl font-bold leading-tight md:text-3xl">
                No necesitas ver el resultado para saber que estás avanzando.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-200 md:text-lg md:leading-8">
                Una forma física y visible de reconocer tu progreso, mantener
                tus metas presentes y decidir cuál es tu siguiente paso.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C8A04A] px-7 py-4 font-bold text-black transition hover:bg-[#d8b45c]"
                >
                  Conocer DCV Progress
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
              badge="DISEÑA TU SIGUIENTE NIVEL"
              title="El crecimiento también se puede ver"
              description="DCV Progress convierte el avance personal en algo físico, visible y tangible."
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
                alt="Detalle del sistema de progreso DCV Progress"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                VISUALIZA TU AVANCE
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Un paso también es progreso
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                DCV Progress está diseñado para que puedas representar
                físicamente cuánto has avanzado hacia aquello que quieres
                conseguir.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Sus marcadores convierten una meta abstracta en un proceso que
                puedes observar, tocar y continuar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ÁREAS */}
      <section className="bg-neutral-950 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
              TU PROGRESO
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Diferentes áreas. Un mismo propósito.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Lleva tu crecimiento a los espacios que realmente importan.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Personal",
                text: "Crece en la persona que quieres ser.",
              },
              {
                title: "Profesional",
                text: "Avanza hacia tu siguiente nivel.",
              },
              {
                title: "Financiero",
                text: "Construye nuevas metas y posibilidades.",
              },
              {
                title: "Salud",
                text: "Invierte en tu bienestar y energía.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="text-2xl text-[#C8A04A]">✦</div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* USO */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                HAZLO TANGIBLE
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Tu avance merece un lugar visible
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Cada movimiento del marcador representa algo que antes estaba
                solamente en tu cabeza.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Una meta. Un avance. Un siguiente paso.
              </p>
            </div>

            <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-3xl lg:order-2">
              <Image
                src={images.uso}
                alt="Persona utilizando DCV Progress"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* PARED */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <Container>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src={images.pared}
              alt="DCV Progress instalado en una pared"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 max-w-xl p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                TU ESPACIO
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Un recordatorio de hacia dónde vas
              </h2>
            </div>
          </div>
        </Container>
      </section>

      {/* MARCADORES */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={images.marcadores}
                alt="Marcadores físicos de DCV Progress"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                EL SISTEMA
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Muévelo. Avanza. Repite.
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Los marcadores físicos hacen que tu progreso deje de ser
                solamente una cifra y se convierta en una experiencia.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Porque avanzar también merece sentirse.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* META */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                META · PROGRESO · SIGUIENTE PASO
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                No se trata solamente de llegar
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Se trata de reconocer dónde estás, entender cuánto has
                avanzado y decidir qué vas a hacer después.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                DCV Progress convierte ese proceso en algo que puedes ver
                todos los días.
              </p>
            </div>

            <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-3xl lg:order-2">
              <Image
                src={images.meta}
                alt="Secciones Mi Meta, Mi Progreso y Siguiente Paso"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ÁNGULO / FABRICACIÓN */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-900">
              <Image
                src={images.angulo}
                alt="Construcción y materiales de DCV Progress"
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
                Simple por fuera. Pensado por dentro.
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Una pieza física con una construcción sencilla, materiales
                accesibles y una estética que mantiene el lenguaje premium de
                DCV.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Diseñado para poder convertirse en un producto real, fabricado
                y desarrollado en Colombia.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CIERRE */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src={images.cierre}
          alt="DCV Progress"
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
                CRECIMIENTO
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                No necesitas ver el resultado para saber que estás avanzando.
              </h2>

              <p className="mt-6 text-xl font-medium text-neutral-200">
                DCV Progress
              </p>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}