"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import VariantSelector, {
  type Variant,
} from "./VariantSelector";

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

  const [selectedVariant, setSelectedVariant] =
    useState<Variant>(variants[0]);

  const price = Number(
    selectedVariant.price.amount
  );

  const selectedImage =
    selectedVariant.image?.url ?? image;

  return (
    <div>
      <h1 className="mb-6 text-5xl font-black">
        {title}
      </h1>

      <p className="mb-8 text-3xl font-black text-[#C8A04A]">
        {new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
        }).format(price)}
      </p>

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
        onClick={() =>
          addItem({
            id,
            variantId: selectedVariant.id,
            title,
            price,
            image: selectedImage,
          })
        }
        className="rounded-xl bg-[#C8A04A] px-10 py-4 font-bold text-black transition hover:bg-[#D7AF56] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {selectedVariant.availableForSale
          ? "Añadir al carrito"
          : "Agotado"}
      </button>
    </div>
  );
}