"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import VariantSelector from "./VariantSelector";

type Variant = {
  id: string;
  title: string;
  availableForSale: boolean;

  selectedOptions: {
    name: string;
    value: string;
  }[];

  price: {
    amount: string;
    currencyCode: string;
  };

  image?: {
    url: string;
    altText?: string;
  } | null;
};

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
  const addItem = useCartStore((state) => state.addItem);

  const [selectedVariant, setSelectedVariant] =
    useState(variants[0]);

  const price = Number(selectedVariant.price.amount);

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
        onChange={setSelectedVariant}
      />

      <button
        onClick={() =>
          addItem({
            id,
            variantId: selectedVariant.id,
            title,
            price,
            image:
              selectedVariant.image?.url ??
              image,
          })
        }
        className="rounded-xl bg-[#C8A04A] px-10 py-4 font-bold text-black transition hover:bg-[#D7AF56]"
      >
        Añadir al carrito
      </button>
    </div>
  );
}