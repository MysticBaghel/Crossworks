import HeroSection from "../components/sections/home/HeroSection";
import TrustedPartnersSection from "../components/sections/home/TrustedPartnersSection";
import ExpertiseSection from "../components/sections/home/ExpertiseSection";
import ProductsSection from "../components/sections/home/ProductsSection";
import PortfolioSection from "../components/sections/home/PortfolioSection";
import GlobalPresenceSection from "../components/sections/home/GlobalPresenceSection";
import PresentationSection from "../components/sections/home/PresentationSection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedPartnersSection />
      <ExpertiseSection />
      <ProductsSection />
      <PortfolioSection />
      <GlobalPresenceSection />
      <PresentationSection />
      <Footer />
    </>
  );
}
