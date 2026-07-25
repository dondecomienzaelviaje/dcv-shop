import { shopifyFetch } from "./shopify";

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
  lines: {
    merchandiseId: string;
    quantity: number;
  }[]
) {
  const data = await shopifyFetch(
    CREATE_CART_MUTATION,
    {
      lines,
    }
  );

  return data.data.cartCreate;
}