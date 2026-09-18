import { shopifyFetch } from "./shopify";

type ShopifyCartLine = {
  merchandiseId: string;
  quantity: number;
};

const CREATE_CART_MUTATION = `
mutation CreateCart($lines: [CartLineInput!]) {
  cartCreate(
    input: {
      lines: $lines
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
  lines: ShopifyCartLine[]
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

  const data = await shopifyFetch(
    CREATE_CART_MUTATION,
    {
      lines: validLines,
    }
  );

  return data.data.cartCreate;
}