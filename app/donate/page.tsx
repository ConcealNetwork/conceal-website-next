import type { Metadata } from 'next';
import Image from 'next/image';
import { CopyField } from '@/components/copy-field';
import { Amber, Glass, Notice, PageHero, Section } from '@/components/ui';
import { donations } from '@/content/donations';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Donate CCX, BTC, XMR or Polygon stablecoins. It pays for servers, listing fees and Labs bounties. Nobody draws a salary.',
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={
          <>
            Help pay for the <Amber>next</Amber> release.
          </>
        }
        intro="Nobody at Conceal is paid a salary. Donations cover servers, exchange listing fees, Labs bounties and the occasional audit. Any amount helps and none of it is refundable."
      />

      <Section className="pt-0">
        <div className="prose-site max-w-3xl">
          <p>
            Conceal has no treasury from a premine and no investors to lean on. What it has is a donation address and a spreadsheet. Money that comes in goes to seed nodes and the explorer, to listing fees when an exchange asks for them, to Labs bounties, and to paying someone to look at the code when a change is big enough to warrant it.
          </p>
          <p>Pick a currency below and send whatever you like. If you want to know what a particular donation was spent on, ask in Discord and someone will tell you.</p>
        </div>

        <div className="mt-8">
          <Notice>Donations cannot be refunded, because we have no way to tell who sent them. Check the address and the network. The EVM address is on Polygon only; sending on Ethereum mainnet will not arrive.</Notice>
        </div>

        <ul className="mt-8 space-y-3">
          {donations.map((d) => (
            <Glass as="li" key={`${d.symbol}-${d.network ?? 'native'}`} className="p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
                <div className="flex w-56 shrink-0 items-center gap-3">
                  <Image src={asset(d.icon)} alt="" width={28} height={28} />
                  <div>
                    <span className="block font-medium">
                      {d.name} <span className="font-mono text-amber">{d.symbol}</span>
                    </span>
                    {d.network && <span className="block font-mono text-xs text-muted-foreground">{d.network} network</span>}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <CopyField value={d.address} label={`${d.symbol} address`} compact />
                </div>
              </div>
            </Glass>
          ))}
        </ul>
      </Section>
    </>
  );
}
