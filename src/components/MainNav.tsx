'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavLink {
  label: string;
  href: string;
}

var navLinks: INavLink[] = [
  { label: 'Patient', href: '/patient' },
  { label: 'Doctor', href: '/doctor' },
  { label: 'Pharmacy', href: '/pharmacy' },
  { label: 'Laboratory', href: '/laboratory' },
  { label: 'Radiology', href: '/radiology' },
  { label: 'Insurer', href: '/insurer' },
];

var extraLinks: INavLink[] = [
  { label: 'FAQs', href: '/FAQs' },
  { label: 'Contact-us', href: '/contact-us' },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex items-center gap-[4rem]">
        {navLinks.map((link: INavLink) => (
          <Link
            href={link.href}
            key={link.label}
            className={` ${link.href === pathname ? 'font-extrabold text-primary-dark' : 'font-bold text-primary-light'} tracking-wide transition-colors duration-300 hover:text-primary-dark`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-[3rem]" aria-label="Extra Links">
        {extraLinks.map((link: INavLink) => (
          <Link
            href={link.href}
            key={link.label}
            className={` ${link.href === pathname ? 'font-extrabold text-primary-dark' : 'font-bold text-primary-light'} tracking-wide transition-colors duration-300 hover:text-primary-dark`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
