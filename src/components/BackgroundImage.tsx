import Image from 'next/image';
import lnkrBg from '/public/lnkr-bg.jpg';

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 z-[-1] before:absolute before:inset-0 before:z-[1] before:bg-white before:opacity-90 before:content-['']">
      <Image
        src={lnkrBg}
        alt={'lnkr-background-image'}
        className="max-w-full object-cover"
        fill={true}
        priority
      />
    </div>
  );
}
