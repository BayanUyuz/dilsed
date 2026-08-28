import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, ArrowRight } from "lucide-react";

export default function BestellungPage({ cart = [], onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [favoriteIds, setFavoriteIds] = useState([]);

  const categories = ["Alle", "Logo-Design", "Traumlogos", "Grafik-Design", "Social-Media-Kits"];

  const products = [
    { id: 1, title: "Logo Design 1", price: 149.00, category: "Logo-Design", img: "https://i.imgur.com/gyaXWoQ.png" },
    { id: 2, title: "Logo Design 2", price: 179.00, category: "Logo-Design", img: "https://i.imgur.com/66v67gl.png" },
    { id: 3, title: "Logo Design 3", price: 199.00, category: "Logo-Design", img: "https://i.imgur.com/WbqsurH.png" },
    { id: 4, title: "Logo Design 4", price: 249.00, category: "Logo-Design", img: "https://i.imgur.com/3M8GaBg.png" },
    { id: 5, title: "Logo Design 5", price: 299.00, category: "Logo-Design", img: "https://i.imgur.com/9lcehSj.png" },

    { id: 6, title: "Traumlogo Premium 1", price: 299.00, category: "Traumlogos", img: "https://i.imgur.com/sJmTVlt.png" },
    { id: 7, title: "Traumlogo Premium 2", price: 349.00, category: "Traumlogos", img: "https://i.imgur.com/BRWoKUf.png" },
    { id: 8, title: "Traumlogo Premium 3", price: 399.00, category: "Traumlogos", img: "https://i.imgur.com/XV11w14.png" },
    { id: 9, title: "Traumlogo Premium 4", price: 499.00, category: "Traumlogos", img: "https://i.imgur.com/9VGcXtk.png" },

    { id: 10, title: "Grafik Design Banner", price: 49.00, category: "Grafik-Design", img: "https://i.imgur.com/QkXRFQz.png" },
    { id: 11, title: "Grafik Design Ilustrasyon", price: 59.00, category: "Grafik-Design", img: "https://i.imgur.com/qwfVPPe.png" },
    { id: 12, title: "Grafik Design Artwork", price: 69.00, category: "Grafik-Design", img: "https://i.imgur.com/WaOohA1.png" },
    { id: 13, title: "Grafik Design Poster", price: 79.00, category: "Grafik-Design", img: "https://i.imgur.com/VtBzU2u.png" },
    { id: 14, title: "Grafik Design 5", price: 89.00, category: "Grafik-Design", img: "https://i.imgur.com/1wPZTRN.png" },
    { id: 15, title: "Grafik Design 6", price: 99.00, category: "Grafik-Design", img: "https://i.imgur.com/jNavC8C.png" },
    { id: 16, title: "Grafik Design 7", price: 109.00, category: "Grafik-Design", img: "https://i.imgur.com/c69acMt.png" },
    { id: 17, title: "Grafik Design 8", price: 119.00, category: "Grafik-Design", img: "https://i.imgur.com/LJrVxEn.png" },
    { id: 18, title: "Grafik Design 9", price: 129.00, category: "Grafik-Design", img: "https://i.imgur.com/sSqANcP.png" },

    { id: 19, title: "Twitch / Stream Kit", price: 129.00, category: "Social-Media-Kits", img: "https://i.imgur.com/MkB4hD7.png" },
    { id: 20, title: "Social Media Branding Kit", price: 179.00, category: "Social-Media-Kits", img: "https://i.imgur.com/8BE8OOK.png" },
    { id: 21, title: "Full Channel Overhauls Kit", price: 249.00, category: "Social-Media-Kits", img: "https://i.imgur.com/ORs738E.png" },
  ];

  const filteredProducts = activeCategory === "Alle" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const toggleFavorite = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    setFavoriteIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAdd = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  // Sepetteki toplam ürün sayısı
  const totalCartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-32 font-sans relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6]/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Design Shop</h1>
          <p className="text-xs text-slate-400">Finde professionelle Designs für dein Projekt</p>
        </div>

        {/* Kategoriler */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#3b82f6] border-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/30"
                  : "bg-[#1e2942]/30 border-[#1e2942] text-slate-400 hover:text-white backdrop-blur-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ürün Listesi */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((item) => {
            const isFav = favoriteIds.includes(item.id);
            return (
              <Link 
                to={`/product/${item.id}`}
                key={item.id} 
                className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] hover:border-[#7b96fc]/40 rounded-2xl p-3 flex flex-col justify-between group transition-all shadow-lg relative block"
              >
                <div className="h-36 rounded-xl overflow-hidden mb-3 bg-[#03081e]/60 border border-slate-700/30 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button
                    onClick={(e) => toggleFavorite(e, item.id)}
                    className={`absolute top-2 right-2 p-2 rounded-xl backdrop-blur-md transition-all border cursor-pointer ${
                      isFav 
                        ? "bg-rose-500/20 border-rose-500/50 text-rose-500 scale-105" 
                        : "bg-[#03081e]/60 border-slate-700/50 text-slate-400 hover:text-rose-400"
                    }`}
                  >
                    <Heart size={14} className={isFav ? "fill-rose-500" : ""} />
                  </button>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xs font-bold text-slate-200 group-hover:text-[#7b96fc] transition-colors">{item.title}</h3>
                    <span className="text-xs font-black text-[#7b96fc]">{item.price.toFixed(2).replace(".", ",")} €</span>
                  </div>
                  <button 
                    onClick={(e) => handleAdd(e, item)}
                    className="w-full py-2 bg-[#1e2942]/60 hover:bg-[#3b82f6] border border-[#1e2942] text-white text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md backdrop-blur-sm cursor-pointer"
                  >
                    <ShoppingBag size={13} /> In den Warenkorb
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sepette ürün eklendiğinde görünen yüzen yönlendirme barı */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
          <Link
            to="/warenkorb"
            className="w-full bg-[#1e2942]/90 hover:bg-[#3b82f6] text-white border border-[#1e2942] hover:border-[#7b96fc]/50 backdrop-blur-xl py-3.5 px-6 rounded-2xl shadow-2xl flex items-center justify-between transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <ShoppingBag size={20} className="text-[#7b96fc] group-hover:text-white transition-colors" />
              <span className="text-sm font-bold tracking-wide">
                {totalCartCount} Artikel im Warenkorb
              </span>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-700/60 group-hover:border-white/20 pl-4 transition-colors">
              <span className="text-xs uppercase tracking-wider font-black text-slate-200 group-hover:text-white">ZUM WARENKORB</span>
              <ArrowRight size={16} className="text-[#7b96fc] group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}