"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";

type Product = {
  id: string;
  title: string;
  handle: string;
  featuredImage?: {
    url: string;
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({
  open,
  onClose,
}: Props) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", close);

    return () =>
      window.removeEventListener("keydown", close);
  }, [onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      return;
    }

    const timer = setTimeout(async () => {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`
      );

      const data = await res.json();

      setProducts(data);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      <div className="absolute left-1/2 top-24 w-full max-w-2xl -translate-x-1/2 rounded-3xl border border-white/10 bg-neutral-950 p-8">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Buscar productos
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black px-5 py-4">

          <Search size={20} />

          <input
            autoFocus
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Buscar..."
            className="w-full bg-transparent outline-none"
          />

        </div>

        <div className="mt-6 space-y-3 max-h-[420px] overflow-y-auto">

          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.handle}`}
              onClick={onClose}
              className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/5"
            >

              <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-white">

                <Image
                  src={
                    product.featuredImage?.url ??
                    "/placeholder-product.png"
                  }
                  alt={product.title}
                  fill
                  className="object-contain p-2"
                />

              </div>

              <div className="flex-1">

                <h3 className="font-semibold">
                  {product.title}
                </h3>

                <p className="text-[#C8A04A]">

                  {new Intl.NumberFormat(
                    "es-CO",
                    {
                      style: "currency",
                      currency: "COP",
                      maximumFractionDigits: 0,
                    }
                  ).format(
                    Number(
                      product.priceRange
                        .minVariantPrice.amount
                    )
                  )}

                </p>

              </div>

            </Link>
          ))}

          {query &&
            products.length === 0 && (
              <p className="py-8 text-center text-neutral-500">
                No se encontraron productos.
              </p>
            )}

        </div>

      </div>

    </div>
  );
}