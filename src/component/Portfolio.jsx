import React from 'react';
import { Star, StarOff } from 'lucide-react';

const skills = [
  { name: 'React JS', level: 4, description: "J'ai besoin de plus d'expérience avec React.js" },
  { name: 'Vue JS', level: 3, description: "Je suis à l’aise avec Vue.js mais souhaite approfondir mes compétences" },
  { name: 'Node JS', level: 4, description: "Je maîtrise Node.js mais cherche à renforcer mon expertise backend" },
  { name: 'Express JS', level: 3, description: "Bonne base en Express, je souhaite aller plus loin avec les API REST" },
  { name: 'Symfony Php', level: 3, description: "Bonne base en Symfony, je souhaite aller plus loin avec les API REST" },
  { name: 'JSP en Java', level: 3, description: "Bonne base en Java, je souhaite aller plus loin avec les API REST" },
];

function SkillCard({ name, level, description }) {
  return (
    <div className="bg-gray-300 rounded-xl p-10 shadow-sm border w-full
     border-gray-300 hover:shadow-lg hover:border-b-4
      hover:border-b-emerald-600 hover:scale-105 
      transition duration-300">
    
      <h3 className="text-xl font-bold text-emerald-700 mb-1">{name}</h3>
      <p className="text-sm text-gray-700 mb-3">{description}</p>
      <div className="flex">
        {[...Array(5)].map((_, i) =>
          i < level ? (
            <Star key={i} className="text-yellow-400 fill-yellow-400 mr-1 w-5 h-5" />
          ) : (
            <StarOff key={i} className="text-gray-600 mr-1 w-5 h-5" />
          )
        )}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section className=" min-h-screen ">
    <div>
     <div className='bg-gray-200 text-gray-200'>
        .
     </div><br />
     <div>
         <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Mes Compétences
      </h2>
     </div>
      <div className="sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        {skills.map((skill, idx) => (
          <SkillCard
            key={idx}
            name={skill.name}
            level={skill.level}
            description={skill.description}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default Portfolio;
