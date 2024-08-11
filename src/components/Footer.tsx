import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface INavLink {
  label: string;
  href: string;
}

interface ISocialLink {
  label: ReactElement;
  href: string;
  id: string;
}

var navLinks: INavLink[] = [
  { label: 'About us', href: '' },
  { label: 'Terms & Conditions', href: '' },
  { label: 'Privacy Statements', href: '' },
  { label: 'IOS', href: '' },
  { label: 'Android', href: '' },
  { label: 'API documentation', href: '' },
];

var socialLinks: ISocialLink[] = [
  { label: <FaFacebookSquare />, href: '', id: 'facebook' },
  { label: <FaInstagram />, href: '', id: 'instagram' },
  { label: <FaLinkedin />, href: '', id: 'linkedin' },
];

export default function Footer() {
  return (
    <footer className="bg-white px-12 py-8">
      <div className="container mx-auto flex items-center justify-between">
        <Image src="/logo.png" alt="Logo" height={100} width={140} />
        <nav className="flex items-center space-x-8 text-[1.2rem]">
          {navLinks.map((link: INavLink) => (
            <Link
              href={link.href}
              key={link.label}
              className={`text-primary-light hover:text-primary-dark font-bold tracking-wide transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div
          className="flex items-center space-x-4 text-[2rem]"
          aria-label="Extra Links"
        >
          {socialLinks.map((link: ISocialLink) => (
            <Link
              href={link.href}
              key={link.id}
              className={`text-primary-light hover:text-primary-dark font-bold tracking-wide transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
