/**
 * Deposit interest as displayed on conceal.network on 2026-09-06.
 * Base APR by principal tier, +0.1 % APR for every month of term beyond the first, 1–12 month terms.
 * These are the site's published figures; the wallet's displayed rate at the time of deposit is authoritative.
 */
export const DEPOSIT_RATES_AS_OF = '2026-09-06';
export const MAX_TERM_MONTHS = 12;

export type Tier = { name: string; min: number; max: number | null; baseApr: number; maxApr: number; example: number };

export const tiers: Tier[] = [
  { name: 'Tier 1', min: 1, max: 9_999, baseApr: 0.029, maxApr: 0.04, example: 5_000 },
  { name: 'Tier 2', min: 10_000, max: 19_999, baseApr: 0.039, maxApr: 0.05, example: 10_000 },
  { name: 'Tier 3', min: 20_000, max: null, baseApr: 0.049, maxApr: 0.06, example: 20_000 },
];

export function tierFor(principal: number): Tier {
  if (principal >= 20_000) return tiers[2];
  if (principal >= 10_000) return tiers[1];
  return tiers[0];
}

/** Effective APR for a given term (0.1 % per extra month). */
export function aprFor(principal: number, months: number): number {
  const m = Math.min(Math.max(1, Math.floor(months)), MAX_TERM_MONTHS);
  return tierFor(principal).baseApr + (m - 1) * 0.001;
}

/** Interest earned over the term as a fraction of principal. */
export function termRate(principal: number, months: number): number {
  const m = Math.min(Math.max(1, Math.floor(months)), MAX_TERM_MONTHS);
  return (aprFor(principal, m) / 12) * m;
}

export function estimate(principal: number, months: number) {
  const rate = termRate(principal, months);
  const interest = principal * rate;
  return { rate, interest, total: principal + interest, apr: aprFor(principal, months) };
}
