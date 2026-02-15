import React from 'react';
import { Linkedin, Github, Mail, MessageCircle, ArrowUp } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden">
      {/* Ligne de séparation néon subtile */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Colonne 1 : Branding */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <div className="w-6 h-6 bg-teal-400 rounded-sm rotate-45 shadow-[0_0_15px_rgba(45,212,191,0.5)]"></div>
              <span className="text-white font-black tracking-tighter text-2xl uppercase">
                PIERRE<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-medium opacity-80">
              "Expertise full-stack et design intuitif au service de vos ambitions digitales. 
              Basé à Fianarantsoa, ouvert aux opportunités mondiales."
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="flex flex-col gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-400/60">
              Exploration
            </span>
            <nav className="flex flex-col gap-4">
              {[
                { name: 'Accueil', id: 'home' },
                { name: 'À propos', id: 'about' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Parcours', id: 'experience' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  className="group flex items-center gap-2 text-[11px] font-bold text-slate-300 hover:text-teal-400 transition-all duration-300 w-fit tracking-[0.2em] uppercase"
                >
                  <span className="w-0 h-px bg-teal-400 group-hover:w-4 transition-all duration-300"></span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Colonne 3 : Connect */}
          <div className="flex flex-col gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-400/60">
              Réseaux
            </span>
            <div className="flex flex-wrap gap-4">
              <SocialIcon href="https://linkedin.com/in/votre-profil" icon={<Linkedin size={18} />} />
              <SocialIcon href="https://github.com/votre-username" icon={<Github size={18} />} />
              <SocialIcon href="https://wa.me/261342626760" icon={<MessageCircle size={18} />} />
              <SocialIcon href="mailto:rnandrasanarivo@gmail.com" icon={<Mail size={18} />} />
            </div>
          </div>
        </div>

        {/* Barre de Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-white text-[10px] uppercase tracking-[0.3em] font-black">
              © {currentYear} <span className="text-teal-400">PIERRE NANDRASANARIVO</span>
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
               <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse shadow-[0_0_8px_#2dd4bf]"></span>
               Full-Stack Dev • Fianarantsoa, MG
            </div>
          </div>
          
          {/* Bouton retour en haut */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-white transition-all"
          >
            Back to top
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 text-slate-300 border border-white/5 transition-all duration-500 
                 hover:bg-teal-500 hover:text-slate-950 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(45,212,191,0.2)]"
    >
      {icon}
    </a>
  );
}

export default Footer;