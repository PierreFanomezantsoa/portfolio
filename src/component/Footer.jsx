import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, Github, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-16 pb-8 overflow-hidden">
      {/* Effet de lumière en arrière-plan pour finir le scroll en douceur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo & Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-teal-500 rounded-md"></div>
              <span className="text-white font-black tracking-tighter text-xl">PIERRE.DEV</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Développeur Full-Stack passionné par la création d'expériences numériques modernes et performantes.
            </p>
          </div>

          {/* Navigation Rapide */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a href="#home" className="hover:text-teal-400 transition-colors">Accueil</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">À propos</a>
            <a href="#portfolio" className="hover:text-teal-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </nav>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4">
            <SocialIcon href="https://github.com" icon={<Github size={20} />} color="hover:text-white" />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={20} />} color="hover:text-blue-400" />
            <SocialIcon href="https://twitter.com" icon={<Twitter size={20} />} color="hover:text-sky-400" />
            <SocialIcon href="mailto:votre@email.com" icon={<Mail size={20} />} color="hover:text-teal-400" />
          </div>
        </div>

        {/* Séparateur horizontal */}
        <hr className="border-slate-900 my-10" />

        {/* Copyright & Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-[12px] uppercase tracking-widest font-medium">
            © {currentYear} Nandrasanarivo Pierre. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
            <span className="cursor-default">Designé avec ❤️</span>
            <span className="cursor-default">Fianarantsoa, MG</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sous-composant pour les icônes pour garder le code propre
function SocialIcon({ href, icon, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-300 
                 hover:-translate-y-1 ${color} hover:border-teal-500/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]`}
    >
      {icon}
    </a>
  );
}

export default Footer;