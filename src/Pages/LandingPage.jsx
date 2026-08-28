import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Image as ImageIcon, 
  Share2, 
  HeartHandshake, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  MessageSquare, 
  Tv, 
  Compass, 
  Video 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/15 blur-[140px] pointer-events-none -z-10" />

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-6">
            <Sparkles size={14} /> Next-Gen Stream & Design Studio
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Stell es dir vor - <br />
            wir <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">verwirklichen es</span> gemeinsam
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Professionelles Logo-Design, Grafikdesign und Social-Media-Kits - alles an einem Ort. Transparent, schnell und mit Leidenschaft.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/kasse" className="neon-btn px-7 py-3.5 text-xs uppercase tracking-wider flex items-center gap-2">
              Jetzt bestellen <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio" className="px-7 py-3.5 text-xs font-bold uppercase border border-slate-800 hover:border-slate-600 rounded-xl transition-all">
              Portfolio ansehen
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="w-72 h-80 rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl absolute -top-6 -left-2 rotate-[-6deg] opacity-70">
            <img src="https://i.imgur.com/66v67gl.png" alt="Work 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-80 h-96 rounded-3xl overflow-hidden border border-indigo-500/40 shadow-2xl z-10 relative group">
            <img src="https://i.imgur.com/TciC88z.png" alt="Work 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-slate-800/50 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Unsere Leistungen</h2>
          <p className="text-slate-400 text-xs md:text-sm mb-16">Kreative Lösungen für deinen Markenauftritt</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Logo Design", desc: "Individuelle Logos, die im Kopf bleiben und deine Marke perfekt repräsentieren.", icon: Sparkles },
              { title: "Grafik Design", desc: "Flyer, Banner, Poster und mehr - hochwertige Designs für jeden Anlass.", icon: ImageIcon },
              { title: "Social-Media-Kits", desc: "Einheitliche Designs für Instagram, Twitch, YouTube und andere Plattformen.", icon: Share2 }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="glass-card p-8 text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-3">So einfach geht's</h2>
        <p className="text-slate-400 text-xs mb-16">In 4 Schritten zu deinem perfekten Design</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { step: "Service auswählen", desc: "Wähle das passende Paket für dein Projekt.", icon: HeartHandshake },
            { step: "Wünsche hochladen", desc: "Beschreibe deine Ideen und lade Dateien hoch.", icon: Download },
            { step: "Bezahlen", desc: "Wähle deine bevorzugte Zahlungsmethode.", icon: CreditCard },
            { step: "Design erhalten", desc: "Wir setzen deine Idee um und liefern das fertige Design.", icon: CheckCircle2 }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card p-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-indigo-600/10 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mb-4">
                  <Icon size={26} />
                </div>
                <h4 className="font-bold text-sm mb-1">{item.step}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 border-t border-slate-800/50 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-16">Warum unsere Plattform?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Live Support", desc: "Stelle jederzeit Fragen und erhalte schnelle Antworten.", icon: MessageSquare },
              { title: "Live Design auf Twitch", desc: "Verfolge den Designprozess live und sei hautnah dabei.", icon: Tv },
              { title: "Lernen & Inspirieren", desc: "Schau dir unsere Tutorials an und lerne, wie Designs entstehen.", icon: Compass }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="glass-card p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Erlebe Design live</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden border border-slate-800 group h-80">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80" alt="Live Stream" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
              LIVE
            </div>
            <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-xl border border-slate-800 text-xs font-bold text-purple-400 flex items-center gap-2">
              <svg className="w-4 h-4 fill-current text-purple-400" viewBox="0 0 24 24">
                <path d="M2.14 0L.4 4.5v16.12h5.21v3.38h3.38l3.38-3.38h4.29l6.34-6.34V0H2.14zm19.1 13.03l-3.38 3.38h-4.29l-3.38 3.38v-3.38H5.61V1.9h15.63v11.13zM16.52 5.25h-2.14v5.63h2.14V5.25zm-5.63 0H8.75v5.63h2.14V5.25z"/>
              </svg>
              twitch.tv/bayanuyuz
            </div>
          </div>

          <div className="glass-card p-8 flex flex-col justify-between text-center md:text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Video size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3">YouTube Tutorials</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Schritt für Schritt Videos, Tipps und Inspiration für deine eigenen Designs.
              </p>
            </div>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="neon-btn w-full py-3 text-xs uppercase tracking-wider text-center block">
              Zum YouTube-Kanal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}