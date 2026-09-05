import Image from 'next/image';
import Link from 'next/link';
import { footerColumns, socials } from '@/content/site';
import { socialIcons } from './icons/brand';
import { Container, SmartLink } from './ui';
import { asset } from '@/lib/assets';

const strip = ['Untraceable transactions', 'Encrypted messaging', 'Deposits that earn', 'Keys never leave your device'];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/60">
      <Container className="py-6">
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {strip.map((s) => (
            <li key={s} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {s}
            </li>
          ))}
        </ul>
      </Container>
      <div className="border-t border-border/60 bg-chrome/60">
        <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="Conceal Network home">
              <Image src={asset('/brand/logo.svg')} alt="" width={28} height={28} />
              <span className="text-[17px] font-semibold tracking-tight">Conceal</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A privacy-protected network for money and messages. Community-run, open source, no one in charge.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social links">
              {socials
                .filter((s) => socialIcons[s.id])
                .map((s) => {
                  const Icon = socialIcons[s.id];
                  return (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition hover:border-primary/60 hover:text-foreground"
                      >
                        <Icon width={15} height={15} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href + item.label}>
                    <SmartLink href={item.href} external={item.external} className="text-sm text-muted-foreground transition hover:text-foreground">
                      {item.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </Container>
        <Container className="flex flex-col gap-2 border-t border-border/60 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2017–{year} Conceal.Network, Conceal DAO, Conceal Team & Conceal Developers. All rights reserved.</p>
          <p className="font-mono">MIT licensed · Built by volunteers</p>
        </Container>
      </div>
    </footer>
  );
}
