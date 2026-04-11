import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactHeroSection from "../components/sections/contact/ContactHeroSection";
import ContactFormSection from "../components/sections/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHeroSection />
      <ContactFormSection />
      <Footer />
    </>
  );
}
