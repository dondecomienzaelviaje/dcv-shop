import { Truck, ShieldCheck, PackageSearch, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Barra de confianza — va justo debajo del hero.
// Pensada para una tienda nueva sin historial de ventas todavía.
//
// Ajusta los 4 items según tus políticas reales antes de publicar:
// - envío: plazo o condición real (ej. "Envío en 24-48h" o "Envío gratis desde $X")
// - devoluciones: tu política real de cambios/devoluciones
// - pago: los métodos que realmente aceptas
// - catálogo: lo que mejor te represente (marcas, curaduría, variedad)

type TrustItem = {
  icon: LucideIcon;
  title: string;
  detail: string;
};

const items: TrustItem[] = [
  {
    icon: Truck,
    title: "Envío rápido",
    detail: "Entrega en 24–48 horas",
  },
  {
    icon: ShieldCheck,
    title: "Compra protegida",
    detail: "Pago 100% seguro",
  },
  {
    icon: PackageSearch,
    title: "Catálogo curado",
    detail: "Productos seleccionados",
  },
  {
    icon: MessageCircle,
    title: "Atención directa",
    detail: "Te respondemos nosotros mismos",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#F0A93A]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#F0A93A]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900 leading-tight">
                  {title}
                </p>
                <p className="text-sm text-neutral-500 leading-tight mt-0.5">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}