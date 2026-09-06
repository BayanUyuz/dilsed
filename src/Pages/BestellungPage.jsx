import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Tag, ArrowRight, Star, Layers3, Palette, LayoutGrid } from "lucide-react";

const products = [
  { id: 1, title: "Logo Design Basic", price: 149.00, category: "Logo-Design", img: "https://i.imgur.com/gyaXWoQ.png", rating: 5 },
  { id: 2, title: "Logo Design Pro", price: 179.00, category: "Logo-Design", img: "https://i.imgur.com/66v67gl.png", rating: 5 },
  { id: 3, title: "Logo Design Business", price: 199.00, category: "Logo-Design", img: "https://i.imgur.com/WbqsurH.png", rating: 4 },
  { id: 4, title: "Logo Design Premium", price: 249.00, category: "Logo-Design", img: "https://i.imgur.com/3M8GaBg.png", rating: 5 },
  { id: 5, title: "Logo Design Ultimate", price: 299.00, category: "Logo-Design", img: "https://i.imgur.com/9lcehSj.png", rating: 5 },

  { id: 6, title: "Traumlogo Starter", price: 299.00, category: "Traumlogos", img: "https://i.imgur.com/sJmTVlt.png", rating: 5 },
  { id: 7, title: "Traumlogo Advanced", price: 349.00, category: "Traumlogos", img: "https://i.imgur.com/BRWoKUf.png", rating: 5 },
  { id: 8, title: "Traumlogo Pro", price: 399.00, category: "Traumlogos", img: "https://i.imgur.com/XV11w14.png", rating: 5 },
  { id: 9, title: "Traumlogo VIP", price: 499.00, category: "Traumlogos", img: "https://i.imgur.com/9VGcXtk.png", rating: 5 },

  { id: 10, title: "Grafik Banner Set", price: 49.00, category: "Grafik-Design", img: "https://i.imgur.com/QkXRFQz.png", rating: 4 },
  { id: 11, title: "Grafik Illustration", price: 59.00, category: "Grafik-Design", img: "https://i.imgur.com/qwfVPPe.png", rating: 5 },
  { id: 12, title: "Grafik Artwork", price: 69.00, category: "Grafik-Design", img: "https://i.imgur.com/WaOohA1.png", rating: 5 },
  { id: 13, title: "Grafik Poster Design", price: 79.00, category: "Grafik-Design", img: "https://i.imgur.com/VtBzU2u.png", rating: 4 },
  { id: 14, title: "Grafik Flyer Design", price: 89.00, category: "Grafik-Design", img: "https://i.imgur.com/1wPZTRN.png", rating: 5 },
  { id: 15, title: "Grafik Branding Pack", price: 99.00, category: "Grafik-Design", img: "https://i.imgur.com/jNavC8C.png", rating: 5 },
  { id: 16, title: "Grafik Digital Art", price: 109.00, category: "Grafik-Design", img: "https://i.imgur.com/c69acMt.png", rating: 5 },
  { id: 17, title: "Grafik Print Design", price: 119.00, category: "Grafik-Design", img: "https://i.imgur.com/LJrVxEn.png", rating: 4 },
  { id: 18, title: "Grafik Custom", price: 129.00, category: "Grafik-Design", img: "https://i.imgur.com/sSqANcP.png", rating: 5 },

  { id: 19, title: "Twitch Stream Kit", price: 129.00, category: "Social-Media-Kits", img: "https://i.imgur.com/MkB4hD7.png", rating: 5 },
  { id: 20, title: "Social Media Starter", price: 179.00, category: "Social-Media-Kits", img: "https://i.imgur.com/8BE8OOK.png", rating: 5 },
  { id: 21, title: "Full Channel Pack", price: 249.00, category: "Social-Media-Kits", img: "https://i.imgur.com/ORs738E.png", rating: 5 }
];

const categories = [
  { name: "Alle", icon: LayoutGrid },
  { name: "Logo-Design", icon: Layers3 },
  { name: "Traumlogos", icon: Palette },
  { name: "Grafik-Design", icon: Tag },
  { name: "Social-Media-Kits", icon: ShoppingCart }
];

