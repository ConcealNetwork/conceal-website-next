import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { CopyField } from '@/components/copy-field';
import { PoolsTable } from '@/components/pools-table';
import { PriceStrip } from '@/components/price-strip';
import { Amber, ArrowLink, Bold, Glass, Notice, PageHero, Section } from '@/components/ui';
import { chains, exchanges, marketData } from '@/content/markets';
import { OFFICIAL_POOL, miners } from '@/content/mining';
import { BRIDGE_URL, docs, networkFacts } from '@/content/site';

export const metadata: Metadata = {
  title: 'Get CCX — mine, buy or swap',
  description: 'Mine CCX with a GPU, buy it on an exchange, or swap wrapped CCX on Ethereum, BNB Chain and Polygon. Pools, miner configs and contract addresses.',
};

export default function GetCcxPage() {
  return (
    <>
      <PageHero
        eyebrow="Get CCX"
        title={
          <>
            Mine it, buy it, or <Amber>swap</Amber> it.
          </>
        }
        intro={`CCX is 100 % proof of work on ${networkFacts.algorithm}. There was no premine and no ICO; every coin in circulation was mined.`}
        actions={
          <>
            <ArrowLink href="#mine">Mine</ArrowLink>
            <ArrowLink href="#buy">Buy</ArrowLink>
            <ArrowLink href="#swap">Swap wCCX</ArrowLink>
          </>
        }
      />

      <Section className="pt-0">
        <PriceStrip />
      </Section>

      <Section id="mine" eyebrow="Mine" title={<>Fair for GPUs. <Bold>Hostile</Bold> to ASICs.</>} intro="Point a supported miner at a pool with your wallet address as the username. Solo mining with Conceal Core is also possible.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Glass>
              <p className="eyebrow">Official pool</p>
              <div className="mt-3">
                <CopyField value={OFFICIAL_POOL} label="pool address" />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Stratum, no TLS, password <span className="font-mono">x</span>. Algorithm names differ by miner: <span className="font-mono">cn/gpu</span>, <span className="font-mono">cngpu</span>, <span className="font-mono">cryptonight_gpu</span>.</p>
            </Glass>
            <Glass>
              <p className="eyebrow">Community pools</p>
              <div className="mt-3">
                <PoolsTable />
              </div>
            </Glass>
            <ArrowLink href={docs('/mining')}>Mining guide</ArrowLink>
          </div>
          <div className="space-y-4">
            {miners.map((m) => (
              <Glass key={m.name} className="p-0">
                <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
                  <span className="font-medium">{m.name}</span>
                  <a href={m.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground">
                    download <ExternalLink size={12} />
                  </a>
                </div>
                <pre className="overflow-x-auto px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
                  <code>{m.snippet}</code>
                </pre>
              </Glass>
            ))}
          </div>
        </div>
      </Section>

      <Section id="buy" eyebrow="Buy" title="Exchanges and market data.">
        <div className="grid gap-6 md:grid-cols-2">
          <Glass>
            <p className="eyebrow">Exchanges</p>
            <ul className="mt-4 divide-y divide-border/60">
              {exchanges.filter((e) => e.active !== false).map((e) => (
                <li key={e.href}>
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:text-amber">
                    <span>{e.name}</span>
                    <span className="font-mono text-sm text-muted-foreground">{e.pair} ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Glass>
          <Glass>
            <p className="eyebrow">Market data</p>
            <ul className="mt-4 divide-y divide-border/60">
              {marketData.map((e) => (
                <li key={e.href}>
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-3 hover:text-amber">
                    <span>{e.name}</span>
                    <span className="font-mono text-sm text-muted-foreground">{e.pair} ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Glass>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Listings are provided for convenience and are not endorsements. Do your own research before using any exchange.</p>
      </Section>

      <Section id="swap" eyebrow="Swap wCCX" title={<>Wrapped CCX on <Amber>three</Amber> chains.</>} intro="wCCX is an ERC-20 representation of CCX. Use the Conceal Bridge to move between CCX and wCCX, then trade on any DEX that lists the token.">
        <Notice>
          Always check the contract address before you trade. Fake tokens with the same name exist. Bridge at{' '}
          <a href={BRIDGE_URL} target="_blank" rel="noopener noreferrer" className="text-amber underline underline-offset-4">
            bridge.conceal.network
          </a>{' '}
          only.
        </Notice>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {chains.map((c) => (
            <Glass key={c.id}>
              <p className="eyebrow">{c.name}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">wCCX contract</p>
              <div className="mt-2">
                <CopyField value={c.contract} label={`${c.name} wCCX contract`} compact />
              </div>
              <a href={c.explorer} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-mono text-xs text-muted-foreground hover:text-foreground">
                view on explorer ↗
              </a>
              <ul className="mt-4 divide-y divide-border/60 border-t border-border/60">
                {c.dexes.filter((d) => d.active !== false).map((d) => (
                  <li key={d.href}>
                    <a href={d.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2.5 text-sm hover:text-amber">
                      <span>{d.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{d.pair}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Glass>
          ))}
        </div>
        <div className="mt-6">
          <ArrowLink href={docs('/wccx-bridge')}>wCCX & bridge guide</ArrowLink>
        </div>
      </Section>
    </>
  );
}
