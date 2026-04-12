import "./styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RentalsPage from "./pages/RentalsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/resourcesPages/PortfolioPage";
import ExhibitionCalendarPage from "./pages/resourcesPages/ExhibitionCalendarPage";
import BlogPage from "./pages/resourcesPages/BlogPage";
import CareersPage from "./pages/resourcesPages/CareersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/exhibition-calendar" element={<ExhibitionCalendarPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

