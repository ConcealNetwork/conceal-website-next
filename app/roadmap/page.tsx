import type { Metadata } from 'next';
import { Amber, Bold, PageHero, Section } from '@/components/ui';
import { roadmap, type MilestoneStatus } from '@/content/roadmap';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'Eight years of shipped milestones and what comes next for Conceal Core, wallets and Labs.',
};

const statusLabel: Record<MilestoneStatus, string> = { done: 'Shipped', 'in-progress': 'In progress', planned: 'Planned' };
const statusClass: Record<MilestoneStatus, string> = {
  done: 'bg-incoming',
  'in-progress': 'bg-primary',
  planned: 'bg-muted-foreground',
};

export default function RoadmapPage() {
  const done = roadmap.filter((m) => m.status === 'done');
  const next = roadmap.filter((m) => m.status !== 'done');

  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title={
          <>
            Eight years <Amber>shipped.</Amber> Three more <Bold>planned.</Bold>
          </>
        }
        intro="Mainnet went live on 23 May 2018. Everything since is listed below with the quarter it landed. The future dates are guesses by volunteers with day jobs; treat them accordingly."
      />

      <Section className="pt-0" eyebrow="Ahead" title="Being worked on now.">
        <Timeline items={next} />
      </Section>

      <Section eyebrow="Shipped" title={`${done.length} milestones since 2018.`}>
        <Timeline items={done.slice().reverse()} />
      </Section>
    </>
  );
}

function Timeline({ items }: { items: typeof roadmap }) {
  return (
    <ol className="relative ml-2 border-l border-border/70 pl-8">
      {items.map((m, i) => (
        <li key={`${m.date}-${m.title}-${i}`} className="relative pb-8 last:pb-0">
          <span className={`absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-background ${statusClass[m.status]}`} aria-hidden />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-xs text-amber">{m.date}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{statusLabel[m.status]}</span>
          </div>
          <h3 className="mt-1 text-lg font-medium">
            {m.href ? (
              <a href={m.href} target="_blank" rel="noopener noreferrer" className="hover:text-amber">
                {m.title} ↗
              </a>
            ) : (
              m.title
            )}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{m.description}</p>
        </li>
      ))}
    </ol>
  );
}
