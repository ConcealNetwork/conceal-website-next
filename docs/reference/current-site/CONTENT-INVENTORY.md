I have read the entire application section (14843–24088). Lines 15207–16457 are `clsx` + `tailwind-merge` vendor code inlined in the app chunk; everything else is app code. Below is the complete inventory.

# Conceal.Network — production bundle content inventory

Source: `/tmp/site.pretty.js`, app code lines 14843–24088. Component-name → route mapping confirmed at lines 24044–24075. Every page except `/` and the error pages uses the same shell: `<Zi forceBackground="black">` header, `<main class="flex-1 pt-24">`, `<fr>` footer, `<yo>` left quick-nav (omitted on `/about` and `/manifesto`), `<Co>` right social rail, `<mo>` back-to-top button, and `window.scrollTo(0,0)` on mount. Every inner page section has the same hero backdrop: `bg-[url('/images/background_bw.jpg')] bg-center bg-cover` with `backgroundAttachment: fixed` plus a `bg-black opacity-10` overlay, content in `max-w-[1200px]`.

Common "page hero" pattern (used on about/branding/community/donate/earn/labs/media/messaging/roadmap/team): eyebrow `<span class="text-[1.4rem] text-[rgba(255,255,255,0.7)] uppercase tracking-[0.2rem]">`, then `<h1 class="text-[4rem] md:text-[5rem] text-white [text-shadow:0_0_24px_rgba(0,0,0,0.9)]">` with accent words in `text-[var(--color1)] font-semibold`, then a row of `Button` (`z`) components.

`pa` (SectionTitle) has two variants: default = `<h3 text-[3rem] color1 center mb-[-2rem]>{subtitle}</h3><h1 text-[6rem] white center>{title}</h1>` with heavy black text-shadow; `withDescription` = 2-col grid `[1fr_2fr]`, `<h2>` with `border-b-2` in color1 at 90% width + description `<p text-[1.7rem] text-[#757575]>` sliding in from right.

`R` (AnimatedElement) = scroll-triggered CSS animation wrapper; types used: `fadeIn`, `slideInLeft`, `slideInRight`, `rotateInY`, `crtPowerOn`, `dragText`; speed `slow|normal|fast`; classes `anim anim_<type> anim_<speed> anim_show`; perspective parent gets `anim_perspectiveParent`.

---

## `/` — Home (`ko`, wrapped by splash `Io`)

Order of sections in `<main>`: Hero (`Fa`) → Features (`Ea`, id `features`) → Wallets (`po`, id `wallets`) → Mining (`oo`, id `mining`) → Markets (`Ua`, ids `markets`, `buyingwCCXPOLYGON`, `buyingwCCXBNB`, `buyingwCCXETH`) → Partners (`so`, id `partners`) → Helpdesk (`Pa`, id `helpdesk`) → Crypto price widget (`oa`, id `cryptoWidget`). Then footer, left nav `yo`, right social rail `Co`, back-to-top `mo`.

Header on home is transparent until scrolled past hero (`Eo` hook: `scrollY > hero.offsetTop + hero.offsetHeight`) then `bg-[rgba(0,0,0,0.6)]`.

Every home section uses the same gradient: `linear-gradient(to bottom, rgba(34,34,34,1) 0%, rgba(34,34,34,0) 30%, rgba(10,10,10,0.3) 30%, rgba(10,10,10,1) 100%)` over `bg-[var(--color-bg-primary)]`, `py-16 px-4`, `border-b border-[rgba(255,255,255,0.2)]` (features/helpdesk use 0.1).

### Splash screen (`Io` / `No` / `Po`)
- Full-screen `fixed inset-0 z-[9999] bg-black`; background image `/images/CNGraySolidOptimized.svg` at `opacity-[0.15]`, `backgroundSize: auto 100%`, plus `bg-black/50` overlay.
- Loader `#loader` 150×150px: three concentric spinning rings (`border-[3px] border-transparent`, `borderTopColor` color1 / color2 / color1), animations `spin 2s` + `glowPulse1 2s`, `spin 3s` + `glowPulse2 2.5s`, `spin 1.5s` + `glowPulse3 1.8s`. glowPulse keyframes = drop-shadow 8/12px → 16/24/32px of color1/color2 (inline `<style>`).
- Logic: shows only on `/`; `showOnlyOnce` with cookie `splash-shown=true` (expiry `24` h → `er(24)` = 1440 min; cookie set with `path=/;SameSite=Strict;Secure`). If cookie present, skipped entirely. Otherwise waits until `document.readyState === 'complete'` AND `≥ 2000ms` (`minDisplayTime`) AND `waitForAppReady` (home `onReady` fired after double rAF), polling every `50ms`; then adds `scale-[2] opacity-0` (`transition-all duration-1000`), and after `600ms` fade calls onComplete. Home content sits under it with `opacity-0 pointer-events-none fixed inset-0 z-0` until done, then `opacity-100 transition-opacity duration-800`.

### Hero (`Fa`) — `min-h-[70vh]`
- `#herobg`: `/images/hero-bg-new.jpg`, `bg-center bg-cover opacity-30`; gradient overlay `rgba(10,10,10,0.4)→0.2→0.4`; two blurred orbs: `top-1/4 left-1/4 w-96 h-96 bg-[var(--color1)]/10 rounded-full blur-3xl` and `bottom-1/4 right-1/4 … bg-[var(--color2)]/10`.
- `<h2 class="text-[5.8rem] md:text-[7rem] lg:text-[8rem] font-semibold text-white">` = "Conceal" + `<span color1>.Network</span>`.
- Tagline `<p uppercase tracking-[0.3rem] text-[#E0E0E0] text-[1.6rem] md:text-[1.8rem]>`: **"Privacy-Protected De-Fi & Encrypted Communications"**
- Buttons (variant `primary`): `fas fa-wallet` **"Get Started"** → `/#wallets`; `fas fa-info-circle` **"Learn More"** → `/#features` (targetId features).
- Bottom chevron `fas fa-chevron-down animate-bounce` link `#features`, aria "Scroll to features", `textShadow: var(--color1-glow)`.

### Features (`Ea`, `#features`)
- Title: subtitle **"We are about"**, title **"PRIVACY!"**
- `wa` block: left `/images/Cham-512.png` alt "Conceal Network chameleon mascot" (rotateInY slow, max-w 400px); right three paragraphs (`data-tkey` about1/about2/about3, `text-[1.7rem] text-[#B0B0B0] text-justify`):
  1. "Conceal Network is a secure peer-to-peer privacy framework empowering individuals and organizations to anonymously communicate and interact financially in a decentralized and censorship resistant environment."
  2. "Conceal Network powers the $CCX cryptocurrency which is an open source, privacy protected digital cash system that mimics physical cash; nobody knows where you store or spend your $CCX. All transactions, deposits and messages on Conceal Network are untraceable, tamperproof and operate with no central authority through the use of cryptographic protocols, which makes the chameleon a mascot of choice."
  3. "Conceal Network is a community driven, truly decentralized blockchain bank accessible to everyone regardless of social or financial status and geographic location. No one owns Conceal Network and everyone can participate for free."
- Two feature columns (`max-w-[66%]`):
  - `fas fa-money-check-alt` + `<h3 uppercase color1 text-[2.4rem]>` **"Banking: Conceal-Earn"** — "Deposits form the backbone of the Conceal ecosystem, providing users with a decentralized and egalitarian form of cold staking that earns interests on locked deposits."
  - `fas fa-comments` + **"Encrypted Messages"** — "A truly private, decentralized, anonymous, untraceable, and end-to-end encrypted messaging service that operates on the blockchain while allowing messages that self-destruct."
- `Ta` **Compound Interest Calculator** (`<form id="compoundInterestCalc">`, `max-w-[66%]`):
  - Inputs: "Deposit" `#nPrincipal` number (default 20000, min 1, max 9999999) "CCX"; "for" `#nMonths` (default 12, min 1, max 12) "Months". Live output: "Total: `#nTEA` CCX Profit: `#nProfit` CCX".
  - Rate formula (`ma(principal, months)`): base = 0.029 if principal < 10,000; 0.039 if 10,000–19,999; 0.049 if ≥ 20,000. `rate = ((base + (months-1)*0.001) / 12) * months`. Total = `principal * (1 + rate)`. (i.e. +0.1% APR per extra month of term; max 12 months.)
  - Tiers table (`ga`): Tier 1 — "Under 10,000 CCX", APR 2.90%, Max Interest 4.00%, example 5,000 CCX; Tier 2 — "10,000 - 19,999 CCX", 3.90%, 5.00%, example 10,000 CCX; Tier 3 — "Over 20,000 CCX", 4.90%, 6.00%, example 20,000 CCX.
  - Desktop table (hidden md:block): header rows "Compound Level", "Principal", "Base/APR", "Example", "Maximum Interest", "Duration: Months" with Interest/Total per tier; 12 body rows (month 1–12) with cell background `rgba(0,255,0, month*mult/87)` (mult 2.9/3.9/4.9). Mobile: per-tier cards with "Sample Returns (First 6 months):" and note "Scroll horizontally on desktop to see full table with all months".

