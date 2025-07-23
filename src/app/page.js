import { Cadeau } from '@/components/Cadeau';

export default function Home() {
  return (
    <main
      className="h-screen w-screen flex items-end justify-center bg-gray-100 bg-cover bg-center opacity-75"
      style={{ backgroundImage: 'url(/images/accueilBackground.png)' }}
    >
      <Cadeau />
    </main>
  );
}
