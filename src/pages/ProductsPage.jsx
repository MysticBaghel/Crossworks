import { ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductsGridSection from "../components/sections/products/ProductsGridSection";
import ProductsCTASection from "../components/sections/products/ProductsCTASection";
import ProductsHeroSection from "../components/sections/products/ProductsHeroSection";


export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <ProductsHeroSection />
      <ProductsGridSection />
      <ProductsCTASection />
      <Footer />
    </>
  );
}
