import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';

export default function MedicalProviderPage() {
  return (
    <div className="py-[4rem] pe-[8rem]">
      <BackgroundImage
        src="/medical-providerBg.png"
        alt="Medical provider service Bg"
      />
      <div className="flex h-full w-full items-center">
        <div className="flex grow items-center justify-end">
          <Image
            src="/images/medical-provider/ipad.png"
            alt="Ipad image"
            width={516}
            height={234.5}
          />
        </div>
        <div className="basis-1/2">
          <h1 className="mb-8 text-center text-[2rem] font-bold text-primary-dark">
            Medical Service Provider
          </h1>
          <section className="space-y-6 text-[1.3rem] font-[500] text-primary-dark">
            <p>
              No more fraudulent activities. Our dashboard provides instant
              visibility to the prescriptions once written by physicians.
            </p>
            <p>
              Fully digitization to the patient journey, saving money, time, and
              workforce.
              <br />
              {/* eslint-disable-next-line react/no-unescaped-entities*/}
              Claims' approvals could ont be easier!
            </p>
            <p>
              Data is all yours! Full security to all data, we only process it
              for you.
            </p>
            <p>Accurate accounting tool.</p>
            <p>
              Further reach, since you are no longer limited to your network!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