### Wallets (`po`, `#wallets`)
- Title: subtitle **"Using Conceal"** (tkey usingConceal), title **"Wallets"** (tkey rWallets). Content `max-w-[66%]`.
- `uo` **"Conceal-Desktop | Full-Node Graphical Wallet"** — "Conceal Desktop is the central point of interaction for the primary features of Conceal and is available for all major platforms. With Conceal Desktop you can send and receive CCX and encrypted secure messages, and manage your deposits." Image `/images/newgui678.png` (alt "Conceal GUI", crtPowerOn fast). Buttons (variant download, all → `https://github.com/ConcealNetwork/conceal-desktop/releases/latest`): `fab fa-windows` Windows, `fab fa-ubuntu` Ubuntu/Linux, `fab fa-apple` MacOS.
- `fo` **"Conceal-Core | Full-Node Command Line Wallet"** — "Conceal-Core is the heart of our peer-to-peer privacy-preserving network. It's a full local node of our network." Image `/images/wallets-cli.jpg` (alt "Conceal CLI", crtPowerOn slow). Buttons (all → `https://github.com/ConcealNetwork/conceal-core/releases/latest`): Windows, `fab fa-linux` Linux, MacOS.
- `V` **"Web Wallet & Paper Wallet"** — "Conceal Web Wallet runs in your Browser on any device, Mobile, PC or Mac! It is completely Client-Side, stores your encrypted wallet keys on your device, and is the perfect lightweight alternative to the Full Node Wallet. The Conceal Paper wallet is the easiest way to create an offline wallet with simple Key generation tools." Image `/images/webwallet.png`. Buttons: `fas fa-paper-plane` "Offline/Paper" → `https://conceal.network/paperwallet`; `fab fa-chrome` "Web Wallet" → `https://wallet.conceal.network/`.
- `H` **"Conceal-Mobile | Lite Wallet"** (rendered outside the 66% container) — "Conceal-Mobile is a wrapped version of our web wallet." Buttons: `fab fa-android` "Android APK" → `https://github.com/ConcealNetwork/conceal-wallet-cordova/releases/latest`; `fab fa-android` "F-Droid" → `https://f-droid.org/packages/com.concealnetwork.concealmobile/`; `fab fa-apple` "iOS" → `https://wallet.conceal.network/`.

### Mining (`oo`, `#mining`) — `max-w-[66%]`
- Title: subtitle **"Getting CCX"** (tkey gettingCCX), title **"Mining"** (tkey rMining).
- `ao` **"Quick Start"** (tkey quickStart), 2-col grid of miner cards (`<h4 text-[2.1rem] color1>` link + `<pre class="font-[Consolas,Serif] text-[1.3rem] bg-[#111] border border-[#444] rounded p-4">`):
  - **XMRStak** → `https://github.com/fireice-uk/xmr-stak/releases`
    ```
    "pool_list": [
      {
          "pool_address": "pool.conceal.network:3333",
          "wallet_address": "YOUR_WALLET_ADDRESS",
          "rig_id": "YOUR_WORKER_NAME",
          "pool_password": "x",
          "use_nicehash": false,
          "use_tls": false,
          "tls_fingerprint": "",
          "pool_weight": 1
      },
    ],
    "currency": "cryptonight_gpu",
    ```
  - **CryptoDredge** → `https://github.com/CryptoDredge/miner/releases`
    ```
    c:/cryptodredge/CryptoDredge.exe -a cngpu 
    -o stratum+tcp://pool.conceal.network:3333 
    -u wallet_address -p WorkerName 
     --api-type ccminer-tcp -b
    ```
  - **XMRigCC** → `https://github.com/Bendr0id/xmrigCC`
    ```
    xmrigDaemon --no-cpu -a cn/gpu 
    -o pool:port -u wallet_address -p x -k 
    --cc-url=127.0.0.1:3344 
    --cc-access-token=your_token 
    --cc-worker-id=worker_name pause
    ```
  - **SRBMiner** → `https://www.srbminer.com/`
    ```
    SRBMiner-MULTI.exe --algorithm gpu 
    --pool pool.conceal.network:3333 
    --wallet "YOUR_WALLET_ADDRESS" 
    --gpu-tweak-profile 5
    ```
- Paragraph: "The easiest way to get CCX is to mine with CPU or GPU using one of the miners that support CCX. Check out our [documentation](https://conceal.network/wiki/doku.php?id=mining) for more detailed information about mining CCX." (tkeys aboutGettingCCX / rDocumentation / aboutGettingCCX2)
- `no` **"Mining Pools"** table `#poolsTable` (lazy-loaded via IntersectionObserver threshold 0.1, fetched once): columns `fa-server` Pools | `fa-th-large` Height | `fa-coins` Fee | `fa-tachometer-alt` Hashrate | `fa-users-cog` Miners. Rows sorted by `config.poolFee` asc. Pool name links to `http://${info.host}` (note plain http). Hashrate formatted with units ` H, kH, MH, GH, TH, PH, EH, ZH, YH`. States: "Loading pools..." / "No pools available". Mobile: cards with `text-[orange]` name (hard-coded orange, not var).

### Markets (`Ua`)
- `Va` section wrapper: `pa` title + `flex flex-wrap justify-center gap-4` of `download`-variant buttons; optional "More" link (`fa fa-plus` + "More", tkey rMore) → `https://conceal.network/community/#exchanges`.
- `#markets` — subtitle **"Buy CCX"** (tkey rBuyCCX), title **"Markets"**: `nonKYC BTC/CCX` → `https://nonkyc.io/market/CCX_BTC`; `nonKYC USDT/CCX` → `https://nonkyc.io/market/CCX_USDT`; `Nonlogs USDT/CCX` → `https://nonlogs.io/trade/CCX-USDT`.
- `#buyingwCCXPOLYGON` — subtitle **"Buy wCCX"**, title **"Polygon"**: SushiSwap → `https://app.sushi.com/`; Uniswap → `https://app.uniswap.org/` (generic, no token preselected).
- `#buyingwCCXBNB` — **"Buy wCCX"** / **"Binance Smart Chain"** (showMore): 1Inch → `https://1inch.exchange/#/wCCX/BNB`; Pancakeswap → `https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x988c11625472340b7b36ff1534893780e0d8d841`; Bakeryswap → `https://www.bakeryswap.org/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x988c11625472340b7b36ff1534893780e0d8d841`; MEXC DEX → `https://www.mexc.com/dex/trade?pair_ca=0x523d5d8ae2f38dd2d8900eb195c132ff19bf6d18&chain_id=56&token_ca=0x988c11625472340b7b36ff1534893780e0d8d841`; KyberSwap → `https://kyberswap.com/swap/bnb/-to-0x988c11625472340b7b36ff1534893780e0d8d841`.
- `#buyingwCCXETH` — **"Buy wCCX"** / **"Ethereum"** (showMore): 1Inch → `https://1inch.exchange/#/r/0x9be82c0E5B75C53F32E63b40442E9dA8cCA06f21/ETH/wCCX`; Uniswap → `https://app.uniswap.org/#/swap?outputCurrency=0x21686f8ce003a95c99acd297e302faacf742f7d4`.

### Partners (`so`, `#partners`)
- Title: subtitle **"Working Together"**, title **"Our Partners"**. Three logos (`flex-1 min-w-[200px] max-w-[300px]`): ERGO `/images/partners/ERGO.png` → `https://ergoplatform.org`; Crypto.com `/images/partners/CRYPTO.png` → `https://crypto.com/price/conceal/`; cryptocurrencycheckout.com `/images/partners/cyprtocurrencycheckout.png` (sic, typo in filename) → `https://cryptocurrencycheckout.com/`.

### Helpdesk (`Pa`, `#helpdesk`)
- `<h2 text-[3rem] text-[#E0E0E0]>`: "Do you have a problem or need to contact us?" `<br>` "Use our helpdesk" (tkeys helpdeskTitle/helpdeskText). Button primary `#helpdeskButton` **"Send Ticket"** (tkey helpdeskBtn) → `https://conceal.network/support/`.

### Crypto price widget (`oa`/`aa`, `#cryptoWidget`)
- Card `bg-[#111] border border-[#444] rounded-lg p-8`: `<h3 text-[2.4rem] color1 uppercase>` "Conceal Network (CCX)", price `text-[4rem] text-white font-bold` `$X.XXXX USD` (4 decimals, tkey usd), 24h change `text-[1.8rem]` green/red `+X.XX% (24h)`, "Data provided by" (tkey dataProvidedBy) + provider badge: CoinGecko logo `/external/logo/coingecko-logo.svg` → `https://www.coingecko.com/en/coins/conceal`, or `/external/logo/coinpaprika.ico` + "CoinPaprika" → `https://coinpaprika.com/coin/ccx-conceal/`. States "Loading price..." / "Price data unavailable".

### Left quick-nav (`yo`, `ho`) — `fixed top-1/2 left-[1.5rem]`
Round icon buttons, alternating color1/color2 with glow `0 0 10px var(--colorN-glow-rgba)`, hover label: **Buy** `fa fa-cart-shopping` → `/#markets`; **Earn** `fa fa-money-bill-trend-up` → `/#features`; **Hodl** `fa fa-wallet` → `/#wallets`; **Build** `fa fa-trowel-bricks` → `/labs`. On mobile (<768px) fades out after 2s idle, reappears on scroll.

### Right social rail (`Co`, `bo`) — `fixed top-1/2 right-[1.5rem]`
Documentation `fab fa-wikipedia-w` → `https://conceal.network/wiki/doku.php`; Discord `fab fa-discord` → `http://discord.conceal.network` (plain http); Telegram → `https://t.me/concealcommunity`; Twitter → `https://twitter.com/ConcealNetwork`; Medium → `https://concealnetwork.medium.com/`; Substack (inline SVG) → `https://substack.com/@concealnetwork`; Github → `https://github.com/ConcealNetwork`. Same mobile fade behaviour.

### Back-to-top (`mo`)
`fixed right-3 bottom-3` round `bg-[var(--color1)]` button with `fas fa-arrow-up`, appears when `scrollY > 300`, hover `scale-[1.3]`.

---

## `/about` — `Ro` / `Lo`

- Eyebrow **"ABOUT CONCEAL"**; h1: "Privacy-Protected `<span color1>De-Fi</span>` & Encrypted `<span color1>Communications</span>`".
- Buttons: `slideToId` `fab fa-leanpub` **"Learn More"** → `#about-about` (offset 120); `slide` `fab fa-connectdevelop` **"Use Conceal"** → `/#wallets`; `slide` `fas fa-microchip` **"Get CCX"** → `/#mining`.
- `#about-about` withDescription title **"About"**: "Conceal Network provides the ability for individuals to communicate and financially interact with each other in a privately, anonymous and decentralized manner."
- `<h3 text-[2.4rem] color1>` **"What is Conceal?"** (tkey about_title):
  - "Conceal is a decentralized privacy-protected network designed for De-Fi and encrypted communications. It offers protocol-level private transactions, blockchain deposits and on-chain encrypted messages without a central authority."
  - "Conceal is censorship-resistant and accessible by anyone regardless of their geographic location or status. All interactions, transactions and messages are private and untraceable."
  - "Conceal is powered by open-source code, community-driven and truly decentralized."
  - (dragText) "No one owns Conceal, everyone can take part."
