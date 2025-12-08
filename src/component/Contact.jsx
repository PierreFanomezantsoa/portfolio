import React from 'react';

function Contact() {
  return (
    <div className="w-full py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-15 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">Contactez-moi</h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="nom" className="mb-2 font-semibold text-gray-700">Nom</label>
            <input
              type="text"
              id="nom"
              className="px-4 py-3 rounded-md border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Entrez votre nom"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="prenom" className="mb-2 font-semibold text-gray-700">Prénom</label>
            <input
              type="text"
              id="prenom"
              className="px-4 py-3 rounded-md border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Entrez votre prénom"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Adresse Email</label>
            <input
              type="email"
              id="email"
              className="px-4 py-3 rounded-md border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="exemple@email.com"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-2 font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              rows="5"
              className="px-4 py-3 rounded-md border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="relative w-48 py-3 text-emerald-600 font-bold border-2 border-emerald-600 rounded-full overflow-hidden transition duration-300 hover:text-white group"
            >
              <span className="absolute inset-0 bg-emerald-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-0"></span>
              <span className="relative z-10">Envoyer</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
