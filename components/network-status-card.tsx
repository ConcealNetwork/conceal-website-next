'use client';

import { useEffect, useState } from 'react';
import { EXPLORER_URL, networkFacts } from '@/content/site';
import { fetchDaemonInfo, type DaemonInfo } from '@/lib/explorer';
import { formatCcx, formatNumber, timeAgo } from '@/lib/format';
import { StatusDot } from './ui';

type State = { status: 'loading' } | { status: 'ok'; info: DaemonInfo; at: number } | { status: 'error' };

export function NetworkStatusCard({ className = '' }: { className?: string }) {
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();
    let timer: ReturnType<typeof setInterval> | undefined;
    async function load() {
      try {
        const info = await fetchDaemonInfo(controller.signal);
        setState({ status: 'ok', info, at: Date.now() });
      } catch {
        setState((s) => (s.status === 'ok' ? s : { status: 'error' }));
      }
    }
    void load();
    timer = setInterval(load, 60_000);
    return () => {
      controller.abort();
      if (timer) clearInterval(timer);
    };
  }, []);

  const ok = state.status === 'ok' ? state : null;
  const blockAge = ok ? ok.at / 1000 - ok.info.last_block_timestamp : null;
  const tone = !ok ? 'idle' : blockAge !== null && blockAge > 900 ? 'warn' : 'ok';

  return (
    <div className={`glass p-6 ${className}`} aria-live="polite">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Network</p>
        <StatusDot tone={tone}>{!ok ? (state.status === 'loading' ? 'Connecting' : 'Offline') : 'Synced'}</StatusDot>
      </div>
      <div className="mt-4">
        <p className="font-mono text-4xl font-medium tracking-tight md:text-5xl">
          {ok ? formatNumber(ok.info.height) : '—'}
          <span className="ml-2 text-base text-amber">blocks</span>
        </p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {ok && blockAge !== null ? `last block ${timeAgo(ok.info.last_block_timestamp, ok.at)} · target ${networkFacts.blockTargetSeconds}s` : 'live data from the explorer'}
        </p>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3">
        <Stat label="Locked in deposits" value={ok ? `${formatCcx(ok.info.full_deposit_amount)} CCX` : '—'} accent />
        <Stat label="Difficulty" value={ok ? formatNumber(ok.info.difficulty) : '—'} />
        <Stat label="Transactions" value={ok ? formatNumber(ok.info.tx_count) : '—'} />
        <Stat label="Core version" value={ok ? ok.info.version : networkFacts.coreVersion} />
      </dl>
      <a
        href={EXPLORER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block font-mono text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
      >
        explorer.conceal.network ↗
      </a>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/40 px-3 py-2.5">
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</dt>
      <dd className={`mt-1 font-mono text-sm ${accent ? 'text-incoming' : ''}`}>{value}</dd>
    </div>
  );
}
