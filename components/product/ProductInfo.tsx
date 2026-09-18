"use client";

import { useState } from "react";
import {
  Truck,
  MessageCircle,
  CheckCircle2,
  Info,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import DualPrice from "@/components/DualPrice";
import PaymentBadges from "@/components/ui/PaymentBadges";
import VariantSelector, {
  type Variant,
} from "./VariantSelector";
import AddToCartToast from "@/components/ui/AddToCartToast";

type DeliveryType = "local" | "international";

type Props = {
  id: string;
  variants: Variant[];
  title: string;
  description: string;
  image: string;
  deliveryType: DeliveryType;
};

function parseProductDescription(raw: string) {
  const NOTICE_MARKER = /IMPORTANT NOTICE/i;
  const FEATURES_MARKER = /Características/i;
  const IDEAL_MARKER = /Ideal para/i;

  let intro = raw;
  let featuresBlock = "";
  let idealForBlock = "";
  let noticeBlock = "";

  const noticeMatch = raw.match(NOTICE_MARKER);

  let beforeNotice = raw;

  if (
    noticeMatch &&
    noticeMatch.index !== undefined
  ) {
    beforeNotice = raw.slice(
      0,
      noticeMatch.index
    );

    noticeBlock = raw.slice(
      noticeMatch.index +
        noticeMatch[0].length
    );
  }

  const featuresMatch =
    beforeNotice.match(FEATURES_MARKER);

  if (
    featuresMatch &&
    featuresMatch.index !== undefined
  ) {
    intro = beforeNotice.slice(
      0,
      featuresMatch.index
    );

    const afterFeatures = beforeNotice.slice(
      featuresMatch.index +
        featuresMatch[0].length
    );

    const idealMatch =
      afterFeatures.match(IDEAL_MARKER);

    if (
      idealMatch &&
      idealMatch.index !== undefined
    ) {
      featuresBlock = afterFeatures.slice(
        0,
        idealMatch.index
      );

      idealForBlock = afterFeatures.slice(
        idealMatch.index +
          idealMatch[0].length
      );
    } else {
      featuresBlock = afterFeatures;
    }
  } else {
    intro = beforeNotice;
  }

  intro = intro
    .replace(/^Descripción\s*:?\s*/i, "")
    .trim();

  const features = featuresBlock
    .split("✅")
    .map((item) =>
      item
        .trim()
        .replace(/\.$/, "")
    )
    .filter(Boolean);

  const idealFor = idealForBlock
    .split(".")
    .map((item) => item.trim())
    .filter(Boolean);

  const technicalNotes = noticeBlock
    .split("•")
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    intro,
    features,
    idealFor,
    technicalNotes,
  };
}

