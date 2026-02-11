import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

// Importation des images (assurez-vous que les chemins sont corrects)
import Note from "../img/notes.avif";
import Inscription from "../img/inscription.webp";
import Medicine from "../img/medicine.jpg";
import Payment from "../img/payment.jpg";
import Avions from "../img/avions.jpg";

const projects = [
  {
    name: "Système d'Inscription Étudiant",
    description: "Conçu pour la Faculté DEGSS – Fianarantsoa. Optimisé pour la saisie massive de données et le reporting administratif complexe.",
    image: Inscription,
    github: "https://github.com/ton-projet1",
    tags: ["PHP", "SQL", "Bootstrap"]
  },
  {
    name: "Gestionnaire de Notes",
    description: "Système de gestion académique pour la Faculté EGS-MCI. Inclut le calcul des moyennes en temps réel et des portails sécurisés.",
    image: Note,
    github: "https://github.com/PierreFanomezantsoa/gestionNotes.git",
    tags: ["React", "Node.js"]
  },
  {
    name: "Passerelle Mobile Money",
    description: "Simulation de passerelle de paiement sécurisée en Java. Gestion des journaux de transactions et chiffrement des données sensibles.",
    image: Payment,
    github: "https://github.com/ton-projet3",
    tags: ["Java", "JSP", "MySQL"]
  },
  {
    name: "Logiciel de Pharmacie",
    description: "Système d'inventaire complet avec alertes de stock intelligentes, suivi des péremptions et analyses statistiques des ventes.",
    image: Medicine,
    github: "https://github.com/ton-projet4",
    tags: ["Vue.js", "Laravel"]
  },
  {
    name: "Réservation de Vols",
    description: "Application mobile intuitive pour la planification de voyages et le suivi des vols en temps réel via Firebase.",
    image: Avions,
    github: "https://github.com/ton-projet5",
    tags: ["Flutter", "Dart", "Firebase"]
  },
];

export default function Experience() {
  return (
    <div className="py-12">
      {/* Section En-tête - Alignée sur le style global */}
      <div className="flex flex-col items-center text-center mb-24">
        <span className="text-teal-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Études de cas
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
          Mes <span className="text-teal-600">Réalisations</span>
        </h2>
        <p className="text-slate-500 max-w-2xl text-lg font-normal leading-relaxed">
          Une vitrine d'ingénierie full-stack, mêlant une logique métier robuste à une expérience utilisateur moderne.
        </p>
      </div>

      {/* Grille de Projets - Design Premium */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative flex flex-col bg-white rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-2xl border border-slate-100 overflow-hidden"
          >
            {/* Conteneur Image avec Overlay dynamique */}
            <div className="relative h-56 w-full overflow-hidden p-3">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Badge GitHub flottant */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-slate-900 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-xl"
                  title="Voir le code source"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Zone de Contenu */}
            <div className="p-8 pt-4 flex flex-col flex-grow">
              {/* Tags style "Pill" */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.tags?.map((tag, index) => (
                  <span key={index} className="text-[9px] uppercase tracking-wider font-black px-3 py-1.5 bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors rounded-full border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Titre du projet */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors duration-300 tracking-tight">
                {project.name}
              </h3>
              
              {/* Description avec limitation de lignes pour l'alignement */}
              <p className="text-slate-500 text-sm leading-relaxed font-normal mb-8 line-clamp-3">
                {project.description}
              </p>

              {/* Lien d'action style minimaliste */}
              <div className="mt-auto pt-6 border-t border-slate-50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] group/link hover:text-teal-600 transition-colors"
                >
                  Explorer le projet
                  <div className="p-2 rounded-full bg-slate-100 group-hover/link:bg-teal-600 group-hover/link:text-white transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer de section optionnel */}
      <div className="mt-24 text-center">
        <p className="text-slate-400 text-sm italic font-light">
          D'autres projets sont disponibles sur mon profil GitHub.
        </p>
      </div>
    </div>
  );
}