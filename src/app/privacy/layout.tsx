import SideNav from '@/components/SideNav';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdOutlineSick } from 'react-icons/md';

const privacyLinks = [
  { label: 'patient', href: '/privacy/patient', icon: <MdOutlineSick /> },
  { label: 'doctor', href: '/privacy/doctor', icon: <FaUserDoctor /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`row-span-2 grid grid-cols-[21rem_1fr]`}>
      <SideNav links={privacyLinks} />
      <main className="overflow-auto bg-gray-50 p-[3rem_4.8rem_2.4rem]">
        <div className="mx-auto my-0 flex flex-col gap-[3.2rem]">
          {children}
        </div>
      </main>
    </div>
  );
}
