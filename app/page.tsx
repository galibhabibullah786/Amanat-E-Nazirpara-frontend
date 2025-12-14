import HeroSection from "@/components/HeroSection";
import StatisticsSection from "@/components/StatisticsSection";
import CurrentCommitteeSection from "@/components/CurrentCommitteeSection";
import GalleryPreview from "@/components/GalleryPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <CurrentCommitteeSection />
      <GalleryPreview />
      <ContactSection />
    </main>
  );
}
