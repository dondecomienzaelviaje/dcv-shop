import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%)]" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.5em] text-yellow-500">
          DONDE COMIENZA EL VIAJE
        </p>

        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          La disciplina
          <br />
          cambia destinos.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Descubre herramientas, libros y productos diseñados para ayudarte a
          construir hábitos sólidos y alcanzar una vida extraordinaria.
        </p>

        <div className="mt-12 flex justify-center">
          <Button>Comienza tu viaje</Button>
        </div>
      </div>
    </section>
  );
}