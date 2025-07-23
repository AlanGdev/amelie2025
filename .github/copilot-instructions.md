# Instructions Copilot pour Amélie 2025

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Contexte du projet

Ce projet est un site web statique Next.js destiné à être déployé sans back-end. Il utilise :

- Next.js 15 avec App Router
- JavaScript (pas de TypeScript)
- Tailwind CSS v4
- Export statique pour déploiement sur CDN/hébergement statique

## Instructions spécifiques

1. **Génération de code** : Toujours utiliser JavaScript, pas TypeScript
2. **Styling** : Utiliser Tailwind CSS avec les classes utilitaires modernes
3. **Architecture** : Utiliser l'App Router de Next.js (dossier src/app/)
4. **Export statique** : S'assurer que le code est compatible avec `next export`
5. **Performance** : Optimiser pour les Core Web Vitals et le SEO
6. **Accessibilité** : Respecter les standards WCAG 2.1
7. **Composants** : Utiliser DaisyUI autant que possible pour les composants UI

## Structure recommandée

- `src/app/` - Pages et layouts avec App Router
- `src/components/` - Composants réutilisables
- `src/styles/` - Styles globaux
- `public/` - Assets statiques (images, favicons, etc.)
