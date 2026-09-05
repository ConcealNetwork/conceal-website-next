import type { Metadata } from 'next';
import { BookUser, Flame, Lock, MonitorSmartphone, Network } from 'lucide-react';
import { Amber, ArrowLink, Glass, PageHero, PillLink, Section } from '@/components/ui';
import { WALLET_URL, docs } from '@/content/site';

export const metadata: Metadata = {
  title: 'Messaging',
  description: 'Encrypted messages carried inside Conceal transactions. Only the recipient can read them, there is no server, and they can self-destruct.',
};

const features = [
  { icon: Flame, title: 'Self-destruct timer', body: 'Set a lifetime on a message and the wallet deletes it after it has been read. Useful for anything you would rather not have in an archive.' },
  { icon: MonitorSmartphone, title: 'Desktop, web or phone', body: 'Conceal Desktop and the web wallet both send and receive messages. The web wallet can scan a QR code to fill in the address.' },
  { icon: Network, title: 'No server', body: 'Messages propagate the same way transactions do, node to node. Seizing a server gets you nothing because there isn\'t one.' },
  { icon: BookUser, title: 'Address book', body: 'Save a contact once and pick it from a list. Conceal addresses are 98 characters long, so this matters more than it sounds.' },
  { icon: Lock, title: 'Encrypted to the recipient', body: 'The sender encrypts with the recipient\'s public key before broadcasting. Nodes relay ciphertext and nothing else.' },
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
        intro="A message on Conceal is a transaction carrying an encrypted payload. Only the recipient's wallet can decrypt it. There is no server in between to log it, hand it over, or go offline."
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
            <p className="text-sm text-muted-foreground">Fees, size limits and how the encryption works:</p>
            <ArrowLink href={docs('/messaging')} className="mt-2 text-foreground">
              Messaging guide
            </ArrowLink>
          </li>
        </ul>
      </Section>
    </>
  );
}
