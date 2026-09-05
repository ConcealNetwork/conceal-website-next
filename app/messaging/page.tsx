import type { Metadata } from 'next';
import { BookUser, Flame, Lock, MonitorSmartphone, Network } from 'lucide-react';
import { Amber, ArrowLink, Glass, PageHero, PillLink, Section } from '@/components/ui';
import { WALLET_URL, docs } from '@/content/site';

export const metadata: Metadata = {
  title: 'Messaging — encrypted messages on the blockchain',
  description: 'Decentralised, end-to-end encrypted messaging carried by the Conceal blockchain, with an address book and self-destructing messages.',
};

const features = [
  { icon: Flame, title: 'Self-destructing messages', body: 'Messages can delete themselves after being read — set the timer and it is gone.' },
  { icon: MonitorSmartphone, title: 'Desktop, web or phone', body: 'Conceal Messaging works in Conceal Desktop and the web wallet, including on your smartphone.' },
  { icon: Network, title: 'Decentralised', body: 'A decentralised service that operates on the blockchain. There is no messaging server to seize, subpoena or switch off.' },
  { icon: BookUser, title: 'Address book', body: 'No need to copy and paste an address every time. Keep an address book and message your contacts directly.' },
  { icon: Lock, title: 'Encrypted end to end', body: 'Every message is encrypted and can only be read by the sender and the receiver.' },
];

export default function MessagingPage() {
  return (
    <>
      <PageHero
        eyebrow="Messaging"
        title={
          <>
            Decentralised, <Amber>encrypted</Amber> messages.
          </>
        }
        intro="Conceal Messaging expands the ecosystem with fully integrated encrypted messaging on the blockchain — private, untraceable and yours."
        actions={
          <>
            <PillLink href={WALLET_URL}>Send a message in the web wallet</PillLink>
            <ArrowLink href="/wallets#desktop">Or use Conceal Desktop</ArrowLink>
          </>
        }
      />
      <Section className="pt-0">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <Glass as="li" key={title}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-amber">
                <Icon size={18} />
              </span>
              <h2 className="mt-4 text-lg font-medium">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Glass>
          ))}
          <li className="flex flex-col justify-center rounded-xl border border-dashed border-border/70 p-6">
            <p className="text-sm text-muted-foreground">How it works under the hood, message fees and limits:</p>
            <ArrowLink href={docs('/messaging')} className="mt-2 text-foreground">
              Messaging guide
            </ArrowLink>
          </li>
        </ul>
      </Section>
    </>
  );
}
