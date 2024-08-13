import Image from 'next/image';

export default function BackgroundImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className="absolute inset-0 z-[-1]"
        fill={true}
        priority
      />
    </>
  );
}
