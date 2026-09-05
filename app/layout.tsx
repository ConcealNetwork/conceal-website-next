import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { themeInitScript } from '@/components/theme-toggle';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/content/site';
import { asset } from '@/lib/assets';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — ${SITE_TAGLINE}`, template: `%s · ${SITE_NAME}` },
  description:
    'Conceal is a privacy-protected, community-run network for untraceable payments, encrypted messages and interest-earning deposits. Open source. No one in charge.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [{ url: '/brand/og.png', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: 'summary_large_image', site: '@ConcealNetwork' },
  icons: { icon: asset('/brand/conceal-mark.svg'), apple: asset('/brand/community-bbg-center-256x256.png') },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