export default function BestellungPage({ onAddToCart }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");
  const [quickSearch, setQuickSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Alle" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleGlobalSearchSubmit = (e) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      const found = products.find(p => p.title.toLowerCase().includes(quickSearch.toLowerCase().trim()));
      if (found) {
        navigate(`/produkt/${found.id}`);
      } else {
        setSearchTerm(quickSearch);
      }
    }
  };

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-12 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-[#1e2942]/40 border border-[#1e2942] p-4 rounded-2xl mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold text-slate-300">Globaler Schnellfinder:</span>
          <form onSubmit={handleGlobalSearchSubmit} className="relative w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Produkt direkt suchen & öffnen..."
              value={quickSearch}
              onChange={(e) => {
                setQuickSearch(e.target.value);
                setSearchTerm(e.target.value);
              }}
              className="w-full bg-[#03081e] border border-[#1e2942] rounded-full py-2 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-[#3b82f6] outline-none"
            />
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          </form>
        </div>

        <div className="flex items-center justify-between mb-12 border-b border-[#1e2942] pb-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">Design Bestellen</h1>
            <p className="text-slate-400 mt-1 text-sm">Wähle deine gewünschte Kategorie und starte dein Projekt.</p>
          </div>
          <Link to="/warenkorb" className="relative group bg-[#1e2942] hover:bg-[#25365e] p-4 rounded-2xl border border-slate-700 transition-all duration-300">
            <ShoppingCart className="w-6 h-6 text-[#7b96fc]" />
            <span className="absolute -top-2 -right-2 bg-[#3b82f6] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
              0
            </span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 bg-[#1e2942]/30 p-4 rounded-2xl border border-[#1e2942]">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-[#3b82f6] text-white border-[#3b82f6] shadow-lg shadow-[#3b82f6]/20"
                      : "bg-[#03081e]/50 text-slate-300 border-[#1e2942] hover:border-[#3b82f6] hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              placeholder="Produkte suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#03081e] border border-[#1e2942] rounded-full py-2.5 pl-11 pr-4 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] outline-none transition-all"
            />
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#1e2942]/30 backdrop-blur-sm border border-[#1e2942] rounded-3xl p-5 flex flex-col group hover:border-[#3b82f6]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
              >
                <Link to={`/produkt/${product.id}`} className="block aspect-square rounded-2xl overflow-hidden mb-5 relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="text-[11px] font-medium text-[#7b96fc] bg-[#03081e] px-3 py-1 rounded-full border border-[#1e2942]">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < product.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 flex-grow line-collapse group-hover:text-[#7b96fc] transition-colors">
                  {product.title}
                </h3>

                <div className="flex items-end justify-between mt-4 pt-4 border-t border-[#1e2942]/80">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Preis</span>
                    <span className="text-2xl font-black text-white">
                      {product.price.toFixed(2).replace(".", ",")} €
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#3b82f6] hover:bg-[#2563eb] text-white p-3 rounded-xl transition-all duration-300 active:scale-95 shadow-md shadow-[#3b82f6]/20"
                    aria-label="Zum Warenkorb hinzufügen"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#1e2942]/20 rounded-3xl border border-[#1e2942]">
            <Search size={48} className="mx-auto text-slate-600 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Keine Ergebnisse gefunden</h3>
            <p className="text-slate-400 text-sm">
              Für deine Suche nach "<span className="font-semibold text-[#7b96fc]">{searchTerm}</span>" konnten wir leider keine Produkte finden.
            </p>
            <button 
              onClick={() => { setSearchTerm(""); setQuickSearch(""); setSelectedCategory("Alle"); }} 
              className="mt-8 px-6 py-2.5 bg-[#3b82f6] text-white rounded-full text-xs font-semibold"
            >
              Suche zurücksetzen
            </button>
          </div>
        )}

      </div>
    </div>
  );
}