import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';

export default function ClinicPage() {
  return (
    <div className="py-[4rem] pe-[8rem]">
      <BackgroundImage src="/clinicBg.png" alt="Clinic Management Bg" />
      <div className="flex h-full w-full items-center gap-[2rem]">
        <div className="flex grow items-center justify-center">
          <Image
            src="/images/clinic/laptop.png"
            alt="Laptop image"
            width={583}
            height={234.5}
          />
        </div>
        <div className="basis-2/5">
          <h1 className="mb-8 text-center text-[2rem] font-bold text-primary-dark">
            Clinic Management
          </h1>
          <section className="space-y-6 text-[1.3rem] font-[500] text-primary-dark">
            <p>Absolute privacy of all your data</p>
            <p>
              Countless contracts. You can choose which company you want to
              share specific prescriptions with.
            </p>
            <p>
              Accurate accounting tool. Our dashboard will help you track the
              number of times a specific drug was written.
            </p>
            <p>Drug-to-drug interactions and drug-to-disease interactions.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
