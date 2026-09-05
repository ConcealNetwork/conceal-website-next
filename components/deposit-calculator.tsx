'use client';

import { useId, useState } from 'react';
import { DEPOSIT_RATES_AS_OF, MAX_TERM_MONTHS, estimate, tierFor, tiers } from '@/lib/deposits';
import { formatNumber } from '@/lib/format';

export function DepositCalculator() {
  const [principal, setPrincipal] = useState(20_000);
  const [months, setMonths] = useState(12);
  const id = useId();
  const result = estimate(principal, months);
  const tier = tierFor(principal);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <div className="glass p-6">
        <p className="eyebrow mb-5">Estimate a deposit</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block" htmlFor={`${id}-p`}>
            <span className="block text-sm text-muted-foreground">Amount (CCX)</span>
            <input
              id={`${id}-p`}
              type="number"
              inputMode="numeric"
              min={1}
              max={9_999_999}
              value={principal}
              onChange={(e) => setPrincipal(Math.max(1, Math.min(9_999_999, Number(e.target.value) || 0)))}
              className="mt-2 w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 font-mono text-lg outline-none focus:border-primary"
            />
          </label>
          <label className="block" htmlFor={`${id}-m`}>
            <span className="block text-sm text-muted-foreground">Term (months)</span>
            <input
              id={`${id}-m`}
              type="range"
              min={1}
              max={MAX_TERM_MONTHS}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="mt-4 w-full accent-[#ffa500]"
            />
            <span className="mt-1 block font-mono text-sm">
              {months} month{months > 1 ? 's' : ''}
            </span>
          </label>
        </div>

        <div className="mt-6 rounded-lg border border-border/60 bg-background/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">
              {tier.name} · <span className="font-mono text-amber">{(result.apr * 100).toFixed(2)}% APR</span>
            </span>
            <span className="font-mono text-xs text-muted-foreground">{(result.rate * 100).toFixed(2)}% over term</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-gradient-to-r from-primary to-wallet-amber" style={{ width: `${(months / MAX_TERM_MONTHS) * 100}%` }} />
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Interest</dt>
              <dd className="mt-1 font-mono text-xl text-incoming">+{formatNumber(result.interest, 2)} CCX</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">At maturity</dt>
              <dd className="mt-1 font-mono text-xl">{formatNumber(result.total, 2)} CCX</dd>
            </div>
          </dl>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Rates as displayed on {DEPOSIT_RATES_AS_OF}. The rate shown in your wallet when you open a deposit is the one that applies.
        </p>
      </div>

      <div className="glass overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead className="bg-background/40 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-normal">Tier</th>
              <th className="px-4 py-3 font-normal">Principal</th>
              <th className="px-4 py-3 font-normal">Base APR</th>
              <th className="px-4 py-3 font-normal">Max APR</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((t) => (
              <tr key={t.name} className={`border-t border-border/50 ${t === tier ? 'bg-primary/5' : ''}`}>
                <td className="px-4 py-3">{t.name}</td>
                <td className="px-4 py-3 font-mono">
                  {t.max ? `${formatNumber(t.min)} – ${formatNumber(t.max)}` : `${formatNumber(t.min)}+`}
                </td>
                <td className="px-4 py-3 font-mono">{(t.baseApr * 100).toFixed(2)}%</td>
                <td className="px-4 py-3 font-mono text-amber">{(t.maxApr * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="border-t border-border/50 px-4 py-3 text-xs text-muted-foreground">
          +0.10 % APR for every month of term beyond the first, up to {MAX_TERM_MONTHS} months. Deposits are locked on-chain until maturity.
        </p>
      </div>
    </div>
  );
}
