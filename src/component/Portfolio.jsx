import React from "react";
import { Star, Code2, Cpu, Globe, Database, Terminal, Layers, Box } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { 
    name: "React JS", 
    level: 4, 
    icon: <Layers />, 
    description: "Architecture de composants complexes et gestion d'état avancée (Hooks, Context, Redux)." 
  },
  { 
    name: "Node JS", 
    level: 4, 
    icon: <Terminal />, 
    description: "Construction d'environnements backend performants et scalables avec TypeScript." 
  },
  { 
    name: "Nest JS", 
    level: 4, 
    icon: <Box />, 
    description: "Développement d'APIs modulaires et robustes suivant les principes SOLID." 
  },
  { 
    name: "Symfony PHP", 
    level: 3, 
    icon: <Code2 />, 
    description: "Maîtrise du framework MVC pour des applications métier structurées et sécurisées." 
  },
  { 
    name: "Vue JS", 
    level: 3, 
    icon: <Globe />, 
    description: "Création d'interfaces réactives et fluides avec l'écosystème Vue 3." 
  },
  { 
    name: "Express JS", 
    level: 3, 
    icon: <Cpu />, 
    description: "Conception de micro-services légers et de middlewares personnalisés." 
  }
];

function SkillCard({ name, level, description, icon, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/40 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 transition-all duration-500 border border-white/10 hover:border-teal-500/30 flex flex-col h-full shadow-2xl"
    >
      {/* Glow Effect arrière-plan icône - Discret sur mobile */}
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 md:w-24 md:h-24 bg-teal-500/5 blur-2xl rounded-full group-hover:bg-teal-500/10 transition-colors"></div>
      
      {/* Icone et Titre */}
      <div className="flex items-center gap-4 md:gap-5 mb-5 md:mb-6">
        <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl text-teal-400 group-hover:text-white group-hover:bg-teal-500 transition-all duration-500 shadow-inner">
          {React.cloneElement(icon, { size: 20, className: "md:w-6 md:h-6" })}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">{name}</h3>
      </div>

      <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 font-medium">
        {description}
      </p>

      {/* Expertise Section */}
      <div className="mt-auto flex flex-col gap-3 md:gap-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-black text-slate-500 group-hover:text-teal-400 transition-colors">
            Niveau d'expertise
          </span>
          <span className="text-teal-400 text-[9px] md:text-[10px] font-bold">{level}/5</span>
        </div>
        
        {/* Barre de maîtrise stylisée */}
        <div className="flex gap-1 md:gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-1 md:h-1.5 flex-1 rounded-full transition-all duration-700 ${
                i < level 
                  ? "bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.3)] md:shadow-[0_0_12px_rgba(20,184,166,0.4)]" 
                  : "bg-white/5"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <div className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-20 relative px-2">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-teal-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 block"
        >
          Stack Technique
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-4 md:mb-6 leading-tight"
        >
          Compétences & <span className="text-teal-400">Expertise</span>
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed opacity-80 italic">
          Un arsenal technologique moderne pour transformer vos visions en produits digitaux d'exception.
        </p>
      </div>

      {/* Grille - 1 col mobile, 2 col tablette, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} index={i} />
        ))}
      </div>
      
      {/* Outils secondaires - Optimisé pour le wrap mobile */}
      <div className="mt-16 md:mt-24 flex flex-col items-center gap-6 md:gap-8 px-2">
        <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl">
          {["Git • GitHub", "Docker", "Tailwind CSS", "Agile • Scrum", "TypeScript", "PostgreSQL", "Redis"].map((tool, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 md:px-4 md:py-2 text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 border border-white/5 rounded-full hover:text-teal-400 hover:border-teal-500/30 transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}