import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-dark-300">
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© 2026 Tous droits réservés. Conçu avec ❤️ par Erwan Sagnardon</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
