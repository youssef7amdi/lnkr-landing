import { redirect } from 'next/navigation';

export default function docsPage() {
  redirect('/docs/doctor');

  return null;
}
