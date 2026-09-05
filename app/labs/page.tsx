import type { Metadata } from 'next';
import { Coins, Lightbulb, ListChecks, Rocket } from 'lucide-react';
import { GithubIcon } from '@/components/icons/brand';
import { ScreenshotStrip } from '@/components/screenshot-strip';
import { Amber, ArrowLink, Glass, PageHero, PillLink, Section } from '@/components/ui';
import { APPLY_URL, labProjects } from '@/content/labs';

export const metadata: Metadata = {
  title: 'Conceal Labs',
  description: 'Conceal Labs funds developers, entrepreneurs and creators building on Conceal. See funded projects and apply.',
};

const steps = [
  { icon: Lightbulb, title: 'Have an idea?', body: 'Do you have a project that involves Conceal in some way? We want to hear about it.' },
  { icon: Coins, title: 'Would money help?', body: 'Sometimes money is just what it takes to get an idea off the ground.' },
  { icon: Rocket, title: 'Get funded', body: 'Our creators set aside funds for the community to use for projects.' },
  { icon: ListChecks, title: 'Get listed', body: 'Get funded by us and we will list your project here on the website.' },
];

export default function LabsPage() {
  return (
    <>
      <PageHero
        eyebrow="Conceal Labs"
        title={
          <>
            Bring your dreams <Amber>forward.</Amber>
          </>
        }
        intro="We strive to grow a broad ecosystem by supporting the community. Conceal Labs gives developers, entrepreneurs and creators the jump-start they need to make a vision a reality."
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

      <Section id="projects" eyebrow="Projects" title="Built with Labs funding.">
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
