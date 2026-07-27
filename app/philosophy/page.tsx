import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.5em] text-[#C8A04A]">
          NUESTRA FILOSOFÍA
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          No vendemos productos.
          <br />
          <span className="text-[#C8A04A]">
            Construimos personas.
          </span>
        </h1>

        <p className="mt-10 max-w-3xl text-lg leading-9 text-zinc-400">
          En DCV creemos que la disciplina, el conocimiento y los hábitos
          correctos tienen el poder de transformar cualquier vida.
          Nuestra misión es ofrecer herramientas que impulsen tu crecimiento
          personal y profesional.
        </p>

      </section>

      {/* Nuestra misión */}
      <section className="mx-auto max-w-5xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-black">
          Nuestra misión
        </h2>

        <p className="text-lg leading-9 text-zinc-400">
          DCV nació con una idea sencilla:
          ayudar a las personas a construir una mejor versión de sí mismas.
          Cada libro, accesorio y herramienta que encontrarás en nuestra
          tienda ha sido seleccionado pensando en el aprendizaje, la
          productividad y el desarrollo de hábitos que generan resultados
          extraordinarios.
        </p>

      </section>

      {/* Valores */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2">

        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#C8A04A]">
            📚 Aprendizaje continuo
          </h3>

          <p className="leading-8 text-zinc-400">
            Nunca dejamos de aprender.
            El conocimiento es la herramienta más poderosa para transformar
            cualquier realidad.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#C8A04A]">
            💪 Disciplina
          </h3>

          <p className="leading-8 text-zinc-400">
            La disciplina supera al talento cuando el talento deja de trabajar.
            Los pequeños hábitos construyen grandes resultados.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#C8A04A]">
            🚀 Productividad
          </h3>

          <p className="leading-8 text-zinc-400">
            No se trata de trabajar más.
            Se trata de trabajar mejor, con enfoque y propósito.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
          <h3 className="mb-4 text-2xl font-bold text-[#C8A04A]">
            🌍 Impacto
          </h3>

          <p className="leading-8 text-zinc-400">
            Queremos construir una comunidad que inspire a millones de
            personas a desarrollar disciplina, liderazgo y crecimiento
            personal.
          </p>
        </div>

      </section>

      {/* Compromiso */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">

        <h2 className="mb-8 text-4xl font-black">
          Nuestro compromiso
        </h2>

        <p className="mx-auto max-w-4xl text-lg leading-9 text-zinc-400">
          Cada producto disponible en DCV Shop pasa por un proceso de
          selección.
          No buscamos vender cualquier artículo.
          Queremos ofrecer herramientas que realmente aporten valor y
          acompañen a nuestros clientes en su camino hacia una vida con más
          disciplina, productividad y crecimiento.
        </p>

      </section>

      {/* Frase */}
      <section className="px-6 pb-28 text-center">

        <blockquote className="mx-auto max-w-4xl text-3xl font-black italic text-[#C8A04A] md:text-5xl">
          "El conocimiento te paga para siempre."
        </blockquote>

        <div className="mt-14">

          <Link
            href="/products"
            className="rounded-xl bg-[#C8A04A] px-10 py-5 font-bold text-black transition hover:bg-[#D8B15A]"
          >
            Explorar productos
          </Link>

        </div>

      </section>

    </main>
  );
}