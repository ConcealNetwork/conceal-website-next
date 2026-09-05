import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { TERMS_LAST_REVIEWED, terms } from '@/content/legal';

export const metadata: Metadata = { title: 'Terms & Conditions', description: 'Terms of use for conceal.network and Conceal software.' };

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="Conceal is community software with no company behind it. Please read what that means before you rely on it."
      sections={terms}
      reviewed={TERMS_LAST_REVIEWED}
    />
  );
}
