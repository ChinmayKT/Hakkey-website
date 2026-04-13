import HeroSection from "@/components/HeroSection";
import StoryNarrativeSections from "@/components/StoryNarrativeSections";
import RealHomeCookingSection from "@/components/RealHomeCookingSection";
import DishesSection from "@/components/DishesSection";
import WhySection from "@/components/WhySection";
import HowItFeelsSection from "@/components/HowItFeelsSection";
import PracticalNarrativeSections from "@/components/PracticalNarrativeSections";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StoryNarrativeSections />
      <RealHomeCookingSection />
      <PracticalNarrativeSections />
      <DishesSection />
      <WhySection />
      <HowItFeelsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
