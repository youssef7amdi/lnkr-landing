'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MdOutlineSick } from 'react-icons/md';
import { FaUserDoctor } from 'react-icons/fa6';

const privacyLinks = [
  { label: 'patient', href: '/privacy/patient', icon: <MdOutlineSick /> },
  { label: 'physician', href: '/privacy/physician', icon: <FaUserDoctor /> },
];

function PrivacyNav() {
  const pathname = usePathname();
  return (
    <aside className="relative row-span-full flex flex-col gap-[3.2] overflow-y-auto border-r border-gray-100 bg-white px-[3.2rem] py-[2.4rem]">
      <ul className="flex flex-col gap-3 capitalize">
        {privacyLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={`${link.href}`}
              className={
                'nav-link main-nav-link' +
                `${link.href === pathname ? ' active' : ''}`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default PrivacyNav;
