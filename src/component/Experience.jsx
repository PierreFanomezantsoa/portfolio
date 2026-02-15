import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

// Importation des images
import Note from "../img/notes.avif";
import Inscription from "../img/inscription.webp";
import Medicine from "../img/medicine.jpg";
import Payment from "../img/payment.jpg";
import Avions from "../img/Problème_d'affect.png";
import Kiosque from "../img/kiosque_num.webp";

const projects = [
  {
    name: "Système d'Inscription Étudiant",
    description: "Conçu pour la Faculté DEGSS – Fianarantsoa. Optimisé pour la saisie massive de données et le reporting administratif complexe.",
    image: Inscription,
    github: "https://github.com/PierreFanomezantsoa/projet_inscription.git",
    tags: ["Vue JS", "Postgresql", "Node JS"],
  },
  {
    name: "Gestionnaire de Notes",
    description: "Système de gestion académique pour la Faculté EGS-MCI. Inclut le calcul des moyennes en temps réel et des portails sécurisés.",
    image: Note,
    github: "https://github.com/PierreFanomezantsoa/gestionNotes.git",
    tags: ["React", "Node.js"],
  },
  {
    name: "Passerelle Mobile Money",
    description: "Simulation de passerelle de paiement sécurisée en Java. Gestion des journaux de transactions et chiffrement des données sensibles.",
    image: Payment,
    github: "https://github.com/ton-projet3",
    tags: ["Java", "JSP", "MySQL"],
  },
  {
    name: "Logiciel de Medicines",
    description: "Système d'inventaire complet avec alertes de stock intelligentes, suivi des péremptions et analyses statistiques des ventes.",
    image: Medicine,
    github: "https://github.com/PierreFanomezantsoa/Medicines.git",
    tags: ["Vue.js", "Laravel"],
  },
  {
    name: "Projet ordonnancement de taches en affectations",
    description: "Projet ordonnancement de tâches en affectations pour la gestion de projets complexes. Utilisation d'algorithmes d'optimisation pour maximiser l'efficacité des ressources.",
    image: Avions,
    github: "https://github.com/PierreFanomezantsoa/ProjeROAffectation.git",
    tags: ["React Native"],
  },

  {
    name: "Kiosque d’Affichage Numérique",
    description: "Application mobile connectée à une API NestJS permettant la gestion et l’affichage dynamique de contenus multimédias pour bornes interactives.",
    image: Kiosque,
    github: "https://github.com/PierreFanomezantsoa/Front_kiosque.git",
    tags: ["React Native", "NestJS", "API REST"],
  },
];

export default function Experience() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <span className="text-teal-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Études de cas
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
          Mes <span className="text-teal-600">Réalisations</span>
        </h2>
        <p className="text-slate-500 max-w-2xl text-lg font-normal leading-relaxed">
          Une vitrine d'ingénierie full-stack, mêlant une logique métier robuste
          à une expérience utilisateur moderne.
        </p>
      </div>

      {/* Grid - Les cartes auront toutes la même hauteur par ligne grâce au comportement Grid par défaut */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, i) => (
    <div
      key={i}
      className="group relative flex flex-col aspect-[4/5] bg-white rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-2xl border border-slate-100 overflow-hidden"
    >
      {/* Image Section - Réduite à 40% de la hauteur pour laisser de la place au texte */}
      <div className="relative h-[40%] w-full overflow-hidden p-3 shrink-0">
        <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-slate-900 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-xl z-10"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Content Section - Le flex-grow occupe le reste de l'espace défini par l'aspect-ratio */}
      <div className="p-8 pt-2 flex flex-col flex-grow min-h-0"> 
        {/* Tags */}
        <div className="flex gap-2 mb-3 flex-wrap shrink-0">
          {project.tags?.slice(0, 3).map((tag, index) => ( // On limite à 3 tags pour le visuel
            <span
              key={index}
              className="text-[8px] uppercase tracking-wider font-black px-2 py-1 bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors rounded-full border border-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300 tracking-tight shrink-0">
          {project.name}
        </h3>

        {/* Description avec line-clamp pour forcer le texte à rester dans le "cadre" sans l'étirer */}
        <p className="text-slate-500 text-sm leading-relaxed font-normal mb-4 overflow-hidden line-clamp-3 md:line-clamp-4">
          {project.description}
        </p>

        {/* Footer - Poussé vers le bas du cadre proportionnel */}
        <div className="mt-auto pt-4 border-t border-slate-50 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3  font-black text-[10px] uppercase tracking-[0.2em] group/link transition-colors"
          >
            Explorer
            <div className="p-1.5 rounded-full bg-slate-100 group-hover/link:bg-teal-700 group-hover/link:text-white transition-all duration-300">
              <ArrowUpRight size={12} />
            </div>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Footer de la page */}
      <div className="mt-24 text-center">
        <p className="text-slate-400 text-sm italic font-light">
          D'autres projets sont disponibles sur mon profil GitHub.
        </p>
      </div>
    </div>
  );
}