import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

// Vos imports d'images restent les mêmes
import Note from "../img/notes.avif";
import Inscription from "../img/inscription.webp";
import Medicine from "../img/medicine.jpg";
import Payment from "../img/payment.jpg";
import Avions from "../img/Problème_d'affect.png";
import Kiosque from "../img/kiosque_num.webp";

const projects = [
  {
    name: "Système d'Inscription Étudiant",
    description: "Conçu pour la Faculté DEGSS. Optimisé pour la saisie massive de données et le reporting administratif complexe.",
    image: Inscription,
    github: "https://github.com/PierreFanomezantsoa/projet_inscription.git",
    tags: ["Vue JS", "Postgresql", "Node JS"],
  },
  {
    name: "Gestionnaire de Notes",
    description: "Système de gestion académique pour la Faculté EGS-MCI. Inclut le calcul des moyennes et des portails sécurisés.",
    image: Note,
    github: "https://github.com/PierreFanomezantsoa/gestionNotes.git",
    tags: ["React", "Node.js"],
  },
  {
    name: "Passerelle Mobile Money",
    description: "Simulation de passerelle de paiement sécurisée en Java. Gestion des journaux et chiffrement des données.",
    image: Payment,
    github: "https://github.com/ton-projet3",
    tags: ["Java", "JSP", "MySQL"],
  },
  {
    name: "Logiciel de Medicines",
    description: "Système d'inventaire complet avec alertes de stock intelligentes et analyses statistiques des ventes.",
    image: Medicine,
    github: "https://github.com/PierreFanomezantsoa/Medicines.git",
    tags: ["Vue.js", "Laravel"],
  },
  {
    name: "Ordonnancement de tâches",
    description: "Optimisation de ressources via des algorithmes complexes pour la gestion de projets industriels.",
    image: Avions,
    github: "https://github.com/PierreFanomezantsoa/ProjeROAffectation.git",
    tags: ["React Native", "Algo"],
  },
  {
    name: "Kiosque d’Affichage Numérique",
    description: "Application mobile connectée à une API NestJS pour la gestion dynamique de contenus multimédias.",
    image: Kiosque,
    github: "https://github.com/PierreFanomezantsoa/Front_kiosque.git",
    tags: ["React Native", "NestJS"],
  },
];

export default function Experience() {
  return (
    // Ajustement padding vertical : py-12 sur mobile, py-24 sur desktop
    <div className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Header - Plus compact sur mobile */}
      <div className="flex flex-col items-center text-center mb-12 md:mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-teal-400 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 bg-teal-400/10 px-4 py-2 rounded-full border border-teal-400/20"
        >
          Portfolio & Engineering
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-black text-white tracking-tight mb-4 md:mb-6 leading-tight"
        >
          Mes <span className="text-teal-400">Réalisations</span>
        </motion.h2>
      </div>

      {/* Grid - Écart réduit sur mobile (gap-6 vs gap-8) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            // Hover effet désactivé sur mobile pour une meilleure UX tactile
            whileHover={window.innerWidth > 768 ? { y: -8 } : {}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative flex flex-col rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md hover:border-teal-500/30 transition-all duration-300"
          >
            {/* Image Section - Hauteur adaptative */}
            <div className="relative h-44 sm:h-48 w-full overflow-hidden p-2 md:p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[1.2rem] md:rounded-[1.5rem]">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                
                {/* Bouton GitHub plus accessible sur mobile */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 md:top-3 md:right-3 p-3 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl text-white active:scale-90 md:hover:bg-teal-400 md:hover:text-slate-900 transition-all z-10"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-5 md:px-6 pb-6 pt-2 flex flex-col flex-grow"> 
              {/* Tags - Wrappés correctement pour les petits écrans */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[8px] md:text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 md:px-2.5 md:py-1 bg-teal-400/5 text-teal-400/80 rounded border border-teal-400/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:group-hover:text-teal-400 transition-colors">
                {project.name}
              </h3>

              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>

              {/* Action Footer - Toujours collé au bas de la carte */}
              <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-300 active:text-teal-400 md:hover:text-teal-400 transition-all"
                >
                  Explorer le code
                  <ArrowUpRight size={14} />
                </a>
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500/40 group-hover:bg-teal-400 group-hover:shadow-[0_0_8px_#2dd4bf] transition-all" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Signature */}
      <div className="mt-16 md:mt-24 text-center opacity-30">
        <p className="text-slate-500 text-[8px] md:text-[9px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
          Curated Works • Nandrasanarivo Pierre • 2026
        </p>
      </div>
    </div>
  );
}