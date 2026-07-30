import { shopifyFetch } from "./shopify";

const PRODUCTS_QUERY = `
query GetProducts {
  products(first: 100) {
    nodes {
      id
      title
      handle
      productType
      tags
      description

      featuredImage {
        url
        altText
      }

      images(first: 10) {
        nodes {
          url
          altText
        }
      }

      variants(first: 1) {
        nodes {
          id
          title
        }
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

const PRODUCT_QUERY = `
query GetProduct($handle: String!) {
  product(handle: $handle) {
    id
    title
    handle
    productType
    tags
    description

    featuredImage {
      url
      altText
    }

    images(first: 10) {
      nodes {
        url
        altText
      }
    }

    variants(first: 1) {
      nodes {
        id
        title
      }
    }

    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
  }
}
`;

export async function getProducts() {
  const data = await shopifyFetch(PRODUCTS_QUERY);
  return data.data.products.nodes;
}

export async function getFeaturedProducts() {
  const products = await getProducts();

  return products.filter((product: any) =>
    product.tags?.includes("featured")
  );
}

export async function getProduct(handle: string) {
  const data = await shopifyFetch(PRODUCT_QUERY, {
    handle,
  });

  return data.data.product;
}