import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Fondo */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,160,74,0.18),transparent_60%)]" />

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C8A04A]/5 blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.6em] text-[#C8A04A]">
          DONDE COMIENZA EL VIAJE
        </p>

        <h1 className="mx-auto max-w-5xl text-5xl font-black leading-[1.05] md:text-7xl lg:text-8xl">
          La disciplina
          <br />
          <span className="text-[#C8A04A]">
            cambia destinos.
          </span>
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-400 md:text-xl">
          Descubre libros, herramientas y productos creados para desarrollar
          disciplina, construir hábitos sólidos y convertirte en la mejor versión
          de ti mismo.
        </p>

        <div className="mt-14 flex justify-center">
          <Button>
            Comienza tu viaje
          </Button>
        </div>

      </div>

    </section>
  );
}