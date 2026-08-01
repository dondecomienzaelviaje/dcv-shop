"use client";

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
      className={`fixed right-6 top-24 z-[9999] transition-all duration-300 ${
        open
          ? "translate-y-0 opacity-100"
          : "-translate-y-5 pointer-events-none opacity-0"
      }`}
    >
      <div className="w-80 rounded-2xl border border-[#C8A04A] bg-neutral-950 p-5 shadow-2xl">
        <p className="font-bold text-[#C8A04A]">
          ✅ Producto añadido
        </p>

        <p className="mt-2 line-clamp-2 text-sm text-white">
          {title}
        </p>

        <button
          onClick={onViewCart}
          className="mt-4 w-full rounded-xl bg-[#C8A04A] py-3 font-bold text-black transition hover:bg-[#D7AF56]"
        >
          Ver carrito
        </button>
      </div>
    </div>
  );
}