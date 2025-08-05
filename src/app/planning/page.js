'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const variantsArrivee = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10, y: 60 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.4 },
  },
}
const variantsHotel = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const variantsSouk = {
  hidden: { opacity: 0, scale: 0.8, rotate: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, type: 'spring', bounce: 0.3 },
  },
}
const variantsCafe = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const variantsJeema = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, type: 'spring', bounce: 0.5 },
  },
}
const variantsPetitDej = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const variantsJardin = {
  hidden: { opacity: 0, scale: 0.8, y: -60 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.4 },
  },
}
const variantsAgafay = {
  hidden: { opacity: 0, rotate: 12, scale: 0.7 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.9, type: 'spring', bounce: 0.5 },
  },
}
const variantsQuad = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const variantsDromadaire = {
  hidden: { opacity: 0, scale: 0.6, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.3 },
  },
}
const variantsAgafaySoir = {
  hidden: { opacity: 0, rotate: -8, scale: 0.8 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1, type: 'spring', bounce: 0.5 },
  },
}
const variantsTanneurs = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const variantsPalmeraie1 = {
  hidden: { opacity: 0, scale: 0.7, y: -80 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.4 },
  },
}
const variantsPalmeraie2 = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const variantsTajine = {
  hidden: { opacity: 0, scale: 0.6, rotate: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.3 },
  },
}
const variantsBahia = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const variantsSoukFinal = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.4 },
  },
}
const variantsParagraph = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
const variantsParagraphAlt = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.3 },
  },
}
const variantsParagraphBounce = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, type: 'spring', bounce: 0.5 },
  },
}

