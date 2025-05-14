import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  const [activeButton, setActiveButton] = useState('home');

  const scrollToSection = (id) => {
    setActiveButton(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const baseClasses = `
    relative px-4 py-2 text-sm md:text-base
    text-black border border-transparent
    hover:text-cyan-400 transition overflow-hidden
    before:content-[''] before:absolute before:inset-0
    before:border-b-4 before:border-b-cyan-400 before:scale-x-0 before:origin-left
    before:transition-transform before:duration-300
    hover:before:scale-x-100
  `;

  const activeClasses = `
    text-cyan-400 before:scale-x-100
  `;

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="w-full bg-gradient-to-br from-white to-white shadow-md px-6 py-4 fixed top-0 left-0 z-50">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="font-bold text-xl md:text-2xl text-gray-800 px-2">
            <span className="text-teal-500 text-3xl">M</span>y Portfolio
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center mt-4 md:mt-0 gap-2 md:gap-4">
            {['home', 'about', 'portfolio','Experience', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${baseClasses} ${activeButton === id ? activeClasses : ''}`}
              >
                <span className="relative z-10">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="">
        <div className='text-gray-200'>
            .
        </div><br /><br />
        <section id="about" className="px-16 mb-20">
          <About />
        </section>

        <section id="portfolio" className="px-16 mb-20">
          <Portfolio />
        </section>
         <section id="Experience" className=" mb-16">
          <Experience/>
        </section>

        <section id="contact" className="mb-20  text-center">
         
          <Contact/>
        </section>
        <section>
          <Footer/>
        </section>
      </main>
    </div>
  );
}

export default Home;
