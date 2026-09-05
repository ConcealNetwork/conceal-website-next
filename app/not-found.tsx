import Link from 'next/link';
import { Container } from '@/components/ui';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl">
        Properly <span className="text-amber">concealed.</span>
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">There is nothing at this address. It may have moved when the site was rebuilt in 2026; the old routes are listed in the footer.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="pill">
          Back home
        </Link>
        <Link href="/get-ccx" className="pill-ghost">
          Get CCX
        </Link>
        <Link href="/wallets" className="pill-ghost">
          Wallets
        </Link>
      </div>
    </Container>
  );
}
