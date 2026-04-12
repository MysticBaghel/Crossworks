import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicesHeroSection from "../components/sections/services/ServicesHeroSection";
import ServicesExpertiseSection from "../components/sections/services/ServicesExpertiseSection";
import ServicesProcessSection from "../components/sections/services/ServicesProcessSection";
import ServicesPoweredBySection from "../components/sections/services/ServicesPoweredBySection";
import ServicesCTASection from "../components/sections/services/ServicesCTASection";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHeroSection />
      <ServicesExpertiseSection />
      <ServicesProcessSection />
      <ServicesPoweredBySection />
      <ServicesCTASection />
      <Footer />
    </>
  );
}
