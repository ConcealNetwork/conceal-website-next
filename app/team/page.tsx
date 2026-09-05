import type { Metadata } from 'next';
import Image from 'next/image';
import { GithubIcon, XIcon } from '@/components/icons/brand';
import { Amber, ArrowLink, Bold, Glass, PageHero, PillLink, Section } from '@/components/ui';
import { DISCORD_URL } from '@/content/site';
import { team } from '@/content/team';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Team',
  description: 'The volunteers who develop, support and grow Conceal — organised as a DAO with no company or legal entity behind it.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={
          <>
            <Amber>Alone</Amber> we can do so little; <Bold>together</Bold> we can do so much.
          </>
        }
        intro="The Conceal team is a group of dedicated volunteers from the community who have committed time and energy to the development, marketing and community-building of the network."
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

      <Section eyebrow="How we work" title="A DAO, not a company.">
        <div className="prose-site max-w-3xl">
          <p>
            Conceal team members operate as a DAO — a decentralised autonomous organisation. Each member takes on the tasks they can specialise in, voluntarily and without any third party or legal body. To organise day-to-day operations, the team has created divisions with separate responsibilities so members can specialise in the overall development and growth of the network.
          </p>
          <p>
            Team members are spread across many geographical locations, which makes organising events and online gatherings tricky — but not impossible. Anyone can join as long as they are willing to commit time to the Conceal ecosystem and have the skills to help it succeed.
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
