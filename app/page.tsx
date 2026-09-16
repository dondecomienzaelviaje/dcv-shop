import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Benefits from "@/components/home/Benefits";
import Philosophy from "@/components/home/Philosophy";

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <TrustBar />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Philosophy />
    </main>
  );
}