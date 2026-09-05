'use client';

import { useEffect, useState } from 'react';
import { fetchPools, type Pool } from '@/lib/explorer';
import { formatHashrate, formatNumber } from '@/lib/format';

type State = { status: 'loading' } | { status: 'ok'; pools: Pool[] } | { status: 'error' };

export function PoolsTable() {
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();
    fetchPools(controller.signal)
      .then((pools) => setState({ status: 'ok', pools }))
      .catch(() => setState({ status: 'error' }));
    return () => controller.abort();
  }, []);

  if (state.status === 'loading') {
    return <p className="font-mono text-sm text-muted-foreground">Loading pools…</p>;
  }
  if (state.status === 'error') {
    return (
      <p className="text-sm text-muted-foreground">
        Live pool statistics are on the{' '}
        <a href="https://explorer.conceal.network/" className="text-amber underline underline-offset-4" target="_blank" rel="noopener noreferrer">
          explorer
        </a>
        .
      </p>
    );
  }
  if (state.pools.length === 0) {
    return <p className="text-sm text-muted-foreground">No pools are reporting at the moment.</p>;
  }

  return (
    <div className="glass overflow-hidden p-0">
      <table className="w-full text-sm">
        <thead className="bg-background/40 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-normal">Pool</th>
            <th className="px-4 py-3 font-normal">Fee</th>
            <th className="hidden px-4 py-3 font-normal sm:table-cell">Hashrate</th>
            <th className="hidden px-4 py-3 font-normal sm:table-cell">Miners</th>
            <th className="hidden px-4 py-3 font-normal md:table-cell">Height</th>
          </tr>
        </thead>
        <tbody>
          {state.pools.map((p) => (
            <tr key={p.info.host} className="border-t border-border/50">
              <td className="px-4 py-3">
                <a href={`https://${p.info.host}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber">
                  {p.info.name}
                </a>
                <span className="block font-mono text-xs text-muted-foreground">{p.info.host}</span>
              </td>
              <td className="px-4 py-3 font-mono">{(p.config?.poolFee ?? 0).toFixed(1)}%</td>
              <td className="hidden px-4 py-3 font-mono sm:table-cell">{formatHashrate(p.pool?.hashrate ?? 0)}</td>
              <td className="hidden px-4 py-3 font-mono sm:table-cell">{formatNumber(p.pool?.miners ?? 0)}</td>
              <td className="hidden px-4 py-3 font-mono md:table-cell">{formatNumber(p.network?.height ?? 0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
