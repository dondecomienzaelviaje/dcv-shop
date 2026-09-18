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
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
          {optionName}
        </h3>

        <span className="text-sm text-zinc-500">
          Seleccionado:{" "}
          <span className="text-white">
            {selectedVariant.selectedOptions?.[0]?.value ||
              selectedVariant.title}
          </span>
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => {
          const active = variant.id === selectedVariant.id;

          const label =
            variant.selectedOptions?.[0]?.value ||
            variant.title;

          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onChange(variant)}
              disabled={!variant.availableForSale}
              aria-pressed={active}
              aria-label={`${optionName}: ${label}${
                !variant.availableForSale
                  ? " — agotado"
                  : ""
              }`}
              className={`relative rounded-xl border px-5 py-3 font-medium transition-all duration-200 ${
                active
                  ? "border-[#C8A04A] bg-[#C8A04A] text-black shadow-[0_0_0_1px_#C8A04A]"
                  : "border-zinc-700 bg-zinc-900 text-white hover:border-[#C8A04A] hover:bg-zinc-800"
              } ${
                !variant.availableForSale
                  ? "cursor-not-allowed opacity-40"
                  : ""
              }`}
            >
              {label}

              {!variant.availableForSale && (
                <span className="ml-2 text-xs">
                  Agotado
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}