export const metadata = {
  title: "Preguntas Frecuentes | DCV Shop",
  description:
    "Resuelve las dudas más comunes sobre compras, envíos, entregas, pagos y devoluciones en DCV Shop.",
};

const faqs = [
  {
    pregunta: "¿A dónde realizan envíos?",
    respuesta:
      "Realizamos envíos según la disponibilidad de cada producto y la ubicación del cliente. En la ficha de cada producto podrás consultar la modalidad de entrega disponible antes de realizar tu compra.",
  },

  {
    pregunta: "¿Tienen entrega local?",
    respuesta:
      "Sí. Algunos productos cuentan con inventario disponible para entrega local. Cuando esta opción está disponible, normalmente la entrega se realiza entre 24 y 48 horas, dependiendo de la ciudad, la hora de compra y la disponibilidad del servicio.",
  },

  {
    pregunta: "¿Cuánto tarda un envío internacional?",
    respuesta:
      "Los productos enviados internacionalmente tienen un tiempo estimado de entrega de 7 a 20 días hábiles. El tiempo puede variar según el destino, el proveedor, el transportista, temporadas de alta demanda y procesos aduaneros.",
  },

  {
    pregunta: "¿Cómo sé cuánto tardará mi producto?",
    respuesta:
      "La modalidad y el tiempo estimado de entrega se indican en la ficha de cada producto. Antes de comprar podrás consultar si el producto cuenta con entrega local o envío internacional y conocer su tiempo estimado.",
  },

  {
    pregunta: "¿Cuánto cuesta el envío?",
    respuesta:
      "Muchos de nuestros productos incluyen envío gratuito. Si un producto tiene un costo de envío adicional, este se mostrará durante el proceso de compra antes de finalizar el pedido.",
  },

  {
    pregunta: "¿Puedo comprar varios productos con diferentes tiempos de entrega?",
    respuesta:
      "Sí. Si tu pedido contiene productos con diferentes modalidades de entrega, es posible que sean enviados por separado y lleguen en momentos diferentes. El tiempo estimado correspondiente a cada producto se indicará durante el proceso de compra.",
  },

  {
    pregunta: "¿Cómo puedo hacer seguimiento a mi pedido?",
    respuesta:
      "Cuando el servicio de transporte proporcione información de seguimiento, recibirás los datos correspondientes para consultar el estado de tu pedido.",
  },

  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos los métodos de pago disponibles durante el proceso de compra mediante Shopify Payments y las pasarelas habilitadas para tu pedido.",
  },

  {
    pregunta: "¿Puedo devolver un producto?",
    respuesta:
      "Sí. Si el producto cumple las condiciones establecidas en nuestra política de devoluciones, podrás solicitar el proceso dentro del plazo correspondiente. Te recomendamos revisar nuestra política de devoluciones antes de realizar tu compra.",
  },

  {
    pregunta: "¿Cuánto tarda en procesarse mi pedido?",
    respuesta:
      "El tiempo de procesamiento depende del producto y de su modalidad de entrega. Los productos disponibles localmente pueden prepararse para entrega rápida, mientras que algunos productos enviados internacionalmente pueden requerir entre 1 y 3 días hábiles antes de ser despachados.",
  },

  {
    pregunta: "¿Los tiempos de entrega son exactos?",
    respuesta:
      "Los tiempos publicados son estimados y pueden variar por factores externos como alta demanda, días festivos, condiciones climáticas, operadores logísticos o procesos aduaneros.",
  },

  {
    pregunta: "¿Cómo puedo comunicarme con DCV Shop?",
    respuesta:
      "Puedes escribirnos en cualquier momento a contacto@dcvcorp.com. Nuestro equipo revisará tu solicitud y te responderá dentro de un plazo de 24 a 48 horas hábiles.",
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A04A]">
            DCV SHOP
          </span>

          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Todo lo que necesitas saber
            <span className="text-[#C8A04A]"> antes de comprar.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Resuelve tus dudas sobre entregas, envíos, pagos, pedidos y
            devoluciones antes de realizar tu compra.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-[#C8A04A]/60"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-lg font-semibold marker:hidden">
                <span>{faq.pregunta}</span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-[#C8A04A] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-6 pb-6">
                <p className="max-w-4xl leading-8 text-zinc-400">
                  {faq.respuesta}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-[#C8A04A]/30 bg-gradient-to-br from-[#C8A04A]/15 via-zinc-950 to-black p-10 text-center md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A04A]">
            ¿Tienes otra pregunta?
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Estamos aquí para ayudarte.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Si necesitas información sobre un producto, tu pedido o una
            modalidad de entrega, nuestro equipo puede ayudarte.
          </p>

          <a
            href="/contacto"
            className="mt-8 inline-flex rounded-xl bg-[#C8A04A] px-8 py-4 font-bold text-black transition hover:bg-[#D8B15A]"
          >
            Contactar a DCV Shop
          </a>
        </div>
      </section>
    </main>
  );
}