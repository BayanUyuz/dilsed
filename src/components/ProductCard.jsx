import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, name, description, price, category, stock, image }) {
  return (
    <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 shadow-xl group">
      <div>
        <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-slate-950">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {stock === 0 && (
            <span className="absolute top-3 right-3 bg-red-500/90 border border-red-400/30 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
              Ausverkauft
            </span>
          )}
        </div>

        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-1">
          {category}
        </span>
        <Link to={`/produkt/${id}`}>
          <h3 className="text-base font-bold text-white hover:text-indigo-300 transition-colors line-clamp-1 mb-2">
            {name}
          </h3>
        </Link>

        {/* Aufgabe 3: Fallback mit || */}
        <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
          {description || "Keine Beschreibung verfügbar."}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3 border-t border-slate-800/60 pt-3">
          <span className="text-xl font-black text-indigo-400">
            €{Number(price).toFixed(2)}
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            Lager: {stock} Stk.
          </span>
        </div>

        {/* Aufgabe 1: Disabled Button wenn stock === 0 */}
        <Link to={`/produkt/${id}`}>
          <button
            disabled={stock === 0}
            className={`w-full py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              stock === 0
                ? "bg-slate-800 text-slate-500 border border-slate-700/50 cursor-not-allowed opacity-50"
                : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 active:scale-95"
            }`}
          >
            {stock === 0 ? "Nicht verfügbar" : "Details & Kaufen"}
          </button>
        </Link>
      </div>
    </div>
  );
}