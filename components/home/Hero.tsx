"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

// Imágenes reales, servidas desde /public/images/hero/.
// Exportar cada foto a 2400x1350px (relación 16:9), mismo tamaño
// exacto en las 4 para que el fade no salte de tamaño entre slides.
const slides = [
  { src: "/images/hero/botella.webp", alt: "Botella térmica DCV — Disciplina" },
  { src: "/images/hero/difusor-aceite.webp", alt: "Difusor y aceite esencial DCV — Mentalidad" },
  { src: "/images/hero/libreta.webp", alt: "Agenda DCV 90 — Hábitos" },
  { src: "/images/hero/organizador.webp", alt: "Organizador de escritorio DCV — Éxito" },
];

const INTERVAL_MS = 4000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden bg-black text-neutral-100">
      {/* Imágenes en fade. object-contain: la foto completa siempre es
          visible, sin recortar el producto. */}
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Viñeta radial: oscurece los bordes de cada foto para que se
          fundan con el bg-black de la sección, sin importar el fondo
          real de la imagen (roca, madera, etc). */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Overlay muy sutil, solo para dar un poco de contraste abajo donde
          está el texto — el producto se ve casi sin filtro encima. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <h1
          className="text-4xl font-bold tracking-tight md:text-5xl"
          style={{ textShadow: "0 2px 16px rgba(0, 0, 0, 0.4)" }}
        >
          Donde comienza el viaje
        </h1>

        <p
          className="mt-3 text-base text-neutral-200 md:text-lg"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
        >
          4 pilares, 4 productos
        </p>

        <div className="mt-8">
          <Button href="/products">Explorar</Button>
        </div>

        {/* Indicadores */}
        <div className="mt-10 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setActive(index)}
              aria-label={`Ver ${slide.alt}`}
              className={`h-2 rounded-full transition-all ${
                index === active ? "w-6 bg-[#F0A93A]" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}