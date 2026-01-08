import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import AddressForm from "./components/AddressForm";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TopMovingBanner from "./components/TopMovingBanner";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <BrowserRouter>
      <TopMovingBanner />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/Address" element={<AddressForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
