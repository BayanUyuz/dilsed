import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash2, ArrowRight, ShieldCheck } from "lucide-react";

export default function WarenkorbPage() {
 
  const [cartItems, setCartItems] = useState([
    {
      id: 6,
      title: "Traumlogo Premium 1",
      price: 299.00,
      quantity: 1,
      img: "https://i.imgur.com/sJmTVlt.png",
    },
    {
      id: 1,
      title: "Logo Design 1",
      price: 149.00,
      quantity: 1,
      img: "https://i.imgur.com/gyaXWoQ.png",
    },
    {
      id: 10,
      title: "Grafik Design Banner",
      price: 49.00,
      quantity: 1,
      img: "https://i.imgur.com/QkXRFQz.png",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-24 font-sans relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6]/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          Dein Warenkorb
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Sol Kolon: Ürün Listesi */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-[#1e2942]/20 border border-[#1e2942] backdrop-blur-md rounded-2xl p-8 text-center text-slate-400">
                Dein Warenkorb ist leer.
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] hover:border-[#7b96fc]/40 rounded-2xl p-4 flex items-center justify-between transition-all shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover bg-slate-900 border border-slate-700/50"
                    />
                    <div>
                      <h3 className="font-bold text-base md:text-lg text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#7b96fc] font-bold">
                        {item.price.toFixed(2).replace(".", ",")} €
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="font-bold text-base md:text-lg text-white">
                      {(item.price * item.quantity).toFixed(2).replace(".", ",")} €
                    </span>

                    
                    <div className="flex items-center bg-[#03081e]/80 border border-[#1e2942] rounded-xl p-1 gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-[#1e2942] rounded-lg transition-colors text-slate-300 hover:text-white"
                        aria-label="Verringern"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-xs font-bold px-1 min-w-[16px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-[#1e2942] rounded-lg transition-colors text-slate-300 hover:text-white"
                        aria-label="Erhöhen"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
                      aria-label="Löschen"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}

            <div className="pt-6 text-center space-y-1 text-xs text-slate-400">
              <p className="font-semibold text-slate-300">Bei Fragen kontaktiere Uns !</p>
              <p>Schnelle und einfache Lieferung !</p>
            </div>
          </div>

          
          <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-6 shadow-xl space-y-6">
            <h2 className="text-xl font-bold border-b border-[#1e2942] pb-4">
              Zusammenfassung
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Zwischensumme</span>
                <span>{total.toFixed(2).replace(".", ",")} €</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Versand</span>
                <span className="text-emerald-400 font-semibold">Kostenlos</span>
              </div>
              <div className="border-t border-[#1e2942] pt-3 flex justify-between font-bold text-base text-white">
                <span>Gesamtsumme</span>
                <span className="text-[#7b96fc]">{total.toFixed(2).replace(".", ",")} €</span>
              </div>
            </div>

            {/* DÜZELTİLEN KISIM: path /checkout yapıldı */}
            <Link
              to="/checkout"
              className="w-full py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-[#3b82f6]/25 flex items-center justify-center gap-2 group"
            >
              <span>Zur Kasse</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#1e2942]/60">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
              <span className="text-[10px] text-slate-400">Sichere Bezahlung</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}