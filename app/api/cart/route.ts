import { NextResponse } from "next/server";
import { createShopifyCart } from "@/lib/cart";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { lines } = body;

    if (!Array.isArray(lines) || lines.length === 0) {
      return NextResponse.json(
        {
          error: "El carrito está vacío.",
        },
        {
          status: 400,
        }
      );
    }

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

    if (!result.cart?.checkoutUrl) {
      return NextResponse.json(
        {
          error:
            "Shopify no devolvió una URL de checkout.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      checkoutUrl: result.cart.checkoutUrl,
    });
  } catch (error) {
    console.error(
      "Error creando checkout:",
      error
    );

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