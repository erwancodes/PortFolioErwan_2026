# Portfolio Erwan Sagnardon

Portfolio personnel moderne et minimaliste développé avec React (Vite) et Tailwind CSS.

## Stack Technique

- **React 18** avec Vite pour un développement rapide
- **Tailwind CSS** pour le styling moderne
- **JavaScript** (ES6+)
- **API GitHub** pour afficher les projets dynamiquement

## Fonctionnalités

- ✨ Design moderne, minimaliste et futuriste
- 🌙 Dark mode par défaut
- 📱 Entièrement responsive (mobile & desktop)
- 🎨 Animations subtiles et fluides
- 🚀 Performances optimisées
- 🔗 Intégration dynamique des projets GitHub
- 🎯 Navigation smooth scroll

## Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. Cloner le projet
```bash
cd portfolio-erwan
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production

## Structure du projet

```
portfolio-erwan/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation avec scroll detection
│   │   ├── Hero.jsx        # Section hero avec animations
│   │   ├── About.jsx       # Section à propos
│   │   ├── Skills.jsx      # Compétences techniques
│   │   ├── Projects.jsx    # Projets avec API GitHub
│   │   └── Contact.jsx     # Informations de contact
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :
- `primary`: #00d4ff (cyan)
- `secondary`: #7c3aed (violet)
- `dark`: Nuances de gris foncé

### Contenu

Pour modifier le contenu :
- **Informations personnelles** : Modifier les composants dans `src/components/`
- **Projets** : Les projets GitHub sont récupérés automatiquement via l'API
- **Compétences** : Modifier le tableau `skillCategories` dans `Skills.jsx`

## Déploiement

### Netlify, Vercel ou GitHub Pages

1. Compiler le projet :
```bash
npm run build
```

2. Le dossier `dist/` contient les fichiers prêts pour le déploiement

### Netlify (recommandé)

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

## Sections du portfolio

1. **Hero** - Introduction avec phrase d'accroche et CTA
2. **À propos** - Présentation personnelle et parcours
3. **Compétences** - Technologies et outils maîtrisés
4. **Projets** - NeoTravelAI (featured) + projets GitHub dynamiques
5. **Contact** - Email, GitHub, LinkedIn, Instagram

## Performance

- Temps de chargement optimisé
- Images et assets optimisés
- Code splitting automatique avec Vite
- CSS minifié en production

## Compatibilité

- Chrome, Firefox, Safari, Edge (versions récentes)
- Responsive : mobile, tablette, desktop
- Support des animations CSS modernes

## Support

Pour toute question ou suggestion :
- Email : erwan.sagnardon@campus-la-chataigneraie.org
- GitHub : [@erwancodes](https://github.com/erwancodes)

---

Développé avec ❤️ par Erwan Sagnardon
