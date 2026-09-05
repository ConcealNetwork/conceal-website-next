import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { PRIVACY_LAST_REVIEWED, privacy } from '@/content/legal';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'What conceal.network logs, what it does not, and which third parties your browser talks to.' };

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="A privacy project should be able to explain its own website in a few paragraphs. Here they are."
      sections={privacy}
      reviewed={PRIVACY_LAST_REVIEWED}
    />
  );
}
