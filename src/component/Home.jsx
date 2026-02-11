import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown, MessageCircle, Mail, Github } from "lucide-react";

// Import de vos composants de sections
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const sections = ["home", "about", "portfolio", "experience", "contact"];

const sectionLabels = {
  home: "Accueil",
  about: "À propos",
  portfolio: "Expertise",
  experience: "Parcours",
  contact: "Contact"
};

// Composant pour l'apparition fluide des sections au scroll
const AnimatedSection = ({ id, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll : Navbar compacte + Tracking de la section active
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const offset = 200;
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction de scroll fluide personnalisée
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-teal-400/20 selection:text-teal-600 font-sans">
      
      {/* AMBIANCE DE FOND (Gradients subtils) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-teal-400/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-slate-200/20 blur-[120px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <motion.header
        className={`fixed w-full z-[60] transition-all duration-500 ${
          scrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm" : "py-8 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => scrollTo("home")}
          >
            <div className="w-5 h-5 bg-teal-400 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-700 shadow-lg shadow-teal-400/20" />
            <span className="text-slate-950 font-black tracking-tighter text-xl uppercase italic">
              Pierre<span className="text-teal-400">.</span>
            </span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {sections.slice(1).map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="relative py-2"
              >
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 ${
                  active === s ? "text-teal-400" : "text-slate-400 hover:text-slate-950"
                }`}>
                  {sectionLabels[s]}
                </span>
                {active === s && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden relative z-[70] w-11 h-11 flex items-center justify-center bg-slate-950 rounded-full text-white shadow-xl shadow-slate-950/20" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? <X size={20} key="close" /> : <Menu size={20} key="open" />}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* MENU MOBILE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-[55] flex flex-col justify-between p-10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-teal-400/10 blur-[100px] rounded-full -z-10" />
            
            <div className="mt-24 flex flex-col gap-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-teal-400">Navigation</span>
              <div className="flex flex-col gap-4">
                {sections.map((s, i) => (
                  <motion.button 
                    key={s} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    onClick={() => scrollTo(s)}
                    className="flex items-center gap-4 text-left"
                  >
                    <span className={`text-5xl font-black uppercase tracking-tighter transition-all ${
                      active === s ? "text-slate-950" : "text-slate-200"
                    }`}>
                      {sectionLabels[s]}
                    </span>
                    {active === s && <div className="w-3 h-3 bg-teal-400 rounded-full" />}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="border-t border-slate-100 pt-8"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Contact direct</p>
              <div className="flex gap-6">
                 <a href="mailto:rnandrasanarivo@gmail.com" className="text-slate-950 font-bold hover:text-teal-400 transition-colors italic">Email</a>
                 <a href="https://wa.me/261342626760" className="text-slate-950 font-bold hover:text-teal-400 transition-colors italic">WhatsApp</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <span className="text-teal-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8 block">
              Disponible pour de nouveaux projets
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-slate-950 tracking-tighter leading-[0.9] mb-12">
              ARCHITECTE<br />
              <span className="text-teal-400">DIGITAL.</span>
            </h1>
            <p className="text-slate-500 text-base md:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-14">
              Conception d'écosystèmes numériques alliant performance technique et esthétique minimaliste.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => scrollTo("portfolio")}
                className="px-12 py-5 bg-teal-400 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-teal-500 transition-all hover:scale-105 shadow-xl shadow-teal-400/20"
              >
                Explorer mes travaux
              </button>
              <button 
                onClick={() => scrollTo("contact")}
                className="px-12 py-5 bg-white text-slate-950 text-xs font-black uppercase tracking-widest rounded-full border border-slate-200 hover:border-slate-900 transition-all"
              >
                Me contacter
              </button>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-300 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Défiler</span>
            <ArrowDown size={18} />
          </motion.div>
        </section>

        {/* SECTIONS CONTENU */}
        <div className="bg-white">
          <AnimatedSection id="about">
            <About />
          </AnimatedSection>

          <AnimatedSection id="portfolio">
            <Portfolio />
          </AnimatedSection>

          <AnimatedSection id="experience">
            <Experience />
          </AnimatedSection>

          <AnimatedSection id="contact">
            <Contact />
          </AnimatedSection>
        </div>

        <Footer />
      </main>
    </div>
  );
}