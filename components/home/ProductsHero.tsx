"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

// Mismas fotos del hero de inicio — mantiene la identidad visual entre
// Inicio y Tienda. Exportadas a 2400x1350px (16:9) en /public/images/hero/.
const slides = [
  {
    src: "/images/hero/botella.webp",
    alt: "Botellón DCV — Disciplina",
  },
  {
    src: "/images/pilares/mentalidad/focus-board-hero.webp",
    alt: "DCV Focus Board — Mentalidad",
  },
  {
    src: "/images/hero/libreta.webp",
    alt: "Agenda DCV 90 — Hábitos",
  },
  {
    src: "/images/pilares/crecimiento/dcv-progress-hero.webp",
    alt: "DCV Progress — Crecimiento",
  },
];

const INTERVAL_MS = 4000;

// Misma lista que antes vivía en CategoryFilter.tsx.
const categories = [
  "Todos",
  "Productividad",
  "Tecnología",
  "Home Office",
  "Hidratación",
  "Viajes",
  "Accesorios",
];

const sortOptions: { value: string; label: string }[] = [
  { value: "recent", label: "Más recientes" },
  { value: "price-asc", label: "Menor precio" },
  { value: "price-desc", label: "Mayor precio" },
  { value: "name-asc", label: "Nombre A-Z" },
  { value: "name-desc", label: "Nombre Z-A" },
];

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
};

export default function ProductsHero({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-black text-neutral-100">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-5xl flex-col justify-end px-6 pb-12 pt-24">
        <h1
          className="text-4xl font-semibold tracking-tight md:text-5xl"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
        >
          Productos
        </h1>
        <p
          className="mt-3 max-w-xl text-white/70 md:text-lg"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
        >
          Descubre nuestra selección de productos.
        </p>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Buscar productos..."
              className="w-full rounded-xl border border-white/10 bg-black/60 py-3 pl-11 pr-4 text-sm text-neutral-100 placeholder:text-neutral-400 backdrop-blur-sm focus:border-[#C8A04A] focus:outline-none"
            />
          </div>

          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-neutral-100 backdrop-blur-sm focus:border-[#C8A04A] focus:outline-none lg:w-56"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-black">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === selectedCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#C8A04A] text-black"
                    : "border border-white/10 bg-black/50 text-white backdrop-blur-sm hover:border-[#C8A04A] hover:text-[#C8A04A]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}