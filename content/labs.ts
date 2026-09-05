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
      'A two-factor authentication app that backs up your 2FA secrets to the Conceal blockchain through a built-in lite wallet. Lose the phone and the codes come back with the seed.',
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
      'An 80s-style arcade shooter that pays out 1 CCX through the Conceal Faucet API. Built to show what the API can do, and to give Authenticator users a coin to pay their first transaction fee with.',
    ],
    links: [{ label: 'Play the game', href: 'https://privacydefensor.nodesandbits.tech/', kind: 'play' }],
    screenshots: [1, 2, 3].map((i) => `/images/labs/privacydefensor_0${i}.png`),
  },
  {
    id: 'assistant',
    name: 'Conceal Assistant',
    summary: [
      'A small web app for watching and controlling a CCX-Box from another device. It shows whether the node and miner services are running and lets you stop or start them.',
      'The CCX-Box itself is a small PC preloaded with a Conceal node and a miner. Plug it in, leave it on, and it mines and relays blocks.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Acktarius/conceal-assistant', kind: 'github' },
      { label: 'Download', href: 'https://github.com/Acktarius/conceal-assistant/releases/latest/', kind: 'zip' },
    ],
    screenshots: [1, 2, 3, 4, 5].map((i) => `/images/labs/assistant_0${i}.png`),
  },
];
