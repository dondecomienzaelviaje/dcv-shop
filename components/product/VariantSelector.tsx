"use client";

export type Variant = {
  id: string;
  title: string;
  availableForSale: boolean;

  selectedOptions: {
    name: string;
    value: string;
  }[];

  price: {
    amount: string;
    currencyCode: string;
  };

  image?: {
    url: string;
    altText?: string | null;
  } | null;
};

type Props = {
  variants: Variant[];
  selectedVariant: Variant;
  onChange: (variant: Variant) => void;
};

export default function VariantSelector({
  variants,
  selectedVariant,
  onChange,
}: Props) {
  if (variants.length <= 1) {
    return null;
  }

  const optionName =
    variants[0]?.selectedOptions?.[0]?.name || "Opción";

  return (
    <div className="mb-10">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
        {optionName}
      </h3>

      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => {
          const active =
            variant.id === selectedVariant.id;

          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onChange(variant)}
              disabled={!variant.availableForSale}
              className={`rounded-xl border px-5 py-3 transition-all duration-300 ${
                active
                  ? "border-[#C8A04A] bg-[#C8A04A] text-black"
                  : "border-zinc-700 bg-zinc-900 text-white hover:border-[#C8A04A]"
              } ${
                !variant.availableForSale
                  ? "cursor-not-allowed opacity-40"
                  : ""
              }`}
            >
              {variant.selectedOptions?.[0]?.value ||
                variant.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}