- `<h4 text-[2rem] color1>` sections (tkeys vision_/mission_/privacy_/community_/decentralization_/revolution_ title+desc):
  - **VISION** — "Conceal ($CCX) envisions a future where privacy is not just a luxury but a fundamental human right, especially in the digital realm. Inspired by the Cypherpunk Manifesto, Conceal is dedicated to building anonymous systems and defending privacy with cryptography. We believe in empowering individuals with tools and technologies that enable them to protect their privacy, resist surveillance, and maintain control over their personal data."
  - **MISSION** — "Our mission is to provide individuals with a privacy-focused cryptocurrency that embodies the principles of the Cypherpunk movement. By leveraging advanced cryptographic techniques, Conceal ensures that every transaction is private, secure, and censorship-resistant. We aim to create a decentralized financial ecosystem where users have full control over their funds and can transact freely without fear of surveillance or interference."
  - **PRIVACY BY DESIGN** — "Conceal's privacy design is rooted in the Cypherpunk ethos, focusing on anonymity, decentralization, and cryptographic privacy. With unique one-time addresses for each payment, Conceal ensures that transactions are unlinkable and untraceable, preserving user privacy in the digital age. Our use of ring signatures and cryptographic signatures further enhances privacy, making it virtually impossible for third parties to monitor or track transactions."
  - **COMMUNITY & DEVELOPMENT** — "At the heart of Conceal is a vibrant and passionate community of individuals dedicated to preserving privacy and advancing the Cypherpunk agenda. Our developers are committed to writing code that defends privacy and empowers users, following the Cypherpunk tradition of publishing open-source software for the benefit of all. We believe in decentralization not just as a technical concept but as a social movement, where individuals come together to reclaim their privacy and freedom."
  - **DECENTRALIZATION & RESISTANCE** — "Conceal is more than just a cryptocurrency; it's a symbol of resistance against centralized control and surveillance. With a decentralized network powered by blockchain technology, Conceal ensures that no single entity or authority can dictate the rules or monitor transactions. We stand firm in our commitment to decentralization and resistance, empowering individuals to take back control of their financial sovereignty."
  - **JOIN THE PRIVACY REVOLUTION** — "In a world where privacy is increasingly under threat, Conceal offers a beacon of hope for those who value freedom, anonymity, and privacy. Join us in our mission to build a more private and secure future, where individuals have the power to transact freely and privately, without fear of censorship or surveillance. Together, we can make privacy a reality in the digital age."
- Layout note: `/about` does NOT render the left quick-nav (`yo`).

---

## `/roadmap` — `Js` / `qs`

- Eyebrow **"CONCEAL ROADMAP"**; h1: "`<color1>The Birth</color1>` of something `<color1>Amazing.</color1>`"; then `<h2 text-[3.2rem] color1 center>` "CONCEAL ROADMAP".
- Vertical timeline: center line `w-[2px] bg-[#19383b]`, items alternate left/right (odd index = `flex-row-reverse`), 12px square marker (`bg-white` for completed, `bg-[var(--color1)]` for inprog/activ). Item text `<h6 font-semibold>` "`{date}, {title}`" + " — {description}" (description becomes external link if `url`). Items scale 1→1.22 as they approach viewport centre (`Vs` hook). "Achieved Milestones" separator has `border-b-[5px] border-dashed border-white`; "Future Milestones" has `border-t-[5px] border-dashed color1`.
- Data (`zs`), in order (status):
  1. April 2018 — Initial commit — "The first release candidate, Testnet, Daemon, Miner and Wallet are launched. Something really great begins." (completed)
  2. May 2018 — Mainnet launched — "On 23rd May 2018 mainnet is launched. First block is officialy mined by the miners." (completed)
  3. June 2018 — Encrypted Messaging & Deposits — "Innovative DeFi features utilizing cold-staked deposits that pay interest and self-destructing encrypted messages are launched. Wow!"
  4. July 2018 — Website & Block Explorer — "The official website is born providing a central point of information for the project. The Block Explorer is released. We're on fire!"
  5. October 2018 — CN Fast — "CCX changes to CN Fast mining algorithm to avoid ASICs."
  6. November 2018 — Exchange Listing & Investments — "CCX is listed on the STEX exchange and the deposit system is revamped to support investments. Stock is rising!"
  7. February 2019 — CN Conceal — "CCX changes to CN Conceal mining algorithm to avoid ASICs and FPGA."
  8. March 2019 — Conceal Cloud — "Conceal Cloud is launched offering a secure, powerful and feature-rich web wallet for CCX. Adoption skyrockets!"
  9. May 2019 — Conceal Labs — "Conceal Labs is launched offering anyone the ability to get paid to build cool things with Conceal. The community grows!"
  10. July 2019 — CONCEAL MOBILE — "Conceal Mobile is launched offering a robust mobile wallet with encrypted messages. Messaging popularity explodes!"
  11. August 2019 — CONCEAL PAY — "Conceal Pay is launched making it simple for anyone to accept payments or donations in CCX. Volume expands!"
  12. December 2019 — CONCEAL ID — "Conceal ID is launched offering memorable branded addresses akin to usernames. Ease of use improves!"
  13. January 2020 — Daemon & Wallet Improvements — "Conceal Desktop v6 is released with varying interface and daemon improvements. We're getting fancy!"
  14. August 2020 — Wrapped CCX (wCCX) — "Wrapped CCX is created on ethereum blockchain allowing CCX owners to access DEFI on ETH!"
  15. August 2020 — wCCX on Uniswap and in Trustwallet — "wCCX is available on the hottest DEX at the time and added to Trustwallet."
  16. September 2020 — Deposits on Cloud & Mobile — "Cold staking came to cloud and mobile. You are able to earn interest from your phone!"
  17. October 2020 — CN GPU — "CCX changes to CN GPU mining algorithm to avoid ASICs and FPGA. Our fairest mining algorithm yet."
  18. Q4 2020 — Cloud & Mobile Self-destructing Messages — "Send messages to other users that self destruct after given time on Cloud wallets! (service retired)"
  19. Q1 2021 — Conceal Bridge — "Swap your CCX to wCCX and back the other way with our Bridge tool." url `https://bridge.conceal.network`
  20. Q2 2021 — CONCEAL LIVE — "Decentralized p2p and end to end encrypted platform for video / audio calls and messages. (service retired)"
  21. Q4 2021 — Conceal App — "Initial release of cross platform application with Wallet and News Feed as the first supported modules."
  22. Q1 2022 — Conceal App Deposits — "Conceal Blockchain Deposits Module released for the Conceal App!"
  23. Q2 2022 — Conceal Web Wallet — "Release of our 100% Client-Side Web Wallet for Conceal." url `https://wallet.conceal.network`
  24. Q3 2023 — Web wallet improvements — "Improving speed and making optimizations. Now send encrypted Messages from your smartphone" url wallet
  25. Q3 2024 — Web wallet improvements — "Improving anonymity by randomly picking nodes from a bigger list, now accessing SSL SmartNodes." url wallet
  26. Q3 2024 — Conceal Marketplace — "A great place to interact with other Concealers, Buy, Sell in a peer 2 peer way trading with your CCX!" url `https://conceal.network/marketplace`
  27. Q4 2024 — Web wallet improvements — "Now available in 14 languages. Access Deposits (view-only). Use qr code scanning feature to send messages. Get notified of new messages." url wallet
  28. Q2 2025 — Web wallet deposits — "Bringing deposits to client side web wallet" url wallet
  29. Q4 2025 — Conceal Labs — "Conceal Authenticator app is launched, your 2FA keys are now stored on the blockchain" url `https://f-droid.org/en/packages/com.acktarius.concealauthenticator/`
  30. Q1 2026 — Conceal Labs — "Conceal-Faucet-API is launched, "one stop shop" for developpers to create faucet or game rewards" url `https://github.com/ConcealNetwork/conceal-faucet-api`
  31. Summer 2026 — Web wallet 3.0 (Next Wallet) — "Enhancing user experience with new rendering technologies" (completed)
  32. Summer 2026 — Conceal Desktop 6.7.8 — "Ships with re-inforced Conceal Core 6.7.5: coinbase validation, checkpoint-zone input checks, and wallet/RPC/system improvements." (completed)
  33. (no date) — **Achieved Milestones** (status `done`, separator)
  34. (no date) — **Future Milestones** (status `activ`, separator)
  35. 2027 — Conceal Core — MDBX, GPU & P2P — "MDBX + migration tool, GPU sync offload + GPU mining onboard, then P2P code evolution" (inprog)
  36. (no date) — Conceal Lab project — "a one of a kind permissionless and decentralized app" (inprog)
  37. (no date) — Atomic Swaps — "Allowing you to exchange CCX with other blockchain tokens" (inprog)
  38. 2028 — Conceal Core — Checkpoint strategy — "Refresh tooling, bootstrap verification, then distribute signed checkpoints over P2P (no hardfork)." (inprog)
  39. 2029–2030 — Conceal Core — Hardfork — "New serialization tags, sidechain anchors, and post-quantum work" (inprog)

---

## `/team` — `Zs` / `Xs`

