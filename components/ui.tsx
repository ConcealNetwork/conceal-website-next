import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <header className="mb-10 max-w-3xl">
            {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
            {title && <h2 className="text-3xl font-light tracking-tight md:text-5xl">{title}</h2>}
            {intro && <div className="mt-5 text-lg text-muted-foreground">{intro}</div>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-16">
      <Container>
        <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</p>}
        {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
      </Container>
    </section>
  );
}

export function Amber({ children }: { children: ReactNode }) {
  return <span className="text-amber">{children}</span>;
}

export function Bold({ children }: { children: ReactNode }) {
  return <span className="font-semibold">{children}</span>;
}

type Linkish = { href: string; children: ReactNode; className?: string; external?: boolean };

const isExternal = (href: string) => /^https?:\/\//.test(href);

export function SmartLink({ href, children, className, external, ...rest }: Linkish & Record<string, unknown>) {
  const ext = external ?? isExternal(href);
  if (ext) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

export function PillLink({ href, children, className = '', external }: Linkish) {
  return (
    <SmartLink href={href} external={external} className={`pill ${className}`}>
      {children}
    </SmartLink>
  );
}

export function GhostLink({ href, children, className = '', external }: Linkish) {
  return (
    <SmartLink href={href} external={external} className={`pill-ghost ${className}`}>
      {children}
    </SmartLink>
  );
}

export function ArrowLink({ href, children, className = '', external }: Linkish) {
  const ext = external ?? isExternal(href);
  return (
    <SmartLink href={href} external={ext} className={`arrow-link ${className}`}>
      {children}
      {ext ? <ArrowUpRight size={16} /> : <ArrowRight size={16} />}
    </SmartLink>
  );
}

export function Glass({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'article' | 'li' }) {
  return <Tag className={`glass p-6 ${className}`}>{children}</Tag>;
}

export function StatusDot({ tone = 'ok', children }: { tone?: 'ok' | 'warn' | 'idle'; children: ReactNode }) {
  const colour = tone === 'ok' ? 'bg-incoming' : tone === 'warn' ? 'bg-wallet-amber' : 'bg-muted-foreground';
  const text = tone === 'ok' ? 'text-incoming' : tone === 'warn' ? 'text-wallet-amber' : 'text-muted-foreground';
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-3 py-1 font-mono text-xs ${text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${colour}`} aria-hidden />
      {children}
    </span>
  );
}

export function Mono({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`font-mono ${className}`}>{children}</span>;
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/40 bg-primary/5 px-5 py-4 text-sm text-foreground/90">{children}</div>
  );
}
