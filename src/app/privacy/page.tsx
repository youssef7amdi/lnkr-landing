import { redirect } from 'next/navigation';

export default function PrivacyPage() {
  redirect('/privacy/patient');

  return null;
}
