"use client";

import { useState } from "react";
import { Truck, MessageCircle } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import DualPrice from "@/components/DualPrice";
import PaymentBadges from "@/components/ui/PaymentBadges";
import VariantSelector, {
  type Variant,
} from "./VariantSelector";
import AddToCartToast from "@/components/ui/AddToCartToast";

type Props = {
  id: string;
  variants: Variant[];
  title: string;
  description: string;
  image: string;
};

export default function ProductInfo({
  id,
  variants,
  title,
  description,
  image,
}: Props) {
  const addItem = useCartStore(
    (state) => state.addItem
  );

  const openCart = useUIStore(
    (state) => state.openCart
  );

  const [selectedVariant, setSelectedVariant] =
    useState<Variant>(variants[0]);

  const [toastOpen, setToastOpen] = useState(false);

  const price = Number(
    selectedVariant.price.amount
  );

  const usdCents = Math.round(price * 100);

  const selectedImage =
    selectedVariant.image?.url ?? image;

  const whatsappNumber = "573136037290";

  const whatsappMessage = encodeURIComponent(
    `Hola, tengo una pregunta sobre el producto "${title}".`
  );

  return (
    <div>
      <h1 className="mb-6 text-5xl font-black">
        {title}
      </h1>

      <div className="mb-4">
        <DualPrice usdCents={usdCents} />
      </div>

      <div className="mb-8 flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-neutral-300">
        <Truck
          size={20}
          className="shrink-0 text-[#C8A04A]"
        />

        <span>
          Enviamos a Colombia y EE. UU. — Entrega estimada: 7 a 20 días hábiles
        </span>
      </div>

      <p className="mb-10 text-lg leading-8 text-zinc-300">
        {description}
      </p>

      <VariantSelector
        variants={variants}
        selectedVariant={selectedVariant}
        onChange={(variant) => {
          setSelectedVariant(variant);
        }}
      />

      <button
        type="button"
        disabled={!selectedVariant.availableForSale}
        onClick={() => {
          addItem({
            id,
            variantId: selectedVariant.id,
            title,
            price,
            currencyCode:
              selectedVariant.price.currencyCode,
            image: selectedImage,
          });

          setToastOpen(true);

          setTimeout(() => {
            setToastOpen(false);
          }, 4000);
        }}
        className="rounded-xl bg-[#C8A04A] px-10 py-4 font-bold text-black transition hover:bg-[#D7AF56] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {selectedVariant.availableForSale
          ? "Añadir al carrito"
          : "Agotado"}
      </button>

      <div className="mt-4">
        <PaymentBadges />
      </div>

      {/* Envío con seguimiento */}
      <div className="mt-5 flex items-start gap-3 text-sm text-neutral-300">
        <Truck
          size={20}
          className="mt-0.5 shrink-0 text-[#C8A04A]"
        />

        <div>
          <p className="font-semibold text-white">
            Envío con seguimiento
          </p>
          

          <p className="mt-1 text-neutral-400">
            Recibe actualizaciones sobre el estado de tu pedido hasta su entrega.
          </p>
        </div>
      </div>

      {/* Cambios y devoluciones */}
<div className="mt-5 flex items-start gap-3 text-sm text-neutral-300">
  <span
    className="mt-0.5 shrink-0 text-[20px] leading-none text-[#C8A04A]"
    aria-hidden="true"
  >
    ↩
  </span>

  <div>
    <p className="font-semibold text-white">
      Cambios y devoluciones
    </p>

    <p className="mt-1 text-neutral-400">
      Si tu pedido llega defectuoso, incompleto, dañado o diferente al solicitado,
      puedes contactarnos para revisar tu caso.
    </p>

    <a
      href="/devoluciones"
      className="mt-2 inline-block font-semibold text-[#C8A04A] transition hover:text-[#D7AF56]"
    >
      Consultar política de devoluciones →
    </a>
  </div>
</div>
      {/* Atención por WhatsApp */}
      <div className="mt-5 flex items-start gap-3 text-sm text-neutral-300">
        <MessageCircle
          size={20}
          className="mt-0.5 shrink-0 text-[#C8A04A]"
        />

        <div>
          <p className="font-semibold text-white">
            ¿Tienes alguna duda?
          </p>

          <p className="mt-1 text-neutral-400">
            Estamos aquí para ayudarte antes de tu compra.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-semibold text-[#C8A04A] transition hover:text-[#D7AF56]"
          >
            Hablar con nosotros por WhatsApp →
          </a>
        </div>
      </div>

      <AddToCartToast
        open={toastOpen}
        title={title}
        onViewCart={() => {
          setToastOpen(false);
          openCart();
        }}
      />
    </div>
  );
}