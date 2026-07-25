import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

type ProductCardProps = {
  title: string;
  price: string;
  image: string;
  handle: string;
};

export default function ProductCard({
  title,
  price,
  image,
  handle,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A04A]">

      <Link href={`/products/${handle}`}>

        <div className="relative h-72 overflow-hidden bg-white">

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6 transition duration-500 group-hover:scale-105"
          />

        </div>

      </Link>

      <div className="space-y-5 p-6">

        <Link href={`/products/${handle}`}>
          <h3 className="line-clamp-2 min-h-[56px] cursor-pointer text-lg font-semibold text-white hover:text-[#C8A04A]">
            {title}
          </h3>
        </Link>

        <p className="text-3xl font-black text-[#C8A04A]">
          {price}
        </p>

        <Button>
          Comprar ahora
        </Button>

      </div>

    </article>
  );
}