import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown } from "lucide-react";

import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const sections = ["home", "about", "portfolio", "experience", "contact"];

const AnimatedSection = ({ id, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24"
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const offset = 150;
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
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-teal-500/30 selection:text-white">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "py-4 bg-slate-950/80 backdrop-blur-lg border-b border-white/5" : "py-8 bg-transparent"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => scrollTo("home")}
          >
            <div className="w-5 h-5 bg-teal-500 rounded-sm group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-white font-black tracking-tighter text-lg uppercase">Pierre<span className="text-teal-500">.</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {sections.slice(1).map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="relative group py-2"
              >
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
                  active === s ? "text-teal-400" : "text-slate-500 group-hover:text-white"
                }`}>
                  {s}
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

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <main>
        {/* HERO */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">
              Available for new projects
            </span>
            <h1 className="text-6xl md:text-[120px] font-black text-white tracking-tighter leading-[0.85] mb-8">
              DIGITAL<br />
              <span className="text-teal-400">ARCHITECT</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-12">
              Engineering high-performance full-stack applications with a focus on minimalist aesthetics and seamless user flow.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button 
                onClick={() => scrollTo("portfolio")}
                className="px-10 py-4 bg-teal-500 text-slate-950 text-xs font-black uppercase tracking-widest rounded-full hover:bg-teal-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/20"
              >
                View Portfolio
              </button>
              <button 
                onClick={() => scrollTo("contact")}
                className="px-10 py-4 bg-white/5 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest rounded-full border border-white/10 hover:bg-white/10 transition-all"
              >
                Get in touch
              </button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-700"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </section>

        {/* SECTIONS */}
        <div className="relative">
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-slate-950 z-[60] flex flex-col items-center justify-center gap-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setMenuOpen(false)}>
              <X size={32} />
            </button>
            {sections.map((s) => (
              <button 
                key={s} 
                onClick={() => scrollTo(s)}
                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-teal-400 transition-colors"
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}