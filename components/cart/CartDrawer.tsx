"use client";

import { X, ShoppingCart } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <>
      {/* Fondo */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <aside className="fixed right-0 top-0 z-50 h-screen w-[420px] bg-neutral-950 shadow-2xl">

        <div className="flex items-center justify-between border-b border-neutral-800 p-6">

          <div className="flex items-center gap-3">
            <ShoppingCart className="text-yellow-500" />
            <h2 className="text-xl font-bold text-white">
              Mi carrito
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>

        </div>

        <div className="flex h-[80%] flex-col items-center justify-center text-center">

          <ShoppingCart
            size={70}
            className="text-yellow-500"
          />

          <h3 className="mt-6 text-2xl font-bold text-white">
            Tu carrito está vacío
          </h3>

          <p className="mt-3 max-w-xs text-gray-400">
            Agrega productos para comenzar tu viaje de disciplina.
          </p>

        </div>

      </aside>
    </>
  );
}