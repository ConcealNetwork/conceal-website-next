import { PAPER_WALLET_URL, WALLET_URL, docs } from './site.ts';

export type DownloadLink = { label: string; href: string; platform: 'windows' | 'linux' | 'macos' | 'android' | 'ios' | 'web' };

export type Wallet = {
  id: string;
  name: string;
  kind: string;
  summary: string;
  bestFor: string;
  image?: string;
  imageAlt?: string;
  downloads: DownloadLink[];
  docsHref: string;
};

const desktopRelease = 'https://github.com/ConcealNetwork/conceal-desktop/releases/latest';
const coreRelease = 'https://github.com/ConcealNetwork/conceal-core/releases/latest';

export const wallets: Wallet[] = [
  {
    id: 'desktop',
    name: 'Conceal Desktop',
    kind: 'Full-node graphical wallet',
    summary:
      'The central point of interaction for the primary features of Conceal, available for all major platforms. Send and receive CCX and encrypted messages, and manage your deposits.',
    bestFor: 'Everyday use on a computer, with the full chain under your control.',
    image: '/images/desktop-wallet.png',
    imageAlt: 'Conceal Desktop wallet showing balance, deposits and recent activity',
    downloads: [
      { label: 'Windows', href: desktopRelease, platform: 'windows' },
      { label: 'Linux', href: desktopRelease, platform: 'linux' },
      { label: 'macOS', href: desktopRelease, platform: 'macos' },
    ],
    docsHref: docs('/wallets/desktop'),
  },
  {
    id: 'web',
    name: 'Conceal Web Wallet',
    kind: 'Client-side web wallet',
    summary:
      'Runs in your browser on any device. Completely client-side: your encrypted wallet keys are stored on your device and never leave it. The perfect lightweight alternative to a full node.',
    bestFor: 'Quick access from any device without syncing the chain.',
    image: '/images/web-wallet.png',
    imageAlt: 'Conceal web wallet',
    downloads: [{ label: 'Open web wallet', href: WALLET_URL, platform: 'web' }],
    docsHref: docs('/wallets/web'),
  },
  {
    id: 'core',
    name: 'Conceal Core',
    kind: 'Full-node command-line wallet',
    summary:
      'The heart of the peer-to-peer privacy-preserving network: a full local node with daemon, wallet and RPC tools.',
    bestFor: 'Node operators, miners, integrators and anyone scripting against the chain.',
    image: '/images/core-cli.jpg',
    imageAlt: 'Conceal Core command-line wallet',
    downloads: [
      { label: 'Windows', href: coreRelease, platform: 'windows' },
      { label: 'Linux', href: coreRelease, platform: 'linux' },
      { label: 'macOS', href: coreRelease, platform: 'macos' },
    ],
    docsHref: docs('/wallets/core-cli'),
  },
  {
    id: 'mobile',
    name: 'Conceal Mobile',
    kind: 'Lite wallet for Android',
    summary: 'A wrapped version of the web wallet packaged for Android, available as an APK or from F-Droid.',
    bestFor: 'CCX on the go.',
    downloads: [
      { label: 'Android APK', href: 'https://github.com/ConcealNetwork/conceal-wallet-cordova/releases/latest', platform: 'android' },
      { label: 'F-Droid', href: 'https://f-droid.org/packages/com.concealnetwork.concealmobile/', platform: 'android' },
      { label: 'iOS (web wallet)', href: WALLET_URL, platform: 'ios' },
    ],
    docsHref: docs('/wallets/android'),
  },
  {
    id: 'paper',
    name: 'Paper Wallet',
    kind: 'Offline key generator',
    summary: 'The easiest way to create an offline wallet with simple key-generation tools you can print and store.',
    bestFor: 'Cold storage and gifts.',
    downloads: [{ label: 'Generate a paper wallet', href: PAPER_WALLET_URL, platform: 'web' }],
    docsHref: docs('/wallets/paper-wallet'),
  },
];
