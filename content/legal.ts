export type LegalSection = { title: string; paragraphs: string[] };

/** Text carried over from conceal.network/tc (typos corrected, substance unchanged). Needs a legal review pass; see docs/WEBSITE-REBUILD-PLAN.md §6. */
export const TERMS_LAST_REVIEWED = '2026-09-06';

export const terms: LegalSection[] = [
  {
    title: 'Definitions',
    paragraphs: [
      '"Conceal Team" refers to the volunteers and contributors who develop and maintain Conceal Network. There is no formal company or legal entity behind Conceal Network.',
      '"Lab Project" refers to experimental or community-funded projects developed through Conceal Labs. Lab Projects are provided "AS IS".',
      '"DAO" refers to the decentralized governance of Conceal Network through community consensus and voting.',
    ],
  },
  {
    title: 'About Conceal Network',
    paragraphs: [
      'Conceal Network is an open-source community project. There is no company, no full-time team and no headquarters. Anyone can propose changes, which are implemented if voted for by a majority of the community.',
      'Conceal Network is intended to be a community project, not a commercial product, and relies on the availability of volunteers.',
    ],
  },
  {
    title: 'No warranty',
    paragraphs: [
      'The software and services are provided WITHOUT ANY WARRANTY, without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. There is no warranty that any coins generated or accrued will be worth anything.',
    ],
  },
  {
    title: 'No financial advice',
    paragraphs: [
      'Views expressed on this website are those of their authors and do not constitute investment advice. The price of CCX may fall to zero. Funds are not safeguarded under the UK Electronic Money Regulations 2011 and are not covered by the Financial Services Compensation Scheme. We make no guarantee about the accuracy of any data shown.',
    ],
  },
  {
    title: 'Copyright',
    paragraphs: [
      'The Conceal Network project is released under the MIT licence.',
      'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: the above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.',
      'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    ],
  },
  {
    title: 'Reliance on information posted',
    paragraphs: [
      'The information on this website is provided for general information only and without any warranty of accuracy. Content provided by third parties is the responsibility of those providers. Inclusion of a link does not imply endorsement by Conceal Network, Conceal DAO, Conceal Team or Conceal Developers.',
    ],
  },
  {
    title: 'Limitation on liability',
    paragraphs: [
      'IN NO EVENT WILL CONCEAL NETWORK, CONCEAL DAO, CONCEAL TEAM, CONCEAL DEVELOPERS OR ANY CONTRIBUTOR BE LIABLE FOR DAMAGES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THE WEBSITE, THE SOFTWARE OR ANY LINKED SERVICE.',
    ],
  },
  {
    title: 'User responsibility & security',
    paragraphs: [
      'You are responsible for securing your devices, operating system and software against malware, phishing and keyloggers. The Conceal Team is not responsible for losses resulting from compromised devices.',
    ],
  },
  {
    title: 'Private keys and backups',
    paragraphs: [
      'Conceal Desktop, the Conceal Web Wallet and Conceal Mobile are open-source, client-side wallets. Everything happens locally on your device and your seed is never transmitted. Backing up your seed is your responsibility; a lost seed cannot be recovered by anyone.',
    ],
  },
  {
    title: 'Lab projects',
    paragraphs: ['Lab Projects are provided "AS IS". Conceal Network accepts no responsibility for any loss or harm arising from their use. Use them at your own risk.'],
  },
  {
    title: 'Data handling',
    paragraphs: [
      'The Conceal software does not collect personal data. Transactions and messages are built and encrypted on your device before anything is broadcast. This website keeps anonymised server logs and nothing else; the Privacy Policy lists exactly what.',
    ],
  },
];

export const PRIVACY_LAST_REVIEWED = '2026-09-06';

export const privacy: LegalSection[] = [
  {
    title: 'What we collect',
    paragraphs: [
      'The web server keeps ordinary access logs with the last byte of your IP address replaced, plus browser type, pages visited and timestamps. That is all. There are no analytics scripts and no tracking cookies. Your light-or-dark theme choice is saved in your own browser and never sent anywhere.',
      'The live numbers on the home page and the Get CCX page come from explorer.conceal.network, and the price comes from CoinGecko with CoinPaprika as a fallback. Your browser fetches those directly, so those servers see your IP address. Videos are not loaded from YouTube until you press play on one.',
    ],
  },
  {
    title: 'What we use the data for',
    paragraphs: ['Counting visitors, spotting broken links and working out why a page errored. The logs are not sold or shared with anyone.'],
  },
  {
    title: 'Changes to this policy',
    paragraphs: ['If this page changes, the review date at the top changes with it.'],
  },
  {
    title: 'Contact',
    paragraphs: ['Ask through the support desk, or in Discord.'],
  },
];
