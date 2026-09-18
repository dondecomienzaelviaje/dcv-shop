import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    title: "Compra segura",
    description:
      "Realiza tu compra mediante métodos de pago disponibles y una experiencia diseñada para proteger tus datos durante el proceso.",
    icon: ShieldCheck,
  },
  {
    title: "Envío con seguimiento",
    description:
      "Recibe actualizaciones sobre el estado de tu pedido para que puedas seguir su recorrido hasta la entrega.",
    icon: Truck,
  },
  {
    title: "Compra con tranquilidad",
    description:
      "Si tu pedido llega defectuoso, incompleto, dañado o diferente al solicitado, puedes contactarnos para revisar tu caso.",
    icon: RotateCcw,
  },
  {
    title: "Atención directa",
    description:
      "¿Tienes alguna duda antes de comprar? Estamos disponibles para ayudarte y orientarte durante tu compra.",
    icon: MessageCircle,
  },
];

export default function Benefits() {
  return (
    <section className="bg-black py-24 text-white">
      <Container>
        <SectionTitle
          badge="¿POR QUÉ ELEGIR DCV SHOP?"
          title="Compra con confianza. Crece con propósito."
          description="Seleccionamos productos pensados para acompañarte en tu día a día, con una experiencia de compra clara, seguimiento de tus pedidos y atención directa."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="min-h-[380px] rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-yellow-500/10 p-5">
                  <Icon
                    size={38}
                    className="text-yellow-500"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-7 text-neutral-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}