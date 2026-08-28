import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, CheckCircle, AlertTriangle, ShoppingBag } from "lucide-react";

// BestellungPage'deki ürün listesiyle birebir aynı veri
const products = [
  { id: 1, title: "Logo Design 1", price: 149.00, category: "Logo-Design", img: "https://i.imgur.com/gyaXWoQ.png", description: "Modernes und minimalistisches Logo-Design für deine Marke." },
  { id: 2, title: "Logo Design 2", price: 179.00, category: "Logo-Design", img: "https://i.imgur.com/66v67gl.png", description: "Professionelles Logo-Design inklusive Vektordateien." },
  { id: 3, title: "Logo Design 3", price: 199.00, category: "Logo-Design", img: "https://i.imgur.com/WbqsurH.png", description: "Einzigartiges Branding-Logo für dein Startup." },
  { id: 4, title: "Logo Design 4", price: 249.00, category: "Logo-Design", img: "https://i.imgur.com/3M8GaBg.png", description: "Exklusives Premium Logo mit unbegrenzten Überarbeitungen." },
  { id: 5, title: "Logo Design 5", price: 299.00, category: "Logo-Design", img: "https://i.imgur.com/9lcehSj.png", description: "Komplettes Marken-Logo Paket mit Styleguide." },

  { id: 6, title: "Traumlogo Premium 1", price: 299.00, category: "Traumlogos", img: "https://i.imgur.com/sJmTVlt.png", description: "Traumhaftes Premium-Logo nach deinen Wünschen." },
  { id: 7, title: "Traumlogo Premium 2", price: 349.00, category: "Traumlogos", img: "https://i.imgur.com/BRWoKUf.png", description: "Hochwertiges Markenlogo inklusive Social Media Kit." },
  { id: 8, title: "Traumlogo Premium 3", price: 399.00, category: "Traumlogos", img: "https://i.imgur.com/XV11w14.png", description: "Exklusives Traumlogo Design mit 3D-Mockups." },
  { id: 9, title: "Traumlogo Premium 4", price: 499.00, category: "Traumlogos", img: "https://i.imgur.com/9VGcXtk.png", description: "Das ultimative VIP Branding & Traumlogo Paket." },

  { id: 10, title: "Grafik Design Banner", price: 49.00, category: "Grafik-Design", img: "https://i.imgur.com/QkXRFQz.png", description: "Ansprechendes Banner-Design für deine Webseite oder Socials." },
  { id: 11, title: "Grafik Design Ilustrasyon", price: 59.00, category: "Grafik-Design", img: "https://i.imgur.com/qwfVPPe.png", description: "Individuelle Vektor-Illustrationen." },
  { id: 12, title: "Grafik Design Artwork", price: 69.00, category: "Grafik-Design", img: "https://i.imgur.com/WaOohA1.png", description: "Kreatives Artwork für dein Projekt." },
  { id: 13, title: "Grafik Design Poster", price: 79.00, category: "Grafik-Design", img: "https://i.imgur.com/VtBzU2u.png", description: "Druckfertiges Poster-Design in hoher Auflösung." },
  { id: 14, title: "Grafik Design 5", price: 89.00, category: "Grafik-Design", img: "https://i.imgur.com/1wPZTRN.png", description: "Professionelles Grafik-Design Paket." },
  { id: 15, title: "Grafik Design 6", price: 99.00, category: "Grafik-Design", img: "https://i.imgur.com/jNavC8C.png", description: "Individuelle Grafiklösungen für dein Business." },
  { id: 16, title: "Grafik Design 7", price: 109.00, category: "Grafik-Design", img: "https://i.imgur.com/c69acMt.png", description: "Kreatives Digital-Design Paket." },
  { id: 17, title: "Grafik Design 8", price: 119.00, category: "Grafik-Design", img: "https://i.imgur.com/LJrVxEn.png", description: "Umfassendes Grafik-Set." },
  { id: 18, title: "Grafik Design 9", price: 129.00, category: "Grafik-Design", img: "https://i.imgur.com/sSqANcP.png", description: "Premium Grafik-Design nach Maß." },

  { id: 19, title: "Twitch / Stream Kit", price: 129.00, category: "Social-Media-Kits", img: "https://i.imgur.com/MkB4hD7.png", description: "Komplettes Overlay- und Banner-Set für Twitch & YouTube." },
  { id: 20, title: "Social Media Branding Kit", price: 179.00, category: "Social-Media-Kits", img: "https://i.imgur.com/8BE8OOK.png", description: "Alles für einen einheitlichen Auftritt auf Instagram & Co." },
  { id: 21, title: "Full Channel Overhauls Kit", price: 249.00, category: "Social-Media-Kits", img: "https://i.imgur.com/ORs738E.png", description: "Komplette Neugestaltung aller deiner Kanäle." }
];

export default function ProductDetailPage({ onAddToCart }) {
  const { id } = useParams();

  // URL'deki id ile listedeki id eşleştirilir
  const product = products.find((p) => String(p.id) === String(id));
  const [quantity, setQuantity] = useState(1);

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

  const stock = 10;

  const increment = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };
  
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ ...product, quantity });
    }
  };

  return (
    <div className="min-h-screen bg-[#03081e] text-white py-12 px-6 max-w-5xl mx-auto font-sans relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6]/10 blur-[130px] pointer-events-none -z-10" />

      <Link 
        to="/bestellung" 
        className="text-xs font-bold text-slate-400 hover:text-[#7b96fc] mb-8 inline-flex items-center gap-2 transition-colors"
      >
        <ArrowLeft size={16} /> Zurück zur Bestellung
      </Link>

      <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl">
        <div className="h-80 md:h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50">
          <img 
            src={product.img} 
            alt={product.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] font-bold text-[#7b96fc] uppercase tracking-widest border border-[#1e2942] bg-[#03081e]/80 px-2.5 py-1 rounded-full">
              {product.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-white mt-4 mb-3">
              {product.title}
            </h1>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle size={14} /> Auf Lager (Sofort verfügbar)
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6 border-t border-[#1e2942]/80 pt-4">
              <span className="text-xs text-slate-400 font-bold uppercase">Menge:</span>
              <div className="flex items-center border border-[#1e2942] rounded-xl bg-[#03081e]/80 p-1">
                <button 
                  onClick={decrement} 
                  className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-bold text-white">{quantity}</span>
                <button 
                  onClick={increment} 
                  className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#1e2942]/80 pt-4">
              <div>
                <span className="text-xs text-slate-500 block font-semibold">Gesamtpreis</span>
                <span className="text-2xl font-black text-[#7b96fc]">
                  {(product.price * quantity).toFixed(2).replace(".", ",")} €
                </span>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-6 py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-xs uppercase rounded-xl transition-all shadow-lg shadow-[#3b82f6]/25 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag size={16} />
                <span>In den Warenkorb</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}