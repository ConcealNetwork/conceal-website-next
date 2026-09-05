import type { Metadata } from 'next';
import { Coins, Lightbulb, ListChecks, Rocket } from 'lucide-react';
import { GithubIcon } from '@/components/icons/brand';
import { ScreenshotStrip } from '@/components/screenshot-strip';
import { Amber, ArrowLink, Glass, PageHero, PillLink, Section } from '@/components/ui';
import { APPLY_URL, labProjects } from '@/content/labs';

export const metadata: Metadata = {
  title: 'Conceal Labs',
  description: 'Conceal Labs pays CCX for community software that uses the chain. Three projects so far. How to pitch yours.',
};

const steps = [
  { icon: Lightbulb, title: 'Pitch it', body: 'Anything that uses Conceal counts: a wallet feature, a game, a merchant tool, a node dashboard. Describe it in the Labs channel on Discord.' },
  { icon: Coins, title: 'Ask for what it needs', body: 'Say how much CCX would get it built and roughly how long. Small and concrete beats large and vague.' },
  { icon: Rocket, title: 'Build it', body: 'If the team agrees, funds are released as the work lands. The code has to be open source.' },
  { icon: ListChecks, title: 'Get listed', body: 'Finished projects go on this page with download links, screenshots and your name on them.' },
];

export default function LabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Conceal Labs"
        title={
          <>
            Got an idea? We might <Amber>pay</Amber> for it.
          </>
        }
        intro="Conceal Labs is a small pot of CCX set aside by the project for community-built software. Pitch something that uses the chain, and if the team likes it, you get funded and listed here. Three projects have shipped so far."
        actions={
          <>
            <PillLink href={APPLY_URL}>Apply on Discord</PillLink>
            <ArrowLink href="#projects">See funded projects</ArrowLink>
          </>
        }
      />

      <Section className="pt-0">
        <ol className="grid gap-4 md:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <Glass as="li" key={title}>
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-amber">
                  <Icon size={18} />
                </span>
                <span className="keycap inline-flex h-7 w-7 items-center justify-center font-mono text-xs">{i + 1}</span>
              </div>
              <h2 className="mt-4 font-medium">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </Glass>
          ))}
        </ol>
      </Section>

      <Section id="projects" eyebrow="Projects" title="What has been built so far.">
        <div className="space-y-10">
          {labProjects.map((p) => (
            <article key={p.id} id={p.id} className="grid gap-8 scroll-mt-24 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h3 className="text-2xl font-medium md:text-3xl">{p.name}</h3>
                <div className="prose-site mt-4">
                  {p.summary.map((s, i) => (
                    <p key={i}>{s}</p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="pill-ghost text-sm">
                      {l.kind === 'github' && <GithubIcon width={14} height={14} />}
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <ScreenshotStrip images={p.screenshots} alt={p.name} />
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
