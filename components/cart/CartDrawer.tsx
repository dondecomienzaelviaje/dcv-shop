"use client";

import { useState } from "react";

import Image from "next/image";

import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";

import DualPrice from "@/components/DualPrice";

import PaymentBadges from "@/components/ui/PaymentBadges";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  open,
  onClose,
}: Props) {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    try {
      setLoading(true);

      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lines: items.map((item) => ({
            merchandiseId: item.variantId,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data);
        alert("No fue posible crear el checkout.");
        return;
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  const subtotal = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  if (!open) return null;

  return (
    <>
      {/* Fondo */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
      />

      {/* Carrito */}
      <aside className="fixed right-0 top-0 z-[100] flex h-screen w-full max-w-[420px] flex-col bg-neutral-950 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 p-6">
          <div className="flex items-center gap-3">
            <ShoppingCart
              className="text-[#C8A04A]"
            />

            <h2 className="text-xl font-bold text-white">
              Mi carrito
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="text-gray-400 transition hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          /* Carrito vacío */
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
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
            {/* Productos */}
            <div className="flex-1 space-y-5 overflow-y-auto p-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-neutral-800 p-4"
                >
                  {/* Imagen */}
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Información */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <h4 className="line-clamp-2 font-bold text-white">
                      {item.title}
                    </h4>

                    <div className="mt-1">
                      <DualPrice
                        usdCents={Math.round(
                          item.price * 100
                        )}
                      />
                    </div>

                    {/* Cantidad */}
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(
                            item.variantId
                          )
                        }
                        aria-label="Disminuir cantidad"
                        className="rounded-lg bg-neutral-800 p-2 text-white transition hover:bg-neutral-700"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="w-8 text-center text-white">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(
                            item.variantId
                          )
                        }
                        aria-label="Aumentar cantidad"
                        className="rounded-lg bg-neutral-800 p-2 text-white transition hover:bg-neutral-700"
                      >
                        <Plus size={16} />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.variantId)
                        }
                        aria-label="Eliminar producto"
                        className="ml-auto text-red-500 transition hover:text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen */}
            <div className="border-t border-neutral-800 p-6">
              <div className="mb-5">
                <p className="text-sm font-medium uppercase tracking-wide text-neutral-400">
                  Subtotal
                </p>

                <div className="mt-1">
                  <DualPrice
                    usdCents={Math.round(
                      subtotal * 100
                    )}
                  />
                </div>
              </div>

              <PaymentBadges className="mb-4 justify-center" />

              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading}
                className="w-full rounded-xl bg-[#C8A04A] py-4 font-bold text-black transition hover:bg-[#D7AF56] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Redirigiendo..."
                  : "Finalizar compra"}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}