import Image from 'next/image';
import Link from 'next/link';

export default function PharmacyPage() {
  return (
    <div className="ps-[16rem]">
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
            <div className="flex items-center">
              Visit our web:
              <span className="ms-[2rem] inline-flex items-center gap-[2rem]">
                <Link
                  href=""
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-[0.8rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                >
                  <Image
                    src="/images/pharmacy/pharmacy-icon.svg"
                    alt="pharmacy icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-[1.2rem] font-bold underline">
                    Pharmacy.lnkrtech
                  </span>
                </Link>
              </span>
            </div>
          </section>
        </div>

        <Image
          src="/images/pharmacy/mobile.png"
          alt="mobile image"
          width={500}
          height={234.5}
          className="-mt-[10rem]"
          quality={100}
        />
      </div>
    </div>
  );
}
