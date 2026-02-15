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
      className="group relative bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 transition-all duration-500 border border-white/10 hover:border-teal-500/30 flex flex-col h-full shadow-2xl"
    >
      {/* Glow Effect arrière-plan icône */}
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-teal-500/5 blur-2xl rounded-full group-hover:bg-teal-500/10 transition-colors"></div>
      
      {/* Icone et Titre */}
      <div className="flex items-center gap-5 mb-6">
        <div className="p-4 bg-white/5 rounded-2xl text-teal-400 group-hover:text-white group-hover:bg-teal-500 group-hover:rotate-6 transition-all duration-500 shadow-inner">
          {React.cloneElement(icon, { size: 24, strokeWidth: 2 })}
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight leading-none">{name}</h3>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
        {description}
      </p>

      {/* Expertise Section */}
      <div className="mt-auto flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.3em] font-black text-slate-500 group-hover:text-teal-400 transition-colors">
            Niveau d'expertise
          </span>
          <span className="text-teal-400 text-[10px] font-bold">{level}/5</span>
        </div>
        
        {/* Barre de maîtrise stylisée */}
        <div className="flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${
                i < level 
                  ? "bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.4)]" 
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
    <div className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center mb-20 relative">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-teal-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block"
        >
          Stack Technique
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
        >
          Compétences & <span className="text-teal-400">Expertise</span>
        </motion.h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed opacity-80 italic">
          Un arsenal technologique moderne pour transformer vos visions en produits digitaux d'exception.
        </p>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} index={i} />
        ))}
      </div>
      
      {/* Outils secondaires - Style Dark Badge */}
      <div className="mt-20 flex flex-col items-center gap-8">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {["Git • GitHub", "Docker", "Tailwind CSS", "Agile • Scrum", "TypeScript", "PostgreSQL", "Redis"].map((tool, index) => (
            <span 
              key={index} 
              className="px-4 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 border border-white/5 rounded-full hover:text-teal-400 hover:border-teal-500/30 transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}