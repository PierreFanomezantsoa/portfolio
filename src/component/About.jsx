import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import image1 from "../img/pierre-modified.png";
import CV from "../img/cv.pdf";

const roles = [
  "Développeur Full-Stack JS",
  "Expert Java Spring Boot",
  "Architecte PHP Symfony",
  "Designer d'Interfaces UI/UX",
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-32 px-6 pt-8 pb-12 md:pt-10 md:pb-16">

      {/* Colonne Image */}
      <div className="order-1 md:order-2 flex-shrink-0 relative">
        <div className="absolute inset-0 bg-sky-500/25 blur-[60px] md:blur-[100px] rounded-full scale-125 animate-pulse"></div>
        
        <motion.div
          className="relative z-10 p-[2px] rounded-full bg-gradient-to-tr from-green-400 via-green-500 to-green-600 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-[#020617] rounded-full p-1.5">
            <div className="overflow-hidden rounded-full w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 border border-white/5">
              <img
                src={image1}
                alt="Portrait de Pierre"
                className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
              />
            </div>
          </div>
        </motion.div>

        {/* Badge Flottant "P" */}
        <motion.div 
          className="absolute -bottom-1 -right-1 md:-bottom-10 md:-right-2 w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-2xl shadow-[0_0_20px_rgba(14,165,233,0.4)] flex items-center justify-center text-white border border-sky-300/30"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <span className="font-black text-xl md:text-2xl tracking-tighter">P</span>
        </motion.div>
      </div>

      {/* Colonne texte */}
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
        <motion.span
          className="block text-green-300 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] mb-2 md:mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Identité & Vision
        </motion.span>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-none"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">Pierre.</span>
        </motion.h2>

        {/* Carrousel des rôles */}
        <div className="h-10 sm:h-14 md:h-16 overflow-hidden my-2 md:my-3">
          <AnimatePresence mode="wait">
            <motion.h3
              key={roles[index]}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {roles[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        <p className="mt-3 md:mt-4 text-slate-100 text-base font-semibold md:text-lg leading-relaxed max-w-lg  mx-auto md:mx-0">
          Architecte de solutions digitales, je fusionne la rigueur du 
          <span className="text-green-500  font-semibold "> Back-end</span> avec l'élégance de l' 
          <span className="text-green-500 font-semibold "> Expérience Utilisateur</span>. 
          Basé à Fianarantsoa, j'accompagne vos projets vers l'excellence technologique.
        </p>

        {/* Bouton de téléchargement */}
        <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
          <a
            href={CV}
            download
            className="group relative inline-flex items-center gap-4 px-8 py-4
             bg-green-700 text-white text-blod font-extrabold tracking-[0.2em]
              rounded-full overflow-hidden
               transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] active:scale-95"
          >
            <div className="absolute bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Mon Curriculum Vitæ</span>
            <Download size={16} className="relative z-10 group-hover:translate-y-0.5 transition-transform text-sky-200" />
          </a>
        </div>
      </div>
      
    </div>
  );
}
