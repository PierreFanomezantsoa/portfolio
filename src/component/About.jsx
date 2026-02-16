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
    // Ajout de px-6 et py-12 pour éviter que le contenu touche les bords sur mobile
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 px-6 py-12 md:py-24 min-h-[80vh]">
      
      {/* Colonne Image - Placée en haut sur mobile (order-1) pour l'impact visuel */}
      <div className="order-1 md:order-2 flex-shrink-0 relative">
        {/* Halo arrière-plan - Légèrement réduit sur mobile */}
        <div className="absolute inset-0 bg-teal-500/20 blur-[50px] md:blur-[80px] rounded-full scale-110 md:scale-125"></div>
        
        <motion.div
          className="relative z-10 p-1 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500 shadow-2xl"
          initial={{ rotate: 8, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        >
          <div className="bg-[#020617] rounded-full p-1">
            {/* Taille ajustée : w-40 sur mobile, w-64 sur desktop */}
            <div className="overflow-hidden rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 border border-white/10">
              <img
                src={image1}
                alt="Portrait de Pierre"
                className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
              />
            </div>
          </div>
        </motion.div>

        {/* Badge "P" - Taille réduite sur mobile */}
        <motion.div 
          className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-teal-400 rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center text-slate-950 border border-teal-300"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <span className="font-black text-lg md:text-xl">P</span>
        </motion.div>
      </div>

      {/* Colonne texte */}
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
        <motion.span
          className="block text-teal-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-3 md:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          À propos de moi
        </motion.span>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Je suis <span className="text-teal-400">Nandrasanarivo Pierre</span>
        </motion.h2>

        {/* Animation des rôles - Hauteur fixe ajustée pour mobile */}
        <div className="h-10 sm:h-14 md:h-16 overflow-hidden my-3 md:my-4">
          <AnimatePresence mode="wait">
            <motion.h3
              key={roles[index]}
              className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-200 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {roles[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        <p className="mt-4 md:mt-6 text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-normal mx-auto md:mx-0">
          Passionné par le développement logiciel, je conçois des applications 
          <span className="text-white font-bold"> performantes</span> et 
          <span className="text-white font-bold"> intuitives</span>. Basé à Fianarantsoa, 
          je transforme des concepts complexes en solutions numériques élégantes.
        </p>

        {/* Bouton CV - Largeur complète sur très petits écrans si nécessaire, ou centré */}
        <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
          <a
            href={CV}
            download
            className="group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-teal-400 text-slate-950 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full hover:bg-teal-300 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-400/20"
          >
            Télécharger mon CV
            <Download size={12} className="group-hover:translate-y-0.5 transition-transform md:size-10" />
          </a>
        </div>
      </div>
      
    </div>
  );
}