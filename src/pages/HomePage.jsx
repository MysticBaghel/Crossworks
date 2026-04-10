import HeroSection from "../components/sections/home/HeroSection";
import TrustedPartnersSection from "../components/sections/home/TrustedPartnersSection";
import ExpertiseSection from "../components/sections/home/ExpertiseSection";
import ProductsSection from "../components/sections/home/ProductsSection";
import PortfolioSection from "../components/sections/home/PortfolioSection";
import GlobalPresenceSection from "../components/sections/home/GlobalPresenceSection";
import PresentationSection from "../components/sections/home/PresentationSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedPartnersSection />
      <ExpertiseSection />
      <ProductsSection />
      <PortfolioSection />
      <GlobalPresenceSection />
      <PresentationSection />
    </>
  );
}
