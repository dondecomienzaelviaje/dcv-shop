import Button from "./Button";

type ProductCardProps = {
  title: string;
  price: string;
};

export default function ProductCard({
  title,
  price,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl">

      {/* Imagen / Placeholder */}
      <div className="flex h-64 items-center justify-center bg-gradient-to-br from-neutral-800 to-black">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-500">
            DCV SHOP
          </p>

          <h3 className="mt-4 text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm text-gray-500">
            Imagen próximamente
          </p>
        </div>

      </div>

      {/* Información */}
      <div className="p-6">

        <p className="text-2xl font-bold text-yellow-500">
          {price}
        </p>

        <div className="mt-6">
          <Button>Comprar ahora</Button>
        </div>

      </div>

    </div>
  );
}