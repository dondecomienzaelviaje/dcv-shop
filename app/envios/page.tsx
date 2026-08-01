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
              Actualmente DCV Shop realiza envíos principalmente a Estados
              Unidos. La disponibilidad de envío puede variar según el
              producto y la ubicación del cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Tiempo de procesamiento
            </h2>

            <p>
              Una vez confirmado el pago, el pedido entra en proceso de
              preparación. Este proceso normalmente toma entre 1 y 3 días
              hábiles antes de ser despachado por el proveedor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Tiempo de entrega
            </h2>

            <p>
              Los tiempos de entrega dependen del proveedor y del destino.
              En la mayoría de los casos los pedidos son entregados entre
              7 y 20 días hábiles.
            </p>

            <p className="mt-4">
              En temporadas de alta demanda, festivos o procesos
              aduaneros, el tiempo de entrega puede extenderse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Costos de envío
            </h2>

            <p>
              Muchos de nuestros productos incluyen envío gratuito.
              Cuando un producto tenga un costo de envío adicional,
              este será mostrado durante el proceso de compra antes
              de finalizar el pedido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Seguimiento del pedido
            </h2>

            <p>
              Una vez el pedido sea despachado, recibirás un número de
              seguimiento para consultar el estado del envío cuando el
              proveedor lo tenga disponible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Información importante
            </h2>

            <p>
              DCV Shop trabaja con proveedores internacionales cuidadosamente
              seleccionados para ofrecer productos de alta calidad. Por esta
              razón, algunos pedidos pueden enviarse directamente desde el país
              de origen del proveedor.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}