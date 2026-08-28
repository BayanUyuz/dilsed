import React from "react";

export default function PortfolioPage() {
  
  const portfolioItems = [
    { id: 1, img: "https://i.imgur.com/gyaXWoQ.png", title: "Design 1", span: "sm:col-span-2 md:col-span-2" },
    { id: 2, img: "https://i.imgur.com/sJmTVlt.png", title: "Design 2", span: "" },
    { id: 3, img: "https://i.imgur.com/TciC88z.png", title: "Design 3", span: "" },
    { id: 4, img: "https://i.imgur.com/ORs738E.png", title: "Design 4", span: "" },
    { id: 5, img: "https://i.imgur.com/8BE8OOK.png", title: "Design 5", span: "" },
    { id: 6, img: "https://i.imgur.com/MkB4hD7.png", title: "Design 6", span: "" },
    { id: 7, img: "https://i.imgur.com/sSqANcP.png", title: "Design 7", span: "" },
    { id: 8, img: "https://i.imgur.com/5U42Oc2.png", title: "Design 8", span: "" },
    { id: 9, img: "https://i.imgur.com/66v67gl.png", title: "Design 9", span: "" },
    { id: 10, img: "https://i.imgur.com/WbqsurH.png", title: "Design 10", span: "" },
    { id: 11, img: "https://i.imgur.com/9lcehSj.png", title: "Design 11", span: "" },
    { id: 12, img: "https://i.imgur.com/3M8GaBg.png", title: "Design 12", span: "" },
    { id: 13, img: "https://i.imgur.com/LJrVxEn.png", title: "Design 13", span: "" },
    { id: 14, img: "https://i.imgur.com/9VGcXtk.png", title: "Design 14", span: "" },
    { id: 15, img: "https://i.imgur.com/c69acMt.png", title: "Design 15", span: "" },
    { id: 16, img: "https://i.imgur.com/jNavC8C.png", title: "Design 16", span: "" },
    { id: 17, img: "https://i.imgur.com/1wPZTRN.png", title: "Design 17", span: "" },
    { id: 18, img: "https://i.imgur.com/VtBzU2u.png", title: "Design 18", span: "" },
    { id: 19, img: "https://i.imgur.com/WaOohA1.png", title: "Design 19", span: "" },
    { id: 20, img: "https://i.imgur.com/BRWoKUf.png", title: "Design 20", span: "" },
    { id: 21, img: "https://i.imgur.com/qwfVPPe.png", title: "Design 21", span: "" },
    { id: 22, img: "https://i.imgur.com/XV11w14.png", title: "Design 22", span: "" },
    { id: 23, img: "https://i.imgur.com/QkXRFQz.png", title: "Design 23", span: "" },
  ];

  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-12 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 pt-4">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
              Kreative Designs, <br />
              echte <span className="text-indigo-500 font-extrabold">Ergebnisse</span>
            </h1>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Hier findest du eine Auswahl unserer Arbeiten. Jedes Projekt wurde mit Leidenschaft, Kreativität und Liebe zum Detail erstellt.
            </p>
          </div>

          <div className="relative h-80 flex items-center justify-center">
            <div className="absolute left-6 top-2 w-44 h-60 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl transform -rotate-6">
              <img src="https://i.imgur.com/TciC88z.png" alt="Left Hero" className="w-full h-full object-cover" />
            </div>
            <div className="absolute right-6 top-6 w-44 h-60 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl transform rotate-6">
              <img src="https://i.imgur.com/sJmTVlt.png" alt="Right Hero" className="w-full h-full object-cover" />
            </div>
            <div className="absolute z-10 w-48 h-64 rounded-2xl overflow-hidden border border-slate-500 shadow-2xl">
              <img src="https://i.imgur.com/gyaXWoQ.png" alt="Front Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl overflow-hidden border border-slate-800/80 hover:border-indigo-500/50 transition-all h-56 group bg-slate-900/40 ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}