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
};

export default function ProductCard({
  title,
  usdCents,
  image,
  handle,
  isNew = false,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A04A]/70 hover:shadow-2xl">

      {/* Imagen */}
      <Link href={`/products/${handle}`} className="block">
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

      {/* Información */}
      <div className="flex min-h-[230px] flex-col p-5">

        {/* Nombre */}
        <Link href={`/products/${handle}`}>
          <h3 className="line-clamp-2 min-h-[52px] text-base font-semibold leading-6 text-white transition-colors duration-200 hover:text-[#C8A04A]">
            {title}
          </h3>
        </Link>

        {/* Precio */}
        <div className="mt-3">
          <DualPrice usdCents={usdCents} />
        </div>

        {/* Botón */}
        <div className="mt-5">
          <Link href={`/products/${handle}`} className="block">
            <Button>
              Ver producto
            </Button>
          </Link>
        </div>

        {/* Métodos de pago */}
        <div className="mt-auto pt-5">
          <PaymentBadges className="justify-center" />
        </div>

      </div>
    </article>
  );
}