export type MilestoneStatus = 'done' | 'in-progress' | 'planned';

export type Milestone = {
  date: string;
  title: string;
  description: string;
  status: MilestoneStatus;
  href?: string;
};

export const roadmap: Milestone[] = [
  { date: 'April 2018', title: 'Initial commit', description: 'First release candidate. Testnet, daemon, miner and wallet all land at once.', status: 'done' },
  { date: 'May 2018', title: 'Mainnet launched', description: 'Genesis block on 23 May 2018. No premine.', status: 'done' },
  { date: 'June 2018', title: 'Encrypted messaging & deposits', description: 'Locked deposits that pay interest, and encrypted messages with a self-destruct timer. Both still exist.', status: 'done' },
  { date: 'July 2018', title: 'Website & block explorer', description: 'The official website and the block explorer are released.', status: 'done' },
  { date: 'October 2018', title: 'CN Fast', description: 'CCX changes to the CN Fast mining algorithm to avoid ASICs.', status: 'done' },
  { date: 'November 2018', title: 'Exchange listing & investments', description: 'First exchange listing; the deposit system is revamped to support investments.', status: 'done' },
  { date: 'February 2019', title: 'CN Conceal', description: 'CCX changes to the CN Conceal mining algorithm to avoid ASICs and FPGAs.', status: 'done' },
  { date: 'March 2019', title: 'Conceal Cloud', description: 'A secure, powerful and feature-rich web wallet for CCX.', status: 'done' },
  { date: 'May 2019', title: 'Conceal Labs', description: 'A funding pot for community projects. Three have shipped since.', status: 'done' },
  { date: 'July 2019', title: 'Conceal Mobile', description: 'A mobile wallet with encrypted messages.', status: 'done' },
  { date: 'August 2019', title: 'Conceal Pay', description: 'Simple payments and donations in CCX for anyone.', status: 'done' },
  { date: 'December 2019', title: 'Conceal ID', description: 'Memorable branded addresses akin to usernames.', status: 'done' },
  { date: 'January 2020', title: 'Daemon & wallet improvements', description: 'Conceal Desktop v6 with interface and daemon improvements.', status: 'done' },
  { date: 'August 2020', title: 'Wrapped CCX (wCCX)', description: 'An ERC-20 version of CCX on Ethereum, backed by coins held by the bridge.', status: 'done' },
  { date: 'August 2020', title: 'wCCX on Uniswap and Trust Wallet', description: 'wCCX available on Uniswap and added to Trust Wallet.', status: 'done' },
  { date: 'September 2020', title: 'Deposits on Cloud & Mobile', description: 'Deposits come to Conceal Cloud and the mobile wallet. Interest from a phone.', status: 'done' },
  { date: 'October 2020', title: 'CN GPU', description: 'Third algorithm change, to CN GPU. Still the one in use; still no ASIC for it.', status: 'done' },
  { date: 'Q4 2020', title: 'Cloud & Mobile self-destructing messages', description: 'Messages that self-destruct after a given time on Cloud wallets. (Service retired.)', status: 'done' },
  { date: 'Q1 2021', title: 'Conceal Bridge', description: 'Swap CCX to wCCX and back with the Bridge.', status: 'done', href: 'https://bridge.conceal.network' },
  { date: 'Q2 2021', title: 'Conceal Live', description: 'Decentralized, end-to-end encrypted video/audio calls and messages. (Service retired.)', status: 'done' },
  { date: 'Q4 2021', title: 'Conceal App', description: 'Initial release of the cross-platform app with Wallet and News Feed modules.', status: 'done' },
  { date: 'Q1 2022', title: 'Conceal App deposits', description: 'Blockchain deposits module for the Conceal App.', status: 'done' },
  { date: 'Q2 2022', title: 'Conceal Web Wallet', description: 'Release of the 100 % client-side web wallet.', status: 'done', href: 'https://wallet.conceal.network' },
  { date: 'Q3 2023', title: 'Web wallet improvements', description: 'Faster, optimised, and encrypted messages from your smartphone.', status: 'done', href: 'https://wallet.conceal.network' },
  { date: 'Q3 2024', title: 'Web wallet improvements', description: 'Better anonymity by picking nodes randomly from a bigger list, now over SSL smart nodes.', status: 'done', href: 'https://wallet.conceal.network' },
  { date: 'Q3 2024', title: 'Conceal Marketplace', description: 'Buy and sell peer-to-peer with other Concealers using CCX.', status: 'done', href: 'https://conceal.network/marketplace' },
  { date: 'Q4 2024', title: 'Web wallet improvements', description: '14 languages, view-only deposits, QR scanning for messages, and new-message notifications.', status: 'done', href: 'https://wallet.conceal.network' },
  { date: 'Q2 2025', title: 'Web wallet deposits', description: 'Deposits come to the client-side web wallet.', status: 'done', href: 'https://wallet.conceal.network' },
  { date: 'Q4 2025', title: 'Conceal Authenticator', description: 'A Labs project: 2FA keys backed up on the blockchain.', status: 'done', href: 'https://f-droid.org/en/packages/com.acktarius.concealauthenticator/' },
  { date: 'Q1 2026', title: 'Conceal Faucet API', description: 'A one-stop shop for developers to create faucets or game rewards.', status: 'done', href: 'https://github.com/ConcealNetwork/conceal-faucet-api' },
  { date: 'Summer 2026', title: 'Web wallet 3.0 (Next Wallet)', description: 'The web wallet rebuilt from scratch. It is what wallet.conceal.network runs today.', status: 'done', href: 'https://wallet.conceal.network' },
  { date: 'Summer 2026', title: 'Conceal Desktop 6.7.8', description: 'Ships with Conceal Core 6.7.5: coinbase validation, checkpoint-zone input checks, and wallet/RPC/system improvements.', status: 'done' },
  { date: '2027', title: 'Conceal Core: MDBX, GPU and P2P', description: 'MDBX storage with a migration tool, GPU sync offload and on-board GPU mining, then P2P code evolution.', status: 'in-progress' },
  { date: 'TBA', title: 'Conceal Labs project', description: 'Details when there is something to show. It uses the chain and needs no account.', status: 'in-progress' },
  { date: 'TBA', title: 'Atomic swaps', description: 'Exchange CCX with other blockchain tokens without an intermediary.', status: 'planned' },
  { date: '2028', title: 'Conceal Core: checkpoint strategy', description: 'Refreshed tooling, bootstrap verification, then signed checkpoints distributed over P2P (no hard fork).', status: 'planned' },
  { date: '2029–2030', title: 'Conceal Core: hard fork', description: 'New serialization tags, sidechain anchors, and post-quantum work.', status: 'planned' },
];
