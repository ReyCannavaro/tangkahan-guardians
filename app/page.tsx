import Hero from "@/components/sections/Hero";
import TheWound from "@/components/sections/TheWound";
import TheTurn from "@/components/sections/TheTurn";
import CRUSystem from "@/components/sections/CRUSystem";
import Coexistence from "@/components/sections/Coexistence";
import ImpactStats from "@/components/sections/ImpactStats";
import StillLearning from "@/components/sections/StillLearning";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TheWound />
      <TheTurn />
      <CRUSystem />
      <Coexistence />
      <ImpactStats />
      <StillLearning />
      <CTASection />
      <Footer />
    </main>
  );
}
