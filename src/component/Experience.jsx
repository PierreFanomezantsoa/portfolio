import React from 'react';
import Note from "../img/notes.avif";
import Inscription from "../img/inscription.webp";
import Medicine from "../img/medicine.jpg";
import Payment from "../img/payment.jpg";
import Avions from "../img/avions.jpg";
import { ArrowUpRight } from 'lucide-react';

const donne = [
  {
    name: "Stage : gestion inscription \n des étudiants",
    descrption: "Faculté DEGSS \n Fianarantsoa",
    image_pro: Inscription,
    github: "https://github.com/ton-projet1"
  },
  {
    name: "Stage : gestion de notes des étudiants",
    descrption: "Faculté egs-mci Fianarantsoa",
    image_pro: Note,
    github: "https://github.com/ton-projet2"
  },
  {
    name: "Projet : gestion mobile money",
    descrption: "Avec téchnologie java : jsp",
    image_pro: Payment,
    github: "https://github.com/ton-projet3"
  },
  {
    name: "Projet : gestion medicine",
    descrption: "Téchnologie utilisé \n javascripte : vuejs , et laravel",
    image_pro: Medicine,
    github: "https://github.com/ton-projet4"
  },
  {
    name: "Projet : réservation billet d'avion",
    descrption: "Application mobile avec flutter",
    image_pro: Avions,
    github: "https://github.com/ton-projet5"
  }
];

function Experience() {
  return (
    <div className="px-6 bg-gray-100 py-12 min-h-screen">
        <div className='bg-gray-100 text-gray-200'>
            .
        </div><br />
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Mon expérience professionnelle</h1>
      <div className="p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {donne.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-md hover:border-b-4 hover:border-b-emerald-700
            shadow-md  hover:scale-105  transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={item.image_pro}
              alt="mon projet"
              className="w-full h-48 rounded-b-md object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-emerald-700 whitespace-pre-line mb-2">{item.name}</h2>
              <p className="text-gray-700 text-sm whitespace-pre-line flex-grow">{item.descrption}</p>
             <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-between gap-2 font-semibold
                border-2 border-emerald-700 text-emerald-700 hover:text-white
                px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
              >
                <span className='px-3'>Voir sur GitHub</span>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
