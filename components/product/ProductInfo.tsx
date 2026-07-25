"use client";

import { useCartStore } from "@/store/cartStore";

type Props = {
  id: string;
  variantId: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductInfo({
  id,
  variantId,
  title,
  description,
  price,
  image,
}: Props) {
  const addItem = useCartStore((state) => state.addItem);

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

      <button
        onClick={() =>
          addItem({
            id,
            variantId,
            title,
            price,
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