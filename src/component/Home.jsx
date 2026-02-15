import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown, Linkedin, Github, Mail, MessageCircle } from "lucide-react";

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

// --- BACKGROUND CANVAS AVEC EFFET DE BALAYAGE (OPTIMISÉ) ---
function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];

    const PARTICLE_COUNT = 100;
    const MAX_DIST = 150;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // EFFET DE BALAYAGE AU CURSEUR
        if (mouseRef.current.x !== null) {
          let dx = mouseRef.current.x - this.x;
          let dy = mouseRef.current.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRef.current.radius) {
            let force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            this.x -= (dx / distance) * force * 4;
            this.y -= (dy / distance) * force * 4;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(45, 212, 191, 0.5)"; 
        ctx.fill();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(45, 212, 191, ${(1 - dist / MAX_DIST) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      connect();
      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none"
      style={{ background: "radial-gradient(circle at 50% 50%, #020617 0%, #000000 100%)" }}
    />
  );
}

// --- ANIMATED SECTION AVEC TAILLES RÉDUITES ---
const AnimatedSection = ({ id, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
      const offset = 300;
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-slate-300 antialiased selection:bg-gray-200/50 selection:text-teal-400 font-sans">
      <AnimatedBackground />

      {/* NAVBAR */}
      <motion.header
        className={`fixed w-full z-[60] transition-all duration-500 ${
          scrolled ? "py-4 bg-[#020617]/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-4 h-4 bg-teal-400 rounded-sm rotate-45 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
            <span className="text-white font-bold tracking-tighter text-lg uppercase italic">
              Pierre<span className="text-teal-400">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {sections.slice(1).map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="relative py-1 group">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                  active === s ? "text-teal-400" : "text-slate-500 hover:text-white"
                }`}>
                  {sectionLabels[s]}
                </span>
                {active === s && (
                  <motion.div layoutId="activeDot" className="absolute -bottom-1 left-0 w-full h-[1px] bg-teal-400" />
                )}
              </button>
            ))}
          </nav>

          <button className="md:hidden w-10 h-10 flex items-center justify-center bg-teal-500 rounded-xl text-slate-950 shadow-lg" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[55] flex flex-col justify-center p-12"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="flex flex-col gap-6">
              {sections.map((s) => (
                <button key={s} onClick={() => scrollTo(s)} className="text-4xl font-black uppercase tracking-tighter text-white hover:text-teal-400 transition-colors text-left">
                  {sectionLabels[s]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* HERO SECTION - TAILLES CORRIGÉES */}
        <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-teal-400 text-[9px] font-bold uppercase tracking-[0.4em] mb-6 block">Full-Stack Developer</span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              ARCHITECTE<br /><span className="text-teal-400">DIGITAL.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-medium opacity-80">
              Conception d'écosystèmes numériques alliant performance technique et esthétique minimaliste.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => scrollTo("portfolio")} className="px-10 py-4 bg-teal-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20">Explorer mes travaux</button>
              <button onClick={() => scrollTo("contact")} className="px-10 py-4 bg-white/5 text-white text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/10 hover:bg-white/10 transition-all">Me contacter</button>
            </div>
          </motion.div>
        </section>

        <div className="relative bg-transparent">
          <AnimatedSection id="about"><About /></AnimatedSection>
          <AnimatedSection id="portfolio"><Portfolio /></AnimatedSection>
          <AnimatedSection id="experience"><Experience /></AnimatedSection>
          <AnimatedSection id="contact"><Contact /></AnimatedSection>
        </div>

        <Footer />
      </main>
    </div>
  );
}