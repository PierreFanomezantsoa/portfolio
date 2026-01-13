import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../img/pierre-modified.png";
import CV from "../img/cv.pdf";

const roles = [
  "Développeur JS",
  "Développeur Java",
  "Développeur PHP Symfony",
  "Designer et Concepteur",
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
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-0 sm:p-2">

      {/* Colonne texte */}
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
        <motion.h2
          className="text-lg sm:text-xl font-medium text-teal-400 tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Je suis <span className="text-white font-bold">Nandrasanarivo Pierre</span>
        </motion.h2>

        {/* Animation des rôles - Typographie plus impactante */}
        <div className="h-14 sm:h-20 overflow-hidden my-2">
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[index]}
              className="text-3xl sm:text-5xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              {roles[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
          Passionné par le développement logiciel et les technologies modernes, 
          je conçois des applications <span className="text-teal-300">performantes</span> et 
          <span className="text-teal-300"> intuitives</span>. Mon objectif : transformer vos idées en solutions numériques élégantes.
        </p>

        {/* Bouton CV - Ergonomie améliorée */}
        <div className="mt-10 flex justify-center md:justify-start">
          <a
            href={CV}
            download
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-teal-400 
                       border-2 border-teal-500/50 rounded-xl overflow-hidden transition-all duration-300
                       hover:text-slate-950 hover:border-teal-400 active:scale-95"
          >
            <span className="absolute inset-0 bg-teal-400 translate-y-full group-hover:translate-y-0 
                             transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 flex items-center gap-2">
              Télécharger CV
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Colonne image - Design "Halo" Bleu Nuit */}
      <div className="order-1 md:order-2 flex-shrink-0 relative">
        {/* Effet de lueur arrière-plan */}
        <div className="absolute inset-0 bg-teal-500/20 blur-[60px] rounded-full"></div>
        
        <motion.div
          className="relative z-10 p-1 rounded-full bg-gradient-to-tr from-teal-500 to-slate-800"
          initial={{ rotate: 5, opacity: 0, scale: 0.9 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="bg-slate-950 rounded-full p-1.5">
            <img
              src={image1}
              alt="Portrait de Pierre"
              className="w-44 sm:w-60 h-44 sm:h-60 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}