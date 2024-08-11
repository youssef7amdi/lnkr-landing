import Spinner from '@/components/Spinner';

export default function loadingRoot() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner />
    </div>
  );
}
