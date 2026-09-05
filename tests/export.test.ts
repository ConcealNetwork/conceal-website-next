import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const OUT = join(import.meta.dirname, '..', 'out');
const BASE = process.env.GITHUB_PAGES === 'true' ? 'https://concealnetwork.github.io/conceal-website' : 'https://conceal.network';
const pages = ['', 'about', 'manifesto', 'wallets', 'earn', 'messaging', 'get-ccx', 'roadmap', 'team', 'community', 'labs', 'media', 'donate', 'branding', 'terms', 'privacy'];

test('static export exists (run `npm run build` first)', () => {
  assert.ok(existsSync(join(OUT, 'index.html')), 'out/index.html missing — run npm run build');
});

test('every route is exported with real content and metadata', { skip: !existsSync(OUT) }, () => {
  for (const p of pages) {
    const file = join(OUT, p, 'index.html');
    assert.ok(existsSync(file), `missing ${file}`);
    const html = readFileSync(file, 'utf8');
    assert.match(html, /<title>[^<]+<\/title>/, `${p}: title`);
    assert.match(html, /<meta name="description"/, `${p}: description`);
    assert.match(html, /property="og:image"/, `${p}: og:image`);
    assert.match(html, /<h1/, `${p}: h1`);
    assert.ok(html.length > 15_000, `${p}: page looks empty (${html.length} bytes)`);
  }
});

test('no third-party font or icon CDNs in the export', { skip: !existsSync(OUT) }, () => {
  const html = readFileSync(join(OUT, 'index.html'), 'utf8');
  assert.doesNotMatch(html, /fonts\.googleapis\.com|cdnjs\.cloudflare\.com|allorigins/);
});

test('sitemap, robots and redirects are present', { skip: !existsSync(OUT) }, () => {
  assert.ok(existsSync(join(OUT, 'sitemap.xml')));
  assert.ok(existsSync(join(OUT, 'robots.txt')));
  assert.ok(existsSync(join(OUT, '.htaccess')));
  assert.ok(existsSync(join(OUT, '.nojekyll')));
  const sm = readFileSync(join(OUT, 'sitemap.xml'), 'utf8');
  for (const p of pages) assert.ok(sm.includes(`${BASE}/${p}${p ? '/' : ''}`), `sitemap: ${p}`);
});
