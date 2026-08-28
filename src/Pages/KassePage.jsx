import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  CheckCircle2, 
  ShoppingBag, 
  ChevronRight 
} from "lucide-react";

export default function KassePage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const orderItems = [
    { id: 1, title: "Traumlogo Premium 1", price: 299.00, img: "https://i.imgur.com/sJmTVlt.png" },
    { id: 2, title: "Logo Design 1", price: 149.00, img: "https://i.imgur.com/gyaXWoQ.png" }
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.19;
  const total = subtotal;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#03081e] text-white min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full bg-[#1e2942]/35 backdrop-blur-xl border border-[#1e2942] rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black">Vielen Dank!</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deine Bestellung wurde erfolgreich entgegen genommen. Wir haben dir eine Bestätigung per E-Mail geschickt.
            </p>
          </div>
          <div className="p-4 bg-[#03081e]/60 rounded-2xl border border-[#1e2942] text-left text-xs space-y-1.5">
            <div className="flex justify-between text-slate-400">
              <span>Bestellnummer:</span>
              <span className="font-mono text-white">#ORD-2026-889</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Gesamtsumme:</span>
              <span className="font-bold text-[#7b96fc]">{total.toFixed(2).replace(".", ",")} €</span>
            </div>
          </div>
          <Link 
            to="/" 
            className="block w-full py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-[#3b82f6]/30"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-8 pb-24 font-sans relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3b82f6]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between border-b border-[#1e2942] pb-6">
          <Link to="/bestellung" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Zurück zum Shop
          </Link>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span>Shop</span>
            <ChevronRight size={12} />
            <span>Warenkorb</span>
            <ChevronRight size={12} />
            <span className="text-[#3b82f6] font-bold">Kasse</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl font-black mb-1">Kasse & Bezahlung</h1>
          <p className="text-xs text-slate-400">Schließe deine Bestellung sicher und schnell ab</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Details */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Contact Info */}
            <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-6 space-y-4 shadow-xl">
              <h3 className="font-bold text-sm text-slate-200 border-b border-[#1e2942] pb-3">1. Kontaktdaten</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">E-Mail Adresse *</label>
                  <input required type="email" placeholder="beispiel@mail.de" className="w-full bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                </div>
              </div>
            </div>

            {/* Address Info */}
            <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-6 space-y-4 shadow-xl">
              <h3 className="font-bold text-sm text-slate-200 border-b border-[#1e2942] pb-3">2. Rechnungsadresse</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Vorname *</label>
                    <input required type="text" placeholder="Max" className="w-full bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Nachname *</label>
                    <input required type="text" placeholder="Mustermann" className="w-full bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Straße und Hausnummer *</label>
                  <input required type="text" placeholder="Musterstraße 123" className="w-full bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">PLZ *</label>
                    <input required type="text" placeholder="12345" className="w-full bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[11px] text-slate-400 mb-1">Stadt *</label>
                    <input required type="text" placeholder="Berlin" className="w-full bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                  </div>
                </div>
              </div>
            </div>

         
            <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-6 space-y-4 shadow-xl">
              <h3 className="font-bold text-sm text-slate-200 border-b border-[#1e2942] pb-3">3. Zahlungsart</h3>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-2xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === "card"
                      ? "bg-[#3b82f6]/20 border-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/20"
                      : "bg-[#03081e]/60 border-[#1e2942] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <CreditCard size={18} />
                  Kreditkarte
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`p-3 rounded-2xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === "paypal"
                      ? "bg-[#3b82f6]/20 border-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/20"
                      : "bg-[#03081e]/60 border-[#1e2942] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[9px] font-black text-white">P</span>
                  PayPal
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("klarna")}
                  className={`p-3 rounded-2xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all ${
                    paymentMethod === "klarna"
                      ? "bg-[#3b82f6]/20 border-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/20"
                      : "bg-[#03081e]/60 border-[#1e2942] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="text-[11px] font-black text-pink-400">Klarna.</span>
                  Klarna
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-3 pt-2">
                  <input required type="text" placeholder="Kartennummer" className="w-full bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                  <div className="grid grid-cols-2 gap-3">
                    <input required type="text" placeholder="MM/JJ" className="bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                    <input required type="password" placeholder="CVC" maxLength={4} className="bg-[#03081e]/80 border border-[#1e2942] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] text-white placeholder-slate-500" />
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="p-4 bg-[#03081e]/60 border border-[#1e2942] rounded-xl text-center text-xs text-slate-300">
                  Du wirst nach dem Klick auf "Jetzt bezahlen" zu PayPal weitergeleitet.
                </div>
              )}

              {paymentMethod === "klarna" && (
                <div className="p-4 bg-[#03081e]/60 border border-[#1e2942] rounded-xl text-center text-xs text-slate-300">
                  Bezahlen Sie bequem per Klarna Sofortüberweisung oder auf Rechnung.
                </div>
              )}
            </div>
          </div>

          
          <div className="md:col-span-5 space-y-6">
            <div className="bg-[#1e2942]/35 backdrop-blur-md border border-[#1e2942] rounded-3xl p-6 space-y-6 shadow-xl sticky top-8">
              <h3 className="font-bold text-sm text-slate-200 border-b border-[#1e2942] pb-3 flex items-center justify-between">
                <span>Bestellübersicht</span>
                <ShoppingBag size={16} className="text-[#7b96fc]" />
              </h3>

              
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 text-xs border-b border-[#1e2942]/50 pb-2">
                    <div className="flex items-center gap-2.5">
                      <img src={item.img} alt={item.title} className="w-10 h-10 rounded-lg object-cover bg-slate-900 border border-slate-700/50" />
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-[10px] text-slate-400">Digitaler Download</p>
                      </div>
                    </div>
                    <span className="font-bold text-[#7b96fc]">{item.price.toFixed(2).replace(".", ",")} €</span>
                  </div>
                ))}
              </div>

            
              <div className="space-y-2 text-xs pt-2">
                <div className="flex justify-between text-slate-400">
                  <span>Zwischensumme</span>
                  <span>{subtotal.toFixed(2).replace(".", ",")} €</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Inkl. 19% MwSt.</span>
                  <span>{tax.toFixed(2).replace(".", ",")} €</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Versand</span>
                  <span className="text-emerald-400 font-semibold">Kostenlos (Digital)</span>
                </div>
                <div className="border-t border-[#1e2942] pt-3 flex justify-between font-black text-base text-white">
                  <span>Gesamtbetrag</span>
                  <span className="text-[#7b96fc]">{total.toFixed(2).replace(".", ",")} €</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2">
                  <input required type="checkbox" id="kasse-terms" className="rounded accent-[#3b82f6] mt-0.5" defaultChecked />
                  <label htmlFor="kasse-terms" className="text-[10px] text-slate-400 leading-tight">
                    Ich habe die AGB und Widerrufsbelehrung gelesen und erkläre mich damit einverstanden.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-[#3b82f6]/30 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Lock size={14} />
                  <span>Jetzt kostenpflichtig bestellen</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-2 border-t border-[#1e2942]/60">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span>SSL-verschlüsselte & sichere 256-Bit Übertragung</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}