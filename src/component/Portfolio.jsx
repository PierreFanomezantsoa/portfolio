import React from "react";
import { Star, Code2, Cpu, Globe, Database, Terminal, Layers, Box } from "lucide-react";

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

function SkillCard({ name, level, description, icon }) {
  return (
    <div className="group relative bg-white rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
      
      {/* Icone avec effet de morphing au hover */}
      <div className="flex items-center gap-6 mb-8">
        <div className="p-5 bg-slate-50 rounded-[1.5rem] text-teal-600 group-hover:text-white group-hover:bg-teal-600 group-hover:rotate-[10deg] transition-all duration-500 shadow-sm">
          {React.cloneElement(icon, { size: 30, strokeWidth: 1.5 })}
        </div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{name}</h3>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-10 font-normal opacity-90">
        {description}
      </p>

      {/* Barre de maîtrise stylisée */}
      <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 group-hover:text-teal-600 transition-colors">
          Expertise
        </span>
        <div className="flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-6 rounded-full transition-all duration-700 ${
                i < level 
                  ? "bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.3)]" 
                  : "bg-slate-100"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="py-16">
      {/* Header de section */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-24 h-24 bg-teal-500/5 blur-3xl rounded-full"></div>
        
        <span className="text-teal-600 text-[11px] font-black uppercase tracking-[0.5em] mb-5 block relative z-10">
          Stack Technique
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 relative z-10">
          Compétences & <span className="text-teal-600">Expertise</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed opacity-80">
          Un arsenal technologique moderne pour transformer vos visions en produits digitaux d'exception.
        </p>
      </div>

      {/* Grille de compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
      
      {/* Footer Tools - Style Badge minimaliste */}
      <div className="mt-24 flex flex-col items-center gap-8">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 max-w-3xl">
          {["Git • GitHub", "Docker", "Tailwind CSS", "Agile • Scrum", "TypeScript"].map((tool, index) => (
            <span key={index} className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-teal-600 transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}