import { shopifyFetch } from "./shopify";

type DeliveryType = "local" | "international";

type ProductRating = number | null;

type ProductRatingCount = number | null;

type Metafield = {
  namespace: string;
  key: string;
  value: string;
  type: string;
};

type ShopifyProduct = {
  tags?: string[];

  metafields?: (Metafield | null)[];

  variants?: {
    nodes?: {
      availableForSale?: boolean;
      quantityAvailable?: number | null;
    }[];
  };

  [key: string]: any;
};

/**
 * Obtiene la calificación real del producto
 * desde Shopify / Judge.me.
 *
 * Metafield:
 * reviews.rating
 */
function getProductRating(
  metafields: ShopifyProduct["metafields"]
): ProductRating {
  const ratingMetafield = metafields?.find(
    (metafield) =>
      metafield !== null &&
      metafield.namespace === "reviews" &&
      metafield.key === "rating"
  );

  if (!ratingMetafield?.value) {
    return null;
  }

  try {
    // Shopify guarda el metafield tipo "rating" como JSON, y el valor
    // interno SIEMPRE viene como string, ej:
    // {"value":"3.5","scale_min":"1.0","scale_max":"5.0"}
    // (la Admin/Storefront API siempre serializa los valores como texto,
    // sin importar el tipo del metacampo).
    const parsed = JSON.parse(
      ratingMetafield.value
    );

    const numericValue = Number(
      parsed?.value
    );

    if (Number.isFinite(numericValue)) {
      return numericValue;
    }
  } catch {
    // Fallback por si algún día llega como número plano sin envoltura JSON
    const numericValue = Number(
      ratingMetafield.value
    );

    if (Number.isFinite(numericValue)) {
      return numericValue;
    }
  }

  return null;
}

/**
 * Obtiene el número real de calificaciones.
 *
 * Metafield:
 * reviews.rating_count
 */
function getProductRatingCount(
  metafields: ShopifyProduct["metafields"]
): ProductRatingCount {
  const ratingCountMetafield =
    metafields?.find(
      (metafield) =>
        metafield !== null &&
        metafield.namespace === "reviews" &&
        metafield.key === "rating_count"
    );

  if (!ratingCountMetafield?.value) {
    return null;
  }

  const count = Number(
    ratingCountMetafield.value
  );

  return Number.isFinite(count)
    ? count
    : null;
}

/**
 * Determina el tipo de entrega
 * según los tags de Shopify.
 */
function getDeliveryType(
  tags: string[] = []
): DeliveryType {
  return tags.includes("delivery-local")
    ? "local"
    : "international";
}

/**
 * Determina disponibilidad y cantidad total.
 */
function getAvailability(
  variants: ShopifyProduct["variants"]
) {
  const variantNodes =
    variants?.nodes ?? [];

  const availableVariants =
    variantNodes.filter(
      (variant) =>
        variant.availableForSale
    );

  const totalQuantity =
    variantNodes.reduce(
      (total, variant) =>
        total +
        (variant.quantityAvailable ?? 0),
      0
    );

  return {
    availableForSale:
      availableVariants.length > 0,

    totalQuantity,
  };
}

/**
 * Lista de productos.
 */
const PRODUCTS_QUERY = `
query GetProducts(
  $country: CountryCode!
) @inContext(country: $country) {

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

      metafields(
        identifiers: [
          {
            namespace: "reviews"
            key: "rating"
          }
          {
            namespace: "reviews"
            key: "rating_count"
          }
        ]
      ) {
        namespace
        key
        value
        type
      }

      variants(first: 50) {
        nodes {

          id
          title
          availableForSale
          quantityAvailable

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

/**
 * Producto individual.
 */
const PRODUCT_QUERY = `
query GetProduct(
  $handle: String!
  $country: CountryCode!
) @inContext(country: $country) {

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

    metafields(
      identifiers: [
        {
          namespace: "reviews"
          key: "rating"
        }
        {
          namespace: "reviews"
          key: "rating_count"
        }
      ]
    ) {
      namespace
      key
      value
      type
    }

    variants(first: 50) {
      nodes {

        id
        title
        availableForSale
        quantityAvailable

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

/**
 * Obtiene todos los productos.
 */
export async function getProducts(
  country: string = "CO"
) {
  const data = await shopifyFetch(
    PRODUCTS_QUERY,
    { country },
    country
  );

  return data.data.products.nodes.map(
    (product: ShopifyProduct) => {

      return {
        ...product,

        rating: getProductRating(
          product.metafields
        ),

        ratingCount:
          getProductRatingCount(
            product.metafields
          ),

        availability:
          getAvailability(
            product.variants
          ),

        deliveryType:
          getDeliveryType(
            product.tags ?? []
          ),
      };
    }
  );
}

/**
 * Obtiene solamente productos destacados.
 */
export async function getFeaturedProducts(
  country: string = "CO"
) {
  const products =
    await getProducts(country);

  return products.filter(
    (product: ShopifyProduct) =>
      product.tags?.includes("featured")
  );
}

/**
 * Obtiene un producto individual
 * mediante su handle de Shopify.
 */
export async function getProduct(
  handle: string,
  country: string = "CO"
) {
  const data = await shopifyFetch(
    PRODUCT_QUERY,
    { handle, country },
    country
  );

  const product =
    data.data.product;

  if (!product) {
    return null;
  }

  return {
    ...product,

    rating: getProductRating(
      product.metafields
    ),

    ratingCount:
      getProductRatingCount(
        product.metafields
      ),

    availability:
      getAvailability(
        product.variants
      ),

    deliveryType:
      getDeliveryType(
        product.tags ?? []
      ),
  };
}