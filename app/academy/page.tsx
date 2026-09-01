import AcademyHero from "@/components/academy/AcademyHero";
import AcademyAbout from "@/components/academy/AcademyAbout";
import AcademyPrograms from "@/components/academy/AcademyPrograms";
import AcademyMethod from "@/components/academy/AcademyMethod";
import AcademyCTA from "@/components/academy/AcademyCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academia",
  description:
    "Programas prácticos para desarrollar disciplina, productividad, liderazgo y crecimiento personal. Muy pronto en DCV Academy.",
};

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