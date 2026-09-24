import { shopifyFetch } from "./shopify";

// Valor fijo de Puntos DCV por cada unidad comprada.
const POINTS_PER_UNIT = 20;

type ShopifyCartLine = {
  merchandiseId: string;
  quantity: number;
};

const CREATE_CART_MUTATION = `
mutation CreateCart($lines: [CartLineInput!], $attributes: [AttributeInput!]) {
  cartCreate(
    input: {
      lines: $lines
      attributes: $attributes
    }
  ) {
    cart {
      id
      checkoutUrl
    }

    userErrors {
      field
      message
    }
  }
}
`;

export async function createShopifyCart(
  lines: ShopifyCartLine[],
  dcvUserId?: string | null
) {
  const validLines = lines.filter(
    (line) =>
      typeof line.merchandiseId === "string" &&
      line.merchandiseId.length > 0 &&
      Number.isInteger(line.quantity) &&
      line.quantity > 0
  );

  if (validLines.length === 0) {
    throw new Error(
      "No hay productos válidos en el carrito."
    );
  }

  // Solo mandamos los atributos si el usuario está logueado.
  // Si no, el carrito se crea igual, sin estos datos (compra como invitado).
  let attributes: { key: string; value: string }[] = [];

  if (dcvUserId) {
    const totalUnits = validLines.reduce(
      (total, line) => total + line.quantity,
      0
    );
    const pointsEarned = totalUnits * POINTS_PER_UNIT;

    attributes = [
      { key: "dcv_user_id", value: dcvUserId },
      { key: "dcv_points_earned", value: String(pointsEarned) },
    ];
  }

  const data = await shopifyFetch(
    CREATE_CART_MUTATION,
    {
      lines: validLines,
      attributes,
    }
  );

  return data.data.cartCreate;
}