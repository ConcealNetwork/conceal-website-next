import type { Metadata } from 'next';
import Image from 'next/image';
import { Amber, Container, PageHero } from '@/components/ui';
import { manifesto } from '@/content/manifesto';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: "Concealer's Manifesto",
  description: 'Privacy is not a privilege. It is a right. The principles that guide the Concealers.',
};

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        eyebrow="Manifesto"
        title={
          <>
            The Concealer&rsquo;s <Amber>Manifesto</Amber>
          </>
        }
        intro="Inheritors of the Cypherpunk legacy, carrying its fire into the present and the future."
      />
      <Container className="pb-16">
        <Image
          src={asset('/images/manifesto/privacy_cypherpunk.png')}
          alt="Privacy — cypherpunk illustration"
          width={1200}
          height={600}
          className="glass w-full object-cover p-0"
          priority
        />
      </Container>
      <Container>
        <ol className="mx-auto max-w-3xl space-y-14 pb-8">
          {manifesto.map((block, i) => (
            <li key={block.title} className="grid gap-6 md:grid-cols-[3rem_1fr]">
              <span className="keycap inline-flex h-10 w-10 items-center justify-center font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{block.title}</h2>
                <div className="prose-site mt-4 text-lg">
                  {block.paragraphs.map((p, j) => (
                    <p key={j}>{renderInline(p)}</p>
                  ))}
                </div>
                {block.image && (
                  <Image src={asset(block.image)} alt={block.imageAlt ?? ''} width={800} height={450} className="glass mt-6 w-full p-0" />
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
