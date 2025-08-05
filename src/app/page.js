import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <Link href="/cadeau">
        <div className="w-screen h-screen flex items-center bg-black">
          <Image
            src="/images/anniversaire.jpg"
            width={400}
            height={900}
            alt="Joyeux anniversaire Amélie"
            className="object-center h-full w-full"
          />
        </div>
      </Link>
    </main>
  );
}
