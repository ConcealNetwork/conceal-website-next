import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import { donations } from '../content/donations.ts';
import { labProjects } from '../content/labs.ts';
import { chains, exchanges, marketData, partners } from '../content/markets.ts';
import { miners } from '../content/mining.ts';
import { roadmap } from '../content/roadmap.ts';
import { footerColumns, primaryNav, socials } from '../content/site.ts';
import { team } from '../content/team.ts';
import { communityVideos, featuredVideos, miningVideos } from '../content/videos.ts';
import { wallets } from '../content/wallets.ts';
import { aprFor, estimate, termRate, tierFor } from '../lib/deposits.ts';
import { formatHashrate, timeAgo } from '../lib/format.ts';

const PUBLIC = join(import.meta.dirname, '..', 'public');
const isHttps = (u: string) => /^https:\/\//.test(u);

function allExternalLinks(): string[] {
  const links: string[] = [];
  for (const s of socials) links.push(s.href);
  for (const c of footerColumns) for (const i of c.items) if (i.external) links.push(i.href);
  for (const n of primaryNav) {
    if ('items' in n) {
      for (const i of n.items) if (i.external) links.push(i.href);
    } else if (n.external) {
      links.push(n.href);
    }
  }
  for (const w of wallets) {
    links.push(w.docsHref);
    for (const d of w.downloads) links.push(d.href);
  }
  for (const e of [...exchanges, ...marketData]) links.push(e.href);
  for (const c of chains) {
    links.push(c.explorer);
    for (const d of c.dexes) links.push(d.href);
  }
  for (const p of partners) links.push(p.href);
  for (const m of miners) links.push(m.href);
  for (const r of roadmap) if (r.href) links.push(r.href);
  for (const t of team) {
    if (t.github) links.push(t.github);
    if (t.x) links.push(t.x);
  }
  for (const p of labProjects) for (const l of p.links) links.push(l.href);
  return links;
}

test('every external link uses https', () => {
  for (const href of allExternalLinks()) assert.ok(isHttps(href), `not https: ${href}`);
});

test('no link points at the retired DokuWiki or legacy DEX domains', () => {
  for (const href of allExternalLinks()) {
    assert.ok(!href.includes('doku.php'), `dokuwiki link: ${href}`);
    assert.ok(!href.includes('1inch.exchange'), `legacy 1inch domain: ${href}`);
    assert.ok(!href.includes('exchange.pancakeswap.finance'), `legacy pancakeswap domain: ${href}`);
  }
});

test('wCCX contract addresses are well-formed EVM addresses', () => {
  for (const c of chains) assert.match(c.contract, /^0x[0-9a-fA-F]{40}$/, c.name);
});

test('donation addresses look valid for their chain', () => {
  for (const d of donations) {
    if (d.symbol === 'CCX') assert.match(d.address, /^ccx7[1-9A-HJ-NP-Za-km-z]{94}$/);
    if (d.symbol === 'BTC') assert.match(d.address, /^bc1[0-9a-z]{20,}$/);
    if (d.symbol === 'XMR') assert.match(d.address, /^[48][1-9A-HJ-NP-Za-km-z]{94}$/);
    if (d.network === 'Polygon') assert.match(d.address, /^0x[0-9a-fA-F]{40}$/);
    assert.ok(existsSync(join(PUBLIC, d.icon)), `missing icon ${d.icon}`);
  }
});

test('referenced local images exist', () => {
  for (const t of team) assert.ok(existsSync(join(PUBLIC, t.image)), `missing ${t.image}`);
  for (const p of labProjects) for (const s of p.screenshots) assert.ok(existsSync(join(PUBLIC, s)), `missing ${s}`);
  for (const p of partners) assert.ok(existsSync(join(PUBLIC, p.logo)), `missing ${p.logo}`);
  for (const w of wallets) if (w.image) assert.ok(existsSync(join(PUBLIC, w.image)), `missing ${w.image}`);
  for (const v of [...featuredVideos, ...communityVideos, ...miningVideos]) if (v.thumb) assert.ok(existsSync(join(PUBLIC, v.thumb)), `missing ${v.thumb}`);
  for (const f of ['brand/logo.svg', 'brand/conceal-mark.svg', 'brand/conceal-coin.png', 'brand/og.png']) assert.ok(existsSync(join(PUBLIC, f)), `missing ${f}`);
});

test('youtube ids are well-formed', () => {
  for (const v of [...featuredVideos, ...communityVideos, ...miningVideos]) assert.match(v.id, /^[A-Za-z0-9_-]{11}$/, v.title);
});

test('roadmap has unique entries and statuses in a sensible order', () => {
  const keys = new Set(roadmap.map((m) => `${m.date}|${m.title}`));
  assert.equal(keys.size, roadmap.length);
  const firstOpen = roadmap.findIndex((m) => m.status !== 'done');
  assert.ok(roadmap.slice(firstOpen).every((m) => m.status !== 'done'), 'done items must precede open ones');
});

test('deposit formula matches the published table', () => {
  assert.equal(tierFor(5_000).name, 'Tier 1');
  assert.equal(tierFor(10_000).name, 'Tier 2');
  assert.equal(tierFor(20_000).name, 'Tier 3');
  assert.ok(Math.abs(aprFor(20_000, 12) - 0.06) < 1e-9);
  assert.ok(Math.abs(aprFor(5_000, 12) - 0.04) < 1e-9);
  assert.ok(Math.abs(termRate(5_000, 1) - 0.029 / 12) < 1e-9);
  const r = estimate(20_000, 12);
  assert.ok(Math.abs(r.total - 21_200) < 1e-6, `expected 21,200 got ${r.total}`);
  const r2 = estimate(10_000, 6);
  assert.ok(Math.abs(r2.total - 10_220) < 1e-6, `expected 10,220 got ${r2.total}`);
  assert.equal(estimate(1, 99).apr, aprFor(1, 12));
});

test('format helpers', () => {
  assert.equal(formatHashrate(244), '244 H/s');
  assert.equal(formatHashrate(15146), '15.15 kH/s');
  assert.equal(formatHashrate(2_500_000), '2.50 MH/s');
  assert.equal(timeAgo(1000, 1_061_000), '1m ago');
  assert.equal(timeAgo(0, 3_600_000), '1h ago');
  assert.equal(timeAgo(0, 90_000_000), '1d ago');
});
