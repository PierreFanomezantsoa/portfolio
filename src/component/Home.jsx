import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Importez vos composants de section
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

// --- Nouveau Composant d'Enveloppement Animé ---
// Ce composant gère l'animation de chaque section
const AnimatedSection = ({ id, children }) => {
  const ref = useRef(null);
  // 'once: true' garantit que l'animation ne se déclenche qu'une seule fois
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // amount: 0.2 signifie 20% de la section doit être visible

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className="px-5 mb-16 md:mb-24" // Ajustement du padding/margin pour un meilleur rendu
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
};

// --- Composant Home Mis à Jour ---
function Home() {
  const [activeButton, setActiveButton] = useState('home');

  // --- Logique pour déterminer la section active lors du scroll (pour la navbar) ---
  const sectionIds = ['home', 'about', 'portfolio', 'Experience', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
      // Marge de défilement (hauteur de la navbar)
      const scrollMargin = 100; 

      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          // Vérifie si la section est dans la fenêtre visible, en tenant compte de la navbar
          if (window.scrollY >= section.offsetTop - scrollMargin) {
            currentSection = id;
          }
        }
      });
      setActiveButton(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour définir la bonne section au chargement
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  // --- Fonction de défilement pour les boutons de la navbar ---
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Défilement vers la section, ajusté pour la hauteur de la navbar
      const navbarHeight = 80; // Hauteur estimée de la navbar
      const y = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // setActiveButton(id); // L'effet d'écoute du scroll gère maintenant l'état actif
    }
  };

  const baseClasses = `
    relative px-4 py-2 text-sm md:text-base
    text-gray-800 border border-transparent
    hover:text-teal-500 transition overflow-hidden
    before:content-[''] before:absolute before:inset-0
    before:border-b-4 before:border-b-teal-500 before:scale-x-0 before:origin-left
    before:transition-transform before:duration-300
    hover:before:scale-x-100
  `;

  const activeClasses = `
    text-teal-500 before:scale-x-100
  `;

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <motion.header
        className="w-full bg-white shadow-lg px-6 py-4 fixed top-0 left-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="font-bold text-xl md:text-2xl text-gray-800 px-2">
            <span className="text-teal-500 text-3xl">M</span>y Portfolio
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center mt-4 md:mt-0 gap-2 md:gap-4">
            {sectionIds.slice(1).map((id) => ( // Exclut 'home' si elle est juste un point de départ
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${baseClasses} ${activeButton === id ? activeClasses : ''}`}
              >
                <span className="relative z-10">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="pt-[80px]"> {/* Ajout de padding-top pour décaler le contenu sous la navbar fixe */}
        {/* Section HOME (point de départ, vide dans le code initial) */}
        <div id="home" className="min-h-[1px]"></div>
        
        {/* Sections Animées */}
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>

        <AnimatedSection id="portfolio">
          <Portfolio />
        </AnimatedSection>
        
        <AnimatedSection id="Experience">
          <Experience/>
        </AnimatedSection>

        <AnimatedSection id="contact">
          <Contact/>
        </AnimatedSection>
        
        <section>
          <Footer/>
        </section>
      </main>
    </div>
  );
}

export default Home;