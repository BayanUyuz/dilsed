import React, { useState } from "react";
import { Trash2 } from "lucide-react";

export default function FavoritenPage() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Grafik Design",
      price: "0,00 €",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&q=80",
    },
    {
      id: 2,
      title: "Individuelle Logo Design",
      price: "0,00 €",
      img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=200&q=80",
    },
    {
      id: 3,
      title: "YouTube Channel Design",
      price: "0,00 €",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
    },
  ]);

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-24 font-sans relative">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">
          Meine Favoriten
        </h1>

        <div className="space-y-4">
          {favorites.length === 0 ? (
            <div className="bg-[#1e2942]/20 border border-[#1e2942] backdrop-blur-md rounded-2xl p-8 text-center text-slate-400">
              Du hast noch keine Favoriten hinzugefügt.
            </div>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] hover:border-[#7b96fc]/40 rounded-2xl p-4 flex items-center justify-between transition-all shadow-lg hover:translate-x-1"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover bg-slate-900 border border-slate-700/50 shadow-md"
                  />
                  <span className="font-bold text-base md:text-lg text-white">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <span className="font-bold text-base md:text-lg text-[#7b96fc]">
                    {item.price}
                  </span>
                  <button
                    onClick={() => removeFavorite(item.id)}
                    className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
                    aria-label="Entfernen"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}