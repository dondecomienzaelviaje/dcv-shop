"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  url: string;
  altText?: string | null;
};

type ProductGalleryProps = {
  images: GalleryImage[];
  title: string;
};

export default function ProductGallery({
  images,
  title,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images?.length) {
    return null;
  }

  return (
    <div className="space-y-5">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
        <Image
          key={images[selectedImage].url}
          src={images[selectedImage].url}
          alt={images[selectedImage].altText || title}
          fill
          priority
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-contain p-8"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={image.url}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square overflow-hidden rounded-2xl border-2 transition-all ${
              selectedImage === index
                ? "border-[#C8A04A]"
                : "border-transparent hover:border-zinc-600"
            }`}
          >
            <Image
              src={image.url}
              alt={image.altText || title}
              fill
              sizes="120px"
              className="object-contain bg-white p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}