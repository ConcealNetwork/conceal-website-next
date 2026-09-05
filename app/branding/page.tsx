import type { Metadata } from 'next';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { Amber, Bold, Glass, PageHero, Section } from '@/components/ui';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Branding',
  description: 'Official Conceal logos, colours and typography for press, partners and community projects.',
};

const logos = [
  { label: 'Logo (SVG)', href: '/brand/logo.svg', file: 'conceal-logo.svg' },
  { label: 'Mark, simplified (SVG)', href: '/brand/conceal-mark.svg', file: 'conceal-mark.svg' },
  { label: 'Coin render (PNG, 1254 px)', href: '/brand/conceal-coin.png', file: 'conceal-coin.png' },
  { label: 'Logo on dark, 1600 px', href: '/brand/community-bbg-center-s-1600x1600.png', file: 'conceal-logo-dark-1600.png' },
  { label: 'Logo on white, 1600 px', href: '/brand/community-1600x1600.png', file: 'conceal-logo-white-1600.png' },
  { label: 'Logo on dark, 256 px', href: '/brand/community-bbg-center-256x256.png', file: 'conceal-logo-dark-256.png' },
  { label: 'Logo on white, 256 px', href: '/brand/community-256x256.png', file: 'conceal-logo-white-256.png' },
];

const palette = [
  { name: 'Amber', hex: '#FFA500', hsl: '39 100% 50%', role: 'The accent. One word per headline, buttons, eyebrow labels', swatch: 'bg-[#FFA500]' },
  { name: 'Ink', hex: '#1A1715', hsl: '30 9% 9%', role: 'Dark background', swatch: 'bg-[#1A1715]' },
  { name: 'Card', hex: '#25211E', hsl: '36 9% 13%', role: 'Glass card base (70 % + blur)', swatch: 'bg-[#25211E]' },
  { name: 'Parchment', hex: '#FAF8F4', hsl: '36 38% 97%', role: 'Light background', swatch: 'bg-[#FAF8F4]' },
  { name: 'Muted', hex: '#ABA69E', hsl: '36 7% 64%', role: 'Secondary text on dark', swatch: 'bg-[#ABA69E]' },
  { name: 'Amber (on light)', hex: '#BE6A04', hsl: '—', role: 'Accent text on light backgrounds', swatch: 'bg-[#BE6A04]' },
  { name: 'Incoming', hex: '#10B981', hsl: '—', role: 'Positive / received / synced', swatch: 'bg-[#10B981]' },
  { name: 'Outgoing', hex: '#EF4444', hsl: '—', role: 'Negative / sent / errors', swatch: 'bg-[#EF4444]' },
];

const legacy = [
  { name: 'Grey', hex: '#808080', swatch: 'bg-[#808080]' },
  { name: 'Neon Cyan', hex: '#00F0FF', swatch: 'bg-[#00F0FF]' },
  { name: 'Black', hex: '#000000', swatch: 'bg-black' },
];

export default function BrandingPage() {
  return (
    <>
      <PageHero
        eyebrow="Branding"
        title={
          <>
            The look of <Amber>privacy.</Amber>
          </>
        }
        intro="Logos, colours and fonts for anyone writing about Conceal or building on it. Dark, warm backgrounds. Quiet text. Amber for one word per headline and nothing else. If in doubt, use less."
      />

      <Section className="pt-0" eyebrow="Logo" title="The mark, and the coin.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid grid-cols-2 gap-4">
            <div className="glass flex aspect-square items-center justify-center bg-black p-8">
              <Image src={asset('/brand/logo.svg')} alt="Conceal logo on black" width={160} height={160} />
            </div>
            <div className="flex aspect-square items-center justify-center rounded-xl border border-border/60 bg-white p-8">
              <Image src={asset('/brand/logo.svg')} alt="Conceal logo on white" width={160} height={160} />
            </div>
            <div className="glass col-span-2 flex items-center justify-center overflow-hidden bg-black p-0">
              <Image src={asset('/brand/conceal-coin.png')} alt="Conceal coin render with amber edge" width={420} height={420} className="coin-hero" />
            </div>
          </div>
          <Glass>
            <p className="eyebrow">Downloads</p>
            <ul className="mt-4 divide-y divide-border/60">
              {logos.map((l) => (
                <li key={l.href}>
                  <a href={asset(l.href)} download={l.file} className="flex items-center justify-between py-3 text-sm hover:text-amber">
                    <span>{l.label}</span>
                    <Download size={14} className="text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Leave clear space around the logo at least as wide as the mark itself. Don&rsquo;t recolour it, outline it, tilt it or put a glow on it. The amber edge belongs to the coin render and stays there.
            </p>
          </Glass>
        </div>
      </Section>

      <Section eyebrow="Colour" title={<>Amber on warm <Bold>greys.</Bold></>} intro="One accent colour, used sparingly, on backgrounds that are warm rather than pure black. The web wallet uses exactly these values, so anything built with them will match.">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {palette.map((c) => (
            <Glass as="li" key={c.name} className="p-3">
              <div className={`h-20 rounded-lg border border-border/40 ${c.swatch}`} />
              <p className="mt-3 font-medium">{c.name}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {c.hex}
                {c.hsl !== '—' && ` · hsl(${c.hsl})`}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{c.role}</p>
            </Glass>
          ))}
        </ul>
        <details className="mt-6 text-sm text-muted-foreground">
          <summary className="cursor-pointer">Legacy palette (pre-2026 website)</summary>
          <ul className="mt-3 flex flex-wrap gap-3">
            {legacy.map((c) => (
              <li key={c.name} className="flex items-center gap-2">
                <span className={`inline-block h-5 w-5 rounded border border-border/60 ${c.swatch}`} />
                {c.name} <span className="font-mono">{c.hex}</span>
              </li>
            ))}
          </ul>
        </details>
      </Section>

      <Section eyebrow="Type" title="Geist for words, Geist Mono for numbers.">
        <div className="grid gap-4 md:grid-cols-2">
          <Glass>
            <p className="eyebrow">Geist · headlines & UI</p>
            <p className="mt-4 text-4xl font-light tracking-tight">
              Quietly <Amber>private.</Amber>
              <br />
              Patiently <Bold>yours.</Bold>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Headlines are big and light, with one word in amber and one in bold. Body text is regular weight and never grey-on-grey.</p>
          </Glass>
          <Glass>
            <p className="eyebrow">Geist Mono · numbers, hashes, labels</p>
            <p className="mt-4 font-mono text-3xl">
              48,250.00 <span className="text-base text-amber">CCX</span>
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">ccx7Mi9osGEi…LRo · last block 2m ago</p>
            <p className="mt-4 text-sm text-muted-foreground">Amounts, addresses, hashes, timestamps and the small uppercase labels are all set in mono. If it is a value rather than a sentence, it is mono.</p>
          </Glass>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          For print and long documents the older brand fonts still apply:{' '}
          <a href="https://fonts.google.com/specimen/Poppins" className="text-amber underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            Poppins
          </a>
          ,{' '}
          <a href="https://fonts.google.com/specimen/Lora" className="text-amber underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            Lora
          </a>{' '}
          and{' '}
          <a href="https://fonts.google.com/specimen/Montserrat" className="text-amber underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            Montserrat
          </a>
          .
        </p>
      </Section>

      <Section>
        <blockquote className="glass border-l-4 border-l-primary p-8 text-xl font-light leading-relaxed md:text-2xl">
          “Arguing that you don&rsquo;t care about privacy because you have nothing to hide is no different from saying you don&rsquo;t care about freedom of speech because you have nothing to say.”
        </blockquote>
      </Section>
    </>
  );
}
