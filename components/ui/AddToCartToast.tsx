"use client";

import Link from "next/link";

type Props = {
  open: boolean;
  title: string;
  onViewCart: () => void;
};

export default function AddToCartToast({
  open,
  title,
  onViewCart,
}: Props) {
  return (
    <div
      className={`fixed right-4 top-24 z-[9999] transition-all duration-300 sm:right-6 ${
        open
          ? "translate-y-0 opacity-100"
          : "-translate-y-5 pointer-events-none opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="w-[calc(100vw-2rem)] max-w-80 rounded-2xl border border-[#C8A04A]/60 bg-neutral-950 p-5 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8A04A]/10">
            <span className="text-lg">✓</span>
          </div>

          <div className="min-w-0">
            <p className="font-bold text-[#C8A04A]">
              Producto añadido
            </p>

            <p className="mt-1 line-clamp-2 text-sm leading-6 text-white">
              {title}
            </p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onViewCart}
            className="flex-1 rounded-xl bg-[#C8A04A] py-3 font-bold text-black transition hover:bg-[#D7AF56]"
          >
            Ver carrito
          </button>

          <Link
            href="/products"
            className="flex-1 rounded-xl border border-neutral-700 py-3 text-center text-sm font-semibold text-white transition hover:border-[#C8A04A] hover:text-[#C8A04A]"
          >
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}