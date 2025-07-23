/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour l'export statique
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // Optimisations pour le site statique
  images: {
    unoptimized: true, // Nécessaire pour l'export statique
  },

  // Configuration pour le déploiement
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
};

export default nextConfig;
