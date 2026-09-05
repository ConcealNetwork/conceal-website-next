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
      'The full desktop wallet for Windows, Linux and macOS. It runs its own node, so it downloads the whole chain once and verifies everything itself. Sends, receives, messages and deposits are all in one window.',
    bestFor: 'A computer you use regularly, and not minding the initial sync.',
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
      'Runs in the browser and talks to public nodes instead of syncing the chain. Keys are generated in the page and stored encrypted in your browser, and the server never sees them. Open it, unlock it, done.',
    bestFor: 'Any device, right now, without a download.',
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
      'The daemon, the command-line wallet and the RPC server. This is what every other wallet talks to, and what miners and exchanges run.',
    bestFor: 'Running a node, mining solo, or scripting against the RPC.',
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
    summary: 'The web wallet packaged as an Android app. Same code, same keys-on-device model, installed from F-Droid or as an APK. iPhone users get the web wallet in Safari instead.',
    bestFor: 'A phone.',
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
    summary: 'A page that generates a keypair in your browser for you to print. Load it offline for the paranoid version. Nothing is stored anywhere except the paper.',
    bestFor: 'Long-term storage, or coins you want to hand to someone.',
    downloads: [{ label: 'Generate a paper wallet', href: PAPER_WALLET_URL, platform: 'web' }],
    docsHref: docs('/wallets/paper-wallet'),
  },
];
