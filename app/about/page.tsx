import type { Metadata } from 'next';
import Image from 'next/image';
import { Amber, ArrowLink, Bold, Container, Glass, PageHero, PillLink, Section } from '@/components/ui';
import { DOCS_URL, docs, networkFacts } from '@/content/site';
import { formatNumber } from '@/lib/format';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'About',
  description: 'What Conceal is, how ring signatures and one-time addresses hide a payment, and why there is deliberately no company behind it.',
};

const pillars = [
  {
    title: 'What we think privacy is',
    body: 'A right, not a feature you pay extra for. The Cypherpunk Manifesto put it plainly in 1993: privacy is the power to selectively reveal yourself to the world. Conceal exists because most digital money gives you no such power. Every transaction is public forever, and the people watching are not your friends.',
  },
  {
    title: 'What the software does about it',
    body: 'It uses the cryptography that already works. Ring signatures hide which output was spent. One-time addresses mean a payment cannot be linked to the address you published. Messages are encrypted to the recipient before they touch the chain. None of this is new research; it is careful use of tools that have been reviewed for a decade.',
  },
  {
    title: 'Why there is no company',
    body: 'A company can be bought, sued or told to add a back door. Conceal has none. The code is MIT licensed, the roadmap is argued out on Discord and GitHub, and the people doing the work are volunteers who could stop tomorrow. That is a real weakness, and we would rather have it than the alternative.',
  },
  {
    title: 'Why proof of work',
    body: 'Every CCX in existence was mined. There was no premine, no sale, no allocation to founders. The mining algorithm has been changed three times to keep ASICs out, most recently to CN-GPU in 2020, so an ordinary graphics card is still a competitive miner.',
  },
  {
    title: 'What we ask of you',
    body: 'Run the software. Read the code if you can. Back up your seed, because nobody can restore it for you. Tell us when something is broken. If you write code, the repos are open and the reviews are honest.',
  },
  {
    title: 'What we will not do',
    body: 'Sell your data, because we never have it. Promise a price. Ask for your seed phrase, ever, under any circumstances. If someone claiming to be from Conceal does, they are lying to you.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Conceal"
        title={
          <>
            A blockchain that keeps its <Amber>mouth</Amber> shut.
          </>
        }
        intro="Conceal is a proof-of-work cryptocurrency, launched in May 2018, that hides who paid whom. It also carries encrypted messages and pays interest on locked deposits. No company runs it."
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
            <h2 className="text-2xl font-medium">What it is</h2>
            <p className="mt-4">
              Conceal is a CryptoNote-family blockchain, the same lineage as Monero. Privacy is in the protocol, not bolted on: every transaction uses ring signatures and one-time addresses, so an observer sees that a transaction happened but not who sent it, who received it, or how much moved between them.
            </p>
            <p>On top of the ledger sit two things most chains don&rsquo;t have. Deposits lock coins for a fixed term and pay interest from the block reward. Messages travel inside transactions, encrypted so only the recipient can read them, with an optional self-destruct timer.</p>
            <p>The code is open source under the MIT licence. Anyone can run a node, mine a block, or send a pull request. No one has to ask permission, and no one can be refused.</p>
            <p className="text-xl text-foreground">Nobody owns Conceal. That is the point.</p>
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

      <Section eyebrow="Principles" title={<>Why it is built <Amber>this</Amber> way.</>}>
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
                Cash doesn&rsquo;t remember where it has been. CCX is meant to work the same way. The chameleon has been the mascot since 2018 because it blends in without hiding, which is a fair description of what a good privacy coin does. It is also, frankly, a nicer logo than a padlock.
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
