import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';
import Link from 'next/link';

const mobileApps = [
  {
    id: 'android',
    icon: '/images/patient-ecard/play-store-icon.svg',
    title: 'Get app on Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.lnkr.patient&hl=en',
  },
  {
    id: 'IOS',
    icon: '/images/patient-ecard/app-store-icon.svg',
    title: 'Get app on App Store',
    href: 'https://apps.apple.com/eg/app/lnkr-patient/id1667211817',
  },
];

export default function PatientAndECardPage() {
  return (
    <div className="px-[20rem] py-[8rem]">
      <BackgroundImage
        src="/patient-ecardBg.png"
        alt="Patient - ECard Bg image"
      />
      <div className="flex items-center gap-[2rem]">
        <div className="basis-1/2">
          <h1 className="mb-16 text-center text-[2rem] font-bold text-primary-dark">
            Patient App + E Card
          </h1>
          <section className="space-y-6 text-[1.5rem] font-[500] text-primary-dark">
            <p>
              One card is all you need. All your medical records are stored in
              one place that can be easily accessed.
            </p>
            <p>
              All your medical transactions are now done in real-time.
              <br />
              No more waiting for approvals!
            </p>
            <div className="flex items-center">
              Get Our apps:
              <span className="ms-[2rem] inline-flex items-center gap-[2rem]">
                {mobileApps.map((app) => (
                  <Link
                    key={app.id}
                    href={app.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-[0.8rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                  >
                    <Image
                      src={app.icon}
                      alt={app.title}
                      width={20}
                      height={20}
                    />
                    <span className="text-[1.2rem] font-bold">{app.title}</span>
                  </Link>
                ))}
              </span>
            </div>
          </section>
        </div>
        <Image
          src="/images/patient-ecard/card.png"
          alt="card image"
          width={435.5}
          height={234.5}
        />
      </div>
    </div>
  );
}
