export const metadata = {
    title: "Envíos | DCV Shop",
    description: "Información sobre tiempos de entrega, costos y cobertura de envíos de DCV Shop.",
  };
  
  export default function EnviosPage() {
    return (
      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              DCV SHOP
            </span>
  
            <h1 className="mt-4 text-5xl font-bold">
              Información de envíos
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg text-zinc-400">
              Queremos que conozcas cómo funciona nuestro proceso de envío para que
              compres con total confianza.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-5xl px-6 py-20 space-y-8">
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">Cobertura</h2>
  
            <p className="mt-4 text-zinc-400 leading-8">
              Actualmente realizamos envíos a todo Colombia. Algunas zonas de difícil
              acceso pueden requerir tiempos adicionales de entrega.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">Tiempo de entrega</h2>
  
            <p className="mt-4 text-zinc-400 leading-8">
              Los pedidos suelen entregarse entre <strong>5 y 15 días hábiles</strong>,
              dependiendo del proveedor, la ciudad de destino y la disponibilidad del
              producto.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">Seguimiento del pedido</h2>
  
            <p className="mt-4 text-zinc-400 leading-8">
              Cuando tu pedido sea despachado recibirás la información de seguimiento
              para consultar el estado del envío.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">Costo del envío</h2>
  
            <p className="mt-4 text-zinc-400 leading-8">
              El valor del envío se calcula automáticamente durante el proceso de
              compra según el destino y las características del pedido.
            </p>
          </div>
  
        </section>
      </main>
    );
  }