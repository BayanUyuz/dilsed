import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, CheckCircle, XCircle, ShoppingBag, Search } from "lucide-react";

const products = [
  { id: 1, title: "Logo Design 1", price: 149.00, category: "Logo-Design", img: "https://i.imgur.com/gyaXWoQ.png", description: "Modernes und minimalistisches Logo-Design für deine Marke.", stock: 15 },
  { id: 2, title: "Logo Design 2", price: 179.00, category: "Logo-Design", img: "https://i.imgur.com/66v67gl.png", description: "Professionelles Logo-Design inklusive Vektordateien.", stock: 8 },
  { id: 3, title: "Logo Design 3", price: 199.00, category: "Logo-Design", img: "https://i.imgur.com/WbqsurH.png", description: "Einzigartiges Branding-Logo für dein Startup.", stock: 0 },
  { id: 4, title: "Logo Design 4", price: 249.00, category: "Logo-Design", img: "https://i.imgur.com/3M8GaBg.png", description: "Exklusives Premium Logo mit unbegrenzten Überarbeitungen.", stock: 22 },
  { id: 5, title: "Logo Design 5", price: 299.00, category: "Logo-Design", img: "https://i.imgur.com/9lcehSj.png", description: "Komplettes Marken-Logo Paket mit Styleguide.", stock: 5 },

  { id: 6, title: "Traumlogo Premium 1", price: 299.00, category: "Traumlogos", img: "https://i.imgur.com/sJmTVlt.png", description: "Traumhaftes Premium-Logo nach deinen Wünschen.", stock: 12 },
  { id: 7, title: "Traumlogo Premium 2", price: 349.00, category: "Traumlogos", img: "https://i.imgur.com/BRWoKUf.png", description: "Hochwertiges Markenlogo inklusive Social Media Kit.", stock: 9 },
  { id: 8, title: "Traumlogo Premium 3", price: 399.00, category: "Traumlogos", img: "https://i.imgur.com/XV11w14.png", description: "Exklusives Traumlogo Design mit 3D-Mockups.", stock: 3 },
  { id: 9, title: "Traumlogo Premium 4", price: 499.00, category: "Traumlogos", img: "https://i.imgur.com/9VGcXtk.png", description: "Das ultimative VIP Branding & Traumlogo Paket.", stock: 7 },

  { id: 10, title: "Grafik Design Banner", price: 49.00, category: "Grafik-Design", img: "https://i.imgur.com/QkXRFQz.png", description: "Ansprechendes Banner-Design für deine Webseite oder Socials.", stock: 30 },
  { id: 11, title: "Grafik Design Ilustrasyon", price: 59.00, category: "Grafik-Design", img: "https://i.imgur.com/qwfVPPe.png", description: "Individuelle Vektor-Illustrationen.", stock: 0 },
  { id: 12, title: "Grafik Design Artwork", price: 69.00, category: "Grafik-Design", img: "https://i.imgur.com/WaOohA1.png", description: "Kreatives Artwork für dein Projekt.", stock: 18 },
  { id: 13, title: "Grafik Design Poster", price: 79.00, category: "Grafik-Design", img: "https://i.imgur.com/VtBzU2u.png", description: "Druckfertiges Poster-Design in hoher Auflösung.", stock: 25 },
  { id: 14, title: "Grafik Design 5", price: 89.00, category: "Grafik-Design", img: "https://i.imgur.com/1wPZTRN.png", description: "Professionelles Grafik-Design Paket.", stock: 11 },
  { id: 15, title: "Grafik Design 6", price: 99.00, category: "Grafik-Design", img: "https://i.imgur.com/jNavC8C.png", description: "Individuelle Grafiklösungen für dein Business.", stock: 14 },
  { id: 16, title: "Grafik Design 7", price: 109.00, category: "Grafik-Design", img: "https://i.imgur.com/c69acMt.png", description: "Kreatives Digital-Design Paket.", stock: 6 },
  { id: 17, title: "Grafik Design 8", price: 119.00, category: "Grafik-Design", img: "https://i.imgur.com/LJrVxEn.png", description: "Umfassendes Grafik-Set.", stock: 9 },
  { id: 18, title: "Grafik Design 9", price: 129.00, category: "Grafik-Design", img: "https://i.imgur.com/sSqANcP.png", description: "Premium Grafik-Design nach Maß.", stock: 4 },

  { id: 19, title: "Twitch / Stream Kit", price: 129.00, category: "Social-Media-Kits", img: "https://i.imgur.com/MkB4hD7.png", description: "Komplettes Overlay- und Banner-Set für Twitch & YouTube.", stock: 20 },
  { id: 20, title: "Social Media Branding Kit", price: 179.00, category: "Social-Media-Kits", img: "https://i.imgur.com/8BE8OOK.png", description: "Alles für einen einheitlichen Auftritt auf Instagram & Co.", stock: 10 },
  { id: 21, title: "Full Channel Overhauls Kit", price: 249.00, category: "Social-Media-Kits", img: "https://i.imgur.com/ORs738E.png", description: "Komplette Neugestaltung aller deiner Kanäle.", stock: 5 }
];

