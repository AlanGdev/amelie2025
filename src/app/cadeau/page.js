import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <Link href="/cadeau">
        <div className="w-screen flex items-start bg-black">
          <Image
            src="/images/cadeau.jpg"
            width={400}
            height={900}
            alt="Joyeux anniversaire Amélie"
            className="object-cover w-full"
          />
        </div>
      </Link>
      <p>
        <span className="text-2xl font-bold">
          Joyeux anniversaire, ma chérie,
        </span>
        <br />
        V’là qu’on remet ça. Ouais, encore une virée. Une échappée belle. Une
        fugue douce dans l’agenda de nos vies. Un petit clin d’œil au
        calendrier, histoire de lui dire que non, le temps qui passe ne nous
        empêche pas de faire les valises.
        <br />
        Et cette année, comme l’an passé — souviens-toi, le soleil, les épices,
        la frénésie rouge ocre de Marrakech — ben, on y retourne. Parce que
        t’avais kiffé, que ton sourire avait tapé plus fort que le soleil de 14h
        sur les murs du souk. Alors on s’est dit, allons-y. On ne se refait pas,
        on prolonge la magie.
        <br />
        Mais attends… cette fois, y a du rebondissement. Un twist, une surprise
        dans le scénario. Y a un(e) guest. Une présence inattendue qui va venir
        écrire ce chapitre avec nous. Nous, on fera les guides — version
        approximative, un peu perdus, un peu émerveillés, mais toujours
        partants. Et ensemble, on va fouiller les recoins, dénicher les détails,
        et savourer ce foutu Maroc qui ne cesse de se réinventer à chaque
        regard.
        <br />
        Bref. Ce ne sera pas un simple anniversaire. Ce sera un moment, un vrai.
        Tu verras, on va bien s’marrer.
      </p>
    </main>
  );
}