- Eyebrow **"CONCEAL TEAM"**; h1: "`<color1>Alone</color1>` we can do so little; `<color1>together</color1>` we can do so much."
- `pa` title **"Meet the team"**; grid `md:grid-cols-2 lg:grid-cols-3`. Card: `rounded-[2em] p-4 bg-[rgba(81,70,68,0.6)] hover:bg-[#2F4F4F]`; 300×300 round image `opacity-60 group-hover:opacity-100`, double ring `border-[13px] border-[#181A18]` + half-ring color1 top/right rotating -10deg → 350deg on hover; name `<h3 text-[1.625rem]>` with 30×2px color1 underline; role `uppercase italic text-white` → color1 non-italic on hover; socials (GitHub/Twitter, `text-black hover:text-color1 hover:bg-black`); description `text-2xl text-white`.
- Members (`Ys`):
  1. **krypt0x (aka 0x)** — HEAD OF OPERATIONS — `/images/teampage/krypt0x.png` — "I'm co-founder of Conceal Community. I'm curious about cryptography and privacy-enhancing techniques. I have been working on IT for more than two decades and became involved with blockchain technology early in its inception. My mission is to empower organizations with a culture of privacy-protection." — github `https://github.com/krypt0x`, twitter `https://x.com/Krypt0xChaos`
  2. **Taegus** — Head of Development — `/images/teampage/Taegus.png` — "I got involved with crypto in 2018. Came for the money, and stayed for the vision of Satoshi. You could say I am a true believer now. Found out about Conceal in 2019 and instantly fell in love with it. I have been helping ever since.Other than that I have finished university for computer science and have over 20 years of development experience. My passion now is advocating decentralization and privacy." — `https://github.com/taeguscromis`, `https://x.com/Taegus1`
  3. **Giomarx7** — Head of Community — `/images/teampage/Giomarx7.jpg` — "I started mining crypto in late 2016, did it mainly for the money but as I became more curious about the technology, I was eager to learn more, in 2018 I've found out about Conceal, this was a purpose worth fighting for, joined the team in 2024. Technology can enslave you, but it can also give you freedom and privacy #Conceal.." — `https://x.com/Giomarx7`
  4. **Mannan** — Community — `/images/teampage/Mannan.png` — "I began my crypto journey in mid-2017 and discovered Conceal in late 2020. In September 2021, I was promoted to join the core team to help our project grow. I've learned a lot over the years, and I'm still on a journey of learning and being the best I can be." — `https://twitter.com/CryptolordTG`
  5. **bomb-on** — Developer — `/images/teampage/bombon.jpg` — "Working in IT industry for more than 20 years, exploring the crypto world since 2016. as a miner and pools operator, joined CCX team in 2018 to help with macOS issues, currently focused on front-end development. Technical analysis enthusiast and very passionate about losing money while trading. Creating crappy art and shitty music." — `https://github.com/bomb-on`
  6. **ThrownLemon** — Developer — `/images/media/media_articles_02.png` (note: reuses a media image) — "With great power, comes great responsibility" — `https://github.com/ThrownLemon`
  7. **nullcrypto** — Lead Developer — `/images/teampage/nullcrypto.png` — "I just build things - Full Stack" — `https://github.com/nullcryptodev`, `https://x.com/_nullcrypto`
  8. **Acktarius** — Developer — `/images/teampage/Acktarius.png` — "I came late to the cryptocurrency world and joined Conceal mid 2021, having a very keen interest for its unique privacy features. I 'm very excited to bring my experience as R&D engineer and time spent programming as a hobby, to this community of talented, discreet, passionate and dedicated people." — `https://github.com/Acktarius`, `https://x.com/xchaps`
  9. **AxVultis** — Developer — `/images/teampage/AxVultis.png` — "I discovered Conceal in 2019 and joined the team in 2020 as a developer. I am contributing to this decentralized privacy focused project since then. I am a true defender of open source software." — `https://github.com/AxVultis`, `https://x.com/AxVultis`
- Below grid: withDescription title **"Team"**: "The Conceal Team is a group of dedicated Volunteers from the Community who have committed time and energy into managing the Development, Marketing, and Community Building efforts of the Conceal Network." Then two dragText paragraphs: "Conceal Team members operate as a DAO, or Decentralized Autonomous Organization, and each member will take on tasks that He or She can specialize in, voluntarily and without the presence of any third party or legal body. In order to further organize the day to day operations of our DAO, the Team has created Divisions with separate responsibilities so that members can further specialize in the overall development and growth of the network." / "Conceal Team members are from all four corners of the world and are spread out around many varied geographical locations! This means that organizing events and other types of online gatherings can be tricky, but not impossible. Anyone can join as long as they are willing to commit more time into the Conceal ecosystem and have the necessary skill to help make it succeed!"

---

## `/community` — `Qo` / `Zo`

- Eyebrow **"CONCEAL COMMUNITY"**; h1: "Improving the World `<color1>Together</color1>`".
- withDescription title **"Community"**: "Conceal has a huge thriving community of awesome people that are sharing ideas, working together and helping each other regardless of where they are in their Blockchain journey. What are you waiting for?"
- Image `/images/community.png` alt "Conceal Community" (rotateInY slow).
- Tab switcher (`text-7xl font-light`, separated by "|"): **Social links** | **Exchanges** | **DEX** (default `socials`). Note: there is no element with `id="exchanges"` — footer/markets links to `/community#exchanges` do not select the tab.
- `Xo` list block: `<h2 text-4xl uppercase text-white>` title; items white → color1 on heading hover, `hover:underline`.
- **Official** (`Wo`): Github `fab fa-github` → `https://github.com/ConcealNetwork`; Discord → `https://discord.gg/YbpHVSd`; Telegram News Channel → `https://t.me/concealnetwork`; Telegram Community → `https://t.me/concealcommunity`; Twitter → `https://twitter.com/ConcealNetwork`; Youtube → `https://www.youtube.com/channel/UC_YtRUcy0FR0yIc3H6DDxuw`; Facebook → `https://www.facebook.com/concealnetwork`; Medium → `https://medium.com/@ConcealNetwork`; Substack (SVG) → `https://substack.com/@concealnetwork`; BitcoinTalk `fab fa-bitcoin` → `https://bitcointalk.org/index.php?topic=4515873`; Conceal MarketPlace `fas fa-shopping-cart` → `https://conceal.network/marketplace`.
- **Exchanges** tab (grid `[10%_40%_40%_10%]`):
  - **Exchanges** (`Go`): nonKYC CCX/BTC → `https://nonkyc.io/market/CCX_BTC`; nonKYC CCX/USDT → `https://nonkyc.io/market/CCX_USDT`; nonlogs CCX/USDT → `https://nonlogs.io/trade/CCX-USDT`.
  - **Market Cap** (`Ko`): CoinMarketCap → `https://coinmarketcap.com/currencies/conceal`; CoinGecko → `https://www.coingecko.com/en/coins/conceal`; Crypto.com → `https://crypto.com/price/conceal`.
- **DEX** tab (grid `[10%_26.6%_26.6%_26.6%_10%]`):
  - **Polygon** (`qo`): SushiSwap - wCCX/USDC → `https://app.sushi.com/swap?tokens=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&tokens=0x137Ee749f0F8c2eD34cA00dE33BB59E3dafA494A&chainId=137`; SushiSwap - wCCX/USDT → `…tokens=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&tokens=0x137Ee749f0F8c2eD34cA00dE33BB59E3dafA494A&chainId=137`; Uniswap - wCCX/DAI → `https://app.uniswap.org/#/swap?inputCurrency=0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063&outputCurrency=0x137ee749f0f8c2ed34ca00de33bb59e3dafa494a&chain=polygon`; Uniswap - wCCX/USDC → `…inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=0x137ee…&chain=polygon`; Uniswap - wCCX/USDT → `…inputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&outputCurrency=0x137ee…&chain=polygon`.
  - **Binance Smart Chain** (`Jo`): PancakeSwap - wCCX/BUSD → `https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x988c11625472340b7b36ff1534893780e0d8d841`; PancakeSwap - wCCX/USDT → `…inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x988c…`; MEXC DEX - wCCX/BNB → `https://www.mexc.com/dex/trade?pair_ca=0x523d5d8ae2f38dd2d8900eb195c132ff19bf6d18&chain_id=56&token_ca=0x988c…`; KyberSwap - wCCX/BNB → `https://kyberswap.com/swap/bnb/-to-0x988c11625472340b7b36ff1534893780e0d8d841`.
  - **Ethereum** (`Yo`): Uniswap - wCCX/DAI → `https://app.uniswap.org/#/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x21686f8ce003a95c99acd297e302faacf742f7d4&chain=mainnet`.

---

## `/donate` — `ns` / `ts`

- Eyebrow **"CONCEAL COMMUNITY"**; h1 **"Marketing Fundraiser"**; button `slideToId` `fas fa-heart` **"Support us"** → `#donate` (the section itself).
- withDescription title **"Donations"**: "Conceal Network is a decentralized, privacy-preserving network that seeks to aid it's users in managing their finances and communications with ease. We believe privacy is a fundamental human right, and we are working towards expanding our Privacy-Preserving ecosystem and ensuring everyone can efficiently utilize it. Our overall vision is to give Freedom back to the People and to help them shield themselves from unauthorized monitoring."
- dragText paragraphs: "You can make a donation to Conceal with your cryptocurrency of choice and send your desired amount to one of our receiving addresses below. Your contribution, no matter how big or small, has the power to increase the adoption and development of the Conceal Network. All of the donations we receive will support the project so that we can offer better services to our community, boost liquidity, hire more talented developers, increase our social-media presence and bolster other marketing efforts." / "Make a contribution today and help us on the road to a better and brighter future for all Concealers." / "We thank you for your generosity and support!"
- `<h2 uppercase color1>` **"Please use one of the following addresses"**; `<h4 uppercase color1>` **"(Donations are not refundable)"**.
- Table container `bg-[#194652] rounded-lg`; desktop row grid `[3%_17%_9%_65%_3%]`: icon, name (color1, `text-[2.475rem]`), network lowercased (`#757575`), read-only input with address, copy button (`bg-[var(--color1)] text-black`, `fa-copy` → `fa-check` "Copied!" for 2000ms via `navigator.clipboard.writeText`).
- Addresses (`$o`):
  - Conceal (CCX) `/icons/ccx.svg` — `ccx7Mi9osGEiPkJ8Eq9ajfFFipavENjJ92Gf4xCmu4KXiExSjcWoSefCQYtcA2BUrTPjrMY5pssgMNPRxaR1DXtj3TvTJG6LRo`
  - Bitcoin (BTC) `/icons/btc.svg` — `bc1qsms9qapuja6zdp7v6cysznj229nhlezg98f7lr`
  - Monero (XMR) `/icons/xmr.svg` — `89Uw4SfFTTm1kcyP5ZhYwCgvMvvmLvM1nfWVxqVTpDqYMjHpwfK3ryaLNeTFk4kjScFoSip5T2TgdGAithV4GUo5Ga9FcRL`
  - Ethereum (ETH) `/icons/eth.svg` — `0x926e2b68a27426C2c26Ac7F98D40EB36939Bd815` — network Polygon
  - Tether (USDT) `/icons/usdt.svg` — same 0x926e… — Polygon
  - USD (USDC) `/icons/usdc.svg` — same — Polygon
  - Dai (DAI) `/icons/dai.svg` — same — Polygon

