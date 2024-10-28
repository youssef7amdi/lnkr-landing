import BackgroundImage from '@/components/BackgroundImage';
import Image from 'next/image';
import Link from 'next/link';
import VideoClinic from './VideoClinic';
import { Suspense } from 'react';
import Spinner from '@/components/Spinner';

const mobileApps = [
  {
    id: 'android',
    icon: '/images/patient-ecard/play-store-icon.svg',
    title: 'Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.lnkr.clinic',
  },
  {
    id: 'IOS',
    icon: '/images/patient-ecard/app-store-icon.svg',
    title: 'App Store',
    href: 'https://apps.apple.com/eg/app/lnkr-clinic/id1665621890',
  },
];

async function getVideoData(videoId: string) {
  const response = await fetch(
    `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
  );
  const data = await response.json();
  return data;
}

export default async function ClinicPage() {
  const videoId = 'rDiMgNL8e3o';

  const videoData = await getVideoData(videoId);

  return (
    <div className="py-[4rem] pe-[8rem]">
      <BackgroundImage src="/clinicBg.png" alt="Clinic Management Bg" />
      <div className="flex h-full w-full items-center gap-[2rem]">
        <Suspense fallback={<Spinner />}>
          <VideoClinic videoData={videoData} videoId={videoId} />
        </Suspense>
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
            <div className="flex items-center">
              <span className="w-[120px]">Visit Doctor App:</span>
              <div className="mx-[2rem] inline-flex gap-[2rem]">
                <span>
                  <Link
                    href="https://clinic.lnkrtech.com"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-[0.8rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                  >
                    <Image
                      src="/images/clinic/clinic-icon.svg"
                      alt="clinic icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-[1.2rem] font-bold underline">
                      Doctor Web App
                    </span>
                  </Link>
                </span>
                <span className="inline-flex items-center gap-[1rem]">
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
                      <span className="text-[1.2rem] font-bold">
                        {app.title}
                      </span>
                    </Link>
                  ))}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-[120px]">Visit Hospital App:</span>
              <div className="mx-[2rem] inline-flex gap-[2rem]">
                <Link
                  href="https://hospital.lnkrtech.com"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-[0.8rem] rounded-xl border border-primary-dark px-[0.9rem] py-[0.7rem] transition-all duration-300 hover:bg-primary-dark hover:text-white"
                >
                  <Image
                    src="/images/hospital/hospital-icon.svg"
                    alt="hospital icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-[1.2rem] font-bold underline">
                    Hospital Web App
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
