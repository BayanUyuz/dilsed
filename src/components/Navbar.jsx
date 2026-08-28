import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Heart } from "lucide-react";
import logoImg from "./assets/banner.png"; 

export default function Navbar({ cartCount = 0 }) {
  const location = useLocation();

  const navItems = [
    { name: "Leistungen", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Live", path: "/live" },
    { name: "Bestellung", path: "/bestellung" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <nav className="bg-[#050b1e]/90 backdrop-blur-md border-b border-blue-900/40 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <img 
            src={logoImg} 
            alt="DilSed Design Logo" 
            className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-wider leading-none group-hover:text-blue-400 transition-colors">
              DilSed
            </span>
            <span className="text-[9px] text-indigo-400 font-bold tracking-widest uppercase mt-0.5">
              Design & Media
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? "text-blue-400 border-b-2 border-blue-500 pb-1" : "text-slate-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

      
        <div className="flex items-center gap-4 text-slate-300">
          <Link to="/favoriten" className="hover:text-white transition-colors" aria-label="Favoriten">
            <Heart size={18} />
          </Link>
          <Link to="/login" className="hover:text-white transition-colors" aria-label="Benutzerkonto">
            <User size={18} />
          </Link>
          <Link to="/warenkorb" className="hover:text-white transition-colors relative" aria-label="Warenkorb">
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}