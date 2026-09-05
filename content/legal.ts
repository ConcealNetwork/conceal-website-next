export type LegalSection = { title: string; paragraphs: string[] };

/** Text carried over from conceal.network/tc (typos corrected, substance unchanged). Needs a legal review pass — see docs/WEBSITE-REBUILD-PLAN.md §6. */
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
      'Conceal is committed to privacy by design. Our software does not collect or retain personal data; all transactions and communications are processed locally on your device. This website keeps only anonymised server logs, as described in the Privacy Policy.',
    ],
  },
];

export const PRIVACY_LAST_REVIEWED = '2026-09-06';

export const privacy: LegalSection[] = [
  {
    title: 'What we collect',
    paragraphs: [
      'This website keeps standard, anonymised server logs ("Log Data"): the visitor\'s IP address with the last byte replaced, browser type and version, pages visited, date and time, time spent on pages, and similar statistics. No cookies are set for tracking. The theme preference is stored in your browser\'s local storage and never sent to us.',
      'Live figures on this site (network height, mining pools, price) are fetched by your browser directly from explorer.conceal.network and, for the price, from CoinGecko or CoinPaprika. Those services see your IP address when your browser requests the data. Embedded videos load from YouTube only after you press play.',
    ],
  },
  {
    title: 'What we use the data for',
    paragraphs: ['Website statistics, improving content, analysing errors and finding dead links. Log Data is never sold or shared.'],
  },
  {
    title: 'Changes to this policy',
    paragraphs: ['We may update this policy from time to time. Changes are posted on this page; please review it periodically.'],
  },
  {
    title: 'Contact',
    paragraphs: ['Questions about this policy can be raised through the support desk.'],
  },
];
