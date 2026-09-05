import type { Metadata } from 'next';
import Image from 'next/image';
import { CopyField } from '@/components/copy-field';
import { Amber, Glass, Notice, PageHero, Section } from '@/components/ui';
import { donations } from '@/content/donations';
import { asset } from '@/lib/assets';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Conceal development, liquidity and outreach with CCX, BTC, XMR or stablecoins on Polygon.',
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={
          <>
            Help us give <Amber>freedom</Amber> back to people.
          </>
        }
        intro="Conceal is built by volunteers. Every contribution, however small, supports development, boosts liquidity, funds Labs projects and grows the community. Thank you."
      />

      <Section className="pt-0">
        <div className="prose-site max-w-3xl">
          <p>
            Conceal Network is a decentralised, privacy-preserving network that helps people manage their finances and communications with ease. We believe privacy is a fundamental human right, and we are working to expand a privacy-preserving ecosystem that everyone can use. Our overall vision is to give freedom back to the people and help them shield themselves from unauthorised monitoring.
          </p>
          <p>Send your desired amount to one of the receiving addresses below. All donations support the project so we can offer better services, boost liquidity, fund talented developers and strengthen outreach.</p>
        </div>

        <div className="mt-8">
          <Notice>Donations are not refundable. Double-check the address and network before sending — EVM assets go to the Polygon network only.</Notice>
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
