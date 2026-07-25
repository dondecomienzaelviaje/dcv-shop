import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Benefits from "@/components/home/Benefits";
import Philosophy from "@/components/home/Philosophy";

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Philosophy />
    </main>
  );
}