export default function ProductInfo({
  id,
  variants,
  title,
  description,
  image,
  deliveryType,
}: Props) {
  const addItem = useCartStore(
    (state) => state.addItem
  );

  const openCart = useUIStore(
    (state) => state.openCart
  );

  const [selectedVariant, setSelectedVariant] =
    useState<Variant>(variants[0]);

  const [toastOpen, setToastOpen] =
    useState(false);

  const price = Number(
    selectedVariant.price.amount
  );

  const usdCents = Math.round(price * 100);

  const selectedImage =
    selectedVariant.image?.url ?? image;

  const isLocalDelivery =
    deliveryType === "local";

  const whatsappNumber = "573136037290";

  const whatsappMessage =
    encodeURIComponent(
      `Hola, tengo una pregunta sobre el producto "${title}".`
    );

  const {
    intro,
    features,
    idealFor,
    technicalNotes,
  } = parseProductDescription(description);

  return (
    <div>
      <h1 className="mb-6 text-5xl font-black">
        {title}
      </h1>

      <div className="mb-4">
        <DualPrice usdCents={usdCents} />
      </div>

      {/* INFORMACIÓN DE ENTREGA */}
      <div
        className={`mb-8 rounded-2xl border px-5 py-4 ${
          isLocalDelivery
            ? "border-emerald-500/30 bg-emerald-500/5"
            : "border-neutral-800 bg-neutral-900"
        }`}
      >
        <div className="flex items-start gap-3">
          <Truck
            size={22}
            className="mt-0.5 shrink-0 text-[#C8A04A]"
          />

          <div>
            <p className="font-bold text-white">
              {isLocalDelivery
                ? "Entrega local"
                : "Envío internacional"}
            </p>

            <p className="mt-1 text-sm leading-6 text-neutral-300">
              {isLocalDelivery ? (
                <>
                  Recíbelo normalmente en{" "}
                  <strong className="text-white">
                    24–48 horas
                  </strong>
                  .
                </>
              ) : (
                <>
                  Tiempo estimado de entrega:{" "}
                  <strong className="text-white">
                    7–20 días hábiles
                  </strong>
                  .
                </>
              )}
            </p>

            <p className="mt-2 text-xs leading-5 text-neutral-500">
              El tiempo puede variar según la
              ubicación, disponibilidad del
              producto y operador logístico.
            </p>
          </div>
        </div>
      </div>

      {/* DESCRIPCIÓN */}
      {intro && (
        <p className="mb-8 text-lg leading-8 text-zinc-300">
          {intro}
        </p>
      )}

      {/* CARACTERÍSTICAS */}
      {features.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#C8A04A]">
            Características
          </h2>

          <ul className="space-y-2">
            {features.map(
              (feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-base text-zinc-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#C8A04A]"
                  />

                  <span>
                    {feature}.
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* IDEAL PARA */}
      {idealFor.length > 0 && (
        <div className="mb-10">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#C8A04A]">
            Ideal para
          </h2>

          <div className="flex flex-wrap gap-2">
            {idealFor.map(
              (tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      )}

      {/* VARIANTES */}
      <VariantSelector
        variants={variants}
        selectedVariant={selectedVariant}
        onChange={(variant) => {
          setSelectedVariant(variant);
        }}
      />

      {/* AÑADIR AL CARRITO */}
      <button
        type="button"
        disabled={
          !selectedVariant.availableForSale
        }
        onClick={() => {
          addItem({
            id,
            variantId: selectedVariant.id,
            title,
            price,
            currencyCode:
              selectedVariant.price
                .currencyCode,
            image: selectedImage,

            // Guardamos la modalidad de entrega
            // junto con el producto en el carrito.
            deliveryType,
          });

          setToastOpen(true);

          setTimeout(() => {
            setToastOpen(false);
          }, 4000);
        }}
        className="w-full rounded-xl bg-[#C8A04A] px-10 py-4 font-bold text-black transition hover:bg-[#D7AF56] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {selectedVariant.availableForSale
          ? "Añadir al carrito"
          : "Agotado"}
      </button>

      {/* PAGOS */}
      <div className="mt-4">
        <PaymentBadges />
      </div>

      {/* NOTAS TÉCNICAS */}
      {technicalNotes.length > 0 && (
        <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-neutral-500">
            <Info size={14} />
            Notas técnicas
          </div>

          <ul className="space-y-1">
            {technicalNotes.map(
              (note, index) => (
                <li
                  key={index}
                  className="text-xs leading-relaxed text-neutral-500"
                >
                  • {note}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* SEGUIMIENTO */}
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
            Recibe actualizaciones sobre el
            estado de tu pedido hasta su
            entrega.
          </p>
        </div>
      </div>

      {/* DEVOLUCIONES */}
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
            Si tu pedido llega defectuoso,
            incompleto, dañado o diferente al
            solicitado, puedes contactarnos para
            revisar tu caso.
          </p>

          <a
            href="/devoluciones"
            className="mt-2 inline-block font-semibold text-[#C8A04A] transition hover:text-[#D7AF56]"
          >
            Consultar política de
            devoluciones →
          </a>
        </div>
      </div>

      {/* WHATSAPP */}
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
            Estamos aquí para ayudarte antes
            de tu compra.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-semibold text-[#C8A04A] transition hover:text-[#D7AF56]"
          >
            Hablar con nosotros por
            WhatsApp →
          </a>
        </div>
      </div>

      {/* TOAST */}
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