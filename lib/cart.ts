import { shopifyFetch } from "./shopify";

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

  // Solo mandamos el atributo si el usuario está logueado.
  // Si no, el carrito se crea igual, sin este dato (compra como invitado).
  const attributes = dcvUserId
    ? [{ key: "dcv_user_id", value: dcvUserId }]
    : [];

  const data = await shopifyFetch(
    CREATE_CART_MUTATION,
    {
      lines: validLines,
      attributes,
    }
  );

  return data.data.cartCreate;
}