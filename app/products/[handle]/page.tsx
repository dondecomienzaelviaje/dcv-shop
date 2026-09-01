import { getProduct } from "@/lib/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    handle: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  const description =
    product.description?.slice(0, 155) ??
    "Descubre este producto en DCV Shop.";

  return {
    title: product.title,
    description,
    openGraph: {
      title: product.title,
      description,
      images: product.featuredImage?.url
        ? [{ url: product.featuredImage.url }]
        : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  const product = await getProduct(handle);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        Producto no encontrado.
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="grid gap-16 lg:grid-cols-2">

        <ProductGallery
          images={product.images.nodes}
          title={product.title}
        />

        <ProductInfo
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.featuredImage?.url ?? ""}
          variants={product.variants.nodes}
        />

      </div>
    </main>
  );
}