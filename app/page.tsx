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
    body: 'Every payment goes to a one-time address and is signed with a ring signature, so the chain shows neither who paid nor who was paid. Only the two of you know.',
  },
  {
    icon: MessageSquareLock,
    title: 'Encrypted messaging',
    body: 'Messages ride inside transactions, encrypted so that only the recipient can open them. Set a timer and the message deletes itself after it is read. There is no messaging server to seize.',
  },
  {
    icon: Coins,
    title: 'Deposits that earn',
    body: 'Lock CCX for one to twelve months and the protocol pays interest at maturity. No custodian holds your coins. The deposit is a transaction on the chain, nothing more.',
  },
  {
    icon: KeyRound,
    title: 'Keys never leave your device',
    body: 'Every Conceal wallet is open source and generates your seed on your own device. It is never sent anywhere, which also means nobody can recover it for you. Back it up.',
  },
];

const tools = [
  { name: 'Web wallet', href: WALLET_URL, body: 'Runs in the browser. Keys stay in your browser storage.' },
  { name: 'Explorer', href: EXPLORER_URL, body: 'Blocks, transactions, mining pools and the numbers on this page.' },
  { name: 'Bridge', href: BRIDGE_URL, body: 'Swap CCX to wCCX on Ethereum, BNB Chain and Polygon.' },
  { name: 'Paper wallet', href: PAPER_WALLET_URL, body: 'Generate offline keys to print and store.' },
  { name: 'Marketplace', href: MARKETPLACE_URL, body: 'Buy and sell peer-to-peer with CCX.' },
  { name: 'Docs', href: DOCS_URL, body: 'Wallet guides, running a node, mining, and the RPC API.' },
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
                Conceal is a proof-of-work blockchain for payments nobody can trace, messages nobody can read, and deposits that pay interest without a bank. Volunteers run it. There is no company, and nobody can switch it off.
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

      <Section eyebrow="What it does" title={<>Four things the chain does that a bank <Bold>can&rsquo;t.</Bold></>}>
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
        title={<>Five wallets. <Amber>Same</Amber> rules.</>}
        intro="All five are open source and keep your keys on your device. Desktop and Core sync the whole chain; the web wallet, mobile app and paper wallet don't need to."
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
            <p className="text-sm text-muted-foreground">Don&rsquo;t know which one you want?</p>
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
        title={<>Interest paid by the <Amber>protocol.</Amber></>}
        intro="Pick a term from one to twelve months. The chain locks your CCX until then and pays the interest with the principal. A twelve-month deposit of 20,000 CCX or more earns 6 % APR. There is no counterparty to default."
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
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Base APR depends on the amount (2.9 %, 3.9 % or 4.9 %). Each extra month of term adds 0.1 %.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> The coins sit in the deposit on-chain and unlock at maturity. Withdraw them from the wallet whenever you like after that.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Open a deposit from Conceal Desktop or the web wallet.
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
        title={<>Messages that <Amber>vanish</Amber> when you say so.</>}
        intro="A Conceal message is a small transaction with an encrypted payload. Only the recipient's wallet can decrypt it, and you can give it a self-destruct timer. There is an address book so you don't have to paste addresses."
      >
        <div className="flex flex-wrap gap-4">
          <GhostLink href="/messaging">Learn about messaging</GhostLink>
          <ArrowLink href={WALLET_URL}>Try it in the web wallet</ArrowLink>
        </div>
      </Section>

      <Section id="get-ccx" eyebrow="Get CCX" title={<>Every coin was <Amber>mined.</Amber> Here&rsquo;s how to get some.</>}>
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Pickaxe, title: 'Mine', body: `${networkFacts.algorithm} runs well on ordinary graphics cards and badly on ASICs, which is the point. Paste a pool address into a miner and you are mining.`, href: '/get-ccx#mine' },
            { icon: ShoppingCart, title: 'Buy', body: 'Two exchanges list CCX against BTC and USDT. Neither is an endorsement.', href: '/get-ccx#buy' },
            { icon: Repeat, title: 'Swap wCCX', body: 'wCCX is an ERC-20 token on Ethereum, BNB Chain and Polygon. The bridge converts it to CCX and back.', href: '/get-ccx#swap' },
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

      <Section eyebrow="Tools" title="Everything else the project runs.">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((e) => (
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
              Nobody owns this. <Bold>Anyone</Bold> can help run it.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Code review, support tickets and roadmap arguments all happen in public. The people doing it are volunteers in a dozen time zones. Discord is where most of it starts.
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
