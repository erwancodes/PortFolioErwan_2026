const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="gradient-text">propos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Contenu */}
        <div className="card animate-slide-up animate-delay-200">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Je suis actuellement étudiant en{" "}
              <span className="text-primary font-semibold">
                BTS SIO option SLAM
              </span>{" "}
              à Rouen au @CampusLaChataigneraie, où je développe mes compétences
              en développement logiciel et applications métiers.
            </p>

            <p>
              Passionné par le{" "}
              <span className="text-primary font-semibold">
                développement web
              </span>
              , l'
              <span className="text-primary font-semibold">
                intelligence artificielle
              </span>{" "}
              et les{" "}
              <span className="text-primary font-semibold">
                nouvelles technologies
              </span>
              , j'aime explorer les possibilités infinies du numérique et de
              l'innovation. Mon intérêt s'étend également à l'exploration
              spatiale et aux technologies du futur.
            </p>

            <p>
              Je suis{" "}
              <span className="text-primary font-semibold">curieux</span>,{" "}
              <span className="text-primary font-semibold">rigoureux</span> et
              constamment motivé à apprendre de nouvelles technologies pour
              construire des projets concrets et innovants qui repoussent les
              limites du possible.
            </p>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                <div className="text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-gray-400">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                <div className="text-gray-400">Envie d'apprendre</div>
              </div>
            </div>
          </div>
        </div>

        {/* Localisation */}
        <div className="mt-8 text-center animate-slide-up animate-delay-400">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>Rouen, France</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
