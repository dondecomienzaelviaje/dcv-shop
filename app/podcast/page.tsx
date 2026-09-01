import PodcastHero from "@/components/podcast/PodcastHero";
import PodcastAbout from "@/components/podcast/PodcastAbout";
import PodcastPlatforms from "@/components/podcast/PodcastPlatforms";
import PodcastCTA from "@/components/podcast/PodcastCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Conversaciones sobre disciplina, crecimiento personal y desarrollo profesional. Muy pronto en DCV Podcast.",
};

export default function PodcastPage() {
  return (
    <>
      <PodcastHero />
      <PodcastAbout />
      <PodcastPlatforms />
      <PodcastCTA />
    </>
  );
}