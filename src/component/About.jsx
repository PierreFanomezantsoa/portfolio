import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../img/pierre-modified.png';
import CV from '../img/cv.pdf';

const roles = ["Développeur JS", "Développeur Java", "Développeur PHP Symfony", "Designer et concepteur"];

function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change de rôle toutes les 2.5 secondes

    return () => clearInterval(interval);
  }, []);

  // Utilisation d'un wrapper simple pour le bouton pour un alignement responsive
  const DownloadButton = (
    <div className="mt-8 flex justify-center md:justify-start">
      <a 
        href={CV} 
        download
        // Ajout de w-full sur mobile pour que le bouton prenne plus de place si max-w-xs n'est pas suffisant
        className='relative w-full sm:w-auto max-w-xs sm:max-w-none px-12 py-3 
          text-teal-500 font-bold border-2 border-teal-500 rounded-full
          overflow-hidden transition duration-300 hover:text-white group'
      >
        <span className='absolute inset-0 bg-teal-500 scale-x-0 group-hover:scale-x-100 origin-left 
          transition-transform duration-300 ease-in-out z-0'>
        </span>
        <span className='relative z-10'>Télécharger CV</span>
      </a>
    </div>
  );

  return (
    // PADDING CORRIGÉ: p-6 (24px) sur mobile, sm:p-12 (48px) sur petit écran, md:p-16 (64px) sur desktop
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 sm:p-12 md:p-16">

      {/* Colonne du Texte (order-2 sur mobile, order-1 sur desktop/md+) */}
      <div className="order-2 md:order-1 text-center md:text-left max-w-xl">
        <motion.h2
          className="font-semibold text-xl sm:text-2xl text-teal-700 mt-4 md:mt-0"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Je suis RAFANOMEZANTSOA Nandrasanarivo Pierre
        </motion.h2>

        {/* Animation des Rôles */}
        <div className="h-10 sm:h-12 overflow-hidden my-2">
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[index]}
              className="font-bold text-3xl sm:text-4xl text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
          Je suis passionné par le développement logiciel, avec une forte motivation créative 
          dans le domaine des technologies et de l'informatique. Voici mon portfolio, 
          n’hésite pas à y jeter un œil !
        </p>

        {/* Intégration du Bouton Télécharger CV */}
        {DownloadButton}
      </div>

      {/* Colonne de l'Image (order-1 sur mobile, order-2 sur desktop/md+) */}
      <div className="order-1 md:order-2 flex-shrink-0 w-full flex justify-center md:block md:w-auto">
        <motion.img 
          src={image1} 
          alt="Portrait de Pierre" 
          className="w-48 sm:w-64 h-auto object-contain rounded-full shadow-2xl border-4 border-teal-500/50 
                     transition duration-500" 
          initial={{ rotate: 10, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        />
      </div>
      
    </div>
  );
}

export default About;