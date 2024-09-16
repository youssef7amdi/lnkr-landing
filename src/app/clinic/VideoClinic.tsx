'use client';

export default function VideoClinic({
  videoData,
  videoId,
}: {
  videoData: any;
  videoId: string;
}) {
  return (
    <div className="relative flex grow items-center justify-center">
      <iframe
        width="580"
        height="326"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&controls=1`}
        title={videoData.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
}