export default function Planning() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-800 text-white">
      <h1 className="text-3xl font-bold my-4 text-white">
        Marrakech dans l&apos;viseur
      </h1>
      <div className="p-1 border border-black  shadow-lg bg-yellow-100 text-black">
        <motion.p
          className="text-lg mb-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsParagraph}
        >
          Alors voilà, on se met en route <strong>le lundi 8 septembre </strong>
          à 7h tapantes, les paupières engluées dans la mélasse du sommeil, mais
          le coeur déjà là-bas, à{' '}
          <span className="font-bold text-amber-700">Marrakech</span>, à
          farfouiller dans les <span className="font-bold text-red-500">c</span>
          <span className="font-bold text-blue-600">o</span>
          <span className="font-bold text-emerald-500">u</span>
          <span className="font-bold text-red-500">l</span>
          <span className="font-bold text-yellow-500">e</span>
          <span className="font-bold text-purple-500">u</span>
          <span className="font-bold text-indigo-500">r</span>
          <span className="font-bold text-indigo-500">s</span> et les senteurs.
          <br /> <br />
          Ouaip, on se tire tôt, mais c&apos;est pour mieux croquer la journée à
          pleines dents, comme un msemem bien chaud sorti du four!
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsArrivee}
        >
          <Image
            src="/images/arrivee.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <motion.p
          className="text-lg mb-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsParagraphAlt}
        >
          On atterrit vers 14h, et là bam, direct à l&apos;
          <span className="font-bold text-blue-600">hôtel</span>! Pas le même
          que l&apos;an dernier mais dans le même délire: ruelles tortueuses,
          zelliges au mur, un patio qui sent l&apos;oranger et la menthe
          fraîche. Dépôt des bagages, splash d&apos;eau sur la nuque et hop, on
          embarque mamie direction Jeema el Fna!
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsHotel}
        >
          <Image
            src="/images/hotel.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <motion.p
          className="text-lg mb-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsParagraphBounce}
        >
          On lui balance l&apos;ambiance en pleine tronche: charmeurs de
          serpents, tambours qui tabassent le temps, effluves de brochettes et
          regards qui pétillent.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsSouk}
        >
          <Image
            src="/images/soukEtonnee.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <motion.p
          className="text-lg mb-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsParagraph}
        >
          Un petit crochet dans les souks, histoire de se faire gober par ce
          labyrinthe sensoriel, puis remontée tranquille vers le Dar Cherifa, tu
          sais ce riad où le temps s&apos;arrête le temps d&apos;un café en
          terrasse et d&apos;une corne de gazelle.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsCafe}
        >
          <Image
            src="/images/cafeCherifa.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <motion.p
          className="text-lg mb-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsParagraphAlt}
        >
          La soirée s&apos;étire, on flâne dans la médina comme si c&apos;était
          notre salon, et on boucle la journée avec un ptit grignotis sur la
          place, le genre de truc qui a le goût des souvenirs qu&apos;on
          n&apos;oublie pas.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsJeema}
        >
          <Image
            src="/images/jeemaSoir.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
      </div>
      <div className="p-1 border border-black shadow-lg bg-yellow-100 text-black">
        <p className="text-lg mb-6 px-4">
          Le mardi 9, on sort l&apos;artillerie lourde:{' '}
          <strong>Excursion, baby!</strong>
        </p>{' '}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsPetitDej}
        >
          <Image
            src="/images/petitDej.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">
          Le matin, c&apos;est douceur et chlorophylle avec le{' '}
          <span className="font-bold text-emerald-600">Jardin Secret</span>, un
          bout de paradis planqué entre les murs de la ville rouge. Mamie va
          kiffer, c&apos;est sûr!
        </p>{' '}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsJardin}
        >
          <Image
            src="/images/jardinSecret.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">
          Et là, accroche-toi bien, parce qu&apos;à 16h, on part pour l&apos;
          <span className="font-bold text-orange-300">Agafay</span>, le désert
          qui fait des clins d&apos;oeil au Sahara.
        </p>{' '}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsAgafay}
        >
          <Image
            src="/images/quadAgafay.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">
          <span className="font-bold text-orange-300">Quad dans les dunes</span>
          , le vent dans la tronche, le rire dans le moteur.
          <br />
          Puis, moment suspendu: tour de{' '}
          <span className="font-bold text-amber-800">dromadaire</span> sous un
          soleil qui s&apos;éclabousse dans l&apos;horizon.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsQuad}
        >
          <Image
            src="/images/dromadaireAgafay.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">
          Et pour finir, le clou du kif: repas dans une tente berbère, thé
          brûlant, tajine qui fume, spectacle traditionnel et les étoiles pour
          plafond.
          <br />
          Si ça c&apos;est pas le bonheur, c&apos;est quoi?
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsAgafaySoir}
        >
          <Image
            src="/images/agafaySoir.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
      </div>
      <div className="p-1 border border-black shadow-lg bg-yellow-100 text-black">
        <p className="text-lg mb-6 px-4">
          Le mercredi 10, on jour les guides touristiques de compète.
          <br />
          Le matin, cap chez les{' '}
          <span className="font-bold text-blue-700">tanneurs</span>, là où le
          cuir hurle sa vie, où ça sent pas bon, et où les couleurs te vrillent
          les rétines.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsTanneurs}
        >
          <Image
            src="/images/tanneurs.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">Et l&apos;aprem?</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsPalmeraie1}
        >
          <Image
            src="/images/palmerais1.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">
          Direction la{' '}
          <span className="font-bold text-green-600">palmeraie</span>! On ne
          connaît pas encore, mais on y va en mode explorateurs, tu vois le
          délire?
        </p>{' '}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsPalmeraie2}
        >
          <Image
            src="/images/palmeraie2.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">
          Le soir, retour au Dar Cherifa, cette fois pour taper dans le dur:
          <span className="font-bold text-amber-800">
            {' '}
            tajine poulet-citron
          </span>
          , recette céleste validée par nos papilles l&apos;année dernière.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsTajine}
        >
          <Image
            src="/images/tajineCherifa.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">
          Derniers tours sur la place Jeema El Fna, le coeur un peu serré, comme
          quand tu sens que la fête tire sur sa fin.
        </p>
      </div>
      <div className="p-1 border border-black shadow-lg bg-yellow-100 text-black">
        <p className="text-lg mb-6 px-4">
          Et jeudi 11, bah ouais, c&apos;est le départ. <br />
          Mais pas tout de suite hein, l&apos;avion c&apos;est à 18h45, donc
          y&apos;a de la marge pour une dernière danse. Au programme : visite du{' '}
          <span className="font-bold text-blue-500">palais de la Bahia</span>,
          un chef-d&apos;œuvre ciselé à la main.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsBahia}
        >
          <Image
            src="/images/bahia.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
        <p className="text-lg mb-6 px-4">
          Puis dernier tour dans le{' '}
          <span className="font-bold text-red-900">souk</span>, pour choper
          deux-trois trésors et serrer Marrakech dans les bras avant de lui dire
          à bientôt.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variantsSoukFinal}
        >
          <Image
            src="/images/soukPremierJour.jpg"
            alt="Marrakech"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </motion.div>
      </div>
      <p className="text-lg mb-6 px-4 text-center font-bold text-white">
        Voilà le topo ma grande fifille!
        <br />
        Cette année encore, on remet ça.
        <br />
        Mais avec mamie dans l&apos;équipe,
        <br />
        Et Marrakech dans le sang
        <br />
        <br />
        On y va en connaisseurs,
        <br />
        En amoureux de l&apos;endroit,
        <br />
        Des rituels bien rodés,
        <br />
        Et des surprises bien senties.
        <br />
        <br />
        T&apos;es prête? Parce que moi, j&apos;ai déjà les yeux qui brillent...
      </p>
    </main>
  )
}
