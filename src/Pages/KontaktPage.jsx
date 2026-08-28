import React, { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";

export default function KontaktPage() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-24 font-sans relative">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xs text-slate-400">
            Haben Sie Fragen oder Wünsche? Schreiben Sie uns eine Nachricht!
          </p>
        </div>

        <div className="bg-[#1e2942]/30 backdrop-blur-md border border-[#1e2942] rounded-3xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold mb-1.5 text-slate-300">Name</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Ihr Name"
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-1.5 text-slate-300">E-Mail</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-3.5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-1.5 text-slate-300">Nachricht</label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-4 top-3.5 text-slate-400" />
                <textarea
                  rows={4}
                  placeholder="Wie können wir Ihnen helfen?"
                  value={contactData.message}
                  onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                  className="w-full bg-[#03081e]/80 border border-[#1e2942] text-white placeholder-slate-500 rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-[#7b96fc] transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-[#3b82f6]/25 flex items-center justify-center gap-2"
            >
              <span>Nachricht senden</span>
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}