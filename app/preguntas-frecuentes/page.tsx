export const metadata = {
    title: "Preguntas Frecuentes | DCV Shop",
    description:
      "Resuelve las dudas más comunes sobre compras, envíos, devoluciones y pedidos en DCV Shop.",
  };
  
  const faqs = [
    {
      pregunta: "¿Realizan envíos a todo Colombia?",
      respuesta:
        "Sí. Actualmente realizamos envíos a todo el territorio colombiano a través de nuestros operadores logísticos.",
    },
    {
      pregunta: "¿Cuánto tarda en llegar mi pedido?",
      respuesta:
        "El tiempo de entrega depende de la ciudad de destino y del proveedor. Generalmente los pedidos se entregan entre 5 y 15 días hábiles.",
    },
    {
      pregunta: "¿Cómo puedo hacer seguimiento a mi pedido?",
      respuesta:
        "Una vez el pedido sea despachado recibirás la información de seguimiento para consultar el estado de tu envío.",
    },
    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta:
        "Aceptamos los métodos de pago disponibles durante el proceso de compra mediante Shopify Payments y las pasarelas habilitadas.",
    },
    {
      pregunta: "¿Puedo devolver un producto?",
      respuesta:
        "Sí. Si el producto cumple las condiciones de nuestra política de devoluciones, podrás solicitar el proceso dentro de los tiempos establecidos.",
    },
    {
      pregunta: "¿Cómo puedo comunicarme con DCV Shop?",
      respuesta:
        "Puedes escribirnos en cualquier momento a contacto@dcvcorp.com y responderemos tu solicitud en un plazo de 24 a 48 horas hábiles.",
    },
  ];
  
  export default function PreguntasFrecuentesPage() {
    return (
      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              DCV SHOP
            </span>
  
            <h1 className="mt-4 text-5xl font-bold">
              Preguntas frecuentes
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg text-zinc-400">
              Encuentra respuestas a las preguntas más comunes sobre compras,
              envíos, pagos y devoluciones.
            </p>
          </div>
        </section>
  
        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-[#C8A04A]"
              >
                <h2 className="text-2xl font-semibold">
                  {faq.pregunta}
                </h2>
  
                <p className="mt-4 leading-8 text-zinc-400">
                  {faq.respuesta}
                </p>
              </div>
            ))}
          </div>
  
          <div className="mt-16 rounded-3xl border border-[#C8A04A]/30 bg-gradient-to-br from-[#C8A04A]/10 to-black p-8 text-center">
            <h2 className="text-3xl font-bold">
              ¿No encontraste la respuesta?
            </h2>
  
            <p className="mt-4 text-zinc-300">
              Nuestro equipo estará encantado de ayudarte.
            </p>
  
            <a
              href="/contacto"
              className="mt-8 inline-flex rounded-xl bg-[#C8A04A] px-8 py-4 font-semibold text-black transition hover:opacity-90"
            >
              Contactar a DCV Shop
            </a>
          </div>
        </section>
      </main>
    );
  }