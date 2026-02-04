import React from "react";
import { Star, Code2, Cpu, Globe, Database, Terminal, Layers } from "lucide-react";

const skills = [
  { name: "React JS", level: 4, icon: <Layers />, description: "Advanced frontend development with modern React patterns." },
  { name: "Vue JS", level: 3, icon: <Globe />, description: "Strong understanding of Vue ecosystem and component architecture." },
  { name: "Node JS", level: 4, icon: <Terminal />, description: "Backend development with scalable Node.js applications." },
  { name: "Express JS", level: 3, icon: <Cpu />, description: "Building RESTful APIs with Express and middleware patterns." },
  { name: "Symfony PHP", level: 3, icon: <Code2 />, description: "MVC backend development with Symfony framework." },
  { name: "Java (JSP)", level: 3, icon: <Database />, description: "Server-side Java applications and web architecture." },
  { name: "Nest JS ", level: 3, icon: <Database />, description: "Metrise code backend Nest JS." },
];

function SkillCard({ name, level, description, icon }) {
  return (
    // Suppression de "border" et "border-slate-800"
    // Augmentation de l'arrondi pour un look plus organique
    <div className="group relative bg-slate-900/60 backdrop-blur-xl rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 shadow-2xl">

      <div className="relative z-10">
        <div className="flex items-center gap-5 mb-6">
          {/* L'icône devient le point focal : suppression de shadow-inner pour un aplat plus moderne */}
          <div className="p-4 bg-slate-800/80 rounded-2xl text-teal-400 group-hover:text-slate-950 group-hover:bg-teal-500 transition-all duration-300">
            {React.cloneElement(icon, { size: 28 })}
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 h-12 font-light">
          {description}
        </p>

        {/* Pied de carte : la bordure est remplacée par un espacement plus clair */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] font-black text-slate-600 group-hover:text-teal-500/50 transition-colors">
            Mastery
          </span>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-all duration-700 ${
                  i < level 
                    ? "text-teal-400 fill-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]" 
                    : "text-slate-800"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="py-12">
      <div className="text-center mb-20">
        {/* On enlève aussi la bordure du petit badge d'en-tête */}
        <div className="inline-block px-5 py-2 mb-6 rounded-xl bg-teal-500/10 text-teal-400 text-[10px] font-black uppercase tracking-[0.3em]">
          Stack Technique
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
          Skills & <span className="text-teal-400">Expertise</span>
        </h2>
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Mon arsenal technologique pour bâtir des solutions robustes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-slate-600 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-slate-800"></span>
          Git • Docker • Tailwind • Agile
          <span className="w-8 h-px bg-slate-800"></span>
        </p>
      </div>
    </div>
  );
}