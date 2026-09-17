// lib/shopifyAdmin.ts
//
// Cliente mínimo para el Admin API de Shopify usando Client Credentials
// Grant (flujo nuevo del Dev Dashboard, sin token fijo expuesto).

const STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN!;
const CLIENT_ID = process.env.SHOPIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET!;
const API_VERSION = "2026-07";
console.log("DEBUG →", { STORE_DOMAIN, CLIENT_ID });

type CachedToken = {
  token: string;
  expiresAt: number;
};

let cachedToken: CachedToken | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const res = await fetch(
    `https://${STORE_DOMAIN}/admin/oauth/access_token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "client_credentials",
      }).toString(),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`No fue posible obtener el token: ${text}`);
  }

  const data = await res.json();

  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return cachedToken.token;
}

async function shopifyAdminFetch(path: string, options: RequestInit = {}) {
  const token = await getAccessToken();

  const res = await fetch(
    `https://${STORE_DOMAIN}/admin/api/${API_VERSION}/${path}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": token,
        ...options.headers,
      },
    }
  );

  return res;
}

/**
 * Crea el cliente si no existe (por email), o lo actualiza para marcar
 * accepts_marketing: true si ya existía sin ese consentimiento.
 */
export async function subscribeCustomerToNewsletter(email: string) {
  const searchRes = await shopifyAdminFetch(
    `customers/search.json?query=${encodeURIComponent(`email:${email}`)}`
  );

  if (!searchRes.ok) {
    throw new Error(`Error buscando cliente: ${await searchRes.text()}`);
  }

  const searchData = await searchRes.json();
  const existing = searchData.customers?.[0];

  if (existing) {
    if (existing.accepts_marketing) {
      return { status: "already_subscribed" as const };
    }

    const updateRes = await shopifyAdminFetch(
      `customers/${existing.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          customer: {
            id: existing.id,
            accepts_marketing: true,
          },
        }),
      }
    );

    if (!updateRes.ok) {
      throw new Error(`Error actualizando cliente: ${await updateRes.text()}`);
    }

    return { status: "updated" as const };
  }

  const createRes = await shopifyAdminFetch("customers.json", {
    method: "POST",
    body: JSON.stringify({
      customer: {
        email,
        accepts_marketing: true,
        tags: "newsletter-footer",
      },
    }),
  });

  if (!createRes.ok) {
    throw new Error(`Error creando cliente: ${await createRes.text()}`);
  }

  return { status: "created" as const };
}