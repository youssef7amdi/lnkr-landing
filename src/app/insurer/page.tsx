import Image from 'next/image';
import Link from 'next/link';

export default function MedicalProviderPage() {
  return (
    <div className="py-[4rem] pe-[8rem]">
      <div className="flex h-full w-full items-center">
        <div className="flex grow items-center justify-center">
          <Image
            src="/images/insurer/insurer-image.jpg"
            alt="Ipad image"
            width={480}
            height={234.5}
          />
        </div>
        <div className="basis-1/2">
          <h1 className="mb-8 text-center text-[2rem] font-bold text-primary-dark">
            Insurer
          </h1>
          <section className="space-y-6 text-[1.3rem] font-[500] text-primary-dark">
            <p>Enjoy real-time transactions. </p>
            <p>
              End-to-end digital patient journey, saving money, time, and
              workforce.
            </p>
            <p>
              Data is all yours! Full security to all data, we only process it
              for you.
            </p>
            <div className="flex items-center">
              Visit our web:
              <span className="ms-[2rem] inline-flex items-center gap-[2rem]">
                <Link
                  href="https://insurer.lnkrtech.com"
                  target="_blank"
                  rel="noopener"
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
            <div className="flex items-center">
              <span className="w-[120px]">Documentation:</span>
              <div className="mx-[2rem] inline-flex gap-[2rem]">
                <span className="inline-flex items-center gap-[1rem]">
                  <Link
                    href={''}
                    className="inline-flex items-center gap-[0.8rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                  >
                    insurer_documentation
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
