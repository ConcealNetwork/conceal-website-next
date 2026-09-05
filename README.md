# conceal-website-next

The rebuilt public site for https://conceal.network. **Preview:** https://concealnetwork.github.io/conceal-website-next/

This repo is the proposed replacement for [ConcealNetwork/conceal-website](https://github.com/ConcealNetwork/conceal-website) (the current Vite SPA). It is kept separate so the production repo is untouched while the rebuild is reviewed. — Next.js 16 static export, Tailwind 4, Geist, using the design tokens of wallet.conceal.network.

* Plan and current-site audit: [docs/WEBSITE-REBUILD-PLAN.md](docs/WEBSITE-REBUILD-PLAN.md)
* Verbatim inventory of the old site's content: [docs/reference/current-site/CONTENT-INVENTORY.md](docs/reference/current-site/CONTENT-INVENTORY.md)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run verify     # lint + types + static build + tests
```

`npm run build` writes a fully static site to `out/` (with `.htaccess` redirects for the old routes). The export test needs the build to have run first.

## Where things live

| Path | What |
| --- | --- |
| `content/*.ts` | All copy and data: nav, socials, wallets, markets/DEX/contracts, mining configs, team, roadmap, labs, videos, donations, manifesto, legal. Edit these to change the site. |
| `app/*/page.tsx` | One folder per route. Pages are server components; live widgets are client components. |
| `components/` | Header, footer, theme toggle, live widgets (`network-status-card`, `price-strip`, `pools-table`), `deposit-calculator`, `copy-field`, `video-card`, shared `ui.tsx` primitives. |
| `lib/` | Formatting, deposit-rate formula, explorer/price fetchers. |
| `app/globals.css` | Wallet tokens (`:root` / `[data-theme=light]`), `.glass`, `.keycap`, `.eyebrow`, `.pill`. |
| `public/brand/` | Logo, mark, coin render, OG image (regenerate with `scripts/og.html` + headless Chrome). |
| `tests/` | Content invariants (https-only links, address formats, images exist, rate table) and export checks (every route has title/description/og/h1, no CDN fonts). |

## Live data

Fetched by the browser, all optional — pages render without them:

* `explorer.conceal.network/daemon/getinfo` — height, deposits locked, difficulty, tx count, version (CORS `*`).
* `explorer.conceal.network/services/pools/data` — pool table. **Currently lacks `Access-Control-Allow-Origin`**, so the table shows a link to the explorer until that header is added server-side.
* CoinGecko → CoinPaprika fallback for the price strip.

## Deploy

Copy `out/` to the document root. `/support`, `/wiki`, `/paperwallet` and `/marketplace` are separate apps on the same host and are left alone by the `.htaccess` rules.
