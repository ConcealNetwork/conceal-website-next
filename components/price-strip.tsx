'use client';

import { useEffect, useState } from 'react';
import { fetchPrice, type Price } from '@/lib/explorer';

export function PriceStrip() {
  const [price, setPrice] = useState<Price | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        setPrice(await fetchPrice(controller.signal));
      } catch {
        setFailed(true);
      }
    }
    void load();
    const t = setInterval(load, 120_000);
    return () => {
      controller.abort();
      clearInterval(t);
    };
  }, []);

  if (failed && !price) return null;

  const change = price?.change24h ?? null;
  const changeClass = change === null ? 'text-muted-foreground' : change >= 0 ? 'text-incoming' : 'text-outgoing';

  return (
    <div className="glass flex flex-wrap items-center justify-between gap-4 px-6 py-4">
      <div className="flex items-baseline gap-3">
        <span className="eyebrow">CCX / USD</span>
        <span className="font-mono text-2xl">{price ? `$${price.usd.toFixed(4)}` : '—'}</span>
        {change !== null && (
          <span className={`font-mono text-sm ${changeClass}`}>
            {change >= 0 ? '+' : ''}
            {change.toFixed(2)}% 24h
          </span>
        )}
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        {price ? `via ${price.source}` : 'loading price…'} · not financial advice
      </p>
    </div>
  );
}
