import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    // Réduction de la hauteur minimale pour la rendre plus adaptable
    <footer className="bg-teal-700 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Réseaux sociaux */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          
          {/* Liens de Navigation - Responsifs */}
          <div className="
            flex flex-wrap gap-4 justify-center 
            sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-2 sm:justify-start 
            md:flex md:space-x-6 md:justify-start
            text-lg font-medium text-center
          ">
            {/* J'ai ajouté 'current' pour le lien Accueil pour l'exemple, mais vous pouvez l'ajuster. */}
            <a href="#about" className="hover:text-teal-200 transition-colors hover:underline underline-offset-4">Accueil</a>
            <a href="#about" className="hover:text-teal-200 transition-colors hover:underline underline-offset-4">À propos</a>
            <a href="#portfolio" className="hover:text-teal-200 transition-colors hover:underline underline-offset-4">Compétences</a>
            <a href="#Experience" className="hover:text-teal-200 transition-colors hover:underline underline-offset-4">Expérience</a>
            <a href="#contact" className="hover:text-teal-200 transition-colors hover:underline underline-offset-4">Contact</a>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-6">
            {/* Changement des couleurs de survol pour mieux correspondre au fond teal */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-300 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-teal-600 my-8"></div>

        {/* Droits d'auteur */}
        <div className="text-center text-teal-200 text-sm">
          © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;