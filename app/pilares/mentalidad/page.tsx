import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const images = {
  hero: "/images/pilares/mentalidad/focus-board-hero.webp",
  detalle: "/images/pilares/mentalidad/focus-board-detalle.webp",
  uso: "/images/pilares/mentalidad/focus-board-uso-diario.webp",
  soporte: "/images/pilares/mentalidad/focus-board-soporte.webp",
  portaLapices: "/images/pilares/mentalidad/focus-board-porta-lapices.webp",
  packaging: "/images/pilares/mentalidad/focus-board-packaging.webp",
  angulo: "/images/pilares/mentalidad/focus-board-angulo.webp",
  cierre: "/images/pilares/mentalidad/focus-board-cierre.webp",
};

export default function MentalidadPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src={images.hero}
          alt="DCV Focus Board — Mentalidad"
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
                MENTALIDAD
              </p>

              <h1 className="mt-4 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                DCV Focus
                <br />
                Board.
              </h1>

              <h2 className="mt-6 max-w-2xl text-2xl font-bold leading-tight md:text-3xl">
                Tu atención define lo que puedes construir.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-200 md:text-lg md:leading-8">
                Un espacio físico para ordenar tus prioridades, eliminar
                distracciones y trabajar con intención.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#conocer-focus-board"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C8A04A] px-7 py-4 font-bold text-black transition hover:bg-[#d8b45c]"
                >
                  Conocer el Focus Board
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

      {/* INTRO / DESTINO DEL BOTÓN CONOCER */}
      <section
        id="conocer-focus-board"
        className="scroll-mt-24 bg-neutral-950 py-24 md:py-32"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              badge="PIENSA CON INTENCIÓN"
              title="Tu entorno también influye en tu enfoque"
              description="DCV Focus Board convierte tu espacio de trabajo en un recordatorio físico de aquello que realmente importa."
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
                alt="Detalle del DCV Focus Board"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                TU PRIORIDAD
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Menos ruido. Más claridad.
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                El Focus Board está pensado para ayudarte a tener frente a ti
                lo que realmente necesita tu atención.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Una prioridad clara puede cambiar la manera en que utilizas
                todo tu día.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* USO DIARIO */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                USO DIARIO
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Empieza el día sabiendo qué importa
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Define tu prioridad, organiza tus tareas importantes y crea
                bloques de tiempo para trabajar sin distracciones.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Una herramienta sencilla para darle dirección a tu atención.
              </p>
            </div>

            <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-3xl lg:order-2">
              <Image
                src={images.uso}
                alt="Uso diario del DCV Focus Board"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* SOPORTE */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={images.soporte}
                alt="Soporte del DCV Focus Board"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                TU ESPACIO
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Diseñado para estar presente
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Su formato vertical permite convertirlo en una pieza
                protagonista de tu escritorio o espacio de trabajo.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Porque aquello que ves constantemente también puede ayudarte
                a recordar hacia dónde estás dirigiendo tu energía.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PORTA LÁPICES */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                TODO EN SU LUGAR
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                La claridad también está en los detalles
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                Cada elemento está pensado para mantener tu espacio ordenado
                y funcional sin perder la estética limpia de DCV.
              </p>
            </div>

            <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-3xl lg:order-2">
              <Image
                src={images.portaLapices}
                alt="Porta lápices del DCV Focus Board"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* PACKAGING */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={images.packaging}
                alt="Packaging del DCV Focus Board"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8A04A]">
                EXPERIENCIA DCV
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Desde que lo recibes
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-400 md:text-lg">
                El producto, sus materiales y su presentación forman parte
                de una misma experiencia de marca.
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
                alt="Diseño y construcción del DCV Focus Board"
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
                Una pieza física con una construcción sencilla y materiales
                accesibles, desarrollada para mantener el lenguaje premium
                de DCV.
              </p>

              <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg">
                Diseñado como un producto DCV que puede evolucionar desde el
                prototipo hasta una producción real en Colombia.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CIERRE */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src={images.cierre}
          alt="DCV Focus Board"
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
                MENTALIDAD
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Tu atención define lo que puedes construir.
              </h2>

              <p className="mt-6 text-xl font-medium text-neutral-200">
                DCV Focus Board
              </p>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}