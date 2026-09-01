import BlogHero from "@/components/blog/BlogHero";
import BlogAbout from "@/components/blog/BlogAbout";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogCTA from "@/components/blog/BlogCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre disciplina, productividad, hábitos y crecimiento personal. Muy pronto en DCV Blog.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogAbout />
      <BlogCategories />
      <BlogCTA />
    </>
  );
}