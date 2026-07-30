export const metadata = {
    title: "Devoluciones | DCV Shop",
    description:
      "Conoce nuestra política de devoluciones y reembolsos en DCV Shop.",
  };
  
  export default function DevolucionesPage() {
    return (
      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              DCV SHOP
            </span>
  
            <h1 className="mt-4 text-5xl font-bold">
              Política de devoluciones
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg text-zinc-400">
              Queremos que compres con tranquilidad. Si tu pedido presenta algún
              inconveniente, estaremos disponibles para ayudarte.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-5xl space-y-8 px-6 py-20">
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              ¿Cuándo puedo solicitar una devolución?
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Puedes comunicarte con nosotros si el producto llega defectuoso,
              incompleto, dañado o diferente al solicitado.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Proceso de revisión
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Nuestro equipo revisará cada caso para validar la información
              suministrada y ofrecer la mejor solución posible.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Reembolsos
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Cuando aplique un reembolso, este se realizará utilizando el mismo
              método de pago empleado durante la compra, de acuerdo con los
              tiempos establecidos por la plataforma de pago.
            </p>
          </div>
  
          <div className="rounded-3xl border border-[#C8A04A]/30 bg-gradient-to-br from-[#C8A04A]/10 to-black p-8">
            <h2 className="text-3xl font-bold">
              ¿Necesitas ayuda?
            </h2>
  
            <p className="mt-4 text-zinc-300">
              Escríbenos a <span className="text-[#C8A04A]">contacto@dcvcorp.com</span>
               y atenderemos tu caso lo antes posible.
            </p>
          </div>
  
        </section>
      </main>
    );
  }