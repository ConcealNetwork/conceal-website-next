export type ManifestoBlock = { title: string; paragraphs: string[]; image?: string; imageAlt?: string };

export const manifesto: ManifestoBlock[] = [
  {
    title: 'Privacy is not a privilege. It is a right.',
    image: '/images/manifesto/citation.png',
    imageAlt: 'Cypherpunk citation',
    paragraphs: [
      'It is the foundation of freedom, the space where thought and identity are born. Yet in our digitized age, this right is under siege. Corporations harvest our data, governments monitor our every move, and malicious actors lurk in the shadows of the web.',
      'We refuse to surrender.',
      'We are the **Concealers** — inheritors of the **Cypherpunk** legacy — carrying its fire into the present and the future.',
    ],
  },
  {
    title: 'Cryptography is our weapon.',
    paragraphs: [
      'Like the Cypherpunks before us, we wield code as our shield and sword. In a world where surveillance grows smarter, we grow stronger. Quantum computing and artificial intelligence bring both threat and promise — but we will turn them to our advantage. We will build systems so secure that even the most powerful cannot break them.',
    ],
  },
  {
    title: 'Decentralization is our shield.',
    paragraphs: [
      'Power must never be concentrated in the hands of the few. Decentralized systems — blockchains, distributed networks, peer-to-peer infrastructures — give strength back to the people. They ensure that no single authority can dictate, censor, or control the digital world we inhabit.',
      'We stand for freedom through decentralization.',
    ],
  },
  {
    title: 'Open source is our creed.',
    image: '/images/manifesto/EH.png',
    imageAlt: 'Open source illustration',
    paragraphs: [
      'We reject secrecy and corporate monopolies. We believe in transparency, collaboration, and collective empowerment. Open-source code is digital democracy — it belongs to everyone. By building and sharing openly, we ensure that our technology serves humanity, not hierarchy.',
    ],
  },
  {
    title: 'Education is our duty.',
    paragraphs: [
      'Knowledge is the first line of defense. A digitally literate society cannot be easily deceived or controlled. We will teach, share, and empower — until every individual can defend their own privacy. Awareness is resistance.',
    ],
  },
  {
    title: 'Sustainability is our responsibility.',
    paragraphs: [
      'The digital world is not separate from the physical one. Our innovations must respect the planet that sustains us. We seek balance — between progress and preservation, between code and climate.',
    ],
  },
  {
    title: 'Innovation is our path forward.',
    paragraphs: [
      'We are dreamers and builders, thinkers and tinkerers. Every breakthrough, every new idea, brings us closer to a world where privacy is not a battle — but a birthright. We will not fear the future. We will shape it.',
    ],
  },
  {
    title: 'We are the Concealers.',
    paragraphs: [
      'We fight for a world where privacy lives, breathes, and belongs to all. Guided by our principles, united by our vision, we will not yield.',
      '**The struggle continues — until every person is free.**',
    ],
  },
];
