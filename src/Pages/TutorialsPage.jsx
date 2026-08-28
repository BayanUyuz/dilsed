import React from "react";
import { Play, Sparkles, Zap, RefreshCw } from "lucide-react";

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Logo von Grund auf erstellen",
      desc: "Lerne, wie du ein einzigartiges Logo entwickelst vom Konzept bis zum Design",
    },
    {
      title: "Social Media Kit",
      desc: "Erstelle eine einheitliches Design für Instagram, Twitch & Co.",
    },
    {
      title: "Professionelles Branding",
      desc: "So entsteht eine starke Markenidentität",
    },
    {
      title: "5 Photoshop Tricks",
      desc: "Kleine Tricks, große Wirkung - für schnellere Ergebnisse",
    },
    {
      title: "Maskottchen Logo Design",
      desc: "Zeichnen ein starkes Maskottchen-Logo von der Skizze bis zum Render.",
    },
    {
      title: "Moderne Banner gestalten",
      desc: "So gestaltest du beeindruckende Banner für Social Media und Webseiten",
    },
  ];

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-10 pb-24 font-sans relative">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 pt-8">
          {/* Sol Başlık Metinleri */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 tracking-tight">
              Tutorials, die dich <br />
              <span className="text-indigo-400">besser machen</span>
            </h1>
            <p className="text-slate-400 text-xs md:text-sm max-w-md leading-relaxed">
              Schritt für Schritt Anleitungen, Tipps und Inspirationen rund um Logo Design, Branding und kreative Workflows.
            </p>
          </div>

          {/* Sağ Video Görsel Çerçevesi */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-md h-64 rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl relative group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
                alt="Tutorial Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-lg shadow-indigo-600/50 group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={28} className="ml-1 fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 İKONLU ÖZELLİK ALANI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4">
              <Sparkles size={24} />
            </div>
            <h3 className="font-bold text-base mb-1">Einfach erklärt</h3>
            <p className="text-xs text-slate-400">Klare strukturierte Schritte für jedes Level</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4">
              <Zap size={24} />
            </div>
            <h3 className="font-bold text-base mb-1">Praxisnah</h3>
            <p className="text-xs text-slate-400">Direkt umsetzbare Tipps für deine Projekte</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4">
              <RefreshCw size={24} />
            </div>
            <h3 className="font-bold text-base mb-1">Regelmäßig neu</h3>
            <p className="text-xs text-slate-400">Neue Tutorials jede Woche</p>
          </div>
        </div>

        {/* VİDEO KARTLARI SEKSİYONU */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Lernen, anwenden, besser werden
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tutorials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/50 rounded-3xl p-8 flex flex-col justify-between items-center text-center transition-all group hover:bg-slate-900/80 shadow-xl"
            >
              <div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              <button className="px-5 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-bold transition-all flex items-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-600/30">
                Zum Video <Play size={12} className="fill-current" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}