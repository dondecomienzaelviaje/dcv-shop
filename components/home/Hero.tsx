export default function Hero() {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-500">
            DCV SHOP
          </p>
  
          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            La disciplina cambia destinos.
          </h1>
  
          <p className="mt-8 max-w-2xl text-lg text-gray-300">
            Productos diseñados para ayudarte a construir hábitos,
            disciplina y una vida extraordinaria.
          </p>
  
          <button className="mt-12 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
            Comienza tu viaje
          </button>
        </section>
      </main>
    );
  }