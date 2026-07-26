import { NextResponse } from "next/server";
import { shopifyFetch } from "@/lib/shopify";

const SEARCH_PRODUCTS_QUERY = `
query SearchProducts($query: String!) {
  products(first: 8, query: $query) {
    nodes {
      id
      title
      handle
      productType

      featuredImage {
        url
        altText
      }

      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
}
`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json([]);
  }

  try {
    const data = await shopifyFetch(
      SEARCH_PRODUCTS_QUERY,
      {
        query: `title:*${q}*`,
      }
    );

    return NextResponse.json(
      data.data.products.nodes
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json([], {
      status: 500,
    });
  }
}