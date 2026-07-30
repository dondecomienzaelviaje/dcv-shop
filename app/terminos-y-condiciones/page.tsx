export const metadata = {
    title: "Términos y Condiciones | DCV Shop",
    description:
      "Conoce los términos y condiciones de uso de DCV Shop.",
  };
  
  export default function TerminosCondicionesPage() {
    return (
      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <span className="text-sm uppercase tracking-[0.3em] text-[#C8A04A]">
              DCV SHOP
            </span>
  
            <h1 className="mt-4 text-5xl font-bold">
              Términos y condiciones
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg text-zinc-400">
              Al acceder y utilizar DCV Shop aceptas los presentes términos y
              condiciones. Nuestro objetivo es ofrecer una experiencia de compra
              transparente, segura y confiable.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-5xl space-y-8 px-6 py-20">
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Uso del sitio
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Al utilizar nuestro sitio web aceptas hacer un uso adecuado de la
              plataforma y proporcionar información veraz durante el proceso de
              compra.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Productos y disponibilidad
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Todos los productos publicados están sujetos a disponibilidad.
              DCV Shop podrá actualizar precios, descripciones e inventario sin
              previo aviso.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Pagos
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Todas las compras serán procesadas mediante las pasarelas de pago
              habilitadas por Shopify, garantizando un proceso seguro para
              nuestros clientes.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Propiedad intelectual
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Todo el contenido publicado en DCV Shop, incluyendo textos,
              imágenes, logotipos y elementos gráficos, pertenece a DCV
              Corporation o cuenta con la autorización correspondiente para su
              uso.
            </p>
          </div>
  
          <div className="rounded-3xl border border-[#C8A04A]/30 bg-gradient-to-br from-[#C8A04A]/10 to-black p-8">
            <h2 className="text-2xl font-bold">
              Contacto
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-300">
              Si tienes preguntas sobre estos términos y condiciones puedes
              comunicarte con nosotros en
              <span className="font-semibold text-[#C8A04A]">
                {" "}contacto@dcvcorp.com
              </span>.
            </p>
          </div>
  
        </section>
      </main>
    );
  }