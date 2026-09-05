import type { Metadata } from 'next';
import { Globe, Landmark, Percent, ShieldCheck, Blocks } from 'lucide-react';
import { DepositCalculator } from '@/components/deposit-calculator';
import { Amber, ArrowLink, Glass, Notice, PageHero, PillLink, Section } from '@/components/ui';
import { WALLET_URL, docs } from '@/content/site';

export const metadata: Metadata = {
  title: 'Earn — blockchain deposits',
  description: 'Lock CCX on-chain for a term you choose and earn interest paid by the protocol. Estimate a deposit and see the tiers.',
};

const rows = [
  { icon: Blocks, title: 'Built on the blockchain', body: 'Conceal Earn is completely decentralised and built on the Conceal blockchain — there is no platform, custodian or counterparty.' },
  { icon: Landmark, title: 'Deposit for interest', body: 'Anyone in the world can deposit CCX in exchange for interest, from any Conceal wallet that supports deposits.' },
  { icon: Globe, title: 'Worldwide access', body: 'Millions of people have no access to financial services. Conceal Earn provides that access to anyone, anywhere.' },
  { icon: ShieldCheck, title: 'Funds stay safe', body: 'Deposited funds are cold-staked on the blockchain for safekeeping and returned automatically at maturity.' },
  { icon: Percent, title: 'More than a savings account', body: 'Deposits earn significantly more than a typical savings account — as much as 6 % APR for the longest term at the highest tier.' },
];

export default function EarnPage() {
  return (
    <>
      <PageHero
        eyebrow="Earn"
        title={
          <>
            <Amber>Blockchain</Amber>-powered deposits.
          </>
        }
        intro="Conceal Earn removes unnecessary intermediaries by giving everyone the power to deposit funds on the blockchain and receive interest in exchange."
        actions={
          <>
            <PillLink href={WALLET_URL}>Open a deposit in the web wallet</PillLink>
            <ArrowLink href="#calculator">Estimate a deposit</ArrowLink>
          </>
        }
      />

      <Section className="pt-0">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rows.map(({ icon: Icon, title, body }) => (
            <Glass as="li" key={title}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-amber">
                <Icon size={18} />
              </span>
              <h2 className="mt-4 text-lg font-medium">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Glass>
          ))}
        </ul>
      </Section>

      <Section id="calculator" eyebrow="Calculator" title="Run the numbers.">
        <DepositCalculator />
        <div className="mt-6">
          <Notice>
            Deposit terms, displayed rates and service availability can change. Treat the rate shown in your wallet on the day you deposit as the offer that applies, and read the{' '}
            <a href={docs('/earn-and-deposits')} target="_blank" rel="noopener noreferrer" className="text-amber underline underline-offset-4">
              deposits guide
            </a>{' '}
            for lock-up and risk considerations. Nothing here is financial advice.
          </Notice>
        </div>
      </Section>
    </>
  );
}
