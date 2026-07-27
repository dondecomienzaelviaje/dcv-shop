import Link from "next/link";

export default function PodcastEpisodesPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-[#C8A04A]/30 bg-[#C8A04A]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A04A]">
            DCV PODCAST
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Los episodios están en camino.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-400">
            Estamos preparando conversaciones que cambiarán tu forma de pensar.
            Aquí encontrarás entrevistas, análisis de libros, psicología,
            disciplina, productividad, liderazgo y estrategias para construir
            una vida extraordinaria.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
            <div className="text-5xl">📚</div>

            <h2 className="mt-6 text-2xl font-bold">
              Libros
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              Resúmenes profundos y lecciones prácticas de los mejores libros
              sobre disciplina, negocios, liderazgo y desarrollo personal.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
            <div className="text-5xl">🧠</div>

            <h2 className="mt-6 text-2xl font-bold">
              Mentalidad
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              Conversaciones sobre psicología, hábitos, filosofía estoica,
              toma de decisiones y crecimiento personal.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
            <div className="text-5xl">🚀</div>

            <h2 className="mt-6 text-2xl font-bold">
              Emprendimiento
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              Historias, estrategias y entrevistas con personas que han
              construido negocios, marcas y una vida basada en la disciplina.
            </p>
          </div>

        </div>

        <div className="mt-24 rounded-3xl border border-[#C8A04A]/20 bg-gradient-to-br from-neutral-900 to-black p-12 text-center">

          <h2 className="text-4xl font-black">
            Muy pronto inicia el viaje.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-neutral-400">
            El DCV Podcast será un espacio para aprender, cuestionar ideas y
            adquirir herramientas que puedas aplicar desde el primer episodio.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/podcast"
              className="rounded-xl border border-neutral-700 px-8 py-4 font-bold transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
            >
              Volver al Podcast
            </Link>

            <Link
              href="/products"
              className="rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
            >
              Explorar la tienda
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}