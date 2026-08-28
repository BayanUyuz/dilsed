import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, CheckCircle2, Award, Zap } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-24 font-sans relative">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <div className="flex justify-center">
          <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-8 max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-white tracking-tight">
              Registrieren
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <User size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Benutzername"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors"
                />
              </div>

              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="email"
                  placeholder="E-Mail Adresse"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors"
                />
              </div>

              <div className="relative">
                <Lock size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="password"
                  placeholder="Passwort"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors"
                />
              </div>

              <div className="relative">
                <Lock size={14} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="password"
                  placeholder="Passwort bestätigen"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-[#3b82f6]/25 mt-2"
              >
                Konto erstellen ✓
              </button>

              <p className="text-[11px] text-center text-slate-400 pt-2">
                Du hast bereits ein Konto?{" "}
                <Link to="/login" className="text-[#7b96fc] hover:underline font-bold">
                  Anmelden
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-b border-[#1e2942] py-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <CheckCircle2 size={24} className="text-[#7b96fc]" />
            <h3 className="text-xs font-bold text-slate-200">Sicher & Geschützt</h3>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Award size={24} className="text-[#7b96fc]" />
            <h3 className="text-xs font-bold text-slate-200">Exklusive Vorteile</h3>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Zap size={24} className="text-[#7b96fc]" />
            <h3 className="text-xs font-bold text-slate-200">Schnell & einfach</h3>
          </div>
        </div>
      </div>
    </div>
  );
}