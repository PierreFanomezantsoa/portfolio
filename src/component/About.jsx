import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../img/pierre-modified.png';
import  CV from '../img/cv.pdf';

const roles = ["Développeur JS", "Développeur Java", "Développeur PHP Symfony","Designer et concepteur"];

function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change de rôle toutes les 2.5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-8 md:p-16">
      <div className="text-center md:text-left max-w-xl">
        <motion.h2
          className="font-semibold text-2xl text-teal-700"
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 3, y: 0 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        >
          Je suis RAFANOMEZANTSOA Nandrasanarivo Pierre
        </motion.h2>
        <div className="h-12 overflow-hidden my-2">
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[index]}
              className="font-bold text-4xl text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {roles[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Je suis passionné par le développement logiciel, avec une forte motivation créative 
          dans le domaine des technologies et de l'informatique. Voici mon portfolio, 
          n’hésite pas à y jeter un œil !
        </p><br />
       <div className='absolute'>
  <button className='relative md:left-28 left-3 px-16 py-3
    text-teal-500 font-bold border-2 rounded-full
    overflow-hidden
    hover:text-white
    hover:border-teal-500
    before:content-[""] before:absolute before:inset-0 
    before:bg-teal-500 before:scale-x-0 before:origin-left
    before:transition-transform before:duration-300
    hover:before:scale-x-100'>
      <a href={CV} download>
        <span className='relative z-10'>Dowanload cv</span>
      </a>
  </button>
</div>
      </div>
      <div className="flex-shrink-0 p-4 ">
        <img 
          src={image1} 
          alt="Portrait de Pierre" 
          className="w-64 h-auto object-contain border-none rounded-lg" 
        />
      </div>
    </div>
  );
}

export default About;
