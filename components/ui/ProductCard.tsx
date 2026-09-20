import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import DualPrice from "@/components/DualPrice";
import PaymentBadges from "./PaymentBadges";

type ProductCardProps = {
  title: string;
  usdCents: number;
  image: string;
  handle: string;
  isNew?: boolean;
  rating?: number | null;
  availableForSale?: boolean;
};

/**
 * Muestra 5 estrellas, rellenando doradas proporcionalmente al rating
 * (ej: 3.7/5 -> 3 estrellas llenas + la 4ta parcialmente rellena).
 */
function StarRating({ rating, size = "text-base" }: { rating: number; size?: string }) {
  const percentage = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <div className={`relative inline-flex leading-none ${size}`}>
      {/* Estrellas vacías (fondo) */}
      <div className="flex gap-0.5 text-neutral-700">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Estrellas doradas, recortadas según el % del rating */}
      <div
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-[#C8A04A]"
        style={{ width: `${percentage}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );
}

export default function ProductCard({
  title,
  usdCents,
  image,
  handle,
  isNew = false,
  rating = null,
  availableForSale = false,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A04A]/70 hover:shadow-2xl">
      <Link
        href={`/products/${handle}`}
        className="block"
      >
        <div className="relative h-64 overflow-hidden bg-white sm:h-72">
          {isNew && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-[#C8A04A] px-3 py-1 text-xs font-bold text-black">
              Nuevo
            </span>
          )}

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex min-h-[250px] flex-col p-5">
        <Link href={`/products/${handle}`}>
          <h3 className="line-clamp-2 min-h-[52px] text-base font-semibold leading-6 text-white transition-colors duration-200 hover:text-[#C8A04A]">
            {title}
          </h3>
        </Link>

        {rating !== null && (
          <div className="mt-3 flex items-center gap-2 text-sm">
            <StarRating rating={rating} />

            <span className="font-semibold text-white">
              {rating.toFixed(1)}
            </span>

            <span className="text-neutral-500">
              / 5
            </span>
          </div>
        )}

        <div className="mt-3">
          <DualPrice usdCents={usdCents} />
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              availableForSale
                ? "bg-emerald-400"
                : "bg-red-400"
            }`}
          />

          <span
            className={
              availableForSale
                ? "text-sm font-medium text-emerald-400"
                : "text-sm font-medium text-red-400"
            }
          >
            {availableForSale
              ? "En stock"
              : "Agotado"}
          </span>
        </div>

        <div className="mt-5">
          <Link
            href={`/products/${handle}`}
            className="block"
          >
            <Button>
              Ver producto
            </Button>
          </Link>
        </div>

        <div className="mt-auto pt-5">
          <PaymentBadges className="justify-center" />
        </div>
      </div>
    </article>
  );
}
