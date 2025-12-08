import React from 'react';

function Contact() {
  return (
    // Conteneur principal: Utilisation d'un padding horizontal plus doux pour le mobile (sm:px-6)
    <div className="w-full py-12 px-4 sm:px-6"> 
      {/* Conteneur du formulaire: Augmentation du padding interne pour mobile (p-6) */}
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
        
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-8 sm:mb-10">Contactez-moi 📧</h2>
        
        {/* Grille : Par défaut 1 colonne (mobile), passe à 2 colonnes sur écran MD et plus */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Champ Nom */}
          <div className="flex flex-col">
            <label htmlFor="nom" className="mb-2 font-semibold text-gray-700">Nom</label>
            <input
              type="text"
              id="nom"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-150"
              placeholder="Entrez votre nom"
            />
          </div>

          {/* Champ Prénom */}
          <div className="flex flex-col">
            <label htmlFor="prenom" className="mb-2 font-semibold text-gray-700">Prénom</label>
            <input
              type="text"
              id="prenom"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-150"
              placeholder="Entrez votre prénom"
            />
          </div>

          {/* Champ Email - S'étend sur toute la largeur (col-span-1 sur mobile, md:col-span-2 sur desktop) */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Adresse Email</label>
            <input
              type="email"
              id="email"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-150"
              placeholder="exemple@email.com"
            />
          </div>

          {/* Champ Message - S'étend sur toute la largeur */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="message" className="mb-2 font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              rows="5"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none transition duration-150"
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>

          {/* Bouton d'envoi - Centré et prend toute la largeur sur mobile si nécessaire */}
          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="relative w-full sm:w-64 py-3 text-white font-bold bg-emerald-600 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-emerald-700 shadow-md hover:shadow-lg"
            >
              Envoyer le Message
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;