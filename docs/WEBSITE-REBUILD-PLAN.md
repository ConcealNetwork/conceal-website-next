# conceal.network — rebuild and modernisation plan

Date: 2026-09-06
Scope: replace the public marketing site at https://conceal.network with a rebuilt, brand-aligned site that follows the wallet.conceal.network design language, keeps every piece of content that still matters, and fixes the structural problems of the current app.

Reference material in this folder:

* `reference/current-site/CONTENT-INVENTORY.md` — exhaustive, verbatim inventory of every route, section, data array, link, and runtime fetch in the current production bundle. **This is the content source of truth for the rebuild.**
* `reference/current-site/*.png` — full-page screenshots of every current route (1440 px wide).
* `reference/brand/` — official logo files from `/branding`, the wallet's `conceal-coin.png` hero render and `conceal-mark.svg`, and screenshots of the wallet theme.

---

## Part 1 — What exists today

### 1.1 Stack and hosting (observed 2026-09-06)

| Item | Observed |
| --- | --- |
| Framework | Vite SPA, React 19, React Router 7 (`BrowserRouter`), Tailwind utilities + `clsx`/`tailwind-merge`. Single 444 KB JS bundle (`/assets/index-FX_UP2nX.js`) + 45 KB CSS |
| Server | LiteSpeed on shared cPanel-style hosting (same host as HESK support and DokuWiki). `robots.txt` only disallows `/cgi-bin`; no sitemap |
| Rendering | 100 % client-side: the HTML shell is 1.1 KB with an empty `#root`. No SSR/SSG, no per-route `<title>`/meta, no Open Graph tags. Search engines and link previews see nothing |
| Icons | Font Awesome 6.5.1 from cdnjs (third-party request on a privacy project) |
| Fonts | Poppins via CSS (Google Fonts) |
| Deploy history | Bundle special-cases `*.github.io`, `dweb.conceal`, `dweb.conceal.hns.to` hostnames and has a `sessionStorage.redirectPath` 404 shim — the site has been mirrored on GitHub Pages and Handshake |
| Error pages | `/502`, `/504`, `/508` are ports of Namecheap/CloudLinux LVE error pages (508 links to a Namecheap KB article) |

### 1.2 Route map

```
/                 Home: splash → hero → "We are about PRIVACY!" → Earn/Messaging features →
                  compound-interest calculator → Wallets (#wallets) → Mining (#mining, live pool table) →
                  Markets (#markets, wCCX buttons) → Partners (#partners) → Helpdesk CTA → CCX price widget
/about            What is Conceal / Vision / Mission / Privacy by design / Community / Decentralisation / Join
/manifesto        Concealer's Manifesto (8 blocks, 2 images)
/messaging        5 feature rows (self-destructing, desktop/web, decentralised, address book, encrypted)
/earn             5 feature rows about deposits ("as much as 6% APR")
/roadmap          39-item vertical timeline 2018 → 2029-2030
/team             9 member cards + DAO description
/community        Tabs: Social links | Exchanges (+ market-cap sites) | DEX (Polygon / BSC / Ethereum pairs)
/donate           7 donation addresses with copy buttons
/branding         Logo downloads, colour swatches (Grey/Neon Cyan/Black), fonts (Poppins/Lora/Montserrat)
/labs             Conceal Labs pitch + 3 funded projects (Authenticator, Privacy Defensor, Assistant) with carousels
/in-the-media     Featured video carousel + Videos (11) and Mining (3) tabs
/tc, /privacy     Legal (privacy policy last updated Oct 2021)
/502 /504 /508    Hosting error pages
```

Header nav is four click-to-open dropdowns (About, Community, Developers, Tools) + Wallets + Contact + a 12-language selector. Footer has General / Tools / Community columns and is hidden on mobile behind a "pull up to see footer" gesture. Fixed rails: left "Buy / Earn / Hodl / Build" quick-nav, right social rail, back-to-top button.

### 1.3 Runtime integrations

| Source | Used for | Notes |
| --- | --- | --- |
| `api.coingecko.com/api/v3/simple/price` (fallback `api.coinpaprika.com/v1/tickers/ccx-conceal`) | USD price + 24 h change, refreshed every 120 s | Client-side, browser hits third-party APIs directly |
| `explorer.conceal.network/services/pools/data` | Mining pool table (name, host, height, fee, hashrate, miners) | Sends `Access-Control-Allow-Credentials` but no `Allow-Origin`, so the site falls back to `api.allorigins.win` proxy — a third-party proxy on the critical path |
| `explorer.conceal.network/daemon/getinfo` | **Not used today**, but available with `Access-Control-Allow-Origin: *` — height, difficulty, tx count, last block timestamp, deposits total, version | Ideal for a live network status widget |
| `/lang/*.json` | 12-language DOM-rewriting i18n | Runs once on mount; client-side route changes render untranslated |

