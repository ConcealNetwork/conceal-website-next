import type { Metadata } from 'next';
import Image from 'next/image';
import { GithubIcon, XIcon } from '@/components/icons/brand';
import { Amber, ArrowLink, Bold, Glass, PageHero, PillLink, Section } from '@/components/ui';
import { DISCORD_URL } from '@/content/site';
import { team } from '@/content/team';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Team',
  description: 'The nine volunteers who write the code, answer the tickets and run the servers. There is no company behind them.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={
          <>
            Nine people, <Amber>no</Amber> payroll.
          </>
        }
        intro="Everyone below is a volunteer who turned up in the community and stayed. Some write Core, some answer support tickets, some argue on Twitter. None of them are employed by Conceal, because there is no Conceal to be employed by."
      />

      <Section className="pt-0">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <Glass as="li" key={m.name} className="flex flex-col">
              <div className="flex items-center gap-4">
                <span className="relative inline-flex h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/50">
                  <Image src={asset(m.image)} alt="" width={64} height={64} className="h-full w-full object-cover" />
                </span>
                <div>
                  <h2 className="font-medium">{m.name}</h2>
                  <p className="eyebrow mt-1">{m.role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              {(m.github || m.x) && (
                <div className="mt-4 flex gap-2">
                  {m.github && (
                    <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on GitHub`} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:text-foreground">
                      <GithubIcon width={14} height={14} />
                    </a>
                  )}
                  {m.x && (
                    <a href={m.x} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on X`} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:text-foreground">
                      <XIcon width={14} height={14} />
                    </a>
                  )}
                </div>
              )}
            </Glass>
          ))}
        </ul>
      </Section>

      <Section eyebrow="How it works" title="A DAO, which means a Discord and some rules.">
        <div className="prose-site max-w-3xl">
          <p>
            There is no legal entity. Decisions get proposed in the team channels, argued about, and voted on. Whoever has the skill for a task picks it up: Core changes go to the developers, community questions to the community leads, and infrastructure to whoever is awake when it breaks. That last one happens more than we would like.
          </p>
          <p>
            The team is spread across enough time zones that a live meeting is rare. Most coordination is asynchronous and written down, which turns out to be a decent way to run a project nobody is paid for. If you want in, the bar is simple: show up, do useful work for a while, and someone will ask you to join.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <PillLink href={DISCORD_URL}>Say hello on Discord</PillLink>
          <ArrowLink href="/labs">Get funded through Labs</ArrowLink>
        </div>
      </Section>
    </>
  );
}
