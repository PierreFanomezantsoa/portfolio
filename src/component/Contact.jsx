import React from 'react';
import { Send } from 'lucide-react';

function Contact() {
  return (
    <div className="w-full py-4"> 
      {/* Conteneur : Alignement sur le style "Moyen" des cartes Experience */}
      <div className="max-w-3xl mx-auto bg-slate-900/40 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-xl">
        
        <div className="text-center mb-10">
          <span className="text-teal-400 text-[9px] font-black uppercase tracking-[0.3em] mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tighter">
            Parlons de votre <span className="text-teal-400">Projet</span>
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base max-w-md mx-auto">
            Une idée ou une collaboration ? Envoyez-moi un message direct.
          </p>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Champ Nom */}
          <div className="flex flex-col">
            <label htmlFor="nom" className="mb-2 ml-1 text-[9px] font-bold uppercase tracking-widest text-slate-500">Nom</label>
            <input
              type="text"
              id="nom"
              className="px-5 py-3.5 rounded-xl bg-slate-950/40 text-white text-sm placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
              placeholder="Votre nom"
            />
          </div>

          {/* Champ Prénom */}
          <div className="flex flex-col">
            <label htmlFor="prenom" className="mb-2 ml-1 text-[9px] font-bold uppercase tracking-widest text-slate-500">Prénom</label>
            <input
              type="text"
              id="prenom"
              className="px-5 py-3.5 rounded-xl bg-slate-950/40 text-white text-sm placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
              placeholder="Votre prénom"
            />
          </div>

          {/* Adresse Email */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="email" className="mb-2 ml-1 text-[9px] font-bold uppercase tracking-widest text-slate-500">Adresse Email</label>
            <input
              type="email"
              id="email"
              className="px-5 py-3.5 rounded-xl bg-slate-950/40 text-white text-sm placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
              placeholder="exemple@email.com"
            />
          </div>

          {/* Champ Message */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="message" className="mb-2 ml-1 text-[9px] font-bold uppercase tracking-widest text-slate-500">Message</label>
            <textarea
              id="message"
              rows="4"
              className="px-5 py-3.5 rounded-xl bg-slate-950/40 text-white text-sm placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none transition-all duration-300"
              placeholder="Comment puis-je vous aider ?"
            ></textarea>
          </div>

          {/* Bouton d'envoi Compact Premium */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="group relative w-full sm:w-64 py-3.5 bg-teal-500 text-slate-950 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-teal-500/10 flex items-center justify-center gap-3"
            >
              Envoyer
              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;