### 1.4 Brand as currently expressed

The bundle's theme object was designed for a **neon cyan / magenta** palette (`U.colors.neon`, `heroTitleCyan` gradients) and then switched to `orange/orange` via config. The `/branding` page still lists "Neon Cyan #00F0FF" as an official colour but renders the swatch in orange, and its copy talks about "deep Yellow". Poppins is the UI font; body copy is grey `#B0B0B0` on `#0a0a0a` with heavy black text-shadows, neon glow rails, a 10 px root font size and `rem` sizes like `7rem`. The look is dated, inconsistent with the wallet, and with the branding page's own stated palette.

### 1.5 Problems to fix (not replicate)

1. **No SEO / previews** — empty HTML shell, no per-page titles, no OG images, no sitemap. For a project whose homepage is the primary discovery surface this is the biggest functional gap.
2. **Off-brand** — neon/glow aesthetic vs. the new warm amber wallet identity; three fonts declared, none used consistently.
3. **Two competing doc sources** — links to the retired DokuWiki (`/wiki/doku.php`) and to the conceal-core GitHub wiki, while the maintained docs are the Fumadocs wiki (currently `concealnetwork.github.io/conceal-wiki`).
4. **Broken/confusing navigation** — `/community#exchanges` doesn't select the tab; footer "Wallets Apps" is `#wallets` (breaks off-home); `/in-the-media` loads with no tab selected; 27 nav items across four dropdowns for ~13 pages; mobile footer hidden behind a gesture.
5. **Privacy-project hygiene** — cdnjs, Google Fonts, allorigins proxy, YouTube iframes, direct browser calls to CoinGecko.
6. **Stale content** — STEX listing, Bakeryswap/BUSD, `1inch.exchange`, `exchange.pancakeswap.finance`, plain `http://` links, privacy policy 2021, team member with a media image as a portrait, typos ("developpers", "officialy", "availibility", "MERCHANT ABILITY").
7. **Accessibility** — heading order inverted (h3 before h1; hero is h2), colour-only status, hover-only reveals on team cards, duplicate `#herobg` ids, 100 % client render means nothing without JS.
8. **Hosting-era artefacts** — 502/504/508 pages, GitHub Pages redirect shim, hostname sniffing.
9. **i18n** — brittle DOM-text-matching translation that breaks on route change; 12 language files to maintain for marketing copy that changes.

---

## Part 2 — Brand and design system

