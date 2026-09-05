import type { Metadata } from 'next';
import Image from 'next/image';
import { Download, ExternalLink } from 'lucide-react';
import { Amber, ArrowLink, Bold, Notice, PageHero, PillLink, Section } from '@/components/ui';
import { docs } from '@/content/site';
import { wallets } from '@/content/wallets';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Wallets',
  description: 'Conceal Desktop, Core, Web, Mobile and Paper wallets — all open source, all keep your keys on your device.',
};

export default function WalletsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wallets"
        title={
          <>
            One network. <Amber>Five</Amber> ways in. Your keys <Bold>every time.</Bold>
          </>
        }
        intro="Every Conceal wallet is open source and client-side. Your seed is generated on your device and never transmitted. Pick the one that fits how you use CCX."
        actions={
          <>
            <PillLink href="https://wallet.conceal.network">Open web wallet</PillLink>
            <ArrowLink href={docs('/start-here/choose-a-wallet')}>Help me choose</ArrowLink>
          </>
        }
      />

      <Section className="pt-0">
        <Notice>
          <strong>Back up your seed before you send anything.</strong> Nobody — including the Conceal team — can recover a wallet without it. Staff will never ask for your seed phrase, private keys or wallet password.{' '}
          <a href={docs('/backup-and-security')} className="text-amber underline underline-offset-4" target="_blank" rel="noopener noreferrer">
            Backup & security guide
          </a>
        </Notice>

        <div className="mt-12 space-y-8">
          {wallets.map((w, i) => (
            <article key={w.id} id={w.id} className="glass grid gap-8 overflow-hidden p-6 md:grid-cols-2 md:p-8 scroll-mt-24">
              <div className={i % 2 ? 'md:order-2' : ''}>
                <p className="eyebrow">{w.kind}</p>
                <h2 className="mt-3 text-2xl font-medium md:text-3xl">{w.name}</h2>
                <p className="mt-4 text-muted-foreground">{w.summary}</p>
                <p className="mt-3 text-sm">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Best for</span>
                  <span className="mt-1 block">{w.bestFor}</span>
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {w.downloads.map((d) => (
                    <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" className="pill-ghost text-sm">
                      {d.platform === 'web' ? <ExternalLink size={14} /> : <Download size={14} />}
                      {d.label}
                    </a>
                  ))}
                </div>
                <ArrowLink href={w.docsHref} className="mt-5 text-sm">
                  {w.name} guide
                </ArrowLink>
              </div>
              <div className={`flex items-center justify-center ${i % 2 ? 'md:order-1' : ''}`}>
                {w.image ? (
                  <Image src={asset(w.image)} alt={w.imageAlt ?? w.name} width={640} height={400} className="rounded-lg border border-border/60" />
                ) : (
                  <div className="flex h-48 w-full items-center justify-center rounded-lg border border-dashed border-border/70 font-mono text-xs text-muted-foreground">
                    {w.id === 'mobile' ? 'Android · F-Droid · APK' : 'Offline · print & store'}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Verify" title="Check what you download.">
        <p className="max-w-2xl text-muted-foreground">
          Releases are published on GitHub under the ConcealNetwork organisation. Verify checksums and signatures before installing, and only download from links on this site, the docs, or the official GitHub releases.
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <ArrowLink href={docs('/releases-and-verification')}>Releases & verification</ArrowLink>
          <ArrowLink href={docs('/wallets/update-and-move')}>Update or move a wallet</ArrowLink>
        </div>
      </Section>
    </>
  );
}
