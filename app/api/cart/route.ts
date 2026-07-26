import { NextResponse } from "next/server";
import { createShopifyCart } from "@/lib/cart";

export async function POST(request: Request) {
  try {
    const { lines } = await request.json();

    const result = await createShopifyCart(lines);

    if (result.userErrors.length > 0) {
      return NextResponse.json(
        {
          error: result.userErrors,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({
      checkoutUrl: result.cart.checkoutUrl,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Error creando el carrito.",
      },
      {
        status: 500,
      }
    );
  }
}