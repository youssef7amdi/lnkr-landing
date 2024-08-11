import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';

export default function PharmacyPage() {
  return (
    <div className="ps-[16rem]">
      <BackgroundImage src="/pharmacyBg.png" alt="Pharmacy Bg" />
      <div className="flex h-full w-full items-center gap-[6rem]">
        <div className="basis-2/5">
          <h1 className="mb-8 text-center text-[2rem] font-bold text-primary-dark">
            Pharmacy
          </h1>
          <section className="space-y-6 text-[1.3rem] font-[500] text-primary-dark">
            <p>
              No more data entry! You will receive the prescription with its
              approval.
            </p>
            <p>Countless contracts under the same system.</p>
            <p>
              Accurate accounting tool. Aggregation of all the prescriptions and
              their affiliated companies.
            </p>
            <p>
              Real time transactions. Contracts can now be processed
              instantaneously! No more waiting time.
            </p>
          </section>
        </div>

        <Image
          src="/images/pharmacy/mobile.png"
          alt="mobile image"
          width={437.5}
          height={234.5}
        />
      </div>
    </div>
  );
}