---

## `/branding` — `Uo` / `Ho`

- Eyebrow **"CONCEAL BRANDING"**; h1: "The look of `<em color1>privacy</em>`"; button `slideToId` `fas fa-book` **"Click to learn more"** → `#branding-about`.
- withDescription title **"About"**: "Conceal, to keep secret, or hidden from view. Not only is this an apt description of our Project, but is also the leading influence in our design. Backgrounds are often darkened, shrouded, or obscured in some way. Text is often a Grey or White that stands out on the blackened backgrounds. The deep Yellow is used sparingly, sometimes as important keywords or as borders around important information. The careful use of the rich Yellow along with ample shades of greys and blacks implies that though much is hidden, what lies underneath is truly special."
- **"The Conceal Logo"**: two 250px circles (black bg, white bg) with `/images/branding/logo.svg` at 80%; download list (`zo`, `download` attr): "Logo svg file" `/images/branding/logo.svg` (logo.svg); "Logo dark 1600x1600" `/images/branding/community-bbg-center-s-1600x1600.png` (logo_1600x1600.png); "Logo white 1600x1600" `/images/branding/community-1600x1600.png` (logo_1600x1600.png); "Logo dark 256x256" `/images/branding/community-bbg-center-256x256.png` (logo_256x256.png); "Logo white 256x256" `/images/branding/community-256x256.png` (logo_256x256.png).
- **"The Colours of Conceal"** — "Different colors tell different stories." Swatches 150×150 (`Vo`): Grey `#808080` (`bg-[#808080]`); Neon Cyan `#00F0FF` (but rendered with `bg-[var(--color1)]`, i.e. shows orange while labelled #00F0FF — inconsistency); Black `#000000`.
- Quote (`border-l-4 color1`, italic): "Arguing that you don't care about privacy because you have nothing to hide is no different from saying, you don't care about freedom of speech because you have nothing to say."
- **"The Fonts of Conceal"** (`Bo`): Poppins → `https://fonts.google.com/specimen/Poppins`; Lora → `https://fonts.google.com/specimen/Lora`; Montserrat → `https://fonts.google.com/specimen/Montserrat` (each with `fas fa-download` icon).

---

## `/labs` — `Ds` / `Es`

- Eyebrow **"CONCEAL LABS"**; h1: "Bring your dreams `<em color1>forward</em>`".
- Buttons: `slide` `fas fa-pencil-alt` **"Apply"** → `https://discord.gg/YbpHVSd`; `slideToId` `fas fa-flask` **"Projects"** → `#labsHeading`; `slideToId` `fab fa-leanpub` **"Learn More"** → `#labs-about` (offset 200).
- `#labs-about`: title **"About"** + "We strive to grow a broad ecosystem by supporting the community. Conceal Labs provides developers, entrepreneurs & creators with the jump start that they need to make vision a reality."
- Four alternating sprite/text blocks using `/images/labs/landingLabsScreenshots.png` (positions 0/-322px/-662px/-1002px, heights 322/340/340/265):
  - **Have an idea?** — "Do you have a project that involves Conceal in some way? [We want to hear about it!](https://discord.gg/YbpHVSd)"
  - **Would money help?** — "Sometimes money is just what it takes to get your idea off the ground."
  - **Get funded by us** — "Our creators set aside funds for the community to use for projects."
  - **Get listed by us** — "Get funded by us and we will list your project here on our website."
- `#labsHeading`: title **"Projects"** + "Check out some of the cool projects we have funded. [Apply to be next!](https://discord.gg/YbpHVSd)"
- `#labsProjects` (`bs`), each `<h1 text-[4rem] uppercase color1>` + description paragraphs + links + **"How it looks..."** image carousel (`ys`, prev/next + dots, images `${folder}/${pattern}_01..NN.png`):
  1. **`#authenticator` Conceal-Authenticator** — "Conceal-Authenticator is a secure 2FA (Two-Factor Authentication) app that leverages the Conceal Network blockchain to securely backup your 2FA shared keys using a built-in lite wallet." Link text "Visit the github repository for more info and direct apk download." → `https://github.com/Acktarius/Conceal-2fa-app/`. "More information about the app in the wiki page." → `https://github.com/Acktarius/Conceal-2fa-app/wiki` (wiki icon). "Download Conceal-Authenticator" f-droid → `https://f-droid.org/en/packages/com.acktarius.concealauthenticator/` - apk → `https://github.com/Acktarius/Conceal-2fa-app/releases/tag/v1.1.3` - apple-store → `https://apps.apple.com/us/app/conceal-authenticator/id6754612226`. Screenshots `/images/labs/ccxauthenticator/authenticator_01.png` … `_05.png`.
  2. **`#privacydefensor` Privacy Defensor** — "Privacy Defensor is an online arcade game inspired by the 80s to demonstrate a use case of Conceal-faucet-api. Users can get rewarded with 1 CCX, ideal for fueling transactions in the Conceal Authenticator app!" Link "Play the game, at this url:" → `https://privacydefensor.nodesandbits.tech/` (rendered with a GitHub icon even though not GitHub). Screenshots `/images/labs/privacydefensor/privacydefensor_01..03.png`.
  3. **`#assistant` Conceal-Assistant** — "Conceal-Assistant is an application made to help you oversee and manage your CCX-Box Node and Miner operations. It simply checks the status of the associated services and also allows you to easily deactivate or activate those services from any device." / "The CCX-Box is a small form-factor PC that will run a Conceal Network Full-Node and Miner out of the box. Utilizing the Conceal-Assistant, this small dedicated Node can be managed remotely and will earn $CCX over time." Link "You can go the the github page for more info and for downloads by clicking on this url." → `https://github.com/Acktarius/conceal-assistant`. "You can find more information about the product in this PDF." → `/labs-data/conceal-assistant_info.pdf`. "Download Conceal-Assistant" zip → `https://github.com/Acktarius/conceal-assistant/releases/latest/`. Screenshots `/images/labs/ccxassistant/assistant_01..05.png`.
- Download-type icon map (`Ss`): deb→ubuntu, exe→windows, dmg/app/apple-store→apple, apk/f-droid→android, zip→`fa-file-zipper`, else `fa-download`. Doc icon (`Cs`): pdf→`fa-file-pdf`, wiki→`fa-wikipedia-w`.

---

## `/in-the-media` — `gs` / `hs`

- Eyebrow **"CONCEAL IN THE MEDIA"**; h1: "Going `<color1>Noticed</color1>`,`<br>`Not Concealed".
- **"Featured:"** video carousel (`us`, 800px max, 400px iframes, `border-4 border-[#112E41]`, prev/next + dots) — `ds`: `https://www.youtube-nocookie.com/embed/2jBL4uzrimk`, `https://www.youtube-nocookie.com/embed/wfUkUJuXn5s`, `https://www.youtube.com/embed/oY5ZzJFoe4E`.
- Tab nav (`bg-[#222] gradient shadow-[0_0_32px_#222]`): **Videos** | **Mining**. NOTE: default state is `'ama'`, which matches no tab — page loads with no tab content visible until user clicks.
- **Videos** tab — heading "Videos", "Conceal sparked a lot of videos about it. We tried to gather them in one place for you, so its easily to access information." Items (thumbnail `.thumbex/.thumbnail`, image + title):
  - Your Friend Andy - Everything you need to know about Conceal Crypto (CCX)! → `https://www.youtube.com/watch?v=TfykuINNsCI` — `/images/media/media_video_10.jpg`
  - VoskCoin - Mineable Cryptocurrency integrates Decentralized Finance! → `watch?v=oY5ZzJFoe4E` — `media_video_00.jpg`
  - SavageMine - Conceal LIVE - P2P, E2E Encrypted Messaging → `watch?v=iFRMyPSjWt8` — `media_video_01.jpg`
  - Turan Khan - How to transfer Money in the middle of Ocean just in 2 seconds → `watch?v=Wp2QO8b4LmI` — `media_video_02.jpg`
  - SavageMine - Conceal (CCX) Core Team Chat → `watch?v=zE7h95nBOl8` — `media_video_03.jpg`
  - SavageMine - Cold-Staking! EARN Interest On Your Crypto! → `https://youtu.be/eOto88-wZB0?list=PLMdO3H8swpD0UKP40WHxBnlgcG1ViKrvN` — `media_video_04.jpg`
  - SavageMine - Blockchain Bank Pays INTEREST! → `youtu.be/YXJ8EbTUXfw?list=…` — `media_video_05.jpg`
  - SavageMine - Monthly Mining PROFITS! → `youtu.be/O8LvMqDiCbY?list=…` — `media_video_06.jpg`
  - SavageMine - Keep Your Wallet UPDATED! → `youtu.be/20R_uUlM9QY?list=…` — `media_video_07.jpg`
  - SavageMine - Care About Your PRIVACY? CONCEAL Does! → `youtu.be/2-UUg0ueGtg?list=…` — `media_video_08.jpg`
  - Crypto Sewer - How To Make A Conceal.Network (CCX) Wallet → `https://youtu.be/uZaCz_8EXOw` — `media_video_09.jpg`
- **Mining** tab — heading "Mining", "Conceal is 100% PoW crypto currency. Learn how to mine it and what are best practices to do so." Embeds (16:9): `youtube-nocookie.com/embed/niTcmIz_sf0`, `…/2jBL4uzrimk`, `…/Ze2ioyBHPIw`.

---

## `/earn` — `os` / `as`

- Eyebrow **"CONCEAL EARN"**; h1: "`<color1>Blockchain</color1>` Powered Deposits".
- Buttons: `slide` `fas fa-download` **"Download"** → `/#wallets`; `slideToId` `fas fa-book` **"Learn More"** → `#earn-about`.
- `#earn-about` withDescription title **"Earn"**: "Conceal-Earn removes unnecessary intermediaries by giving everyone the power to deposit their funds on the Blockchain and receive interest in exchange."
- Feature rows (`rs`, alternating, sprite images rotateInY):
  1. **Built with the power of the Blockchain** — "Conceal-Earn is completely decentralized and built on the Conceal Blockchain." — `/images/landingPayImgs.png` y -340px h 339px
  2. **Deposit funds for interest** — "Conceal-Earn empowers anyone in the world to deposit their funds in exchange for interest." — `/images/landingBankingImgs.png` y 0 h 340
  3. **Worldwide access** — "There are millions without access to financial services worldwide. Conceal-Earn provides much needed access to anyone, anywhere." — landingBankingImgs y -340
  4. **Keep your funds safe** — "When you deposit your funds with Conceal-Earn they are cold staked on the blockchain for safekeeping." — y -680
  5. **Earn more than a savings account** — "Deposits with Conceal-Earn earn significantly more than a savings account, as much as 6% APR plus compounding." — y -1020

---

## `/messaging` — `Is` / `Fs`

- Eyebrow **"CONCEAL MESSAGING"**; h1: "Decentralized `<color1>Encrypted</color1>` Messages".
- Buttons: `slide` `fas fa-mobile-alt` **"Web Wallet"** → `https://wallet.conceal.network/` (new tab); `slide` `fas fa-download` **"Desktop"** → `/#wallets`.
- withDescription title **"Messaging"**: "Conceal Messaging expands our ecosystem by providing fully integrated encrypted messaging on the Blockchain."
- Feature rows (`Ns`):
  1. **Self-Destructing Messages** — "Conceal Messaging supports self-destructing messages that delete themselves after being read." — `/images/landingMessagingImgs.png` y 0 h 284 maxW 340, rotateInY
  2. **Desktop or Web** — "Conceal Messaging works on the Web and Desktop." — `/images/mobile_screenshots.png` y -400 h 400 maxW 398, crtPowerOn (phone frame: `borderRadius 32px; borderBottom 2px solid #AAA; boxShadow 0 3px #000`)
  3. **Decentralized** — "Conceal Messaging is a decentralized service that operates on the Blockchain." — landingMessagingImgs y -284 h 350
  4. **Address Book** — "There is no need to copy / paste an address every time. Maintain your address book for easily sending messages to your contacts." — mobile_screenshots y -1200 h 400
  5. **Encrypted** — "All Conceal Messages are encrypted and cannot be read by anyone other than the sender and receiver." — landingMessagingImgs y -634 h 294

---

## `/manifesto` — `Ms` / `js`

- h1: "Concealer's `<color1>Manifesto</color1>`" (no eyebrow). Hero image `/images/manifesto/privacy_cypherpunk.png` alt "Privacy" (slideInLeft, `group-hover:scale-110`, `cursor-zoom-in`).
- Content blocks (`Os`), `**bold**` rendered as `<strong class="text-white">`; blocks with images are 2-col with hover zoom to `maxZoom`:
  1. (image `/images/manifesto/citation.png`, zoom 1.2) **Privacy is not a privilege. It is a right.** / "It is the foundation of freedom, the space where thought and identity are born. Yet in our digitized age, this right is under siege. Corporations harvest our data, governments monitor our every move, and malicious actors lurk in the shadows of the web." / "We refuse to surrender." / "We are the **Concealers**—inheritors of the **Cypherpunk** legacy—carrying its fire into the present and the future."
  2. **Cryptography is our weapon.** "Like the Cypherpunks before us, we wield code as our shield and sword. In a world where surveillance grows smarter, we grow stronger. Quantum computing and artificial intelligence bring both threat and promise—but we will turn them to our advantage. We will build systems so secure that even the most powerful cannot break them."
  3. **Decentralization is our shield.** "Power must never be concentrated in the hands of the few. Decentralized systems—blockchains, distributed networks, peer-to-peer infrastructures—give strength back to the people. They ensure that no single authority can dictate, censor, or control the digital world we inhabit." / "We stand for freedom through decentralization."
  4. (image `/images/manifesto/EH.png`, zoom 1.2) **Open source is our creed.** "We reject secrecy and corporate monopolies. We believe in transparency, collaboration, and collective empowerment. Open-source code is digital democracy—it belongs to everyone. By building and sharing openly, we ensure that our technology serves humanity, not hierarchy."
  5. **Education is our duty.** "Knowledge is the first line of defense. A digitally literate society cannot be easily deceived or controlled. We will teach, share, and empower—until every individual can defend their own privacy. Awareness is resistance."
  6. **Sustainability is our responsibility.** "The digital world is not separate from the physical one. Our innovations must respect the planet that sustains us. We seek balance—between progress and preservation, between code and climate."
  7. **Innovation is our path forward.** "We are dreamers and builders, thinkers and tinkerers. Every breakthrough, every new idea, brings us closer to a world where privacy is not a battle—but a birthright. We will not fear the future. We will shape it."
  8. **We are the Concealers.** "We fight for a world where privacy lives, breathes, and belongs to all. Guided by our principles, united by our vision, we will not yield." / **The struggle continues—until every person is free.**
- Layout: no left quick-nav (`yo`) on this page.

---

## `/tc` — `$s` / `Qs` (sets `document.title = "Terms & Conditions | Conceal Network"`)

- h1 centered color1 **"Terms & Conditions"**. Sections (`<h4 text-[2rem] color1 underline>`):
  - **Definitions** — *Conceal Team:* volunteers/contributors, "There is no formal company or legal entity behind Conceal Network." *Lab Project:* experimental/community-funded projects via Conceal Labs, provided "AS IS". *DAO:* decentralized governance via community consensus and voting.
  - **About Conceal Network** — open-source community project, no company, no full-time team or HQ; anyone can propose changes, implemented if voted by majority; "intended to be a community project not a commercial product and relies on volunteers availibility."
  - **No Warranty** — GPL-style "WITHOUT ANY WARRANTY… MERCHANT ABILITY or FITNESS FOR A PARTICULAR PURPOSE. There is no warranty that the coins generated/accrued will worth anything."
  - **No Financial Advice** — views are authors' own, not investment advice; price may fall to zero; funds not safeguarded under UK Electronic Money Regulations 2011 nor covered by FSCS; no guarantee of data accuracy.
  - **Copyright** — full MIT licence text; "Conceal Network project released under the MIT license."
  - **Reliance on Information Posted** — general information only, no warranty of accuracy; third-party content is the provider's responsibility; inclusion of links ≠ endorsement by "Conceal Network, Conceal DAO, Conceal Team, or Conceal Developers."
  - **Limitation on Liability.** — all-caps standard clause: no liability for any damages arising from use/inability to use the Website.
  - **User Responsibility & Security** — users must secure devices/OS/software against malware, phishing, keyloggers; team not responsible for losses from compromised devices.
  - **Private Keys Backup** — Conceal.Desktop, Conceal-Web-Wallet and Conceal.Mobile are open-source client-side wallets; everything local; seed never transmitted; backup is user's responsibility; lost seed = unrecoverable.
  - **Lab Projects** — no responsibility for any loss/harm from Lab Projects; provided "AS IS"; use at own risk.
  - **Data Handling Policy** — "committed to privacy by design. We do not collect or retain personal data through our software or websites. All transactions and communications are processed locally on your device." Link **"READ OUR PRIVACY PAGE"** → `/privacy`.

## `/privacy` — `Rs` / `Ls` (sets `document.title = "Privacy Policy | Conceal Network"`)

- h1 centered color1 **"Privacy Policy"**. Sections:
  - **What We Collect** — standard anonymized server logs ("Log Data"): IP with last byte replaced, browser type/version, pages visited, time/date, time on pages, other statistics.
  - **What We Use the Data For** — website statistics, content improvement, error analysis, dead-link diagnosis.
  - **Changes of Privacy Policy** — may update; posted on the Site; review periodically.
  - **Contact** — "…please [contact us through the helpdesk](https://conceal.network/support/)."
  - **Latest Updated** — "This Privacy Policy was last updated: 18th October, 2021."
- Inconsistency: T&C says "we do not collect or retain personal data", Privacy says server logs (IP partially anonymised) are collected.

## `/502`, `/504`, `/508` — `ss`, `cs`, `ls`

Standalone (no header/footer): `min-h-screen` centered card `#block_error` `max-w-[600px] p-16 bg-[rgba(17,17,17,0.8)] border rounded-lg`, `<h2 text-[3.6rem] color1>`.
- **502**: "Error 502. Bad Gateway" — "The web server is temporary overloaded and can't process your request. Please accept our apologies for the inconveniences this might cause to you." / "Please try to access the site later."
- **504**: "Error 504. Server is unavailable" — "The server is temporary unavailable. Please accept our apologies for the inconveniences this might cause to you." / "Please try to access the site later."
- **508**: "Error 508. Resource Limit Is Reached" — "The website is temporarily unable to service your request as it exceeded resource limit. Please try again later." / "Please read more about this error in our [knowledgebase](http://www.namecheap.com/support/knowledgebase/article.aspx/1128/103/what-happens-when-my-account-reaches-lve-limits-diagnosing-and-resolving)" / "If you are the owner of the account and you see this error not for the first time please consider upgrading your plan to the package with higher resource allocation."
- Why they exist: these are ports of cPanel/Namecheap shared-hosting (CloudLinux LVE) error pages — 508 is CloudLinux "Resource Limit Is Reached". They are SPA routes so the host's ErrorDocument can point to `/502` etc. Irrelevant on static/CDN hosting (Cloudflare/GitHub Pages); the `Ja()` hostname check for `.github.io`/`dweb.conceal` suggests the site is also deployed there.

---

## Shared layout

### Header (`Zi`)
- `fixed top-0 z-50 px-12 py-4`; bg: `black` (forced on all inner pages), transparent on home until scrolled past hero → `rgba(0,0,0,0.6)`.
- Logo `/images/logo.svg` alt "Conceal Network" `h-24 w-24 md:h-[84px] md:w-[84px]`, link `/`.
- Desktop nav (`hidden md:flex h-24`, `ml-[64px]`, items `uppercase tracking-[0.1em] text-[var(--color1)] hover:text-white`, open dropdown `bg-[#333] rounded-t-[0.75em]`, dropdown panel `bg-[#333] rounded-b-[0.5em]`, items `hover:bg-black`). Click-to-open (not hover), closes on outside mousedown. Nav data (`zi`):
  - **About**: Manifesto `/manifesto`; What's Conceal? `/about`; Messaging `/messaging`; Earn `/earn`; Wiki `https://conceal.network/wiki/doku.php?id=start` (ext); Roadmap `/roadmap`; Team `/team`.
  - **Community**: Channels `/community`; Medium `https://concealnetwork.medium.com/` (ext); Mining `/#mining`; Videos `/in-the-media`; Partners `/#partners`; Donate `/donate`.
  - **Developers**: Branding `/branding`; Conceal-Labs `/labs`; Documentation `https://github.com/ConcealNetwork/conceal-core/wiki` (ext); GitHub `https://github.com/ConcealNetwork` (ext).
  - **Tools**: Bridge `https://bridge.conceal.network`; Explorer `https://explorer.conceal.network`; Web Wallet `https://wallet.conceal.network`; Paper Wallet `https://conceal.network/paperwallet`; Marketplace `https://conceal.network/marketplace`; Authenticator `/labs#authenticator`.
  - Top-level **Wallets** (button → `/#wallets`), **Contact** → `https://conceal.network/support` (ext).
- Hash handling: `/#x` links prevent default; if not on `/`, navigate to `/` with `state.scrollToHash`, then `Do` hook retries up to 50× every 150ms (initial 300ms) and scrolls to element top − 100px. On `/`, smooth scroll with −100 offset.
- Language selector `Ri` (desktop `absolute top-[45px] right-9`; mobile inside drawer): `fas fa-language text-6xl` + current language name `text-3xl`; dropdown `bg-[#0C0C0C] border-[#333333]`, selected item `bg-[rgba(255,165,0,0.2)]`.
- Mobile: hamburger `fixed top-4 right-4 z-[999] bg-[rgba(0,0,0,0.7)] border color1`; drawer `w-80 max-w-[85vw] bg-[var(--color-bg-primary)] border-l color1-border` with logo, grouped links (group label color1 uppercase), Wallets, Contact, language selector; backdrop `bg-black/70`.

### i18n (`Li`, `I`, `Ii`)
- Supported codes (`L`): `en, fr, es, ar, zh, de, sl, cs, nl, tr, it, ru` (12). Language list loaded from `/lang/selection.json` (`{code: {name}}`); translations from `/lang/<code>.json` (flat key→string).
- Selection: cookie `CCX_Language` → `navigator.language[0:2]` → `en`. Setting writes `CCX_Language=<code>; max-age=2629800` (1 month) `samesite=strict; secure`.
- Mechanism: DOM-based. `I()` loads `/lang/en.json` and auto-tags any leaf element whose text matches an English value with `data-tkey` (keys starting with `r` may tag multiple elements); `Ii()` then overwrites `textContent` of `[data-tkey]` elements with the translated value. Also explicit `data-tkey` attributes exist in JSX (about1–3, aboutBankingDeposits, encryptedMessages, aboutEncryptedMessages, compoundInterestCalculator, helpdeskTitle/Text/Btn, usingConceal, rWallets, gettingCCX, rMining, quickStart, aboutGettingCCX/2, rDocumentation, rBuyCCX, rBuywCCX, rMore, usd, dataProvidedBy, aboutUsingConceal, about_title, vision_title/desc, mission_title/desc, privacy_title/desc, community_title/desc, decentralization_title/desc, revolution_title/desc, rBanking). Re-applied 100ms after language change; runs once on mount — SPA route changes will not re-translate newly rendered pages unless re-run (likely bug).

### Footer (`fr`) — `bg-[#181A20]`
- Mobile: hidden by default; fixed bottom bar "⌃ Pull up to see footer ⌃" (`animate-bounce`, color1); expands when scrolled to bottom or touch-pulled >50px from bottom (`dr` hook); collapses on scroll up.
- "⌃ Back to Top ⌃" link `#top`.
- Three columns (`<h2 text-4xl color1>`):
  - **General**: About `/about`; Documentation `https://conceal.network/wiki/doku.php`; Exchanges `/community#exchanges`; FAQ `https://conceal.network/wiki/doku.php?id=FAQ`; Labs `/labs`; wCCX `https://conceal.network/wiki/doku.php?id=wrapped-conceal`; Support `https://conceal.network/support/`.
  - **Tools** (alphabetically sorted): Authenticator `/labs#authenticator`; Bridge `https://bridge.conceal.network/`; Explorer `https://explorer.conceal.network/`; Marketplace `https://conceal.network/marketplace`; Paper Wallet `https://conceal.network/paperwallet`; Wallets Apps `#wallets` (relative hash — only works on `/`); Web Apps `https://wallet.conceal.network/`.
  - **Community** (sorted): BitcoinTalk `https://bitcointalk.org/index.php?topic=5086106` `fab fa-bitcoin`; Discord `https://discord.conceal.network`; Facebook `https://www.facebook.com/concealnetwork/`; Github `https://github.com/ConcealNetwork`; Medium `https://medium.com/@ConcealNetwork`; Substack `https://substack.com/@concealnetwork` (inline SVG); Telegram `https://t.me/concealcommunity`; Twitter `https://twitter.com/ConcealNetwork`; Youtube `https://www.youtube.com/channel/UC_YtRUcy0FR0yIc3H6DDxuw`.
- Legal row: **T&C** `/tc` | **Privacy** `/privacy`.
- Copyright: "© 2017-{currentYear} Conceal.Network, Conceal DAO, Conceal Team & Conceal Developers - All rights reserved."
- No banner/announcement component exists.

### Buttons (`z`, `ja`)
Base: `inline-flex font-sans text-sm uppercase tracking-wider h-[5.4rem] leading-[5rem] px-[3rem] border-2 border-[#c5c5c5]`. Variants: `primary`/`download` = `bg-black text-white border border-[var(--color1)] rounded-[0.5rem] text-2xl hover:bg-[var(--color1)] hover:text-black hover:border-2 hover:border-white`; `stroke` = transparent, border color1, `rounded-[10px]`, hover fill color1; `default` = transparent hover `#b8b8b8`; `slide`/`slideToId` = `button-slide bg-transparent text-white border border-[var(--color1)] rounded-[0.5rem] text-2xl`. Sizes medium `h-[5.7rem]`, large `h-[6rem]`. `slideToId` scrolls to `targetId` with `scrollOffset` (default 100), retrying 10× at 50ms; if element missing navigates to `Ma[targetId]` (`about`→/about, `labsHeading`/`labs`→/labs) with `state.scrollToHash`.

### App shell (`ic`)
- On mount: if `sessionStorage.redirectPath` exists and path is `/`, remove it and `navigate(path, {replace:true})` — 404.html SPA fallback pattern (GitHub Pages style).
- Splash only on `/` and only if `splash-shown` cookie absent.
- `rc()` injects CSS variables on `<html>` at startup.

---

## Theme

Config (`Zn`, line 14844): `primaryColor: 'orange'`, `secondaryColor: 'orange'`, `fontFamily: 'Poppins'`. Timing config (`Qn`): mobile menu fade 2s; cookies splash 24h, language 2,629,800s; splash min 2000ms / fade 600ms / poll 50ms; copy feedback 2000ms; scroll retry 50/100/150ms, cross-page initial 300ms; price refresh 120,000ms; mobile breakpoint 768.

`U` (line 23903):
```
colors.bg:     primary #0a0a0a, secondary #1A1A2E, tertiary #151515, card #111111
colors.text:   primary #FFFFFF, secondary #E0E0E0, muted #B0B0B0, disabled #757575, placeholder #4f4f4f
colors.neon:   cyan #00F0FF, magenta #FF00FF, orange #FFA500
colors.border: light rgba(255,255,255,0.05), medium 0.1, strong 0.25,
               neonCyan rgba(0,240,255,0.3), neonMagenta rgba(255,0,255,0.3), neonOrange rgba(255,165,0,0.3)
colors.glow:   cyan rgba(0,240,255,0.4), magenta rgba(255,0,255,0.4), orange rgba(255,165,0,0.4),
               cyanStrong/magentaStrong/orangeStrong = same at 0.6
effects:       textGlow{Cyan,Magenta,Orange} 0 0 10px rgba(...,0.6); *Strong 0 0 20px rgba(...,0.8)
               boxGlow{...} 0 0 15px rgba(...,0.4); *Strong 0 0 30px rgba(...,0.6)
               bgGlow{...} rgba(...,0.1)
gradients:     heroTitleCyan linear-gradient(to right,#00F0FF,#FF00FF,#00F0FF)
               heroTitleMagenta linear-gradient(to right,#FF00FF,#00F0FF,#FF00FF)
               heroTitleSolid #FFFFFF, heroTitleAccent #00F0FF
```
CSS variables set on `:root` (`tc`/`nc`): for `color1` and `color2` (both = orange preset): `--color1` `#FFA500`, `--color1-glow` `0 0 10px rgba(255,165,0,0.6)`, `--color1-glow-strong`, `--color1-box-glow`, `--color1-box-glow-strong`, `--color1-bg-glow` `rgba(255,165,0,0.1)`, `--color1-border` `rgba(255,165,0,0.3)`, `--color1-glow-rgba` `rgba(255,165,0,0.4)`, `--color1-glow-strong-rgba` `rgba(255,165,0,0.6)`; same for `--color2-*`. Plus `--color-bg-primary #0a0a0a`, `--color-bg-secondary #1A1A2E`, `--color-text-primary #FFFFFF`, `--color-text-secondary #E0E0E0`, `--font-family "Poppins, Arial, Helvetica, sans-serif"`.

Design language observed in classes: body `text-[#B0B0B0] text-[1.7rem] leading-[1.8]` (root font-size is clearly 10px — rem values like 1.7rem body, 6rem titles); section separators `border-b border-[rgba(255,255,255,0.2)]`; cards `bg-[#111] border border-[#444] rounded-lg`, `bg-[rgba(255,255,255,0.02)]`; heavy text-shadows `[text-shadow:0_-0.1em_0.1em_#000,0_0.1em_0.1em_#000,-0.25em_0_0.25em_#000,0.25em_0_0.25em_#000]` on section titles and `0_0_24px_rgba(0,0,0,0.9)` on page h1s; neon glow rails `boxShadow 0 0 10px glow-rgba` → `0 0 20px, 0 0 30px` on hover; blurred orbs `bg-[var(--color1)]/10 blur-3xl`; footer `#181A20`; team cards `rgba(81,70,68,0.6)` / `#2F4F4F`; donate table `#194652`; timeline line `#19383b`; video frame `#112E41`; icon set Font Awesome 5/6 (`fas`, `fab`, `fa`). Fonts declared on branding page: Poppins, Lora, Montserrat.

Favicon set: not referenced anywhere in the JS bundle (would be in `index.html` `<head>`); only `/images/logo.svg` and `/images/CNGraySolidOptimized.svg` are used as logo marks.

---

## Runtime data

| Fetch | URL | Used for | Refresh |
|---|---|---|---|
| CoinGecko | `https://api.coingecko.com/api/v3/simple/price?ids={conceal\|conceal-network}&vs_currencies=usd&include_24hr_change=true` (tries `conceal` then `conceal-network`; stops on 429) | price USD (4dp), 24h % change | every 120,000ms + on mount |
| CoinPaprika (fallback) | `https://api.coinpaprika.com/v1/tickers/ccx-conceal` → `quotes.USD.price`, `percent_change_24h` | same | same |
| Mining pools | `https://explorer.conceal.network/services/pools/data` when hostname is `conceal.network`, `www.conceal.network`, `dweb.conceal`, `dweb.conceal.hns.to`, or `*.github.io`; otherwise `/api/pools` (dev proxy). On fetch failure for https URL, falls back to `https://api.allorigins.win/get?url=<encoded>` and `JSON.parse(r.contents)` | per pool: `info.name`, `info.host`, `network.height`, `config.poolFee`, `pool.hashrate`, `pool.miners`; sorted by fee | once, when `#mining` enters viewport |
| i18n | `/lang/selection.json`, `/lang/en.json`, `/lang/<code>.json` | language names + translations | on mount / on change |

No explorer height/hashrate/supply/market-cap widgets exist beyond the pools table and price card. Cookies: `splash-shown`, `CCX_Language`. sessionStorage: `redirectPath`. Clipboard API used on `/donate`.

---

## Hard-coded facts worth reusing

- Ticker `$CCX`; mainnet launched **23 May 2018**; first commit April 2018; site + explorer July 2018.
- Mining algorithm history: CN Fast (Oct 2018) → CN Conceal (Feb 2019) → **CN GPU / cryptonight_gpu** (Oct 2020, current). 100% PoW. Official pool `pool.conceal.network:3333`.
- Deposit interest: tiers 2.90% / 3.90% / 4.90% base APR (<10k / 10k–19,999 / ≥20k CCX), +0.1%/extra month, max terms 12 months, max 4.00% / 5.00% / 6.00%; "as much as 6% APR plus compounding".
- wCCX contracts: Ethereum `0x21686f8ce003a95c99acd297e302faacf742f7d4`; BSC `0x988c11625472340b7b36ff1534893780e0d8d841` (MEXC pair CA `0x523d5d8ae2f38dd2d8900eb195c132ff19bf6d18`); Polygon `0x137Ee749f0F8c2eD34cA00dE33BB59E3dafA494A`. 1inch referral `0x9be82c0E5B75C53F32E63b40442E9dA8cCA06f21`.
- Donation addresses listed above (CCX, BTC, XMR, Polygon EVM `0x926e2b68a27426C2c26Ac7F98D40EB36939Bd815`).
- Official services: `wallet.conceal.network`, `explorer.conceal.network`, `bridge.conceal.network`, `discord.conceal.network`, `conceal.network/paperwallet`, `/marketplace`, `/support`, `/wiki/doku.php`. GitHub org `ConcealNetwork` (repos conceal-core, conceal-desktop, conceal-wallet-cordova, conceal-faucet-api). F-Droid `com.concealnetwork.concealmobile`, `com.acktarius.concealauthenticator`. YouTube channel `UC_YtRUcy0FR0yIc3H6DDxuw`. BitcoinTalk topics 4515873 (community page) and 5086106 (footer). Latest versions mentioned: Conceal Desktop 6.7.8, Core 6.7.5, Authenticator v1.1.3. Licence MIT. Copyright "2017-present".
- Not present in the bundle: total supply, block time, emission, tx fee, decimals — none are hard-coded anywhere.

---

## Stale / broken / inconsistent

1. **DokuWiki links** (`/wiki/doku.php`, `?id=start`, `?id=FAQ`, `?id=wrapped-conceal`, `?id=mining`) in footer General, nav About→Wiki, right social rail "Documentation", and mining paragraph — while nav Developers→Documentation points to `github.com/ConcealNetwork/conceal-core/wiki`. Two competing doc sources.
2. `/in-the-media` initial tab state `'ama'` matches no tab → no tab content on load until user clicks Videos/Mining.
3. `/community#exchanges` (footer, Markets "More" `https://conceal.network/community/#exchanges`) — no `#exchanges` element and the tab state is not hash-driven; lands on the Social links tab.
4. Footer "Wallets Apps" href is bare `#wallets` — broken on any page other than `/`.
5. Branding colour swatch "Neon Cyan #00F0FF" renders with `bg-[var(--color1)]` (orange) — label/colour mismatch; the branding copy talks about "deep Yellow" while theme is orange and `U` defines cyan/magenta as the "neon" primaries — the theme system was clearly designed for a cyan/magenta palette and then switched to orange/orange.
6. `ThrownLemon` team photo is `/images/media/media_articles_02.png` (a media article image, not a team portrait).
7. Partner logo filename typo `cyprtocurrencycheckout.png`.
8. Plain `http://` links: `http://discord.conceal.network` (right rail), pool links `http://${host}`, Namecheap KB link on /508.
9. Home Polygon "Buy wCCX" buttons link to bare `https://app.sushi.com/` and `https://app.uniswap.org/` (no token); `1inch.exchange` domain (legacy; now app.1inch.io); `exchange.pancakeswap.finance` legacy domain; Bakeryswap wCCX/BUSD (BUSD deprecated). Community page has the proper token-prefilled URLs — consolidate.
10. Roadmap: items dated "Summer 2026" marked `completed` while today is 2026-09-06 — plausible but check; "Q1 2026 Conceal-Faucet-API" typo "developpers"; "officialy"; roadmap lists STEX (defunct exchange); "(service retired)" entries for Cloud messages and Conceal LIVE.
11. Privacy policy "last updated 18th October, 2021"; T&C "we do not collect or retain personal data" contradicts Privacy's server-log collection. T&C typos: "availibility", "MERCHANT ABILITY", "will worth anything".
12. Error pages 502/504/508 are Namecheap/cPanel LVE artefacts (508 links to `namecheap.com/support/knowledgebase/article.aspx/1128/103/...`) — meaningless on static hosting; remove or genericise.
13. i18n auto-tagging runs only once on mount (`Li` effect `[]`), so client-side route changes render untranslated English until language is re-selected; auto-tag heuristic matches by exact text and can mis-tag.
14. Mobile pool cards use hard-coded `text-[orange]` rather than `var(--color1)`.
15. Copy Twitter links mix `twitter.com` and `x.com`; Medium mixes `medium.com/@ConcealNetwork` and `concealnetwork.medium.com`; Discord mixes `discord.conceal.network` and `discord.gg/YbpHVSd`; Facebook with/without trailing slash — keys collide harmlessly but should be unified.
16. `#herobg` id is reused by every page section (duplicate IDs on home hero + inner pages if ever co-rendered).
17. Donate table hard-coded `bg-[#194652]` teal and copy button `hover:bg-[var(--color1)]` (no hover change).
18. Labs "Privacy Defensor" project link shows a GitHub icon for a non-GitHub URL; Authenticator apk link pinned to `releases/tag/v1.1.3` rather than `latest`.
19. `Ja()` special-cases `dweb.conceal`, `dweb.conceal.hns.to`, `*.github.io` hostnames — the deployment history includes Handshake/dweb and GitHub Pages mirrors; the `sessionStorage.redirectPath` shim is the GitHub Pages 404 fallback.
20. Home "Learn More" button has both `targetId: features` and `href: /#features`; hero heading is an `<h2>` while section titles are `<h1>` (heading order inverted); `pa` default variant emits `<h3>` before `<h1>`.