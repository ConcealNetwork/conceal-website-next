import type { Metadata } from 'next';
import { Globe, Landmark, Percent, ShieldCheck, Blocks } from 'lucide-react';
import { DepositCalculator } from '@/components/deposit-calculator';
import { Amber, ArrowLink, Glass, Notice, PageHero, PillLink, Section } from '@/components/ui';
import { WALLET_URL, docs } from '@/content/site';

export const metadata: Metadata = {
  title: 'Earn',
  description: 'Lock CCX for one to twelve months and the protocol pays interest at maturity, up to 6 % APR. Rate table and calculator.',
};

const rows = [
  { icon: Blocks, title: 'It is a transaction', body: 'A deposit is a special transaction type in Conceal Core. The lock, the term and the interest are all enforced by consensus rules, so there is no platform that could go bust.' },
  { icon: Landmark, title: 'Anyone can open one', body: 'There is no account, no KYC and no minimum beyond one CCX. Open a deposit from Conceal Desktop or the web wallet.' },
  { icon: Globe, title: 'Works anywhere', body: 'A phone and an internet connection are the whole requirement. Nobody checks where you live.' },
  { icon: ShieldCheck, title: 'Coins never leave your keys', body: 'The locked coins are still yours; the chain just refuses to let them move until maturity. Lose your seed and you lose the deposit, same as any other balance.' },
  { icon: Percent, title: 'Up to 6 % APR', body: 'Base rate is 2.9 %, 3.9 % or 4.9 % depending on the amount. Every month of term past the first adds 0.1 %, so a 12-month deposit of 20,000 CCX or more earns 6 %.' },
];

export default function EarnPage() {
  return (
    <>
      <PageHero
        eyebrow="Earn"
        title={
          <>
            Interest from the <Amber>chain</Amber>, not a bank.
          </>
        }
        intro="A deposit is a transaction that locks CCX for a term you choose, one to twelve months. When the term ends the protocol pays the interest along with the principal. No custodian is involved at any point."
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

      <Section id="calculator" eyebrow="Calculator" title="Work out a deposit.">
        <DepositCalculator />
        <div className="mt-6">
          <Notice>
            These are the rates the site showed on the date above. The wallet shows the rate that applies when you actually open a deposit; if the two disagree, the wallet is right. Read the{' '}
            <a href={docs('/earn-and-deposits')} target="_blank" rel="noopener noreferrer" className="text-amber underline underline-offset-4">
              deposits guide
            </a>{' '}
            before locking anything for a year. CCX has a price, and it moves. Nothing here is financial advice.
          </Notice>
        </div>
      </Section>
    </>
  );
}
