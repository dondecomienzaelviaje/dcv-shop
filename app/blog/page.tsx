import BlogHero from "@/components/blog/BlogHero";
import BlogAbout from "@/components/blog/BlogAbout";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogCTA from "@/components/blog/BlogCTA";

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