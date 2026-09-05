import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { TERMS_LAST_REVIEWED, terms } from '@/content/legal';

export const metadata: Metadata = { title: 'Terms & Conditions', description: 'Terms of use for conceal.network and Conceal software.' };

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="There is no company behind Conceal, which changes what you can expect from it. Read this before you rely on the software for anything that matters."
      sections={terms}
      reviewed={TERMS_LAST_REVIEWED}
    />
  );
}
