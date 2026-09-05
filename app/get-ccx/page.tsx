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
  title: 'Get CCX',
  description: 'Mine CCX with a GPU, buy it on an exchange, or swap wrapped CCX on Ethereum, BNB Chain and Polygon. Pools, miner configs and contract addresses.',
};

export default function GetCcxPage() {
  return (
    <>
      <PageHero
        eyebrow="Get CCX"
        title={
          <>
            Mine it, buy it, or <Amber>swap</Amber> for it.
          </>
        }
        intro={`Every CCX in circulation was mined with ${networkFacts.algorithm}. There was no premine and no token sale. If you don't want to mine, two exchanges list it and wrapped CCX trades on three EVM chains.`}
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

      <Section id="mine" eyebrow="Mine" title={<>Graphics cards <Bold>welcome.</Bold> ASICs, less so.</>} intro="Put a pool address and your wallet address into any miner below and start it. Conceal Core can also mine solo, which is slower but needs no pool.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Glass>
              <p className="eyebrow">Official pool</p>
              <div className="mt-3">
                <CopyField value={OFFICIAL_POOL} label="pool address" />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Stratum, no TLS, password <span className="font-mono">x</span>. Each miner calls the algorithm something different: <span className="font-mono">cn/gpu</span>, <span className="font-mono">cngpu</span> or <span className="font-mono">cryptonight_gpu</span>.</p>
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

      <Section id="buy" eyebrow="Buy" title="Where it trades.">
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
        <p className="mt-4 text-xs text-muted-foreground">These are the venues we know about, not a recommendation. An exchange holds your coins until you withdraw them. Withdraw them.</p>
      </Section>

      <Section id="swap" eyebrow="Swap wCCX" title={<>wCCX on <Amber>three</Amber> chains.</>} intro="wCCX is an ERC-20 token backed one-to-one by CCX held by the bridge. Send CCX to the bridge and get wCCX on Ethereum, BNB Chain or Polygon, or the reverse. Then trade it on any DEX that has a pool.">
        <Notice>
          Check the contract address before you trade. Tokens named wCCX that are not these contracts exist and are worthless. The only bridge is{' '}
          <a href={BRIDGE_URL} target="_blank" rel="noopener noreferrer" className="text-amber underline underline-offset-4">
            bridge.conceal.network
          </a>
          .
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
