import Image from 'next/image';

export default function Home() {
  return (
    <main
      className="h-screen w-screen flex items-center justify-center bg-gray-100 bg-cover bg-center opacity-25"
      style={{ backgroundImage: 'url(/images/accueilBackground.png)' }}
    >
      {/* Contenu de la page */}
    </main>
  );
}
