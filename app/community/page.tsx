import CommunityHero from "@/components/community/CommunityHero";
import CommunityAbout from "@/components/community/CommunityAbout";
import CommunityBenefits from "@/components/community/CommunityBenefits";
import CommunityActivities from "@/components/community/CommunityActivities";
import CommunityCTA from "@/components/community/CommunityCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Un espacio para aprender, compartir experiencias y crecer junto a personas comprometidas con la disciplina. Muy pronto en DCV Community.",
};

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <CommunityAbout />
      <CommunityBenefits />
      <CommunityActivities />
      <CommunityCTA />
    </>
  );
}