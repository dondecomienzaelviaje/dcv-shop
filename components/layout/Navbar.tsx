"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import CartDrawer from "@/components/cart/CartDrawer";
import Logo from "./Logo";

import { navigation } from "@/data/navigation";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 border-b border-neutral-800/50 bg-black/80 backdrop-blur-xl">
        <Container>
          <div className="flex h-24 items-center justify-between">

            {/* Logo */}
            <Logo />

            {/* Menú Desktop */}
            <nav className="hidden items-center gap-10 text-sm font-medium uppercase tracking-wider md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition duration-300 hover:text-[#C8A04A]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Acciones */}
            <div className="flex items-center gap-6">

              {/* Menú Mobile */}
              <button
                onClick={() => setMenuOpen(true)}
                className="transition hover:text-[#C8A04A] md:hidden"
              >
                <Menu size={28} />
              </button>

              {/* Buscar */}
              <button className="transition hover:text-[#C8A04A]">
                <Search size={22} />
              </button>

              {/* Carrito */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative transition hover:text-[#C8A04A]"
              >
                <ShoppingCart size={24} />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A04A] text-xs font-bold text-black">
                  {items.length}
                </span>
              </button>

            </div>

          </div>
        </Container>
      </header>

      {/* ================= CARRITO ================= */}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {/* ================= MENÚ MOBILE ================= */}

      {menuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">

          {/* Fondo */}
          <div
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <div className="absolute left-0 top-0 h-full w-80 border-r border-neutral-800 bg-neutral-950 p-8 shadow-2xl">

            {/* Encabezado */}
            <div className="mb-10 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-black text-[#C8A04A]">
                  DCV
                </h2>

                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Donde Comienza el Viaje
                </p>

                <div className="my-8 h-px w-full bg-gradient-to-r from-[#C8A04A] via-[#E6C36A] to-transparent" />

              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-neutral-400 transition hover:text-white"
              >
                <X size={28} />
              </button>

            </div>

            {/* Navegación */}
            <nav className="flex flex-col gap-3">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-4 text-base font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/5 hover:text-[#C8A04A]"
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            {/* Botón */}
            <div className="mt-12">

              <button className="w-full rounded-xl bg-[#C8A04A] py-4 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-[#D7AF56]">
                Comenzar el viaje
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}