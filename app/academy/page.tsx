import AcademyHero from "@/components/academy/AcademyHero";
import AcademyAbout from "@/components/academy/AcademyAbout";
import AcademyPrograms from "@/components/academy/AcademyPrograms";
import AcademyMethod from "@/components/academy/AcademyMethod";
import AcademyCTA from "@/components/academy/AcademyCTA";

export default function AcademyPage() {
  return (
    <>
      <AcademyHero />
      <AcademyAbout />
      <AcademyPrograms />
      <AcademyMethod />
      <AcademyCTA />
    </>
  );
}