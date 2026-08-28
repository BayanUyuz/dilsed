import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "Max Mustermann",
    email: "max@example.com",
    company: "DilSed Design",
    website: "https://dilsed-design.de",
  });

  const [passwordChange, setPasswordChange] = useState({
    currentPassword: "",
    newPassword: "",
  });

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-24 font-sans relative">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Profil bearbeiten
          </h1>
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 rounded-xl text-xs font-bold transition-all"
          >
            <LogOut size={14} /> Abmelden
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Sol Kolon: Profil Bilgileri Formu */}
          <div className="md:col-span-2 bg-[#7b96fc] text-slate-950 rounded-3xl p-8 shadow-xl space-y-5">
            <div className="w-20 h-20 rounded-full bg-[#03081e] mb-4" />

            <div>
              <label className="block text-xs font-bold mb-1 text-slate-950">Name</label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="w-full bg-[#03081e] text-white rounded-xl px-4 py-3 text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-1 text-slate-950">E-Mail</label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                className="w-full bg-[#03081e] text-white rounded-xl px-4 py-3 text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-1 text-slate-950">Firma</label>
              <input
                type="text"
                value={profileData.company}
                onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                className="w-full bg-[#03081e] text-white rounded-xl px-4 py-3 text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-1 text-slate-950">Webseite</label>
              <input
                type="text"
                value={profileData.website}
                onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                className="w-full bg-[#03081e] text-white rounded-xl px-4 py-3 text-xs focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button className="px-8 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-xs rounded-xl transition-all shadow-md">
                Speichern
              </button>
            </div>
          </div>

          {/* Sağ Kolon: Hesap & Şifre İşlemleri ve Bestellungen */}
          <div className="space-y-6">
            <div className="bg-[#7b96fc] text-slate-950 rounded-3xl p-6 shadow-xl space-y-3">
              <h3 className="text-base font-bold text-slate-950">Account</h3>
              <p className="text-[11px] font-semibold text-slate-900">Passwort ändern</p>

              <input
                type="password"
                placeholder="Altes Passwort"
                value={passwordChange.currentPassword}
                onChange={(e) => setPasswordChange({ ...passwordChange, currentPassword: e.target.value })}
                className="w-full bg-[#03081e] text-white placeholder-slate-400 rounded-xl px-3 py-2 text-xs focus:outline-none"
              />

              <input
                type="password"
                placeholder="Neues Passwort"
                value={passwordChange.newPassword}
                onChange={(e) => setPasswordChange({ ...passwordChange, newPassword: e.target.value })}
                className="w-full bg-[#03081e] text-white placeholder-slate-400 rounded-xl px-3 py-2 text-xs focus:outline-none"
              />

              <button className="px-4 py-2 bg-[#03081e] hover:bg-slate-900 text-white font-bold text-[11px] rounded-lg transition-colors">
                Aktualisieren
              </button>
            </div>

            <div className="bg-[#7b96fc] text-slate-950 rounded-3xl p-6 shadow-xl space-y-3">
              <h3 className="text-base font-bold text-slate-950">Bestellungen</h3>
              <div className="h-8 bg-[#03081e] rounded-lg" />
              <Link
                to="/bestellung"
                className="inline-block px-4 py-2 bg-[#03081e] hover:bg-slate-900 text-white font-bold text-[11px] rounded-lg transition-colors"
              >
                Zum Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}