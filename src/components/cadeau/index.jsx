import Image from 'next/image';
import Link from 'next/link';

export function Cadeau() {
  return (
    <div className="card w-150 bg-transparent">
      <figure>
        <Link href="/planning">
          <Image
            src="/images/cadeauMaroc.webp"
            alt="Cadeau"
            width={150}
            height={150}
            className="object-cover"
            priority
          />
        </Link>
      </figure>
    </div>
  );
}
