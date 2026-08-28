import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Lock, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-24 font-sans relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-2 bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-8 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-black mb-1">
              Willkommen <span className="text-[#7b96fc] font-normal">zurück</span>
            </h1>
            <p className="text-xs text-slate-400 mb-6">
              Melde dich an, um auf dein Konto zuzugreifen
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div className="relative">
                <User size={16} className="absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="email"
                  placeholder="E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors"
                />
              </div>

              <div className="relative">
                <Lock size={16} className="absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="password"
                  placeholder="Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-[#3b82f6]/25"
              >
                Jetzt einloggen
              </button>

              <div className="text-center pt-1">
                <a href="#forgot" className="text-[11px] text-slate-400 hover:text-white transition-colors">
                  Passwort vergessen?
                </a>
              </div>

              <div className="pt-4 border-t border-[#1e2942]">
                <p className="text-xs text-slate-300 font-medium mb-2">Noch keinen Account?</p>
                <Link
                  to="/register"
                  className="inline-block px-6 py-2.5 bg-[#1e2942] hover:bg-[#2d3d60] border border-slate-700 text-white font-bold text-xs rounded-xl transition-all"
                >
                  Jetzt registrieren →
                </Link>
              </div>
            </form>
          </div>

          <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-6 space-y-4 shadow-xl flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-[#7b96fc]" />
              <span className="text-xs font-bold text-slate-200">Sicher & verschlüsselt</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-[#7b96fc]" />
              <span className="text-xs font-bold text-slate-200">Schnelle Umsetzung</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#7b96fc]" />
              <span className="text-xs font-bold text-slate-200">Zufriedenheits-Garantie</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}