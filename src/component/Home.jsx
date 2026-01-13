import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const NAVBAR_HEIGHT_MOBILE = 70;
const NAVBAR_HEIGHT_DESKTOP = 80;

/* SECTION ANIMÉE ÉPURÉE - Ajustement des paddings verticaux */
const AnimatedSection = ({ id, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      // RÉDUCTION : Passage de py-16/24 à py-12/20 pour un gap plus naturel
      className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "portfolio", "experience", "contact"];

  useEffect(() => {
    const onScroll = () => {
      const offset = NAVBAR_HEIGHT_DESKTOP + 120;
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth >= 768 ? NAVBAR_HEIGHT_DESKTOP : NAVBAR_HEIGHT_MOBILE;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-teal-500/30">

      {/* NAVBAR : Suppression de border-b-2 (trop dur) pour une bordure fine slate-800 */}
      <motion.header
        className="fixed w-full bg-slate-950/60 backdrop-blur-xl border-b border-slate-900 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex justify-between items-center">
          <div className="flex items-center gap-3 font-black text-xl tracking-tighter cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-6 h-6 bg-teal-500 rounded-md"></div>
            <span className="text-white">PIERRE<span className="text-teal-500">.</span></span>
          </div>

          <nav className="hidden md:flex gap-10">
            {sections.slice(1).map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`font-bold transition-all text-[10px] uppercase tracking-[0.25em] ${
                  active === s ? "text-teal-400" : "text-slate-500 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <main>
        {/* HERO SECTION : Espacement équilibré */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] -z-10"></div>
          
          <div className="text-center max-w-5xl px-6 pt-10">
            <motion.h1 
              className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Building <br />
              <span className="text-teal-400">Digital Experiences</span>
            </motion.h1>
            <motion.p className="mt-8 text-base md:text-lg text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
              Full-Stack Developer specializing in high-performance web applications with a focus on clean, borderless design.
            </motion.p>

            <motion.div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => scrollTo("portfolio")} className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-xl font-black transition-all shadow-lg shadow-teal-500/10">
                Explore Work
              </button>
              <button onClick={() => scrollTo("contact")} className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black transition-all">
                Let's Talk
              </button>
            </motion.div>
          </div>
        </section>

        <div>
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