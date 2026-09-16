// lib/currency.ts
//
// Conversión de USD (moneda real de cobro) a COP (solo referencia visual).
// El checkout de Shopify SIEMPRE cobra en USD — esto NO cambia el precio
// real, solo lo que se le muestra al cliente colombiano para que entienda
// a cuánto equivale antes de pagar.

const FALLBACK_USD_TO_COP = 3123.91;

const CACHE_MS = 1000 * 60 * 60 * 6; // 6 horas

type RateInfo = {
  rate: number;
  fetchedAt: number;
  isFallback: boolean;
};

let cachedRate: RateInfo | null = null;

/**
 * Obtiene la tasa USD→COP junto con metadata (cuándo se obtuvo,
 * si es un valor de respaldo). Usa caché en memoria por CACHE_MS.
 */
export async function getUsdToCopRate(): Promise<RateInfo> {
  if (cachedRate && Date.now() - cachedRate.fetchedAt < CACHE_MS) {
    return cachedRate;
  }

  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    const rate = data.rates?.COP;

    if (!rate || typeof rate !== "number") {
      throw new Error("Respuesta inválida de la API de tasas");
    }

    cachedRate = { rate, fetchedAt: Date.now(), isFallback: false };
    return cachedRate;
  } catch {
    cachedRate = {
      rate: FALLBACK_USD_TO_COP,
      fetchedAt: Date.now(),
      isFallback: true,
    };
    return cachedRate;
  }
}

export function usdCentsToCop(usdCents: number, rate: number): number {
  return Math.round((usdCents / 100) * rate);
}

export function formatUSD(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}