'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { DISCORD_URL, GITHUB_URL, WALLET_URL, primaryNav, type NavGroup, type NavItem } from '@/content/site';
import { DiscordIcon, GithubIcon } from './icons/brand';
import { ThemeToggle } from './theme-toggle';
import { SmartLink } from './ui';
import { asset } from '@/lib/assets';

const isGroup = (item: NavItem | NavGroup): item is NavGroup => 'items' in item;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenu(null);
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Conceal Network home">
          <Image src={asset('/brand/logo.svg')} alt="" width={28} height={28} priority />
          <span className="text-[17px] font-semibold tracking-tight">Conceal</span>
        </Link>

        <nav ref={navRef} aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) =>
            isGroup(item) ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  aria-expanded={menu === item.label}
                  aria-haspopup="menu"
                  onClick={() => setMenu(menu === item.label ? null : item.label)}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition ${menu === item.label ? 'rotate-180' : ''}`} />
                </button>
                {menu === item.label && (
                  <div role="menu" className="glass absolute right-0 top-full mt-2 w-48 p-2">
                    {item.items.map((sub) => (
                      <SmartLink
                        key={sub.href}
                        href={sub.href}
                        external={sub.external}
                        role="menuitem"
                        onClick={() => setMenu(null)}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                      >
                        {sub.label}
                      </SmartLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <SmartLink
                key={item.href}
                href={item.href}
                external={item.external}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </SmartLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="p-2 text-muted-foreground transition hover:text-foreground">
            <DiscordIcon />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted-foreground transition hover:text-foreground">
            <GithubIcon />
          </a>
          <ThemeToggle />
          <a href={WALLET_URL} target="_blank" rel="noopener noreferrer" className="pill ml-2 px-5 py-2 text-sm">
            Open wallet
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background/95 px-6 py-6 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {primaryNav.map((item) =>
              isGroup(item) ? (
                <div key={item.label} className="mt-3">
                  <p className="eyebrow mb-2">{item.label}</p>
                  {item.items.map((sub) => (
                    <SmartLink key={sub.href} href={sub.href} external={sub.external} onClick={() => setOpen(false)} className="block py-2 text-lg">
                      {sub.label}
                    </SmartLink>
                  ))}
                </div>
              ) : (
                <SmartLink key={item.href} href={item.href} external={item.external} onClick={() => setOpen(false)} className="block py-2 text-lg">
                  {item.label}
                </SmartLink>
              ),
            )}
          </nav>
          <div className="mt-6 flex items-center gap-3">
            <a href={WALLET_URL} target="_blank" rel="noopener noreferrer" className="pill">
              Open wallet
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
