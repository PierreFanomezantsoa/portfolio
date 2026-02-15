import React from 'react';
import { Linkedin, Github, Mail, MessageCircle } from 'lucide-react'; // Facebook retiré car non utilisé, Linkedin conservé

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-100"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Colonne 1 : Branding */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <div className="w-6 h-6 bg-teal-400 rounded-sm rotate-45 shadow-lg shadow-teal-400/20"></div>
              <span className="text-slate-950 font-black tracking-tighter text-2xl uppercase">
                PIERRE<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-slate-600 text-base max-w-sm leading-relaxed font-medium">
              "Expertise full-stack et design intuitif au service de vos ambitions digitales."
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="flex flex-col gap-8">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">
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
                  className="group flex items-center gap-2 text-[12px] font-bold text-slate-900 hover:text-teal-500 transition-all duration-300 w-fit tracking-widest uppercase"
                >
                  <span className="w-0 h-px bg-teal-400 group-hover:w-4 transition-all duration-300"></span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Colonne 3 : Connect - AJOUT DE LINKEDIN ICI */}
          <div className="flex flex-col gap-8">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900">
              Réseaux
            </span>
            <div className="flex flex-wrap gap-3">
              <SocialIcon 
                href="https://linkedin.com/in/votre-profil" /* Remplacez par votre lien */
                icon={<Linkedin size={20} />} 
              />
              <SocialIcon 
                href="https://github.com/votre-username" 
                icon={<Github size={20} />} 
              />
              <SocialIcon 
                href="https://wa.me/261342626760" 
                icon={<MessageCircle size={20} />} 
              />
              <SocialIcon 
                href="mailto:rnandrasanarivo@gmail.com" 
                icon={<Mail size={20} />} 
              />
            </div>
          </div>
        </div>

        {/* Barre de Copyright */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-slate-950 text-[11px] uppercase tracking-widest font-black">
              © {currentYear} PIERRE NANDRASANARIVO
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase">
               <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span>
               Développeur Full-Stack • Fianarantsoa, MG
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase bg-slate-50 border border-slate-100 px-4 py-2 rounded-full">
               Madagascar
             </span>
          </div>
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
      className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-950 text-white transition-all duration-300 
                 hover:bg-teal-500 hover:-translate-y-2 shadow-lg shadow-teal-500/10"
    >
      {icon}
    </a>
  );
}

export default Footer;