import React from 'react';
import { Linkedin, Github, Mail, Facebook, MessageCircle } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-24 pb-12 overflow-hidden">
      {/* Ligne de séparation dégradée ultra-fine */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1 : Branding */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <div className="w-6 h-6 bg-teal-500 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_15px_rgba(20,184,166,0.4)]"></div>
              <span className="text-white font-black tracking-tighter text-xl">
                PIERRE<span className="text-teal-500">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed font-light italic">
              "Transformer des idées complexes en interfaces simples et performantes, 
              directement depuis les hauts plateaux de Madagascar."
            </p>
          </div>

          {/* Colonne 2 : Navigation Rapide */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">Exploration</span>
            <nav className="flex flex-col gap-3">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-xs font-bold text-slate-500 hover:text-teal-400 transition-colors w-fit tracking-widest uppercase"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Colonne 3 : Connect (Vos vrais liens) */}
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">Connect</span>
            <div className="flex flex-wrap gap-3">
              {/* WhatsApp direct */}
              <SocialIcon 
                href="https://wa.me/261342626760" 
                icon={<MessageCircle size={18} />} 
              />
              {/* Email direct */}
              <SocialIcon 
                href="mailto:rnandrasanarivo@gmail.com" 
                icon={<Mail size={18} />} 
              />
              {/* Facebook direct */}
              <SocialIcon 
                href="https://www.facebook.com/pierre.nandrasanarivo" 
                icon={<Facebook size={18} />} 
              />
              {/* GitHub */}
              <SocialIcon 
                href="https://github.com" 
                icon={<Github size={18} />} 
              />
            </div>
          </div>
        </div>

        {/* Barre de Copyright */}
        <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-black">
              © {currentYear} PIERRE NANDRASANARIVO
            </p>
            <p className="text-slate-700 text-[9px] uppercase tracking-[0.1em]">
              Full-Stack Developer • Madagascar
            </p>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="h-px w-8 bg-slate-800 hidden md:block"></div>
             <span className="text-[9px] font-black text-slate-700 tracking-[0.3em] uppercase">
               Fianarantsoa • Madagascar
             </span>
          </div>
        </div>
      </div>

      {/* Halo lumineux de fond (très subtil) */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
}

// Composant SocialIcon unifié
function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/50 text-slate-500 transition-all duration-300 
                 hover:bg-teal-500/10 hover:text-teal-400 border border-slate-800/50 hover:border-teal-500/30 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}

export default Footer;