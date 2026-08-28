import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Alle");

  const categories = ["Alle", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "Alle" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0f24] text-slate-100 py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black text-white mb-3 tracking-tight">
          Design & Stream Shop
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Hochwertige Overlays, Logos und VTuber Models für deinen Stream.
        </p>
      </div>

      <SearchBar value={search} setValue={setSearch} />

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Aufgabe 3: Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800/60 max-w-lg mx-auto">
          <p className="text-slate-400 text-sm font-medium">
            Keine Produkte gefunden für "{search}".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
}