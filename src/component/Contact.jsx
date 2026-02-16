import React, { useState } from 'react';
import { Send, CheckCircle2, Mail } from 'lucide-react';
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

    formData.append("access_key", "be4625a4-d0b6-448b-ae59-b81684646fe9");
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

  return (
    <div className="w-full py-12 md:py-20 px-4 md:px-6 relative z-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-2xl mx-auto bg-slate-900/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-teal-500/20 text-center shadow-2xl"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-[0_0_30px_rgba(45,212,191,0.1)]">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase">Message Reçu !</h2>
            <p className="text-slate-400 mb-8 md:mb-10 text-sm md:text-lg">
              Merci, votre message a bien été transmis.<br className="hidden md:block" />
              Je reviens vers vous sur <span className="text-teal-400 font-bold">{senderEmail}</span> très prochainement.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-teal-400 rounded-xl md:rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="max-w-4xl mx-auto bg-slate-900/30 backdrop-blur-xl p-6 md:p-16 rounded-[2rem] md:rounded-[3.5rem] border border-white/10 relative overflow-hidden shadow-2xl"
          >
            {/* Lueur d'arrière-plan - cachée sur petit mobile pour performance */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none hidden sm:block"></div>
            
            <div className="text-center mb-10 md:mb-16 relative z-10">
              <span className="text-teal-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-3 block">
                Collaboration
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-tight">
                Démarrons un <span className="text-teal-400">Projet</span>
              </h2>
              <div className="h-1 w-10 md:h-1.5 md:w-12 bg-teal-500 mx-auto rounded-full mb-4"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 relative z-10">
              <input type="checkbox" name="botcheck" className="hidden" />

              {/* Champ Nom */}
              <div className="flex flex-col group">
                <label className="mb-2 ml-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-teal-400 transition-colors">Nom</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="px-5 py-4 md:px-6 md:py-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/50 transition-all duration-300 placeholder:text-slate-600"
                  placeholder="Ex: Rakoto"
                />
              </div>

              {/* Champ Prénom */}
              <div className="flex flex-col group">
                <label className="mb-2 ml-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-teal-400 transition-colors">Prénom</label>
                <input
                  type="text"
                  name="firstname"
                  className="px-5 py-4 md:px-6 md:py-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/50 transition-all duration-300 placeholder:text-slate-600"
                  placeholder="Ex: Pierre"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col col-span-1 md:col-span-2 group">
                <label className="mb-2 ml-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-teal-400 transition-colors">Adresse Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="px-5 py-4 md:px-6 md:py-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/50 transition-all duration-300 placeholder:text-slate-600"
                  placeholder="rakoto.pierre@exemple.com"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col col-span-1 md:col-span-2 group">
                <label className="mb-2 ml-2 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-teal-400 transition-colors">Votre Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="px-5 py-4 md:px-6 md:py-5 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/50 resize-none transition-all duration-300 placeholder:text-slate-600"
                  placeholder="Parlez-moi de votre idée..."
                ></textarea>
              </div>

              {/* Bouton d'envoi */}
              <div className="col-span-1 md:col-span-2 flex justify-center mt-2 md:mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full md:w-auto flex items-center justify-center gap-4 px-10 md:px-16 py-5 md:py-6 bg-teal-500 text-slate-950 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] rounded-xl md:rounded-2xl transition-all duration-500 shadow-[0_10px_40px_rgba(45,212,191,0.2)] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-400 hover:-translate-y-1 hover:shadow-teal-400/40'
                  }`}
                >
                  {isSubmitting ? "Envoi..." : "Propulser le message"}
                  {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </div>
            </form>

            <div className="mt-12 md:mt-16 flex flex-col items-center gap-4">
              <div className="h-px w-16 bg-white/10"></div>
              <p className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-[9px] md:text-[11px] text-slate-500 tracking-widest uppercase text-center">
                <span className="flex items-center gap-2">
                  <Mail size={12} className="text-teal-500" />
                  Email :
                </span>
                <span className="text-white/80 font-bold lowercase md:uppercase break-all">rnandrasanarivopierre@gmail.com</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;