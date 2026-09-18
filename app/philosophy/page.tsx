import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.5em] text-[#C8A04A]">
          LA FILOSOFÍA DCV
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Tu entorno moldea
          <br />
          <span className="text-[#C8A04A]">
            quién te conviertes.
          </span>
        </h1>

        <p className="mt-10 max-w-3xl text-lg leading-9 text-zinc-400 md:text-xl">
          La disciplina no aparece por accidente. Se construye con decisiones
          pequeñas, todos los días. En DCV creamos y seleccionamos herramientas
          diseñadas para ayudarte a trabajar mejor, organizarte mejor y
          construir hábitos que duren.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/products"
            className="rounded-xl bg-[#C8A04A] px-10 py-5 font-bold text-black transition hover:bg-[#D8B15A]"
          >
            Descubrir la colección
          </Link>

          <Link
            href="/products"
            className="rounded-xl border border-neutral-700 px-10 py-5 font-bold text-white transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
          >
            Ver productos
          </Link>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A04A]">
            NO SE TRATA SOLO DE MOTIVACIÓN
          </p>

          <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            La mayoría de las personas saben lo que deberían hacer.
            <span className="text-zinc-500">
              {" "}
              El problema es convertirlo en rutina.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Un escritorio desordenado, una mochila que nunca está organizada,
            cables por todas partes o una rutina sin estructura parecen detalles
            pequeños. Pero los pequeños detalles se acumulan.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-400">
            Por eso creemos que tu entorno debe trabajar a favor de tus
            objetivos, no en contra de ellos.
          </p>
        </div>
      </section>

      {/* QUE HACEMOS */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A04A]">
            QUÉ HACEMOS
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Herramientas para una vida más intencional.
          </h2>

          <p className="mt-6 text-lg leading-9 text-zinc-400">
            No queremos llenar tu casa de cosas. Queremos ayudarte a elegir
            mejor.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#C8A04A]">
              ⚡ Productividad
            </h3>

            <p className="leading-8 text-zinc-400">
              Accesorios y herramientas pensados para ayudarte a mantener el
              foco, organizar tu espacio y aprovechar mejor tu tiempo.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#C8A04A]">
              🎯 Disciplina
            </h3>

            <p className="leading-8 text-zinc-400">
              La disciplina se construye con sistemas simples que puedas
              repetir incluso cuando la motivación desaparece.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#C8A04A]">
              🧠 Mentalidad
            </h3>

            <p className="leading-8 text-zinc-400">
              Creemos en aprender constantemente y rodearte de herramientas
              que te recuerden hacia dónde quieres avanzar.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="mb-4 text-2xl font-bold text-[#C8A04A]">
              📈 Crecimiento
            </h3>

            <p className="leading-8 text-zinc-400">
              El objetivo no es tener más cosas. Es construir una mejor rutina,
              mejores hábitos y una vida más alineada con tus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* POR QUE DCV */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A04A]">
            POR QUÉ DCV
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            No necesitas más cosas.
            <br />
            <span className="text-[#C8A04A]">
              Necesitas las correctas.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Cada producto que llega a DCV debe tener un propósito. Buscamos
            artículos que puedan formar parte de una rutina real: trabajar,
            estudiar, viajar, organizarte, aprender y cuidar de ti.
          </p>
        </div>
      </section>

      {/* SELECCION DCV */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A04A]">
              SELECCIÓN DCV
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Menos productos.
              <br />
              <span className="text-[#C8A04A]">
                Más intención.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-zinc-400">
              No buscamos competir por tener el catálogo más grande. Preferimos
              construir una colección de productos que tenga sentido para
              personas que quieren mejorar su forma de trabajar, vivir y
              avanzar.
            </p>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              Desde tu escritorio hasta tus viajes, cada herramienta debe
              ayudarte a eliminar fricción y mantenerte enfocado en lo que
              realmente importa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-neutral-900 px-6 py-28 text-center">
        <p className="mx-auto max-w-3xl text-3xl font-black leading-tight md:text-5xl">
          La persona que quieres ser se construye con lo que haces
          <span className="text-[#C8A04A]"> todos los días.</span>
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Empieza por tu entorno. Organiza tu rutina. Hazlo repetible. Y deja
          que los pequeños cambios se acumulen.
        </p>

        <div className="mt-12">
          <Link
            href="/products"
            className="inline-block rounded-xl bg-[#C8A04A] px-10 py-5 font-bold text-black transition hover:bg-[#D8B15A]"
          >
            Explorar productos DCV
          </Link>
        </div>

        <blockquote className="mx-auto mt-20 max-w-3xl text-2xl font-black italic text-[#C8A04A] md:text-4xl">
          “El conocimiento te paga para siempre.”
        </blockquote>
      </section>
    </main>
  );
}