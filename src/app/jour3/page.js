export default function Jour3Page() {
  const today = new Date();
  const cutoffDate = new Date('2025-09-08');

  if (today <= cutoffDate) {
    return (
      <div className="jour1-page">
        <h1 className="text-2xl font-bold">Accès non autorisé</h1>
        <p className="mt-4">
          Accessible uniquement la veille de la date pour garder la surprise
        </p>
      </div>
    );
  }

  return (
    <div className="jour1-page">
      <h1 className="text-2xl font-bold">Jour 1</h1>
      <p className="mt-4">Cette page est en cours de développement.</p>
    </div>
  );
}
