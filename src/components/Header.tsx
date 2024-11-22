import Image from 'next/image';
import MainNav from './MainNav';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-12 py-4 text-[1.4rem]">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" height={80} width={120} priority />
      </Link>
      <MainNav />
    </header>
  );
}
