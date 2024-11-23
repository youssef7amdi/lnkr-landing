import Image from 'next/image';
import Link from 'next/link';

export default function LabCenterPage() {
  return (
    <div className="py-[4rem] pe-[8rem]">
      <div className="flex h-full w-full items-center gap-[2rem]">
        <div className="flex grow items-center justify-center">
          <Image
            src="/images/radiology/radiology-image.jpg"
            alt="Radiology image"
            width={350.5}
            height={200.5}
          />
        </div>
        <div className="basis-2/5">
          <h1 className="mb-8 text-center text-[2rem] font-bold text-primary-dark">
            Radiology Center Management
          </h1>
          <section className="space-y-6 text-[1.3rem] font-[500] text-primary-dark">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Securely connect your patients' data. </p>
            <p>Onboard endless contracts.</p>
            <div className="flex items-center">
              Visit our web:
              <span className="ms-[2rem] inline-flex items-center gap-[2rem]">
                <Link
                  href="https://scan.lnkrtech.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-[0.8rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                >
                  <Image
                    src="/images/radiology/radiology-icon.svg"
                    alt="lab icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-[1.2rem] font-bold underline">
                    radiology.lnkrtech
                  </span>
                </Link>
              </span>
            </div>
            <div className="flex items-center">
              <span className="w-[120px]">Documentation:</span>
              <div className="mx-[2rem] inline-flex gap-[2rem]">
                <span className="inline-flex items-center gap-[1rem]">
                  <Link
                    href={''}
                    className="inline-flex items-center gap-[0.8rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                  >
                    radiology_documentation
                  </Link>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
