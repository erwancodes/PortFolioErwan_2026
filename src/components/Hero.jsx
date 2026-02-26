const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Effet de grille futuriste en arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px),
                           linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Effet de glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse"></div>

      {/* Contenu principal */}
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in">
          {/* Salutation */}
          <p className="text-primary text-lg mb-4 font-medium">
            Bonjour, je suis
          </p>

          {/* Nom */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Erwan Sagnardon</span>
          </h1>

          {/* Titre */}
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
            Développeur Web & Passionné de Technologies
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Étudiant en BTS SIO SLAM, je construis des expériences web modernes
            et explore les frontières de l'IA et de l'innovation numérique
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary w-full sm:w-auto"
            >
              Voir mes projets
            </button>
            <a
              href="https://github.com/erwancodes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
