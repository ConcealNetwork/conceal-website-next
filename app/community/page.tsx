import type { Metadata } from 'next';
import { ShoppingBag } from 'lucide-react';
import { socialIcons } from '@/components/icons/brand';
import { Amber, ArrowLink, Bold, PageHero, PillLink, Section } from '@/components/ui';
import { DISCORD_URL, SUPPORT_URL, socials } from '@/content/site';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Official Conceal channels: Discord, Telegram, X, YouTube, Medium, Substack, GitHub, BitcoinTalk and the marketplace.',
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={
          <>
            Improving the world <Amber>together.</Amber>
          </>
        }
        intro="Conceal has a thriving community of people sharing ideas, working together and helping each other regardless of where they are in their blockchain journey. What are you waiting for?"
        actions={
          <>
            <PillLink href={DISCORD_URL}>Join the Discord</PillLink>
            <ArrowLink href={SUPPORT_URL}>Need help? Open a ticket</ArrowLink>
          </>
        }
      />

      <Section className="pt-0" eyebrow="Official channels" title={<>Only trust <Bold>these</Bold> links.</>} intro="Impersonation is the most common scam in crypto communities. Staff will never DM you first, and will never ask for your seed phrase, keys or password.">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s) => {
            const Icon = socialIcons[s.id] ?? ShoppingBag;
            return (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="glass flex items-center gap-4 p-4 transition hover:border-primary/40">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-amber">
                    <Icon width={18} height={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium">{s.label}</span>
                    <span className="block truncate font-mono text-xs text-muted-foreground">{s.href.replace(/^https?:\/\//, '')}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section eyebrow="Trade & markets" title="Looking for exchanges?">
        <p className="max-w-2xl text-muted-foreground">Exchange listings, market-data sites and DEX pairs for wrapped CCX now live on one page together with mining.</p>
        <div className="mt-5">
          <ArrowLink href="/get-ccx#buy">Get CCX — buy & swap</ArrowLink>
        </div>
      </Section>
    </>
  );
}
