import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import image1 from "../img/pierre-modified.png";
import CV from "../img/cv.pdf";

const roles = [
  "Développeur JS",
  "Développeur Java",
  "Développeur PHP Symfony",
  "Designer UI/UX",
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24">
      
      {/* Colonne texte */}
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
        {/* Badge d'introduction - Teal 400 pour le mode sombre */}
        <motion.span
          className="block text-teal-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          À propos de moi
        </motion.span>

        <motion.h2
          className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Je suis <span className="text-teal-400">Nandrasanarivo Pierre</span>
        </motion.h2>

        {/* Animation des rôles - Slate 200 pour la lisibilité */}
        <div className="h-12 sm:h-16 overflow-hidden my-4">
          <AnimatePresence mode="wait">
            <motion.h3
              key={roles[index]}
              className="text-2xl sm:text-4xl font-extrabold text-slate-200 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {roles[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-lg font-normal">
          Passionné par le développement logiciel, je conçois des applications 
          <span className="text-white font-bold"> performantes</span> et 
          <span className="text-white font-bold"> intuitives</span>. Basé à Fianarantsoa, 
          je transforme des concepts complexes en solutions numériques élégantes et robustes.
        </p>

        {/* Bouton CV - Teal 400 et texte sombre pour le contraste sur le bouton */}
        <div className="mt-10 flex justify-center md:justify-start">
          <a
            href={CV}
            download
            className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-slate-950 text-xs font-black uppercase tracking-widest rounded-full hover:bg-teal-300 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-400/20"
          >
            Télécharger mon CV
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Colonne image - Adaptée au fond sombre */}
      <div className="order-1 md:order-2 flex-shrink-0 relative">
        {/* Halo arrière-plan - Opacité réduite pour plus de subtilité */}
        <div className="absolute inset-0 bg-teal-500/20 blur-[80px] rounded-full scale-125"></div>
        
        <motion.div
          className="relative z-10 p-1 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500 shadow-2xl"
          initial={{ rotate: 8, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        >
          {/* Bordure intérieure sombre pour le mode dark */}
          <div className="bg-[#020617] rounded-full p-1.5">
            <div className="overflow-hidden rounded-full w-48 h-48 sm:w-64 sm:h-64 border border-white/10">
              <img
                src={image1}
                alt="Portrait de Pierre"
                className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
              />
            </div>
          </div>
        </motion.div>

        {/* Petit élément décoratif "P" - Adapté au sombre */}
        <motion.div 
          className="absolute -bottom-4 -right-4 w-12 h-12 bg-teal-400 rounded-2xl shadow-xl flex items-center justify-center text-slate-950 border border-teal-300"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <span className="font-black text-xl">P</span>
        </motion.div>
      </div>
    </div>
  );
}