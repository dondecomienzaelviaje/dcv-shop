export const metadata = {
    title: "Política de Privacidad | DCV Shop",
    description:
      "Conoce cómo DCV Shop recopila, utiliza y protege tu información personal.",
  };
  
  export default function PoliticaPrivacidadPage() {
    return (
      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <span className="text-sm uppercase tracking-[0.3em] text-yellow-500">
              DCV SHOP
            </span>
  
            <h1 className="mt-4 text-5xl font-bold">
              Política de privacidad
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg text-zinc-400">
              En DCV Shop respetamos tu privacidad y nos comprometemos a proteger
              la información personal que compartes con nosotros.
            </p>
          </div>
        </section>
  
        <section className="mx-auto max-w-5xl space-y-8 px-6 py-20">
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Información que recopilamos
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Podemos recopilar información como nombre, correo electrónico,
              dirección de envío, teléfono e información necesaria para procesar
              tus pedidos y brindarte una mejor experiencia.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Uso de la información
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Utilizamos tu información para procesar pedidos, brindar soporte,
              mejorar nuestros servicios y comunicar información relacionada con
              tus compras.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Protección de tus datos
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Implementamos medidas de seguridad para proteger la información de
              nuestros clientes y evitar accesos no autorizados.
            </p>
          </div>
  
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold">
              Tus derechos
            </h2>
  
            <p className="mt-4 leading-8 text-zinc-400">
              Puedes solicitar la actualización, corrección o eliminación de tus
              datos personales escribiéndonos a contacto@dcvcorp.com, de acuerdo
              con la legislación aplicable.
            </p>
          </div>
  
        </section>
      </main>
    );
  }