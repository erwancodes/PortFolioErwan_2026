const Skills = () => {
  // Catégories de compétences
  const skillCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend & Databases',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['PHP', 'Python', 'SQL', 'MySQL', 'Supabase']
    },
    {
      title: 'Outils & Services',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Git', 'Stripe', 'PowerShell', 'RGPD']
    },
    {
      title: 'Autres',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: ['Gestion de parc informatique', 'Support technique', 'IA & ML']
    }
  ]

  return (
    <section id="skills" className="section-container bg-dark-200/50">
      <div className="max-w-6xl mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Technologies et outils que je maîtrise
          </p>
        </div>

        {/* Grille de compétences */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* En-tête de catégorie */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Liste des compétences */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-dark-300 border border-gray-700 rounded-lg text-gray-300 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Appel à l'action */}
        <div className="mt-16 text-center animate-slide-up">
          <p className="text-gray-400 text-lg mb-6">
            Toujours en train d'apprendre et d'explorer de nouvelles technologies
          </p>
          <div className="inline-flex items-center gap-2 text-primary">
            <span className="text-2xl">⚡</span>
            <span className="font-semibold">Curieux et motivé</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
