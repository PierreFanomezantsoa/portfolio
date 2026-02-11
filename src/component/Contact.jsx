import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const emailValue = formData.get("email");
    setSenderEmail(emailValue);

    // CONFIGURATION WEB3FORMS
    formData.append("access_key", "be4625a4-d0b6-448b-ae59-b81684646fe9"); // Mets ta clé ici
    formData.append("subject", `Nouveau message de ${formData.get("email")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 text-center"
        >
          <div className="w-20 h-20 bg-teal-50 text-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Message Envoyé !</h2>
          <p className="text-slate-500 mb-8">
            Merci Pierre, votre message a bien été transmis. <br />
            Je reviens vers vous sur <span className="text-teal-500 font-bold">{senderEmail}</span> très vite.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-teal-500 font-black uppercase text-[10px] tracking-widest hover:text-slate-900 transition-colors"
          >
            Envoyer un autre message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full py-12"> 
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
        
        {/* Décoration subtile Teal 400 */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-40 h-40 bg-teal-400/5 blur-3xl rounded-full"></div>

        <div className="text-center mb-12 relative z-10">
          <span className="text-teal-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
            Démarrons un <span className="text-teal-400">Projet</span>
          </h2>
          <p className="text-slate-500 font-normal text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Une idée ou une collaboration ? Écrivez-moi.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          {/* Nom */}
          <div className="flex flex-col">
            <label className="mb-3 ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-teal-400/5 focus:bg-white focus:border-teal-400/40 transition-all duration-300"
              placeholder="Votre nom"
            />
          </div>

          {/* Prénom */}
          <div className="flex flex-col">
            <label className="mb-3 ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Prénom</label>
            <input
              type="text"
              name="firstname"
              className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-teal-400/5 focus:bg-white focus:border-teal-400/40 transition-all duration-300"
              placeholder="Votre prénom"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="mb-3 ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Adresse Email</label>
            <input
              type="email"
              name="email"
              required
              className="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-teal-400/5 focus:bg-white focus:border-teal-400/40 transition-all duration-300"
              placeholder="votre@email.com"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="mb-3 ml-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Votre Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="px-6 py-4 rounded-[2rem] bg-slate-50 border border-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-4 focus:ring-teal-400/5 focus:bg-white focus:border-teal-400/40 resize-none transition-all duration-300"
              placeholder="Décrivez votre projet..."
            ></textarea>
          </div>

          {/* Bouton */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group flex items-center justify-center gap-3 px-12 py-5 bg-teal-400 text-white text-[11px] font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl shadow-teal-400/20 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-teal-500 hover:scale-105 active:scale-95'
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
            </button>
          </div>
        </form>

        <p className="text-center mt-10 text-[10px] text-slate-400  tracking-widest">
           Direct : <span className="text-slate-900 font-black">rnandrasanarivopierre@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;