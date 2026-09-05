import type { Metadata } from 'next';
import Image from 'next/image';
import { Amber, ArrowLink, Bold, Container, Glass, PageHero, PillLink, Section } from '@/components/ui';
import { DOCS_URL, docs, networkFacts } from '@/content/site';
import { formatNumber } from '@/lib/format';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'About',
  description: 'What Conceal is, why it exists, and how a community-run privacy network works without a company behind it.',
};

const pillars = [
  {
    title: 'Vision',
    body: 'Conceal envisions a future where privacy is not a luxury but a fundamental human right, especially in the digital realm. Inspired by the Cypherpunk Manifesto, Conceal is dedicated to building anonymous systems and defending privacy with cryptography — empowering individuals with tools that let them resist surveillance and keep control over their own data.',
  },
  {
    title: 'Mission',
    body: 'To provide a privacy-focused cryptocurrency that embodies the principles of the Cypherpunk movement. By leveraging advanced cryptographic techniques, Conceal ensures every transaction is private, secure and censorship-resistant, in a decentralised financial ecosystem where users have full control over their funds.',
  },
  {
    title: 'Privacy by design',
    body: "Conceal's privacy design is rooted in the Cypherpunk ethos: anonymity, decentralisation and cryptographic privacy. Unique one-time addresses for every payment make transactions unlinkable and untraceable; ring signatures make it virtually impossible for third parties to monitor or track them.",
  },
  {
    title: 'Community & development',
    body: 'At the heart of Conceal is a vibrant community dedicated to preserving privacy and advancing the Cypherpunk agenda. Our developers write code that defends privacy and empowers users, following the tradition of publishing open-source software for the benefit of all. Decentralisation is a social movement as much as a technical concept.',
  },
  {
    title: 'Decentralisation & resistance',
    body: 'Conceal is more than a cryptocurrency; it is a symbol of resistance against centralised control and surveillance. No single entity or authority can dictate the rules or monitor transactions. We stand firm in our commitment to decentralisation, empowering individuals to take back control of their financial sovereignty.',
  },
  {
    title: 'Join the privacy revolution',
    body: 'In a world where privacy is increasingly under threat, Conceal offers a beacon of hope for those who value freedom, anonymity and privacy. Join us in building a more private and secure future, where people transact freely without fear of censorship or surveillance.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Conceal"
        title={
          <>
            Privacy-protected <Amber>DeFi</Amber> and encrypted <Bold>communications.</Bold>
          </>
        }
        intro="Conceal gives individuals the ability to communicate and interact financially in a private, anonymous and decentralised way — without a central authority."
        actions={
          <>
            <PillLink href="/wallets">Use Conceal</PillLink>
            <ArrowLink href="/manifesto">Read the manifesto</ArrowLink>
          </>
        }
      />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px]">
          <div className="prose-site max-w-2xl">
            <h2 className="text-2xl font-medium">What is Conceal?</h2>
            <p className="mt-4">
              Conceal is a decentralised privacy-protected network designed for DeFi and encrypted communications. It offers protocol-level private transactions, blockchain deposits and on-chain encrypted messages without a central authority.
            </p>
            <p>Conceal is censorship-resistant and accessible by anyone regardless of geographic location or status. All interactions, transactions and messages are private and untraceable.</p>
            <p>Conceal is powered by open-source code, community-driven and truly decentralised.</p>
            <p className="text-xl text-foreground">No one owns Conceal. Everyone can take part.</p>
          </div>
          <Glass>
            <p className="eyebrow">Network at a glance</p>
            <dl className="mt-4 divide-y divide-border/60 font-mono text-sm">
              {[
                ['Ticker', networkFacts.ticker],
                ['Consensus', `${networkFacts.consensus} · ${networkFacts.algorithm}`],
                ['Max supply', `${formatNumber(networkFacts.maxSupply)} CCX`],
                ['Decimals', String(networkFacts.decimals)],
                ['Block target', `${networkFacts.blockTargetSeconds} s`],
                ['Base block reward', `${networkFacts.baseReward} CCX`],
                ['Mainnet', '23 May 2018'],
                ['Licence', networkFacts.licence],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <ArrowLink href={docs('/network-and-ccx')} className="mt-4 text-sm">
              Network & CCX reference
            </ArrowLink>
          </Glass>
        </div>
      </Section>

      <Section eyebrow="Principles" title={<>Why we <Amber>build</Amber> it this way.</>}>
        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <Glass key={p.title}>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Glass>
          ))}
        </div>
      </Section>

      <Section>
        <Container className="px-0">
          <div className="glass flex flex-col items-center gap-8 p-8 md:flex-row md:p-12">
            <Image src={asset('/images/chameleon.png')} alt="The Conceal chameleon mascot" width={180} height={180} className="shrink-0" />
            <div>
              <h2 className="text-2xl font-light md:text-3xl">
                Why a <Bold>chameleon</Bold>?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Conceal Network powers CCX, an open-source, privacy-protected digital cash system that mimics physical cash: nobody knows where you store or spend it. All transactions, deposits and messages are untraceable and tamper-proof, operating with no central authority through cryptographic protocols — which makes the chameleon a mascot of choice.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <ArrowLink href={DOCS_URL}>Documentation</ArrowLink>
                <ArrowLink href="/team">Meet the team</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
