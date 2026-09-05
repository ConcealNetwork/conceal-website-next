export const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_PATH ? `https://concealnetwork.github.io${process.env.NEXT_PUBLIC_BASE_PATH}` : 'https://conceal.network';
export const SITE_NAME = 'Conceal Network';
export const SITE_TAGLINE = 'private money, encrypted messages';

export const WALLET_URL = 'https://wallet.conceal.network';
export const EXPLORER_URL = 'https://explorer.conceal.network';
export const BRIDGE_URL = 'https://bridge.conceal.network';
export const PAPER_WALLET_URL = 'https://conceal.network/paperwallet';
export const MARKETPLACE_URL = 'https://conceal.network/marketplace';
export const SUPPORT_URL = 'https://conceal.network/support';
export const DOCS_URL = 'https://concealnetwork.github.io/conceal-wiki';
export const GITHUB_URL = 'https://github.com/ConcealNetwork';
export const DISCORD_URL = 'https://discord.conceal.network';

export const docs = (path = '') => `${DOCS_URL}/docs${path}`;

export type Social = {
  id: string;
  label: string;
  href: string;
};

export const socials: Social[] = [
  { id: 'discord', label: 'Discord', href: DISCORD_URL },
  { id: 'telegram', label: 'Telegram community', href: 'https://t.me/concealcommunity' },
  { id: 'telegram-news', label: 'Telegram news channel', href: 'https://t.me/concealnetwork' },
  { id: 'x', label: 'X (Twitter)', href: 'https://x.com/ConcealNetwork' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UC_YtRUcy0FR0yIc3H6DDxuw' },
  { id: 'medium', label: 'Medium', href: 'https://medium.com/@ConcealNetwork' },
  { id: 'substack', label: 'Substack', href: 'https://substack.com/@concealnetwork' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/concealnetwork' },
  { id: 'github', label: 'GitHub', href: GITHUB_URL },
  { id: 'bitcointalk', label: 'BitcoinTalk', href: 'https://bitcointalk.org/index.php?topic=5086106' },
  { id: 'marketplace', label: 'Conceal Marketplace', href: MARKETPLACE_URL },
];

export type NavItem = { label: string; href: string; external?: boolean };
export type NavGroup = { label: string; items: NavItem[] };

export const primaryNav: (NavItem | NavGroup)[] = [
  { label: 'Wallets', href: '/wallets' },
  { label: 'Earn', href: '/earn' },
  { label: 'Get CCX', href: '/get-ccx' },
  { label: 'Docs', href: DOCS_URL, external: true },
  {
    label: 'Community',
    items: [
      { label: 'Channels', href: '/community' },
      { label: 'Team', href: '/team' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Labs', href: '/labs' },
      { label: 'Media', href: '/media' },
      { label: 'Donate', href: '/donate' },
      { label: 'Branding', href: '/branding' },
    ],
  },
];

export const footerColumns: { title: string; items: NavItem[] }[] = [
  {
    title: 'Product',
    items: [
      { label: 'Wallets', href: '/wallets' },
      { label: 'Earn', href: '/earn' },
      { label: 'Messaging', href: '/messaging' },
      { label: 'Get CCX', href: '/get-ccx' },
      { label: 'Web wallet', href: WALLET_URL, external: true },
      { label: 'Bridge (wCCX)', href: BRIDGE_URL, external: true },
      { label: 'Explorer', href: EXPLORER_URL, external: true },
      { label: 'Paper wallet', href: PAPER_WALLET_URL, external: true },
      { label: 'Marketplace', href: MARKETPLACE_URL, external: true },
    ],
  },
  {
    title: 'Project',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Manifesto', href: '/manifesto' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Team', href: '/team' },
      { label: 'Community', href: '/community' },
      { label: 'Media', href: '/media' },
      { label: 'Donate', href: '/donate' },
    ],
  },
  {
    title: 'Developers',
    items: [
      { label: 'Documentation', href: DOCS_URL, external: true },
      { label: 'GitHub', href: GITHUB_URL, external: true },
      { label: 'Conceal Labs', href: '/labs' },
      { label: 'Branding', href: '/branding' },
      { label: 'Run a node', href: docs('/run-a-node'), external: true },
      { label: 'Developer & API', href: docs('/developer-and-api'), external: true },
    ],
  },
  {
    title: 'Help',
    items: [
      { label: 'Support desk', href: SUPPORT_URL, external: true },
      { label: 'Troubleshooting', href: docs('/troubleshooting'), external: true },
      { label: 'Backup & security', href: docs('/backup-and-security'), external: true },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
];

// Verified against conceal-core and the wiki on 2026-09-05.
export const networkFacts = {
  ticker: 'CCX',
  maxSupply: 200_000_000,
  decimals: 6,
  blockTargetSeconds: 120,
  baseReward: 6,
  algorithm: 'CryptoNight-GPU (CN-GPU)',
  consensus: 'Proof of Work',
  mainnetLaunch: '2018-05-23',
  coreVersion: '6.7.5',
  desktopVersion: '6.7.8',
  licence: 'MIT',
};
