import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

import Note from "../img/notes.avif";
import Inscription from "../img/inscription.webp";
import Medicine from "../img/medicine.jpg";
import Payment from "../img/payment.jpg";
import Avions from "../img/avions.jpg";

const data = [
  {
    name: "Student Registration System",
    description: "Internship project for DEGSS Faculty – Fianarantsoa. Optimized for high-volume data entry and administrative reporting.",
    image: Inscription,
    github: "https://github.com/ton-projet1",
    tags: ["PHP", "SQL", "Bootstrap"]
  },
  {
    name: "Student Grading Platform",
    description: "Academic management system for EGS-MCI Faculty. Featuring real-time grade calculations and student portals.",
    image: Note,
    github: "https://github.com/ton-projet2",
    tags: ["React", "Node.js"]
  },
  {
    name: "Mobile Money Management",
    description: "Secure payment gateway simulation built with Java. Handles transaction logs and user balance encryption.",
    image: Payment,
    github: "https://github.com/ton-projet3",
    tags: ["Java", "JSP", "MySQL"]
  },
  {
    name: "Pharmacy Management",
    description: "Full-scale inventory system. Integrated stock alerts, expiration tracking, and sales analytics.",
    image: Medicine,
    github: "https://github.com/ton-projet4",
    tags: ["Vue.js", "Laravel"]
  },
  {
    name: "Flight Booking App",
    description: "Cross-platform mobile application for seamless travel planning and real-time flight status tracking.",
    image: Avions,
    github: "https://github.com/ton-projet5",
    tags: ["Flutter", "Dart", "Firebase"]
  },
];

export default function Experience() {
  return (
    <div className="py-6">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-20">
        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Case Studies
        </span>
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
          Selected <span className="text-teal-400">Works</span>
        </h2>
        <p className="text-slate-500 max-w-xl text-lg font-light leading-relaxed">
          A showcase of full-stack engineering, blending robust backend logic with modern interface design.
        </p>
      </div>

     {/* Projects Grid - Gap réduit de 12 à 8 */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {data.map((item, i) => (
    <div
      key={i}
      // Réduction de l'arrondi pour une taille plus compacte
      className="group relative flex flex-col bg-slate-900/40 backdrop-blur-xl rounded-3xl transition-all duration-500 hover:-translate-y-2 shadow-xl"
    >
      {/* Image Container - Hauteur réduite à h-48 */}
      <div className="relative h-48 w-full overflow-hidden rounded-3xl p-2">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.75] group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          {/* GitHub Icon - Taille réduite */}
          <a 
            href={item.github}
            className="absolute top-3 right-3 p-2 bg-slate-950/60 backdrop-blur-md rounded-full border border-white/5 text-white hover:bg-teal-500 hover:text-slate-950 transition-all duration-300"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Content Area - Padding réduit à p-5 */}
      <div className="p-5 pt-2 flex flex-col flex-grow">
        {/* Tags Section - Plus compacte */}
        <div className="flex gap-1.5 mb-3 flex-wrap">
          {item.tags?.map((tag, index) => (
            <span key={index} className="text-[8px] uppercase tracking-wider font-bold px-2.5 py-1 bg-slate-800/80 text-slate-400 group-hover:text-teal-400 transition-colors rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        {/* Titre réduit à text-xl */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
          {item.name}
        </h3>
        
        {/* Description limitée à 2 lignes */}
        <p className="text-slate-500 text-xs leading-relaxed font-light mb-5 line-clamp-2">
          {item.description}
        </p>

        {/* Action Button - Plus discret */}
        <div className="mt-auto">
          <a
            href={item.github}
            className="inline-flex items-center gap-2 text-white/80 font-bold text-[10px] uppercase tracking-widest group/link hover:text-teal-400 transition-colors"
          >
            Détails
            <div className="p-1 rounded-full bg-slate-800 group-hover/link:bg-teal-500 group-hover/link:text-slate-950 transition-all">
              <ArrowUpRight size={12} />
            </div>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}