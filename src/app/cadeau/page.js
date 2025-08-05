'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleSubmit = () => {
    const validAnswers = ['mamie', 'mamy', 'colette', 'mamie colette', 'mamy colette'];
    if (validAnswers.includes(userInput.toLowerCase())) {
      alert('Bravo!');
      window.location.href = '/planning';
    } else {
      alert('Raté! essaye encore!');
    }
  };

  return (
    <main>
      
        <div className="w-screen flex items-start bg-black">
          <Image
            src="/images/cadeau.jpg"
            width={400}
            height={900}
            alt="Joyeux anniversaire Amélie"
            className="object-cover w-full"
          />
        </div>
    <h1 className="text-2xl text-center mt-4 font-bold">
          Joyeux anniversaire, ma chérie,
        </h1>
      <p className="  p-4 mb-4">
        
        
        V’là qu’on remet ça. Ouais, encore une virée. Une échappée belle. Une
        fugue douce dans l’agenda de nos vies. Un petit clin d’œil au
        calendrier, histoire de lui dire que non, le temps qui passe ne nous
        empêche pas de faire les valises.
        <br />
        <br />
        
        Et cette année, comme l’an passé — souviens-toi, le soleil, les épices,
        la frénésie rouge ocre de Marrakech — ben, on y retourne. Parce que
        t’avais kiffé, que ton sourire avait tapé plus fort que le soleil de 14h
        sur les murs du souk. Alors on s’est dit, allons-y. On ne se refait pas,
        on prolonge la magie.
        <br />
                <br />

        Mais attends… cette fois, y a du rebondissement. Un twist, une surprise
        dans le scénario. Y a un(e) guest. Une présence inattendue qui va venir
        écrire ce chapitre avec nous. Nous, on fera les guides — version
        approximative, un peu perdus, un peu émerveillés, mais toujours
        partants. Et ensemble, on va fouiller les recoins, dénicher les détails,
        et savourer ce foutu Maroc qui ne cesse de se réinventer à chaque
        regard.
        <br />
                <br />

        Bref. Ce ne sera pas un simple anniversaire. Ce sera un moment, un vrai.
        Tu verras, on va bien s’marrer.
      </p>

      <div className="flex justify-center mt-8 mb-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200"
          onClick={handleButtonClick}
        >
          Devine qui vient avec nous!
        </button>
      </div>
      {showInput && (
        <div className="flex flex-col items-center mt-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-64"
            placeholder="Entrez votre réponse"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-2"
            onClick={handleSubmit}
          >
            Valider
          </button>
        </div>
      )}
    </main>
  );
}
