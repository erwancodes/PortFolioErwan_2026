import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Détecte le scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation vers les sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { name: 'Accueil', id: 'hero' },
    { name: 'À propos', id: 'about' },
    { name: 'Compétences', id: 'skills' },
    { name: 'Projets', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-300/95 backdrop-blur-sm border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            ES
          </button>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://github.com/erwancodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
