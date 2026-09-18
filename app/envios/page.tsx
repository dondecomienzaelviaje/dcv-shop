export default function EnviosPage() {
  return (
    <main className="bg-black text-white pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-black text-[#C8A04A] mb-8">
          Envíos y entrega
        </h1>

        <div className="space-y-10 text-neutral-300 leading-8">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Cobertura
            </h2>

            <p>
              DCV Shop ofrece diferentes opciones de entrega según el producto
              y la ubicación del cliente. La disponibilidad y el tiempo de
              entrega se muestran en la ficha de cada producto antes de realizar
              la compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Entrega local
            </h2>

            <p>
              Algunos productos cuentan con inventario disponible para entrega
              local. Estos productos pueden entregarse normalmente entre
              <strong className="text-white"> 24 y 48 horas</strong>, dependiendo
              de la ciudad, la hora de compra y la disponibilidad del servicio.
            </p>

            <p className="mt-4">
              Cuando un producto cuenta con entrega local, esta opción estará
              claramente identificada en su ficha de producto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Envío internacional
            </h2>

            <p>
              Algunos productos son enviados desde centros de distribución o
              proveedores internacionales. Para estos productos, el tiempo
              estimado de entrega normalmente es de
              <strong className="text-white"> 7 a 20 días hábiles</strong>.
            </p>

            <p className="mt-4">
              El tiempo puede variar según el destino, el proveedor, el
              transportista, temporadas de alta demanda, días festivos y
              procesos aduaneros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Tiempo de procesamiento
            </h2>

            <p>
              Una vez confirmado el pago, el pedido entra en proceso de
              preparación. El tiempo de procesamiento puede variar según el
              producto y su modalidad de entrega.
            </p>

            <p className="mt-4">
              Los productos de inventario local pueden procesarse para entrega
              rápida, mientras que los productos enviados internacionalmente
              pueden requerir entre <strong className="text-white">1 y 3 días
              hábiles</strong> antes de ser despachados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Costos de envío
            </h2>

            <p>
              Muchos de nuestros productos incluyen envío gratuito. Cuando un
              producto tenga un costo de envío adicional, este será mostrado
              durante el proceso de compra antes de finalizar el pedido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Seguimiento del pedido
            </h2>

            <p>
              Cuando el servicio de transporte proporcione información de
              seguimiento, recibirás los datos correspondientes para consultar
              el estado de tu pedido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Pedidos con diferentes modalidades de entrega
            </h2>

            <p>
              Si un pedido contiene productos con diferentes modalidades de
              entrega, estos pueden enviarse por separado y llegar en momentos
              diferentes.
            </p>

            <p className="mt-4">
              El tiempo estimado correspondiente a cada producto se indicará
              durante el proceso de compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Información importante
            </h2>

            <p>
              Los tiempos indicados son estimados y no constituyen una garantía
              de entrega en una fecha específica. Factores externos como
              condiciones climáticas, alta demanda, días festivos, operadores
              logísticos o procesos aduaneros pueden ocasionar retrasos.
            </p>

            <p className="mt-4">
              Para conocer el tiempo estimado de entrega de un producto
              específico, consulta la información mostrada directamente en su
              ficha antes de realizar la compra.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}