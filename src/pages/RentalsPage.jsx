import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RentalsHeroSection from "../components/sections/rentals/RentalsHeroSection";
import RentalsCTASection from "../components/sections/rentals/RentalsCTASection";

export default function RentalsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      <Navbar />
      <RentalsHeroSection
        onSearch={setSearchQuery}
        onFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <RentalsCTASection />
      <Footer />  
    </>
  );
}
