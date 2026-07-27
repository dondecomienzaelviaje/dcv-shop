import Link from "next/link";

export default function AcademyProgramsPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <span className="rounded-full border border-[#C8A04A]/30 bg-[#C8A04A]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A04A]">
          DCV ACADEMY
        </span>

        <h1 className="mt-8 text-5xl font-black md:text-7xl">
          Programas
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-400">
          Estamos preparando los primeros programas de formación de DCV Academy.
          Muy pronto encontrarás cursos, ebooks, mentorías y experiencias de
          aprendizaje diseñadas para ayudarte a construir disciplina,
          liderazgo, productividad y una mentalidad de alto rendimiento.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-[#C8A04A]">
              Próximamente
            </h2>

            <ul className="mt-6 space-y-3 text-left text-neutral-300">
              <li>✓ Cursos especializados</li>
              <li>✓ Programas de productividad</li>
              <li>✓ Liderazgo</li>
              <li>✓ Finanzas personales</li>
              <li>✓ Crecimiento personal</li>
              <li>✓ Mentorías exclusivas</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-[#C8A04A]">
              Nuestra visión
            </h2>

            <p className="mt-6 leading-8 text-neutral-300">
              DCV Academy será la plataforma educativa donde miles de personas
              aprenderán habilidades prácticas para transformar su vida mediante
              la disciplina, el conocimiento y la ejecución constante.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-5">
          <Link
            href="/academy"
            className="rounded-xl border border-neutral-700 px-8 py-4 font-bold transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
          >
            Volver a la Academia
          </Link>

          <Link
            href="/products"
            className="rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
          >
            Ir a la tienda
          </Link>
        </div>
      </div>
    </main>
  );
}