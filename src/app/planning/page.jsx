import Link from 'next/link';

export default function PlanningPage() {
  return (
    <div className="planning-page">
      <h1 className="text-2xl font-bold">Planning</h1>
      <p className="mt-4">Cette page est en cours de développement.</p>
      <div className="jour-pages mt-6">
        <Link href="/jour1" className="block mb-2">
          {' '}
          Jour 1
        </Link>
        <Link href="/jour2" className="block mb-2">
          {' '}
          Jour 2
        </Link>
        <Link href="/jour3" className="block mb-2">
          {' '}
          Jour 3
        </Link>
        <Link href="/jour4" className="block mb-2">
          {' '}
          Jour 4
        </Link>
      </div>
    </div>
  );
}
