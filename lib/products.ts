import { shopifyFetch } from "./shopify";

const PRODUCTS_QUERY = `
query GetProducts($country: CountryCode!) @inContext(country: $country) {
  products(first: 100) {
    nodes {
      id
      title
      handle
      productType
      tags
      description
      createdAt

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

      variants(first: 50) {
        nodes {
          id
          title

          availableForSale

          selectedOptions {
            name
            value
          }

          price {
            amount
            currencyCode
          }

          image {
            url
            altText
          }
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
query GetProduct($handle: String!, $country: CountryCode!) @inContext(country: $country) {
  product(handle: $handle) {
    id
    title
    handle
    productType
    tags
    description
    createdAt

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

    variants(first: 50) {
      nodes {
        id
        title

        availableForSale

        selectedOptions {
          name
          value
        }

        price {
          amount
          currencyCode
        }

        image {
          url
          altText
        }
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

export async function getProducts(country: string = "CO") {
  const data = await shopifyFetch(PRODUCTS_QUERY, { country }, country);
  return data.data.products.nodes;
}

export async function getFeaturedProducts(country: string = "CO") {
  const products = await getProducts(country);

  return products.filter((product: any) =>
    product.tags?.includes("featured")
  );
}

export async function getProduct(handle: string, country: string = "CO") {
  const data = await shopifyFetch(PRODUCT_QUERY, { handle, country }, country);

  return data.data.product;
}