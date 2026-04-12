import HeroSection from "@/components/HeroSection";
import RealHomeCookingSection from "@/components/RealHomeCookingSection";
import DishesSection from "@/components/DishesSection";
import WhySection from "@/components/WhySection";
import HowItFeelsSection from "@/components/HowItFeelsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <RealHomeCookingSection />
      <DishesSection />
      <WhySection />
      <HowItFeelsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
