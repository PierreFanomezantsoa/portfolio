import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-teal-700  min-h-[500px]  text-white py-16">
      <div className=" py-20 max-w-6xl mx-auto px-2">
        {/* Navigation & Réseaux sociaux */}
        <div className="flex flex-col md:flex-row justify-between  space-y-6 md:space-y-0">
          {/* Liens */}
          <div className="flex flex-wrap justify-center space-x-6 text-lg font-medium">
            <a href="#about" className="hover:text-blue-300 transition-colors hover:underline underline-offset-4">Accueil</a>
            <a href="#about" className="hover:text-blue-300 transition-colors hover:underline underline-offset-4">À propos</a>
            <a href="#portfolio" className="hover:text-blue-300 transition-colors hover:underline underline-offset-4">Compentance</a>
            <a href="#Experience" className="hover:text-blue-300 transition-colors hover:underline underline-offset-4">Experience</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors hover:underline underline-offset-4">Contact</a>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="w-full h-px bg-gray-400 my-8"></div>

       <br /><br />
        <div className="text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
