import type { Metadata } from 'next';
import { ShoppingBag } from 'lucide-react';
import { socialIcons } from '@/components/icons/brand';
import { Amber, ArrowLink, Bold, PageHero, PillLink, Section } from '@/components/ui';
import { DISCORD_URL, SUPPORT_URL, socials } from '@/content/site';

export const metadata: Metadata = {
  title: 'Community',
  description: 'The official Conceal channels, and how to spot the impersonators. Discord is where most of the work happens.',
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={
          <>
            Where the <Amber>work</Amber> happens.
          </>
        }
        intro="Conceal has no office. Discord is the office. Bug reports, release announcements, wallet help and arguments about the roadmap all happen in the channels below, in public, most hours of the day."
        actions={
          <>
            <PillLink href={DISCORD_URL}>Join the Discord</PillLink>
            <ArrowLink href={SUPPORT_URL}>Need help? Open a ticket</ArrowLink>
          </>
        }
      />

      <Section className="pt-0" eyebrow="Official channels" title={<>Only trust <Bold>these</Bold> links.</>} intro="The most common scam we see is someone copying a team member's name and avatar, then DMing new arrivals. Nobody from Conceal will message you first, and nobody will ever ask for your seed, keys or password. If it happens, screenshot it and post it in the server.">
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

      <Section eyebrow="Trade" title="Looking for exchanges?">
        <p className="max-w-2xl text-muted-foreground">Exchanges, price trackers and the wCCX DEX pairs moved to the Get CCX page, next to the mining instructions.</p>
        <div className="mt-5">
          <ArrowLink href="/get-ccx#buy">Get CCX: buy and swap</ArrowLink>
        </div>
      </Section>
    </>
  );
}
