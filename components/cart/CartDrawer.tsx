"use client";

import Image from "next/image";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";

import { useCartStore } from "@/store/cartStore";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      <aside className="fixed right-0 top-0 z-50 flex h-screen w-[420px] flex-col bg-neutral-950 shadow-2xl">

        <div className="flex items-center justify-between border-b border-neutral-800 p-6">

          <div className="flex items-center gap-3">
            <ShoppingCart className="text-[#C8A04A]" />
            <h2 className="text-xl font-bold text-white">
              Mi carrito
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 transition hover:text-white"
          >
            <X size={24} />
          </button>

        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">

            <ShoppingCart
              size={70}
              className="text-[#C8A04A]"
            />

            <h3 className="mt-6 text-2xl font-bold text-white">
              Tu carrito está vacío
            </h3>

            <p className="mt-3 max-w-xs text-gray-400">
              Agrega productos para comenzar tu viaje.
            </p>

          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto p-6">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-neutral-800 p-4"
                >
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">

                    <h4 className="font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-[#C8A04A]">
                      {new Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                        maximumFractionDigits: 0,
                      }).format(item.price)}
                    </p>

                    <div className="mt-4 flex items-center gap-2">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="rounded-lg bg-neutral-800 p-2 hover:bg-neutral-700"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="w-8 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="rounded-lg bg-neutral-800 p-2 hover:bg-neutral-700"
                      >
                        <Plus size={16} />
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-red-500 hover:text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            <div className="border-t border-neutral-800 p-6">

              <div className="mb-6 flex justify-between text-lg font-bold">
                <span>Subtotal</span>

                <span className="text-[#C8A04A]">
                  {new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                    maximumFractionDigits: 0,
                  }).format(subtotal)}
                </span>

              </div>

              <button className="w-full rounded-xl bg-[#C8A04A] py-4 font-bold text-black transition hover:bg-[#D7AF56]">
                Finalizar compra
              </button>

            </div>
          </>
        )}

      </aside>
    </>
  );
}