import "./styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RentalsPage from "./pages/RentalsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

