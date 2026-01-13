import React from 'react';
import { Send } from 'lucide-react';

function Contact() {
  return (
    <div className="w-full py-0"> 
      {/* Conteneur principal sans bordure, coins très arrondis */}
      <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-3xl p-8 sm:p-12 rounded-[2.5rem] shadow-2xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Parlons de votre <span className="text-teal-400">Projet</span>
          </h2>
          <p className="text-slate-400 font-light text-lg">
            Une idée, une collaboration ou simplement un coucou ?
          </p>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Champ Nom */}
          <div className="flex flex-col">
            <label htmlFor="nom" className="mb-3 ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Nom</label>
            <input
              type="text"
              id="nom"
              className="px-6 py-4 rounded-2xl bg-slate-950/40 text-white placeholder-slate-700 focus:outline-none focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
              placeholder="Votre nom"
            />
          </div>

          {/* Champ Prénom */}
          <div className="flex flex-col">
            <label htmlFor="prenom" className="mb-3 ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Prénom</label>
            <input
              type="text"
              id="prenom"
              className="px-6 py-4 rounded-2xl bg-slate-950/40 text-white placeholder-slate-700 focus:outline-none focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
              placeholder="Votre prénom"
            />
          </div>

          {/* Adresse Email */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="email" className="mb-3 ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Adresse Email</label>
            <input
              type="email"
              id="email"
              className="px-6 py-4 rounded-2xl bg-slate-950/40 text-white placeholder-slate-700 focus:outline-none focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
              placeholder="exemple@email.com"
            />
          </div>

          {/* Champ Message */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="message" className="mb-3 ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Message</label>
            <textarea
              id="message"
              rows="6"
              className="px-6 py-4 rounded-2xl bg-slate-950/40 text-white placeholder-slate-700 focus:outline-none focus:ring-4 focus:ring-teal-500/10 resize-none transition-all duration-300"
              placeholder="Comment puis-je vous aider ?"
            ></textarea>
          </div>

          {/* Bouton d'envoi Flat Premium */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-8">
            <button
              type="submit"
              className="group relative w-full sm:w-80 py-4 bg-teal-500 text-slate-950 font-black rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg shadow-teal-500/20 flex items-center justify-center gap-3 tracking-wide"
            >
              Envoyer le Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;