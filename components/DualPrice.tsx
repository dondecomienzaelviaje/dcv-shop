"use client";

import { useEffect, useState } from "react";
import { getUsdToCopRate, usdCentsToCop, formatUSD, formatCOP } from "@/lib/currency";

type Props = {
  usdCents: number;
  showReference?: boolean;
};

function formatHoursAgo(fetchedAt: number): string {
  const minutes = Math.floor((Date.now() - fetchedAt) / 60000);

  if (minutes < 1) return "hace un momento";
  if (minutes < 60) return `hace ${minutes} min`;

  const hours = Math.floor(minutes / 60);
  return `hace ${hours} h`;
}

export default function DualPrice({ usdCents, showReference = true }: Props) {
  const [copAmount, setCopAmount] = useState<number | null>(null);
  const [fetchedAt, setFetchedAt] = useState<number | null>(null);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    if (!showReference) return;
    let cancelled = false;

    getUsdToCopRate().then(({ rate, fetchedAt, isFallback }) => {
      if (!cancelled) {
        setCopAmount(usdCentsToCop(usdCents, rate));
        setFetchedAt(fetchedAt);
        setIsFallback(isFallback);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [usdCents, showReference]);

  return (
    <div>
      <p className="text-xl font-semibold">{formatUSD(usdCents)}</p>

      {showReference && (
        <p className="mt-1 text-sm text-neutral-500">
          {copAmount !== null && fetchedAt !== null ? (
            <>
              ≈ {formatCOP(copAmount)} COP
              <span className="ml-1 text-neutral-400">
                · tasa {isFallback ? "de respaldo" : `actualizada ${formatHoursAgo(fetchedAt)}`}
              </span>
            </>
          ) : (
            "Calculando equivalencia en COP…"
          )}
        </p>
      )}
    </div>
  );
}