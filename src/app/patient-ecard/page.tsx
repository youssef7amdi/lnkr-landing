import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';

export default function PatientAndECardPage() {
  return (
    <div className="px-[20rem] py-[8rem]">
      <BackgroundImage
        src="/patient-ecardBg.png"
        alt="Patient - ECard Bg image"
      />
      <div className="flex items-center gap-[2rem]">
        <div className="basis-1/2">
          <h1 className="text-primary-dark mb-16 text-center text-[2rem] font-bold">
            Patient App + E Card
          </h1>
          <section className="text-primary-dark space-y-6 text-[1.5rem] font-[500]">
            <p>
              One card is all you need. All your medical records are stored in
              one place that can be easily accessed.
            </p>
            <p>
              All your medical transactions are now done in real-time.
              <br />
              No more waiting for approvals!
            </p>
          </section>
        </div>
        <Image
          src="/images/patient-ecard/card.png"
          alt="card image"
          width={650}
          height={350}
        />
      </div>
    </div>
  );
}
