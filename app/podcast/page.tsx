import PodcastHero from "@/components/podcast/PodcastHero";
import PodcastAbout from "@/components/podcast/PodcastAbout";
import PodcastEpisodes from "@/components/podcast/PodcastEpisodes";
import PodcastPlatforms from "@/components/podcast/PodcastPlatforms";
import PodcastCTA from "@/components/podcast/PodcastCTA";

export default function PodcastPage() {
  return (
    <>
      <PodcastHero />
      <PodcastAbout />
      <PodcastEpisodes />
      <PodcastPlatforms />
      <PodcastCTA />
    </>
  );
}