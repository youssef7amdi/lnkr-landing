import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <div className="px-[6rem] py-[8rem]">
      <BackgroundImage src="/FAQsBg.png" alt="background image of FAQs page" />
      <div>
        <h1 className="mb-16 text-center text-[2.5rem] font-bold text-primary-dark">
          Contact Us Via
        </h1>
        <div className="flex items-center justify-center gap-[4rem]">
          <Link
            href="https://wa.me/1000607855"
            target="_blank"
            className="inline-flex items-center gap-[0.9rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
          >
            <Image
              src="/whatsapp-icon.svg"
              alt="whatsapp Icon"
              width={25}
              height={25}
            />
            <span className="text-[1.3rem] font-bold underline">
              +20 1000 60 7855
            </span>
          </Link>
          <Link
            href="mailto:info@lnkrtech.com"
            target="_blank"
            className="inline-flex items-center gap-[0.9rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
          >
            <Image
              src="/email-icon.svg"
              alt="email icon"
              width={25}
              height={25}
            />
            <span className="text-[1.3rem] font-bold underline">
              info@lnkrtech.com
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
