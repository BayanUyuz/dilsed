import React from "react";

export default function Impressum() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-slate-300">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-white tracking-tight">
        Impressum
      </h1>

      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-8 backdrop-blur-sm shadow-xl">
        <div>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <div className="space-y-1 text-slate-400 text-sm">
            <p className="font-semibold text-slate-200">DilSed Design</p>
            <p>Musterstraße 123</p>
            <p>10115 Berlin</p>
            <p>Deutschland</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            Vertreten durch
          </h2>
          <p className="text-slate-400 text-sm">Dilek Karagöz</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            Kontakt
          </h2>
          <div className="space-y-1 text-slate-400 text-sm">
            <p>Telefon: +49 (0) 123 456 789</p>
            <p>E-Mail: kontakt@dilsed-design.de</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-indigo-400 mb-2">
            Umsatzsteuer-ID
          </h2>
          <p className="text-slate-400 text-sm mb-1">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          </p>
          <p className="font-mono text-slate-200 text-sm">DE 123 456 789</p>
        </div>
      </div>
    </div>
  );
}