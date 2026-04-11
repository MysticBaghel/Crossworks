import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHeroSection from "../components/sections/about/AboutHeroSection";
import AboutPartnersSection from "../components/sections/about/AboutPartnersSection";
import AboutMissionSection from "../components/sections/about/AboutMissionSection";
import AboutJourneySection from "../components/sections/about/AboutJourneySection";
import AboutLifeSection from "../components/sections/about/AboutLifeSection";
import AboutCTASection from "../components/sections/about/AboutCTASection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <AboutPartnersSection />
      <AboutMissionSection />
      <AboutJourneySection />
      <AboutLifeSection />
      <AboutCTASection />
      <Footer />
    </>
  );
}
