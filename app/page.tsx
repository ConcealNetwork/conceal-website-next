import Image from 'next/image';
import { Coins, KeyRound, Lock, MessageSquareLock, Pickaxe, Repeat, ShoppingCart } from 'lucide-react';
import { NetworkStatusCard } from '@/components/network-status-card';
import { PriceStrip } from '@/components/price-strip';
import { Amber, ArrowLink, Bold, Container, Eyebrow, Glass, GhostLink, PillLink, Section } from '@/components/ui';
import { partners } from '@/content/markets';
import { BRIDGE_URL, DISCORD_URL, DOCS_URL, EXPLORER_URL, MARKETPLACE_URL, PAPER_WALLET_URL, SUPPORT_URL, WALLET_URL, docs, networkFacts } from '@/content/site';
import { wallets } from '@/content/wallets';
import { asset } from '@/lib/assets';

const features = [
  {
    icon: Lock,
    title: 'Untraceable transactions',
    body: 'One-time addresses and ring signatures make every payment unlinkable. Nobody knows where you store or spend your CCX.',
  },
  {
    icon: MessageSquareLock,
    title: 'Encrypted messaging',
    body: 'End-to-end encrypted messages carried by the blockchain itself, with optional self-destruct. No server in the middle.',
  },
  {
    icon: Coins,
    title: 'Deposits that earn',
    body: 'Lock CCX on-chain for one to twelve months and earn interest paid by the protocol — decentralised, egalitarian cold staking.',
  },
  {
    icon: KeyRound,
    title: 'Keys never leave your device',
    body: 'Every wallet is open source and client-side. Your seed is generated locally and never transmitted.',
  },
];