export default function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const product = products.find((p) => String(p.id) === String(id));
  const [quantity, setQuantity] = useState(product && product.stock > 0 ? 1 : 0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#03081e] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
        <h1 className="text-3xl font-extrabold mb-2 text-white">Produkt nicht gefunden</h1>
        <p className="text-slate-400 mb-6 text-xs">Dieses Produkt existiert nicht mehr oder die URL ist falsch.</p>
        <Link 
          to="/bestellung" 
          className="text-[#7b96fc] hover:text-white flex items-center gap-2 text-xs font-bold transition-colors bg-[#1e2942]/50 px-4 py-2 rounded-xl border border-[#1e2942]"
        >
          <ArrowLeft size={16} /> Zurück zur Bestellung
        </Link>
      </div>
    );
  }

  const isOutOfStock = product.stock === 0;
  const stockColor = isOutOfStock ? "text-red-400" : product.stock < 5 ? "text-amber-400" : "text-emerald-400";
  const stockText = isOutOfStock ? "Nicht auf Lager" : `Auf Lager (${product.stock} verfügbar)`;

  const increment = () => {
    if (quantity < product.stock) setQuantity((prev) => prev + 1);
  };
  
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (onAddToCart && !isOutOfStock && quantity > 0) {
      onAddToCart({ ...product, quantity });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/bestellung?suche=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate(`/bestellung`);
    }
  };

  return (
    <div className="min-h-screen bg-[#03081e] text-white py-12 px-6 max-w-6xl mx-auto font-sans relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#3b82f6]/10 blur-[150px] pointer-events-none -z-10" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 border-b border-[#1e2942] pb-6">
        <Link 
          to="/bestellung" 
          className="text-xs font-bold text-slate-400 hover:text-[#7b96fc] inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={16} /> Zurück zur Bestellung
        </Link>
        
        <form onSubmit={handleSearch} className="relative w-full sm:max-w-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Produkte suchen (z.B. Logo)..."
            className="w-full bg-[#1e2942]/50 border border-[#1e2942] rounded-full py-2 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-[#7b96fc] focus:border-[#7b96fc] outline-none transition-all"
          />
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        </form>
      </div>

      <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-10 shadow-2xl">
        <div className="md:col-span-6 h-96 md:h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-inner">
          <img 
            src={product.img} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>

        <div className="md:col-span-6 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-[10px] font-bold text-[#7b96fc] uppercase tracking-widest border border-[#1e2942] bg-[#03081e]/80 px-3 py-1.5 rounded-full">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-5 mb-4">
              {product.title}
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            <div className={`flex items-center gap-2 text-sm font-bold p-3 rounded-xl bg-[#03081e]/40 border border-[#1e2942] w-fit ${stockColor}`}>
              {isOutOfStock ? <XCircle size={18} /> : <CheckCircle size={18} />}
              {stockText}
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-[#1e2942]/80">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-slate-300 font-semibold">Anzahl auswählen:</span>
              
              <div className={`flex items-center border border-[#1e2942] rounded-xl bg-[#03081e]/80 p-1.5 ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}`}>
                <button 
                  onClick={decrement} 
                  disabled={isOutOfStock || quantity <= 1}
                  className="p-2 text-slate-400 hover:text-white transition-colors disabled:text-slate-600 disabled:hover:text-slate-600 cursor-pointer"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 text-lg font-bold text-white">{quantity}</span>
                <button 
                  onClick={increment} 
                  disabled={isOutOfStock || quantity >= product.stock}
                  className="p-2 text-slate-400 hover:text-white transition-colors disabled:text-slate-600 disabled:hover:text-slate-600 cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#03081e]/60 p-5 rounded-2xl border border-[#1e2942]">
              <div>
                <span className="text-xs text-slate-400 block font-medium mb-0.5">Gesamtpreis</span>
                <span className="text-3xl font-black text-[#7b96fc]">
                  {(product.price * quantity).toFixed(2).replace(".", ",")} €
                </span>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock || quantity === 0}
                className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#3b82f6]/25 active:scale-95 flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
              >
                <ShoppingBag size={18} />
                <span>In den Warenkorb</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}