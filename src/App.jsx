import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
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

const products = [
  { id: 1, title: "Logo Design Basic", category: "Logo-Design" },
  { id: 2, title: "Logo Design Pro", category: "Logo-Design" },
  { id: 3, title: "Logo Design Business", category: "Logo-Design" },
  { id: 4, title: "Logo Design Premium", category: "Logo-Design" },
  { id: 5, title: "Logo Design Ultimate", category: "Logo-Design" },
  { id: 6, title: "Traumlogo Starter", category: "Traumlogos" },
  { id: 7, title: "Traumlogo Advanced", category: "Traumlogos" },
  { id: 8, title: "Traumlogo Pro", category: "Traumlogos" },
  { id: 9, title: "Traumlogo VIP", category: "Traumlogos" },
  { id: 10, title: "Grafik Banner Set", category: "Grafik-Design" },
  { id: 11, title: "Grafik Illustration", category: "Grafik-Design" },
  { id: 12, title: "Grafik Artwork", category: "Grafik-Design" },
  { id: 13, title: "Grafik Poster Design", category: "Grafik-Design" },
  { id: 14, title: "Grafik Flyer Design", category: "Grafik-Design" },
  { id: 15, title: "Grafik Branding Pack", category: "Grafik-Design" },
  { id: 16, title: "Grafik Digital Art", category: "Grafik-Design" },
  { id: 17, title: "Grafik Print Design", category: "Grafik-Design" },
  { id: 18, title: "Grafik Custom", category: "Grafik-Design" },
  { id: 19, title: "Twitch Stream Kit", category: "Social-Media-Kits" },
  { id: 20, title: "Social Media Starter", category: "Social-Media-Kits" },
  { id: 21, title: "Full Channel Pack", category: "Social-Media-Kits" }
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Navigation({ cartCount }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredProducts = searchQuery.trim() 
    ? products.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleSelectProduct = (id) => {
    setSearchQuery("");
    setIsOpen(false);
    navigate(`/product/${id}`);
  };

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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
          <img 
            src={logoImg} 
            alt="DilSed Design Logo" 
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
          <span className="font-black text-lg tracking-wider text-white hidden sm:block">
            DilSed <span className="text-[#7b96fc] text-xs block font-normal -mt-1">DESIGN</span>
          </span>
        </Link>

        <div className="relative flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Produkte global suchen..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              className="w-full bg-[#1e2942]/50 border border-[#1e2942] rounded-full py-2 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-[#3b82f6] outline-none transition-all"
            />
            <svg className="w-4 h-4 fill-none stroke-slate-500 stroke-2 absolute left-3.5 top-1/2 -translate-y-1/2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {isOpen && filteredProducts.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1e2942] border border-[#3b82f6]/30 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-60 overflow-y-auto">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelectProduct(p.id)}
                  className="px-4 py-3 text-xs text-white hover:bg-[#3b82f6]/20 cursor-pointer border-b border-[#03081e]/30 flex items-center justify-between transition-colors"
                >
                  <span className="font-medium">{p.title}</span>
                  <span className="text-[10px] text-[#7b96fc] bg-[#03081e] px-2 py-0.5 rounded-full">{p.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <nav className="hidden xl:flex items-center gap-8 shrink-0">
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

        <div className="flex items-center gap-2 text-slate-300 shrink-0">
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
            <Route path="/bestellung" element={<BestellungPage cart={cart} onAddToCart={handleAddToCart} />} />
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