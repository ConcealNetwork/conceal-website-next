const HASH_UNITS = ['H/s', 'kH/s', 'MH/s', 'GH/s', 'TH/s', 'PH/s'];

export function formatHashrate(value: number): string {
  let v = value;
  let i = 0;
  while (v >= 1000 && i < HASH_UNITS.length - 1) {
    v /= 1000;
    i += 1;
  }
  return `${v.toFixed(i === 0 ? 0 : 2)} ${HASH_UNITS[i]}`;
}

export function formatNumber(value: number, digits = 0): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(value);
}

export function formatCcx(atomic: number, decimals = 6): string {
  return formatNumber(atomic / 10 ** decimals, 0);
}

export function timeAgo(unixSeconds: number, now = Date.now()): string {
  const diff = Math.max(0, Math.floor(now / 1000 - unixSeconds));
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export function shorten(value: string, head = 8, tail = 6): string {
  if (value.length <= head + tail + 1) return value;
  return `${value.slice(0, head)}…${value.slice(-tail)}`;
}
