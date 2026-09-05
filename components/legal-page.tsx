import { Container, PageHero } from '@/components/ui';
import type { LegalSection } from '@/content/legal';

export function LegalPage({ eyebrow, title, intro, sections, reviewed }: { eyebrow: string; title: string; intro?: string; sections: LegalSection[]; reviewed: string }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <Container className="pb-8">
        <p className="font-mono text-xs text-muted-foreground">Last reviewed {reviewed}</p>
        <div className="mt-8 max-w-3xl space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-medium">{s.title}</h2>
              <div className="prose-site mt-3 text-sm">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
