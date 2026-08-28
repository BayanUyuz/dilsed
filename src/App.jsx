import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PortfolioPage from "./Pages/PortfolioPage";
import TutorialsPage from "./Pages/TutorialsPage";
import LivePage from "./Pages/LivePage";
import KontaktPage from "./Pages/KontaktPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from "./Pages/ProfilePage";
import FavoritenPage from "./Pages/FavoritenPage";
import WarenkorbPage from "./Pages/WarenkorbPage";
import BestellungPage from "./Pages/BestellungPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import Impressum from "./Pages/Impressum";
import AGBPage from "./Pages/AGBPage";
import Footer from "./components/Footer";
import logoImg from "./assets/banner.png";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navigation({ cartCount }) {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Leistungen" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/tutorials", label: "Tutorials" },
    { path: "/live", label: "Live" },
    { path: "/bestellung", label: "Bestellung" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#03081e]/90 backdrop-blur-md border-b border-[#1e2942]/60 shadow-lg shadow-black/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <img 
            src={logoImg} 
            alt="DilSed Design Logo" 
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
          <span className="font-black text-lg tracking-wider text-white">
            DilSed <span className="text-[#7b96fc] text-xs block font-normal -mt-1">DESIGN</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "text-[#7b96fc] font-bold border-b-2 border-[#7b96fc] pb-1"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 text-slate-300">
          <Link to="/login" className="p-2 hover:bg-[#1e2942] hover:text-white rounded-xl transition-colors" aria-label="Anmelden">
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          <Link to="/favoriten" className="p-2 hover:bg-[#1e2942] hover:text-white rounded-xl transition-colors relative" aria-label="Favoriten">
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </Link>

          <Link to="/warenkorb" className="p-2 hover:bg-[#1e2942] hover:text-white rounded-xl transition-colors relative" aria-label="Warenkorb">
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#3b82f6] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productWithQty) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productWithQty.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === productWithQty.id
            ? { ...item, quantity: item.quantity + (productWithQty.quantity || 1) }
            : item
        );
      }
      return [...prevCart, { ...productWithQty, quantity: productWithQty.quantity || 1 }];
    });
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#03081e] text-white flex flex-col justify-between font-sans selection:bg-[#3b82f6] selection:text-white">
        <div>
          <Navigation cartCount={totalCartCount} />
          <Routes>
            <Route path="/" element={<LandingPage onAddToCart={handleAddToCart} />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/live" element={<LivePage />} />
            <Route path="/product/:id" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
            <Route path="/bestellung" element={<BestellungPage cart={cart} />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/favoriten" element={<FavoritenPage />} />
            <Route path="/warenkorb" element={<WarenkorbPage cart={cart} setCart={setCart} />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/agb" element={<AGBPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}