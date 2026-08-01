import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shop.dcvcorp.com"),

  title: {
    default: "DCV Shop | Donde Comienza el Viaje",
    template: "%s | DCV Shop",
  },

  description:
    "Descubre productos de tecnología, hogar, fitness y bienestar cuidadosamente seleccionados por DCV Corporation.",

  keywords: [
    "DCV Shop",
    "DCV",
    "Tienda Online",
    "Tecnología",
    "Fitness",
    "Hogar",
    "Accesorios",
    "Colombia",
    "Donde Comienza el Viaje",
  ],

  authors: [
    {
      name: "DCV Corporation",
    },
  ],

  creator: "DCV Corporation",

  publisher: "DCV Corporation",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://shop.dcvcorp.com",
    siteName: "DCV Shop",
    title: "DCV Shop | Donde Comienza el Viaje",
    description:
      "Productos de tecnología, hogar, fitness y bienestar para ayudarte a construir una vida extraordinaria.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DCV Shop",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DCV Shop | Donde Comienza el Viaje",
    description:
      "Descubre productos cuidadosamente seleccionados por DCV Corporation.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}