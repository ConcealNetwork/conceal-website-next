export type LabLink = { label: string; href: string; kind: 'github' | 'wiki' | 'pdf' | 'play' | 'android' | 'ios' | 'zip' };

export type LabProject = {
  id: string;
  name: string;
  summary: string[];
  links: LabLink[];
  screenshots: string[];
};

export const APPLY_URL = 'https://discord.gg/YbpHVSd';

export const labProjects: LabProject[] = [
  {
    id: 'authenticator',
    name: 'Conceal Authenticator',
    summary: [
      'A secure 2FA (two-factor authentication) app that leverages the Conceal Network blockchain to securely back up your 2FA shared keys using a built-in lite wallet.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Acktarius/Conceal-2fa-app/', kind: 'github' },
      { label: 'Wiki', href: 'https://github.com/Acktarius/Conceal-2fa-app/wiki', kind: 'wiki' },
      { label: 'F-Droid', href: 'https://f-droid.org/en/packages/com.acktarius.concealauthenticator/', kind: 'android' },
      { label: 'APK', href: 'https://github.com/Acktarius/Conceal-2fa-app/releases/latest', kind: 'android' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/conceal-authenticator/id6754612226', kind: 'ios' },
    ],
    screenshots: [1, 2, 3, 4, 5].map((i) => `/images/labs/authenticator_0${i}.png`),
  },
  {
    id: 'privacy-defensor',
    name: 'Privacy Defensor',
    summary: [
      'An online arcade game inspired by the 80s that demonstrates a use case of the Conceal Faucet API. Players can be rewarded with 1 CCX — ideal for fuelling transactions in the Conceal Authenticator app.',
    ],
    links: [{ label: 'Play the game', href: 'https://privacydefensor.nodesandbits.tech/', kind: 'play' }],
    screenshots: [1, 2, 3].map((i) => `/images/labs/privacydefensor_0${i}.png`),
  },
  {
    id: 'assistant',
    name: 'Conceal Assistant',
    summary: [
      'An application to oversee and manage your CCX-Box node and miner operations. It checks the status of the associated services and lets you activate or deactivate them from any device.',
      'The CCX-Box is a small form-factor PC that runs a Conceal full node and miner out of the box. Managed remotely with Conceal Assistant, this dedicated node earns CCX over time.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Acktarius/conceal-assistant', kind: 'github' },
      { label: 'Download', href: 'https://github.com/Acktarius/conceal-assistant/releases/latest/', kind: 'zip' },
    ],
    screenshots: [1, 2, 3, 4, 5].map((i) => `/images/labs/assistant_0${i}.png`),
  },
];
