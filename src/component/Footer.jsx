import React from 'react';
import { Linkedin, Github, Mail, MessageCircle, ArrowUp } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
      {/* Ligne de séparation néon subtile */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Grid ajusté : gap réduit sur mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          
          {/* Colonne 1 : Branding - Centré sur mobile */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <div className="w-5 h-5 md:w-6 md:h-6 bg-teal-400 rounded-sm rotate-45 shadow-[0_0_15px_rgba(45,212,191,0.5)]"></div>
              <span className="text-white font-black tracking-tighter text-xl md:text-2xl uppercase">
                PIERRE<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm max-w-sm leading-relaxed font-medium opacity-80">
              "Expertise full-stack et design intuitif au service de vos ambitions digitales. 
              Basé à Fianarantsoa, ouvert aux opportunités mondiales."
            </p>
          </div>

          {/* Colonne 2 : Navigation - Masqué ou réorganisé proprement */}
          <div className="flex flex-col items-center md:items-start gap-6 md:gap-8">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-teal-400/60">
              Exploration
            </span>
            <nav className="flex flex-col items-center md:items-start gap-4">
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
                  className="group flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-slate-300 hover:text-teal-400 transition-all duration-300 w-fit tracking-[0.2em] uppercase"
                >
                  <span className="hidden md:block w-0 h-px bg-teal-400 group-hover:w-4 transition-all duration-300"></span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Colonne 3 : Connect */}
          <div className="flex flex-col items-center md:items-start gap-6 md:gap-8">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-teal-400/60">
              Réseaux
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              <SocialIcon href="https://linkedin.com/in/votre-profil" icon={<Linkedin size={18} />} />
              <SocialIcon href="https://github.com/votre-username" icon={<Github size={18} />} />
              <SocialIcon href="https://wa.me/261342626760" icon={<MessageCircle size={18} />} />
              <SocialIcon href="mailto:rnandrasanarivo@gmail.com" icon={<Mail size={18} />} />
            </div>
          </div>
        </div>

        {/* Barre de Copyright */}
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-center md:text-left">
              © {currentYear} <span className="text-teal-400">PIERRE NANDRASANARIVO</span>
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">
               <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse shadow-[0_0_8px_#2dd4bf]"></span>
               Full-Stack Dev • Fianarantsoa, MG
            </div>
          </div>
          
          {/* Bouton retour en haut - Plus compact sur mobile */}
          <button 
            onClick={scrollToTop}
            className="group flex flex-col md:flex-row items-center gap-3 text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-white transition-all"
          >
            <span className="order-2 md:order-1">Back to top</span>
            <div className="order-1 md:order-2 p-2.5 md:p-3 rounded-full bg-white/5 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
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
      className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/5 text-slate-300 border border-white/5 transition-all duration-500 
                 hover:bg-teal-400 hover:text-slate-950 hover:-translate-y-1.5 md:hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(45,212,191,0.2)] active:scale-90"
    >
      {/* On réduit un peu la taille de l'icône sur petit écran si nécessaire via CSS ou props */}
      {React.cloneElement(icon, { size: window.innerWidth < 768 ? 16 : 18 })}
    </a>
  );
}

export default Footer;