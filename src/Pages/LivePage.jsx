import React from "react";
import { Heart } from "lucide-react";

export default function LivePage() {
  return (
    <div className="bg-[#03081e] text-white min-h-screen pt-12 pb-24 font-sans relative flex flex-col justify-between">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full my-auto">
       
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 pt-8">
        
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
              Design entsteht, <br />
              <span className="text-indigo-400">Live & in Echtzeit</span>
            </h1>
            <p className="text-slate-400 text-xs md:text-sm max-w-md leading-relaxed">
              Schau mir live zu, stelle Fragen im Chat und erlebe, wie kreative Ideen zu einzigartigen Design werden.
            </p>
          </div>

        
          <div className="relative flex justify-center">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl relative group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
                alt="Live Stream Preview"
                className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider animate-pulse shadow-lg">
                LIVE
              </div>
            </div>
          </div>
        </div>

      
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-16">
         
          <a
            href="https://www.twitch.tv/bayanuyuz"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#5932ea] hover:bg-[#4b28c8] text-white text-xs font-bold transition-all shadow-lg shadow-[#5932ea]/30 flex items-center gap-2.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M2.14 0L.4 4.5v16.12h5.21v3.38h3.38l3.38-3.38h4.29l6.34-6.34V0H2.14zm19.1 13.03l-3.38 3.38h-4.29l-3.38 3.38v-3.38H5.61V1.9h15.63v11.13zM16.52 5.25h-2.14v5.63h2.14V5.25zm-5.63 0H8.75v5.63h2.14V5.25z" />
            </svg>
            Auf Twitch Ansehen
          </a>

         
          <a
            href="https://www.twitch.tv/bayanuyuz"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 text-xs font-bold transition-all shadow-lg flex items-center gap-2"
          >
            Folgen <Heart size={15} className="text-slate-950 fill-slate-950" />
          </a>
        </div>
      </div>
    </div>
  );
}