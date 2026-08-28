import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ value, setValue }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="relative flex items-center">
        <Search className="absolute left-4 text-slate-500" size={18} />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Design, Overlay oder Logo suchen..."
          className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-2xl pl-11 pr-10 py-3.5 text-white placeholder-slate-500 outline-none text-sm shadow-xl transition-all"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-4 text-slate-500 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}