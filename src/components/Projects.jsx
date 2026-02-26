import { useState, useEffect } from 'react'

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([])
  const [loading, setLoading] = useState(true)

  // Projet featured manuel
  const featuredProject = {
    name: 'NeoTravelAI',
    description: 'Application web intelligente combinant voyage et technologies IA pour créer des expériences personnalisées',
    tech: ['React', 'API REST', 'IA'],
    featured: true
  }

  // Récupération des repos GitHub
  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/erwancodes/repos?sort=updated&per_page=6')
        const data = await response.json()

        // Filtrer et formater les repos
        const formattedRepos = data
          .filter(repo => !repo.fork && repo.name !== 'erwancodes') // Exclure les forks et le repo profil
          .map(repo => ({
            name: repo.name,
            description: repo.description || 'Projet en développement',
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            updated: new Date(repo.updated_at).toLocaleDateString('fr-FR')
          }))

        setGithubRepos(formattedRepos)
      } catch (error) {
        console.error('Erreur lors de la récupération des repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubRepos()
  }, [])

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Découvrez mes réalisations et expérimentations
          </p>
        </div>

        {/* Projet Featured */}
        <div className="mb-12 animate-slide-up">
          <div className="card relative overflow-hidden group">
            {/* Badge Featured */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-dark-300 text-sm font-semibold">
              ⭐ Featured
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {featuredProject.name}
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-6">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Effet de glow au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* Projets GitHub */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Projets GitHub
          </h3>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-400 mt-4">Chargement des projets...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubRepos.map((repo, index) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                      {repo.name}
                    </h4>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                        {repo.language}
                      </span>
                    )}
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1">
                        ⭐ {repo.stars}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Lien vers GitHub */}
        <div className="mt-12 text-center animate-slide-up">
          <a
            href="https://github.com/erwancodes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
