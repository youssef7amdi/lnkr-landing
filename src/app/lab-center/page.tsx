import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';
import Link from 'next/link';

export default function LabCenterPage() {
  return (
    <div className="py-[4rem] pe-[8rem]">
      <BackgroundImage src="/clinicBg.png" alt="Clinic Management Bg" />
      <div className="flex h-full w-full items-center gap-[2rem]">
        <div className="flex grow items-center justify-center">
          <Image
            src="/images/clinic/laptop.png"
            alt="Laptop image"
            width={580}
            height={234.5}
          />
        </div>
        <div className="basis-2/5">
          <h1 className="mb-8 text-center text-[2rem] font-bold text-primary-dark">
            Lab Center Management
          </h1>
          <section className="space-y-6 text-[1.3rem] font-[500] text-primary-dark">
            <p>Absolute privacy of all your data.</p>
            <p>
              Countless contracts, in real-time. Hence, faster billing cycles.
            </p>
            <p>Accurate accounting tool.</p>
            <div className="flex items-center">
              Visit Our Web:
              <span className="ms-[2rem] inline-flex items-center gap-[2rem]">
                <Link
                  href="https://lab.lnkrtech.com/login"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-[0.8rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                >
                  <Image
                    src="/images/lab/laboratory-icon.svg"
                    alt="lab icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-[1.2rem] font-bold underline">
                    Lab.lnkrtech
                  </span>
                </Link>
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
