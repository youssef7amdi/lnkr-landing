'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavLink {
  label: string;
  href: string;
}

var navLinks: INavLink[] = [
  { label: 'Patient App + E-Card', href: '/patient-ecard' },
  { label: 'Clinic Management', href: '/clinic' },
  { label: 'Pharmacy', href: '/pharmacy' },
  { label: 'Medical Service Provider', href: '/medical-provider' },
];

var extraLinks: INavLink[] = [
  { label: 'FAQs', href: '/FAQs' },
  { label: 'Contact-us', href: '' },
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
            className={` ${link.href === pathname ? 'text-primary-dark font-extrabold' : 'text-primary-light font-bold'} hover:text-primary-dark tracking-wide transition-colors duration-300`}
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
            className={` ${link.href === pathname ? 'text-primary-dark font-extrabold' : 'text-primary-light font-bold'} hover:text-primary-dark tracking-wide transition-colors duration-300`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
