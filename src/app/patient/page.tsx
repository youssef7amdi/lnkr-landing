import Image from 'next/image';
import Link from 'next/link';

const mobileApps = [
  {
    id: 'android',
    icon: '/images/patient/play-store-icon.svg',
    title: 'Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.lnkr.patient&hl=en',
  },
  {
    id: 'IOS',
    icon: '/images/patient/app-store-icon.svg',
    title: 'App Store',
    href: 'https://apps.apple.com/eg/app/lnkr-patient/id1667211817',
  },
];

export default function PatientAndECardPage() {
  return (
    <div className="px-[20rem] py-[8rem]">
      <div className="flex items-center gap-[10rem]">
        <div className="basis-1/2">
          <section className="space-y-6 text-[1.5rem] font-[500] text-primary-dark">
            <p>
              All your medical records are securely stored in one place that can
              be easily accessed.
            </p>
            <p>No more waiting for approvals. Enjoy real-time transactions.</p>
            <p>
              Access a wide network of healthcare providers, at your fingertip.
            </p>
            <div className="flex items-center">
              Get our apps:
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
          src="/images/patient/patient-image.jpg"
          alt="card image"
          width={350.5}
          height={200.5}
        />
      </div>
    </div>
  );
}
