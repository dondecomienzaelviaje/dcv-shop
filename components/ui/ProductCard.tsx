import Image from "next/image";
import Button from "./Button";

type ProductCardProps = {
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black transition-all duration-500 hover:-translate-y-3 hover:border-[#C8A04A] hover:shadow-[0_0_40px_rgba(200,160,74,0.18)]">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="space-y-6 p-7">

        <h3 className="text-2xl font-black text-white">
          {title}
        </h3>

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