import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';
import Link from 'next/link';

export default function MedicalProviderPage() {
  return (
    <div className="py-[4rem] pe-[8rem]">
      <BackgroundImage src="/insurerBg.png" alt="Insurer Bg" />
      <div className="flex h-full w-full items-center">
        <div className="flex grow items-center justify-center">
          <Image
            src="/images/insurer/insurer.png"
            alt="Ipad image"
            className="-mt-[8rem]"
            width={480}
            height={234.5}
          />
        </div>
        <div className="basis-1/2">
          <h1 className="mb-8 text-center text-[2rem] font-bold text-primary-dark">
            Insurer
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
            <div className="flex items-center">
              Visit Our Web:
              <span className="ms-[2rem] inline-flex items-center gap-[2rem]">
                <Link
                  href="https://lnkr-insurance.netlify.app/"
                  target="_blank"
                  className="inline-flex items-center gap-[0.9rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                >
                  <Image
                    src="/images/insurer/insurer-icon-2.svg"
                    alt="insurer icon"
                    width={25}
                    height={25}
                  />
                  <span className="text-[1.3rem] font-bold underline">
                    Insurer.lnkrtech
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
