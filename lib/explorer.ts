import { EXPLORER_URL } from '@/content/site';
import { POOLS_ENDPOINT } from '@/content/mining';

export type DaemonInfo = {
  height: number;
  difficulty: number;
  tx_count: number;
  tx_pool_size: number;
  last_block_timestamp: number;
  last_block_reward: number;
  full_deposit_amount: number;
  incoming_connections_count: number;
  outgoing_connections_count: number;
  white_peerlist_size: number;
  version: string;
  status: string;
};

export type Pool = {
  info: { name: string; host: string };
  network: { height: number };
  pool: { hashrate: number; miners: number; lastBlockFound?: number };
  config: { poolFee: number; minPaymentThreshold?: number };
};

export async function fetchDaemonInfo(signal?: AbortSignal): Promise<DaemonInfo> {
  const res = await fetch(`${EXPLORER_URL}/daemon/getinfo`, { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`getinfo ${res.status}`);
  return (await res.json()) as DaemonInfo;
}

export async function fetchPools(signal?: AbortSignal): Promise<Pool[]> {
  const res = await fetch(POOLS_ENDPOINT, { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`pools ${res.status}`);
  const data = (await res.json()) as Pool[];
  return data.filter((p) => p?.info?.name).sort((a, b) => (a.config?.poolFee ?? 0) - (b.config?.poolFee ?? 0));
}

export type Price = { usd: number; change24h: number | null; source: 'CoinGecko' | 'CoinPaprika' };

export async function fetchPrice(signal?: AbortSignal): Promise<Price> {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=conceal&vs_currencies=usd&include_24hr_change=true',
      { signal },
    );
    if (res.ok) {
      const json = (await res.json()) as Record<string, { usd?: number; usd_24h_change?: number }>;
      const row = json.conceal;
      if (row?.usd) return { usd: row.usd, change24h: row.usd_24h_change ?? null, source: 'CoinGecko' };
    }
  } catch {
    /* fall through to CoinPaprika */
  }
  const res = await fetch('https://api.coinpaprika.com/v1/tickers/ccx-conceal', { signal });
  if (!res.ok) throw new Error(`price ${res.status}`);
  const json = (await res.json()) as { quotes: { USD: { price: number; percent_change_24h: number } } };
  return { usd: json.quotes.USD.price, change24h: json.quotes.USD.percent_change_24h, source: 'CoinPaprika' };
}
