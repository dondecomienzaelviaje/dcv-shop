export function formatPrice(amount: number | string, currencyCode: string = "USD") {
  const numericAmount = typeof amount === "string" ? Number(amount) : amount;

  return new Intl.NumberFormat(
    currencyCode === "COP" ? "es-CO" : "en-US",
    {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: currencyCode === "COP" ? 0 : 2,
      maximumFractionDigits: currencyCode === "COP" ? 0 : 2,
    }
  ).format(numericAmount);
}