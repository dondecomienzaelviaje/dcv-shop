import {
  Truck,
  ShieldCheck,
  PackageSearch,
  MessageCircle,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

type TrustItem = {
  icon: LucideIcon;
  title: string;
  detail: string;
};

const items: TrustItem[] = [
  {
    icon: Truck,
    title: "Envío rápido",
    detail: "Local 24–48 h · Internacional 7–20 días",
  },
  {
    icon: ShieldCheck,
    title: "Compra protegida",
    detail: "Pago 100% seguro",
  },
  {
    icon: PackageSearch,
    title: "Productos DCV",
    detail: "Objetos creados para acompañar tu proceso",
  },
  {
    icon: MessageCircle,
    title: "Atención directa",
    detail: "Te respondemos nosotros mismos",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {items.map(({ icon: Icon, title, detail }) => (
            <div
              key={title}
              className="flex items-start gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0A93A]/10">
                <Icon
                  className="h-5 w-5 text-[#F0A93A]"
                  strokeWidth={1.75}
                />
              </div>

              <div>
                <p className="text-sm font-medium leading-tight text-neutral-900">
                  {title}
                </p>

                <p className="mt-0.5 text-sm leading-tight text-neutral-500">
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