const ecosystem = [
  { name: 'Web wallet', href: WALLET_URL, body: 'Client-side wallet in the browser.' },
  { name: 'Explorer', href: EXPLORER_URL, body: 'Blocks, transactions, pools and network stats.' },
  { name: 'Bridge', href: BRIDGE_URL, body: 'Swap CCX to wCCX on Ethereum, BNB Chain and Polygon.' },
  { name: 'Paper wallet', href: PAPER_WALLET_URL, body: 'Generate offline keys to print and store.' },
  { name: 'Marketplace', href: MARKETPLACE_URL, body: 'Buy and sell peer-to-peer with CCX.' },
  { name: 'Docs', href: DOCS_URL, body: 'Guides for wallets, nodes, mining and the API.' },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="pointer-events-none absolute -right-40 top-10 hidden h-[760px] w-[760px] md:block lg:-right-24" aria-hidden>
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#ffa50026_0%,transparent_62%)]" />
          <Image src={asset('/brand/conceal-coin.png')} alt="" width={760} height={760} priority className="coin-hero coin-float select-none" />
        </div>
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow className="mb-6">Conceal Network</Eyebrow>
              <h1 className="text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
                Private <Amber>money.</Amber>
                <br />
                Encrypted <Bold>words.</Bold>
              </h1>
              <p className="mt-7 max-w-xl text-lg text-muted-foreground md:text-xl">
                A community-run network where untraceable payments, on-chain encrypted messages and interest-earning deposits belong to you alone. Open source. No company. No one in charge.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <PillLink href="/wallets">Get a wallet</PillLink>
                <ArrowLink href={DOCS_URL}>Read the docs</ArrowLink>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border/60 pt-6 font-mono text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Since</dt>
                  <dd className="mt-1">May 2018</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Consensus</dt>
                  <dd className="mt-1">PoW · CN-GPU</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Max supply</dt>
                  <dd className="mt-1">200M CCX</dd>
                </div>
              </dl>
            </div>
            <div className="md:hidden">
              <Image src={asset('/brand/conceal-coin.png')} alt="" width={360} height={360} className="coin-hero mx-auto" />
            </div>
            <NetworkStatusCard className="relative lg:ml-auto lg:w-[420px]" />
          </div>
        </Container>
      </section>

      <Section eyebrow="Why Conceal" title={<>Quiet by design. <Bold>Yours</Bold> by default.</>}>
        <ul className="grid gap-4 md:grid-cols-2">
          {features.map(({ icon: Icon, title, body }) => (
            <Glass as="li" key={title}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-amber">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Glass>
          ))}
        </ul>
      </Section>

      <Section
        id="wallets"
        eyebrow="Wallets"
        title={<>One network. <Amber>Five</Amber> ways in.</>}
        intro="Every Conceal wallet is open source and keeps your keys on your device. Pick the one that fits how you use CCX."
      >
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {wallets.map((w) => (
            <Glass as="li" key={w.id} className="flex flex-col">
              <p className="eyebrow">{w.kind}</p>
              <h3 className="mt-3 text-xl font-medium">{w.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{w.bestFor}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {w.downloads.slice(0, 3).map((d) => (
                  <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" className="pill-ghost px-3.5 py-1.5 text-xs">
                    {d.label}
                  </a>
                ))}
              </div>
            </Glass>
          ))}
          <li className="flex flex-col justify-center rounded-xl border border-dashed border-border/70 p-6">
            <p className="text-sm text-muted-foreground">Not sure which one?</p>
            <ArrowLink href={docs('/start-here/choose-a-wallet')} className="mt-2 text-foreground">
              Choose a wallet guide
            </ArrowLink>
            <ArrowLink href="/wallets" className="mt-2 text-foreground">
              Compare all wallets
            </ArrowLink>
          </li>
        </ul>
      </Section>

      <Section
        id="earn"
        eyebrow="Earn"
        title={<>Deposits paid by the <Amber>protocol</Amber>, not a platform.</>}
        intro="Lock CCX on-chain for a term you choose and earn interest — up to 6 % APR for twelve-month deposits at the highest tier. No custodian, no counterparty."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="glass p-6">
            <p className="eyebrow">Term deposit · example</p>
            <p className="mt-4 font-mono text-4xl">
              20,000 <span className="text-base text-amber">CCX</span>
            </p>
            <div className="mt-4 flex items-center justify-between font-mono text-sm">
              <span>12 months</span>
              <span className="text-amber">6.00 % APR</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-primary to-wallet-amber" />
            </div>
            <div className="mt-2 flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>interest at maturity</span>
              <span className="text-incoming">+1,200.00 CCX</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Three tiers by principal; every extra month of term adds 0.1 % APR.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Funds are cold-staked on the blockchain and returned automatically at maturity.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Available in Conceal Desktop and the web wallet.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <PillLink href="/earn">Run the numbers</PillLink>
              <ArrowLink href={docs('/earn-and-deposits')}>How deposits work</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="messaging"
        eyebrow="Messaging"
        title={<>Messages that live on the chain — and <Amber>vanish</Amber> when you say so.</>}
        intro="Conceal Messaging is fully integrated encrypted messaging on the blockchain: private, decentralised, untraceable, with an address book and self-destructing messages."
      >
        <div className="flex flex-wrap gap-4">
          <GhostLink href="/messaging">Learn about messaging</GhostLink>
          <ArrowLink href={WALLET_URL}>Try it in the web wallet</ArrowLink>
        </div>
      </Section>

      <Section id="get-ccx" eyebrow="Get CCX" title={<>Mine it, buy it, or <Amber>swap</Amber> it.</>}>
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Pickaxe, title: 'Mine', body: `100 % proof of work on ${networkFacts.algorithm}. Fair for GPUs, hostile to ASICs. Point any supported miner at a pool and go.`, href: '/get-ccx#mine' },
            { icon: ShoppingCart, title: 'Buy', body: 'CCX trades on centralised exchanges against BTC and USDT.', href: '/get-ccx#buy' },
            { icon: Repeat, title: 'Swap wCCX', body: 'Wrapped CCX lives on Ethereum, BNB Chain and Polygon. Bridge in and out any time.', href: '/get-ccx#swap' },
          ].map(({ icon: Icon, title, body, href }) => (
            <Glass as="li" key={title}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-amber">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              <ArrowLink href={href} className="mt-4 text-sm">
                {title === 'Swap wCCX' ? 'Contracts & DEXs' : title === 'Buy' ? 'Exchanges' : 'Pools & miner configs'}
              </ArrowLink>
            </Glass>
          ))}
        </ul>
        <div className="mt-6">
          <PriceStrip />
        </div>
      </Section>

      <Section eyebrow="Ecosystem" title="Everything runs in the open.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((e) => (
            <li key={e.href}>
              <a href={e.href} target="_blank" rel="noopener noreferrer" className="glass block h-full p-5 transition hover:border-primary/40">
                <span className="font-medium">{e.name} ↗</span>
                <span className="mt-1 block text-sm text-muted-foreground">{e.body}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <p className="eyebrow">Partners</p>
          {partners.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="opacity-70 transition hover:opacity-100">
              {/* eslint-disable-next-line @next/next/no-img-element -- partner-supplied logos of varying size */}
              <img src={asset(p.logo)} alt={p.name} className="h-8 w-auto" />
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <Eyebrow className="mb-4">Community</Eyebrow>
            <h2 className="text-3xl font-light tracking-tight md:text-4xl">
              No one owns Conceal. <Bold>Everyone</Bold> can take part.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Development, support and decisions happen in the open with volunteers from all four corners of the world. Come say hello.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 md:items-end">
            <PillLink href={DISCORD_URL}>Join the Discord</PillLink>
            <ArrowLink href="/community">All channels</ArrowLink>
            <ArrowLink href={SUPPORT_URL}>Need help? Open a ticket</ArrowLink>
          </div>
        </div>
      </Section>
    </>
  );
}
