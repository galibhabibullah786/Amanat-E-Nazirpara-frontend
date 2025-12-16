import HeroSection from "@/components/home/HeroSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import CurrentCommitteeSection from "@/components/home/CurrentCommitteeSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactSection from "@/components/home/ContactSection";

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
