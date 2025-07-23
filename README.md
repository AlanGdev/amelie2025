# Amélie 2025

Un site web moderne créé avec Next.js, optimisé pour l'export statique et le déploiement sans back-end.

## Technologies utilisées

- **Next.js 15** avec App Router
- **JavaScript** (ES6+)
- **Tailwind CSS v4** pour le styling
- **ESLint** pour la qualité du code
- **Export statique** pour déploiement sur CDN

## Démarrage rapide

### Prérequis

- Node.js 18+ installé sur votre machine

### Installation et développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

### Build et export

```bash
# Construire et exporter le site statique
npm run export

# Le site sera généré dans le dossier 'out/'
```

## Structure du projet

```
amelie2025/
├── src/
│   ├── app/          # Pages et layouts (App Router)
│   └── components/   # Composants réutilisables
├── public/           # Assets statiques
├── .github/          # Configuration GitHub
└── out/              # Site exporté (après build)
```

## Déploiement

Ce projet est configuré pour l'export statique et peut être déployé sur :

- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- **AWS S3** + CloudFront
- Tout hébergeur de sites statiques

## Développement

Le projet utilise :

- Hot reloading pour le développement
- Tailwind CSS pour le styling rapide
- ESLint pour maintenir la qualité du code
- Configuration optimisée pour les performances

## En savoir plus

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Tutoriel Next.js](https://nextjs.org/learn)
