export const metadata = {
    title: "Contacto | DCV Shop",
    description:
      "Ponte en contacto con DCV Shop. Estamos aquí para ayudarte con tus pedidos, productos y cualquier consulta.",
  };
  
  export default function ContactoPage() {
    return (
      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              DCV SHOP
            </span>
  
            <h1 className="mt-4 text-5xl font-bold">
              Contáctanos
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg text-zinc-400">
              Estamos aquí para ayudarte. Si tienes preguntas sobre un pedido,
              nuestros productos o cualquier aspecto de tu compra, estaremos
              encantados de atenderte.
            </p>
          </div>
        </section>
  
        {/* Contenido */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
  
          {/* Formulario */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
  
            <h2 className="mb-8 text-3xl font-semibold">
              Envíanos un mensaje
            </h2>
  
            <form className="space-y-6">
  
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Nombre completo
                </label>
  
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Correo electrónico
                </label>
  
                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Asunto
                </label>
  
                <input
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
              </div>
  
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Mensaje
                </label>
  
                <textarea
                  rows={6}
                  placeholder="Escribe aquí tu mensaje..."
                  className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-yellow-500"
                />
              </div>
  
              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-black transition hover:bg-yellow-400"
              >
                Enviar mensaje
              </button>
  
            </form>
  
          </div>
  
          {/* Información */}
          <div className="space-y-8">
  
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
  
              <h2 className="mb-6 text-3xl font-semibold">
                Información de contacto
              </h2>
  
              <div className="space-y-6">
  
                <div>
                  <p className="text-sm uppercase tracking-wide text-zinc-500">
                    Correo electrónico
                  </p>
  
                  <a
                    href="mailto:contacto@dcvcorp.com"
                    className="mt-2 block text-lg text-yellow-500 hover:underline"
                  >
                    contacto@dcvcorp.com
                  </a>
                </div>
  
                <div>
                  <p className="text-sm uppercase tracking-wide text-zinc-500">
                    Tiempo de respuesta
                  </p>
  
                  <p className="mt-2 text-zinc-300">
                    24 a 48 horas hábiles.
                  </p>
                </div>
  
                <div>
                  <p className="text-sm uppercase tracking-wide text-zinc-500">
                    Horario de atención
                  </p>
  
                  <p className="mt-2 text-zinc-300">
                    Lunes a viernes
                    <br />
                    8:00 a.m. – 6:00 p.m.
                  </p>
                </div>
  
              </div>
  
            </div>
  
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
  
              <h2 className="mb-6 text-3xl font-semibold">
                ¿En qué podemos ayudarte?
              </h2>
  
              <ul className="space-y-4 text-zinc-300">
  
                <li>✓ Estado de pedidos.</li>
  
                <li>✓ Información sobre productos.</li>
  
                <li>✓ Cambios y devoluciones.</li>
  
                <li>✓ Problemas con pagos.</li>
  
                <li>✓ Consultas generales.</li>
  
                <li>✓ Alianzas comerciales.</li>
  
              </ul>
  
            </div>
  
            <div className="rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-black p-8">
  
              <h3 className="text-2xl font-bold">
                Tu confianza es nuestra prioridad.
              </h3>
  
              <p className="mt-4 leading-8 text-zinc-300">
                En DCV Shop creemos que una excelente atención al cliente es tan
                importante como ofrecer productos de calidad.
              </p>
  
              <p className="mt-4 leading-8 text-zinc-300">
                Nuestro compromiso es responder cada consulta con respeto,
                transparencia y la mayor rapidez posible.
              </p>
  
              <p className="mt-6 font-semibold text-yellow-500">
                Gracias por confiar en DCV Corporation.
              </p>
  
            </div>
  
          </div>
  
        </section>
      </main>
    );
  }