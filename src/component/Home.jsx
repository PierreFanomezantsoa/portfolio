import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 

// Importez vos composants de section
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

// --- Constantes de Hauteur ---
// Utilisées pour le scroll-margin-top et le padding-top du main
const NAVBAR_HEIGHT_MOBILE = 70; 
const NAVBAR_HEIGHT_DESKTOP = 80;

// --- Composant d'Enveloppement Animé (MODIFIÉ avec scroll-margin-top) ---
const AnimatedSection = ({ id, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      // CRUCIAL: Ajout de scroll-mt pour que le contenu ne soit pas caché sous la navbar fixe après le clic sur un lien d'ancrage.
      // pt-[70px] pour mobile, pt-[80px] pour desktop (scroll-mt-20 = 80px)
      className="px-4 sm:px-6 mb-16 md:mb-24 scroll-mt-[70px] md:scroll-mt-20" 
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
};

// --- Composant Home Principal ---
function Home() {
  const [activeButton, setActiveButton] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const sectionIds = ['home', 'about', 'portfolio', 'Experience', 'contact'];

  // --- Logique pour déterminer la section active lors du scroll ---
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
      // Utilisation de la hauteur de la navbar pour le décalage de détection
      const currentNavbarHeight = window.innerWidth >= 768 ? NAVBAR_HEIGHT_DESKTOP : NAVBAR_HEIGHT_MOBILE;
      
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          // Si le haut de la section atteint le niveau de la navbar (moins un petit décalage)
          if (window.scrollY >= section.offsetTop - currentNavbarHeight) { 
            currentSection = id;
          }
        }
      });
      setActiveButton(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  // --- Fonction de défilement (utilise maintenant le défilement natif/ancre) ---
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Le scroll-margin-top gère le décalage, donc on utilise simplement l'ancre native
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Ferme le menu mobile après le clic
    setIsMenuOpen(false); 
  };

  const baseClasses = `
    relative px-2 py-1 text-sm 
    text-gray-800 border border-transparent
    hover:text-teal-500 transition overflow-hidden
    before:content-[''] before:absolute before:inset-0
    before:border-b-2 before:border-b-teal-500 before:scale-x-0 before:origin-left
    before:transition-transform before:duration-300
    hover:before:scale-x-100
    md:px-4 md:py-2 md:text-base md:before:border-b-4
  `;

  const activeClasses = `
    text-teal-500 before:scale-x-100
  `;

  // --- Composant de Navigation pour le Menu Mobile ---
  const MobileNavMenu = (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden w-full absolute top-[58px] bg-white shadow-xl border-t border-gray-100" 
        >
          <div className="flex flex-col items-stretch py-4 space-y-1"> 
            {sectionIds.slice(1).map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  w-full text-left px-6 py-2 text-lg font-medium transition-colors
                  ${activeButton === id ? 'text-teal-600 bg-teal-50/50 border-l-4 border-teal-600' : 'text-gray-700 hover:text-teal-500 hover:bg-gray-50'}
                `}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen">
      {/* Navbar FIXE */}
      <motion.header
        className="w-full bg-white shadow-lg fixed top-0 left-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="font-bold text-xl md:text-2xl text-gray-800">
              <span className="text-teal-500 text-3xl">M</span>y Portfolio
            </div>

            {/* Bouton Hamburger */}
            <button
              className="md:hidden text-gray-700 hover:text-teal-500 transition-colors p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex justify-center gap-4">
              {sectionIds.slice(1).map((id) => (
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
        </div>

        {/* Insertion du Menu Mobile Animé */}
        {MobileNavMenu} 
      </motion.header>

      {/* Contenu Principal - Padding dynamique pour éviter le chevauchement avec la navbar */}
      <main className={`pt-[${NAVBAR_HEIGHT_MOBILE}px] md:pt-[${NAVBAR_HEIGHT_DESKTOP}px]`}> 
        <div id="home" className="min-h-[1px]"></div>
        
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