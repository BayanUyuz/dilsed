import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, ArrowRight, X, Check, ShieldCheck, Sparkles, Package } from "lucide-react";

export default function BestellungPage({ cart = [], onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [added, setAdded] = useState(false);

  const categories = ["Alle", "Logo-Design", "Traumlogos", "Grafik-Design", "Social-Media-Kits"];

  const products = [
    { id: 1, title: "Logo Design 1", price: 149.00, category: "Logo-Design", img: "https://i.imgur.com/gyaXWoQ.png", desc: "Professionelles Logo-Design angepasst an deine Marke. Enthält Vektordateien (AI, EPS, PNG) und alle kommerziellen Nutzungsrechte.", stock: 5 },
    { id: 2, title: "Logo Design 2", price: 179.00, category: "Logo-Design", img: "https://i.imgur.com/66v67gl.png", desc: "Einzigartiges und modernes Logo-Design mit unbegrenzten Überarbeitungen bis zur vollkommenen Zufriedenheit.", stock: 3 },
    { id: 3, title: "Logo Design 3", price: 199.00, category: "Logo-Design", img: "https://i.imgur.com/WbqsurH.png", desc: "Exklusives Design inklusive Social-Media-Varianten und Branding-Guide für einheitliche Auftritte.", stock: 8 },
    { id: 4, title: "Logo Design 4", price: 249.00, category: "Logo-Design", img: "https://i.imgur.com/3M8GaBg.png", desc: "High-End Corporate Logo für professionelle Ansprüche. Inklusive 3D-Mockups und Quelldateien.", stock: 2 },
    { id: 5, title: "Logo Design 5", price: 299.00, category: "Logo-Design", img: "https://i.imgur.com/9lcehSj.png", desc: "Komplettes Premium-Branding mit Logo, Farbpalette und Typografie-Konzept.", stock: 4 },

    { id: 6, title: "Traumlogo Premium 1", price: 299.00, category: "Traumlogos", img: "https://i.imgur.com/sJmTVlt.png", desc: "Traumhaftes Mascot- & Illustration-Logo. Perfekt für Streamer, Gaming-Teams und Content Creator.", stock: 6 },
    { id: 7, title: "Traumlogo Premium 2", price: 349.00, category: "Traumlogos", img: "https://i.imgur.com/BRWoKUf.png", desc: "Exklusives Mascot Logo mit detailreichen Schattierungen und High-Res Exporten.", stock: 3 },
    { id: 8, title: "Traumlogo Premium 3", price: 399.00, category: "Traumlogos", img: "https://i.imgur.com/XV11w14.png", desc: "Full Custom Branding Package inklusive Stream Overlays und Logo Animation.", stock: 2 },
    { id: 9, title: "Traumlogo Premium 4", price: 499.00, category: "Traumlogos", img: "https://i.imgur.com/9VGcXtk.png", desc: "Ultimatives Design Package für eSports Teams und professionelle Creator.", stock: 1 },

    { id: 10, title: "Grafik Design Banner", price: 49.00, category: "Grafik-Design", img: "https://i.imgur.com/QkXRFQz.png", desc: "Hochwertiges Banner für Social Media, Twitch oder YouTube.", stock: 10 },
    { id: 11, title: "Grafik Design Ilustrasyon", price: 59.00, category: "Grafik-Design", img: "https://i.imgur.com/qwfVPPe.png", desc: "Individuelle digitale Illustration nach deinen Wünschen.", stock: 7 },
    { id: 12, title: "Grafik Design Artwork", price: 69.00, category: "Grafik-Design", img: "https://i.imgur.com/WaOohA1.png", desc: "Kreatives Digital Artwork für Promo-Materialien oder Alben.", stock: 5 },
    { id: 13, title: "Grafik Design Poster", price: 79.00, category: "Grafik-Design", img: "https://i.imgur.com/VtBzU2u.png", desc: "Druckfertiges Poster-Design in höchster Auflösung.", stock: 9 },

    { id: 19, title: "Twitch / Stream Kit", price: 129.00, category: "Social-Media-Kits", img: "https://i.imgur.com/MkB4hD7.png", desc: "Komplettes Stream Overlay Kit (Screens, Panels, Alerts, Facecam).", stock: 4 },
    { id: 20, title: "Social Media Branding Kit", price: 179.00, category: "Social-Media-Kits", img: "https://i.imgur.com/8BE8OOK.png", desc: "Einheitlicher Auftritt für Instagram, Twitter/X und YouTube.", stock: 6 },
    { id: 21, title: "Full Channel Overhauls Kit", price: 249.00, category: "Social-Media-Kits", img: "https://i.imgur.com/ORs738E.png", desc: "Das komplette Redesign für deinen gesamten Online-Auftritt.", stock: 3 }
  ];

  const filteredProducts = activeCategory === "Alle" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const toggleFavorite = (e, productId) => {
    e.stopPropagation();
    setFavoriteIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAdd = (e, item) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(item);
    }
  };

  const handleModalAdd = (item) => {
    if (onAddToCart) {
      onAddToCart(item);
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-36 font-sans relative">
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
              <div 
                key={item.id} 
                onClick={() => setSelectedProduct(item)}
                className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] hover:border-[#7b96fc]/40 rounded-2xl p-3 flex flex-col justify-between group transition-all shadow-lg relative cursor-pointer"
              >
                <div className="h-36 rounded-xl overflow-hidden mb-3 bg-[#03081e]/60 border border-slate-700/30 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Stok Rozeti (Kart Üzerinde) */}
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-md text-[10px] font-medium text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {item.stock} auf Lager
                  </span>

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
              </div>
            );
          })}
        </div>
      </div>

      {/* Ürün Detay Modalı */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0a1128] border border-[#1e2942] w-full max-w-2xl rounded-3xl p-6 md:p-8 relative shadow-2xl space-y-6">
            
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1e2942]/60 hover:bg-[#1e2942] text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="h-64 rounded-2xl overflow-hidden border border-slate-700/40 bg-[#03081e]">
                <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-[#7b96fc] tracking-wider bg-[#3b82f6]/10 px-2.5 py-1 rounded-md border border-[#3b82f6]/20">
                      {selectedProduct.category}
                    </span>
                    {/* Modal İçinde Stok Durumu */}
                    <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      <Package size={13} /> {selectedProduct.stock} auf Lager
                    </span>
                  </div>
                  <h2 className="text-xl font-black mt-2">{selectedProduct.title}</h2>
                  <div className="text-xl font-black text-[#7b96fc] mt-1">
                    {selectedProduct.price.toFixed(2).replace(".", ",")} €
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3">
                  <h4 className="text-xs font-bold text-slate-300 mb-1">Produktdetails</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {selectedProduct.desc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <Sparkles size={13} className="text-[#3b82f6]" /> Vektordateien & Commercial Rights
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <ShieldCheck size={13} className="text-[#3b82f6]" /> 100% Zufriedenheitsgarantie
                  </div>
                </div>

                <button
                  onClick={() => handleModalAdd(selectedProduct)}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    added 
                      ? "bg-emerald-600 text-white" 
                      : "bg-[#3b82f6] hover:bg-blue-600 text-white shadow-lg shadow-[#3b82f6]/30"
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={16} /> Hinzugefügt!
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} /> In den Warenkorb
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Alt Sepet Barı */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-40">
          <Link
            to="/warenkorb"
            className="w-full bg-[#03081e]/80 hover:bg-[#03081e]/95 text-white border border-[#3b82f6]/40 hover:border-[#3b82f6] backdrop-blur-2xl py-3.5 px-6 rounded-2xl shadow-2xl shadow-black/80 flex items-center justify-between transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#3b82f6]/20 border border-[#3b82f6]/40 rounded-xl text-[#7b96fc] group-hover:scale-110 transition-transform">
                <ShoppingBag size={18} />
              </div>
              <span className="text-xs md:text-sm font-extrabold tracking-wide text-slate-100">
                {totalCartCount} Artikel <span className="text-[#7b96fc]">({totalPrice.toFixed(2).replace(".", ",")} €)</span>
              </span>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
              <span className="text-[11px] md:text-xs font-black tracking-wider uppercase text-slate-200 group-hover:text-[#7b96fc] transition-colors">
                ZUM WARENKORB
              </span>
              <ArrowRight size={16} className="text-[#7b96fc] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}