import CommunityHero from "@/components/community/CommunityHero";
import CommunityAbout from "@/components/community/CommunityAbout";
import CommunityBenefits from "@/components/community/CommunityBenefits";
import CommunityActivities from "@/components/community/CommunityActivities";
import CommunityCTA from "@/components/community/CommunityCTA";

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