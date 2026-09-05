import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { PRIVACY_LAST_REVIEWED, privacy } from '@/content/legal';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'What conceal.network logs, what it does not, and which third parties your browser talks to.' };

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What this website records about you, which is not much, and which other servers your browser talks to when you load it."
      sections={privacy}
      reviewed={PRIVACY_LAST_REVIEWED}
    />
  );
}