The wallet (https://wallet.conceal.network) is the design direction. Its tokens were read directly from its production CSS and are copied verbatim into the new site — this is not an approximation.

### 2.1 Official assets (from /branding and the wallet)

| Asset | Use in new site |
| --- | --- |
| `logo.svg` — brushed-metal "C" mark, `#54565a → #a7a8a9` gradient | Header mark, favicon, OG image |
| `conceal-mark.svg` — flat simplified mark (shared by wallet and wiki) | Small UI contexts, footer, monochrome |
| `conceal-coin.png` — 1254 px 3-D brushed coin with amber edge glow (wallet hero) | Homepage hero motif, bleeding off the right edge |
| Logo PNGs (dark/white bg, 1600 & 256) | Kept on `/branding` for download |
| Fonts: Poppins / Lora / Montserrat | Listed on `/branding` as print/brand fonts; **not** used in the UI |
| Colours on branding page: Grey `#808080`, Neon Cyan `#00F0FF`, Black `#000000` | **Superseded.** New `/branding` page documents the amber system below and offers the old palette as "legacy" |

### 2.2 Tokens (verbatim from wallet.conceal.network CSS)

```css
:root {                         /* dark — default, color-scheme: dark */
  --background: 30 9% 9%;      --foreground: 0 0% 100%;
  --card: 36 9% 13%;           --card-foreground: 0 0% 100%;
  --popover: 36 10% 12%;       --popover-foreground: 0 0% 100%;
  --primary: 39 100% 50%;      --primary-foreground: 0 0% 0%;
  --secondary: 34 8% 17%;      --secondary-foreground: 0 0% 100%;
  --muted: 34 8% 17%;          --muted-foreground: 36 7% 64%;
  --accent: 39 100% 50%;       --accent-foreground: 0 0% 0%;
  --destructive: 0 84% 60%;    --destructive-foreground: 0 0% 100%;
  --border: 34 9% 21%;         --input: 34 9% 21%;  --ring: 39 100% 50%;
  --radius: .75rem;            --chrome: 30 10% 7%;
  --chart-1: 199 89% 48%; --chart-2: 160 84% 39%; --chart-3: 39 100% 50%; --chart-4: 0 84% 60%; --chart-5: 221 83% 53%;
}
:root[data-theme=light] {
  --background: 36 38% 97%;    --foreground: 30 12% 12%;
  --card: 0 0% 100%;           --popover: 0 0% 100%;
  --secondary: 36 24% 92%;     --secondary-foreground: 30 12% 18%;
  --muted: 36 24% 92%;         --muted-foreground: 32 9% 38%;
  --destructive: 0 72% 46%;    --border: 34 18% 85%;  --input: 34 18% 85%;
  --chrome: 36 30% 95%;
}
/* semantic extras used by the wallet */
--color-wallet-amber: #f5a623; --color-wallet-incoming: #10b981;
--color-wallet-outgoing: #ef4444; --color-wallet-deposit: #60a5fa;
/* body backdrop */
background-image: radial-gradient(58% 44% at 90% -8%, #ffa60012, transparent 60%),
                  radial-gradient(52% 40% at -8% 108%, #ff77000d, transparent 55%);
/* glass card */
.wallet-card { background: card @ 70%; border: 1px border @ 70%; border-radius: .75rem; backdrop-filter: blur(24px);
               box-shadow: inset 0 1px 0 #ffffff0d, 0 18px 60px #00000052; }
[data-theme=light] .wallet-card { box-shadow: 0 1px 2px #221d180a, 0 2px 6px #221d180f; }
/* keycap */
.wallet-keycap { color: orange; background: linear-gradient(#322d28, #241f1c); border: 1px solid; border-color: #4a433b #2e2924 #14110f;
                 border-radius: 6px; font-weight: 800; box-shadow: 0 4px 6px #0006, 0 1px 3px #00000080; text-shadow: 0 -1px 1px #000c, 0 1px 1px #ffffff0d; }
```

Typography: **Geist** (variable, self-hosted `.woff`) for everything, **Geist Mono** for eyebrows, numbers, hashes, addresses, timestamps. Headlines are large and light (300–400) with one word in amber and one in bold — "Quietly *private.* Patiently **yours.**". Eyebrows are 11–12 px mono, uppercase, `letter-spacing: .3em`, amber. On light theme amber text darkens to `#be6a04`.

Components: pill buttons (solid amber, black text, hover lifts with `0 16px 40px #ffa5004d` glow); text links with arrow; dot-status pills ("● Synced"); glass cards; keycaps; four amber-dot feature bullets in a footer strip.

### 2.3 Translating that to a marketing site

* **Hero**: eyebrow `CONCEAL NETWORK`, headline "Quietly **private**. Patiently *yours*." pattern re-written for the project ("Private money. **Encrypted** words. *Yours* alone."), one-paragraph subhead, amber pill "Get a wallet" + text link "Read the docs →". The coin render sits right, bleeding off the edge, on a radial vignette. On top of it a glass card shows **live network status** from `daemon/getinfo`: height, last block age, difficulty, total deposits locked, node version, with a "● Synced" dot — the marketing site's equivalent of the wallet's balance card.
* **Section eyebrows** replace the old "subtitle + giant title" pattern: `WALLETS` / `EARN` / `MESSAGING` / `MINING`.
* **Feature grid**: four glass cards (Untraceable transactions, Encrypted messaging, Deposits that earn, Keys never leave your device) — mirrors the wallet footer strip so the two properties feel like one product.
* **Numbers** (height, supply, APR, hashrate, fees) always in Geist Mono.
* **Dark by default** with a light toggle stored in `localStorage`, exactly like the wallet.
* No Font Awesome: `lucide-react` (already used by conceal-support) plus a small set of inline brand SVGs (Discord, GitHub, X, Telegram, YouTube, Medium, Substack, Facebook, BitcoinTalk).
* The old "PRIVACY!" neon look, splash screen, glow rails, and text-shadows are dropped.

---

## Part 3 — Information architecture

### 3.1 New route map

| Route | Replaces | Notes |
| --- | --- | --- |
| `/` | `/` | Hero + live status, features, wallets, earn calculator, messaging, get CCX (mine/buy), ecosystem apps, community CTA, price strip |
| `/about` | `/about` | Same copy, tightened; adds a "Network at a glance" fact card (200 M max supply, 120 s blocks, 6 CCX base reward, CN-GPU PoW, launched 23 May 2018 — from the wiki's verified facts) |
| `/manifesto` | `/manifesto` | Same eight blocks, editorial layout |
| `/wallets` | home `#wallets` | Promoted to a page: Desktop, Core CLI, Web, Mobile, Paper, plus "which wallet?" guidance linking to the wiki |
| `/earn` | `/earn` + home calculator | Feature rows + the compound-interest calculator and tier table move here; rates labelled as "displayed at time of writing — confirm in the wallet" per the wiki's content policy |
| `/messaging` | `/messaging` | Same five features |
| `/get-ccx` | home `#mining`, `#markets`, community Exchanges/DEX tabs | One page: Mine (quick-start configs + live pool table), Buy (exchanges), Swap wCCX (per-chain DEX links with contract addresses shown in mono with copy buttons) |
| `/roadmap` | `/roadmap` | Same 39 items as data; grouped by year, "Achieved / In progress / Planned" |
| `/team` | `/team` | Same nine members |
| `/community` | `/community` (social tab) | Channels only — exchanges move to `/get-ccx` |
| `/labs` | `/labs` | Same three projects |
| `/media` | `/in-the-media` | Videos and mining videos; click-to-load YouTube (no iframe until clicked) |
| `/donate` | `/donate` | Same addresses, mono + copy |
| `/branding` | `/branding` | New amber system + legacy assets |
| `/terms`, `/privacy` | `/tc`, `/privacy` | Copy retained; contradictions flagged for legal review (see §6) |
| `/404` | — | Branded not-found. 502/504/508 dropped |

Redirects (in `next.config` or at the CDN): `/tc → /terms`, `/in-the-media → /media`, `/#wallets → /wallets`, `/#mining` and `/#markets → /get-ccx`, `/community#exchanges → /get-ccx#buy`.

### 3.2 Navigation

Header (matches the wallet: mark + wordmark left, few links right):
`Wallets · Earn · Get CCX · Docs · Community ▾ (Channels, Team, Roadmap, Labs, Media, Donate, Branding)` + theme toggle + amber pill **Open web wallet**.

Footer: four columns (Product, Get involved, Developers, Legal) always visible; amber-dot strip above it; copyright line unchanged.

Docs links all point at the Fumadocs wiki (`https://concealnetwork.github.io/conceal-wiki/…` today; a single `DOCS_URL` constant so it can move to `docs.conceal.network`). Support links point at `https://conceal.network/support` today via a `SUPPORT_URL` constant so they can flip to `support.conceal.network` when the rebuilt help desk launches.

---

## Part 4 — Architecture

### 4.1 Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 16 (App Router), static export** | Same stack as conceal-wiki and conceal-support; every page is real HTML with metadata; deploys to any static host (current LiteSpeed host, GitHub Pages, Cloudflare Pages) |
| Styling | Tailwind CSS 4 + the wallet's CSS variables | Identical token layer to the wallet |
| Fonts | `geist` npm package (self-hosted) | No Google Fonts requests |
| Icons | `lucide-react` + inline brand SVGs | No cdnjs |
| Content | Typed data modules under `content/` (team, roadmap, exchanges, wallets, videos, donations, labs) | One place to edit; typed; testable |
| Live data | Client components fetch `explorer.conceal.network/daemon/getinfo` (CORS `*`) and `services/pools/data`; price via CoinGecko with CoinPaprika fallback. All optional — pages render fully without them | Same sources as today minus the allorigins proxy. If the pools endpoint still lacks `Access-Control-Allow-Origin` in production, ask the explorer maintainer to add it (one header) instead of proxying through a third party |
| i18n | English only at launch; structure supports `/[locale]` later via `next-intl` if the community wants it | The current DOM-rewriting approach is the source of most bugs; static translations of marketing copy in 12 languages have not been maintained (roadmap copy is English-only already) |
| Tests | `node --test` for content-data invariants (unique ids, https-only links, contract-address checksums), static-export smoke test | Mirrors conceal-wiki's verify scripts |

### 4.2 Project layout

```
conceal-website/
  app/
    layout.tsx            fonts, theme script, header, footer, metadata defaults
    page.tsx              home
    about/ manifesto/ wallets/ earn/ messaging/ get-ccx/ roadmap/ team/
    community/ labs/ media/ donate/ branding/ terms/ privacy/  (page.tsx each)
    not-found.tsx
    sitemap.ts  robots.ts  opengraph-image.tsx
    globals.css           wallet tokens + .glass/.keycap/.eyebrow utilities
  components/
    site-header.tsx  site-footer.tsx  theme-toggle.tsx
    hero.tsx  network-status-card.tsx (client)  price-strip.tsx (client)  pools-table.tsx (client)
    section.tsx  eyebrow.tsx  glass-card.tsx  pill-button.tsx  copy-field.tsx (client)
    deposit-calculator.tsx (client)  roadmap-timeline.tsx  team-grid.tsx  video-card.tsx (client)
    icons/brand.tsx
  content/
    site.ts (URLs, socials, constants)  team.ts  roadmap.ts  wallets.ts  markets.ts
    mining.ts  videos.ts  labs.ts  donations.ts  manifesto.ts  legal.ts
  lib/
    format.ts (hashrate, numbers, time-ago)  explorer.ts  price.ts  deposits.ts (rate formula)
  public/
    brand/ (logo.svg, conceal-mark.svg, conceal-coin.png, PNG downloads)
    images/ (team, labs, partners, media thumbnails — copied from the current site)
  tests/ content.test.ts  export.test.ts
  docs/ (this plan + reference)
```

### 4.3 Hosting and cut-over

1. Build with `next build` (static export to `out/`).
2. Deploy `out/` to the document root of conceal.network; keep `/support`, `/wiki`, `/paperwallet`, `/marketplace` as they are (they are separate apps under the same host).
3. Add the redirects from §3.1 in `.htaccess` (LiteSpeed honours Apache rules).
4. Because output is static, GitHub Pages / Cloudflare Pages mirrors work unchanged — no hostname sniffing.
5. Content updates are pull requests to `content/*.ts`; a GitHub Action builds and checks links (reuse conceal-wiki's `check-external-links.mjs`).

---

## Part 5 — Improvements over the current site (summary)

| Area | Today | New |
| --- | --- | --- |
| Discoverability | Empty HTML, no metadata | Static HTML per page, titles, descriptions, OG image, sitemap, robots |
| Brand | Neon/glow, Poppins, mismatched palette | Wallet tokens, Geist, coin hero, glass cards, light/dark |
| Live data | Price only; pools via third-party proxy | Network status card (height, block age, deposits locked, version), pools, price — all direct |
| Navigation | 27 items in 4 dropdowns + hidden mobile footer | 5 top-level + 1 dropdown; footer always visible |
| Privacy hygiene | cdnjs, Google Fonts, allorigins, auto-loading YouTube | Self-hosted fonts/icons, click-to-load video, no proxies |
| Get CCX | Split across home, community tabs, footer | One page with mine / buy / swap and contract addresses |
| Content ops | Copy embedded in JSX | Typed content modules + tests |
| Accessibility | Inverted headings, hover-only reveals, colour-only status | Semantic headings, focus-visible styles, reduced-motion respected, text + dot status |
| Hosting artefacts | 502/504/508, Pages shim | Removed |

---

## Part 6 — Open items for the team (not decided by this plan)

1. **Deposit rates on the site.** The wiki deliberately does not quote a standing rate. The current homepage shows a full tier table. The rebuild keeps the calculator on `/earn` with a dated "as displayed on 2026-09-06 — confirm in your wallet" caption. Decide whether to keep, soften, or remove.
2. **Exchange and DEX list.** Several entries look defunct (Bakeryswap/BUSD, legacy 1inch and PancakeSwap domains). The rebuild carries them into `content/markets.ts` with an `active` flag; the team should prune.
3. **Team page.** ThrownLemon's portrait is a media image; confirm current roster and photos.
4. **Legal.** Terms say "we do not collect or retain personal data"; the privacy policy says anonymised server logs are kept and is dated 2021. Both need a review pass; the rebuild carries the text as-is with an updated "last reviewed" date placeholder.
5. **Docs URL.** Plan uses the GitHub Pages wiki URL; a `docs.conceal.network` CNAME would make links permanent.
6. **Pools CORS.** One `Access-Control-Allow-Origin: https://conceal.network` header on the explorer removes the last third-party proxy.
7. **Partners.** ERGO, Crypto.com, CryptocurrencyCheckout logos are carried over; confirm these are still partnerships.
8. **Languages.** English-only at launch; if translations are wanted, decide which locales are actively maintained.
