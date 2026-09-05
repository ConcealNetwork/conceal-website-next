import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const base = (props: P): P => ({ width: 18, height: 18, fill: 'currentColor', 'aria-hidden': true, ...props });

export function DiscordIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.2.4a18 18 0 0 1 4.6 2.3 15.6 15.6 0 0 0-15.6 0A18 18 0 0 1 8.8 3.4L8.6 3a19.7 19.7 0 0 0-4.9 1.5C.6 9 0 13.4.3 17.8a19.9 19.9 0 0 0 6 3l1.3-2.1a12.8 12.8 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 11.8 0l.5.4a12.8 12.8 0 0 1-2 1l1.3 2.1a19.9 19.9 0 0 0 6-3c.5-5.1-.8-9.5-3.4-13.4ZM8.5 15.1c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4Zm7 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4Z" />
    </svg>
  );
}

export function GithubIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
    </svg>
  );
}

export function XIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9.1L1 2h7l4.8 6.4L18.2 2Zm-1.2 18h1.9L7.1 3.9H5.1L17 20Z" />
    </svg>
  );
}

export function TelegramIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.6 8.2-2 9.3c-.1.7-.5.8-1.1.5l-3-2.2-1.5 1.4c-.2.2-.3.3-.6.3l.2-3.1 5.6-5.1c.2-.2 0-.3-.4-.1l-6.9 4.4-3-.9c-.6-.2-.7-.6.1-.9l11.7-4.5c.5-.2 1 .1.9.9Z" />
    </svg>
  );
}

export function YoutubeIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

export function MediumIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M13.5 12a6.8 6.8 0 1 1-13.5 0 6.8 6.8 0 0 1 13.5 0Zm7.4 0c0 3.5-1.5 6.4-3.4 6.4S14.1 15.5 14.1 12s1.5-6.4 3.4-6.4 3.4 2.9 3.4 6.4Zm3.1 0c0 3.1-.5 5.7-1.2 5.7S21.6 15.1 21.6 12s.5-5.7 1.2-5.7S24 8.9 24 12Z" />
    </svg>
  );
}

export function SubstackIcon(props: P) {
  return (
    <svg viewBox="0 0 20 20" {...base(props)}>
      <path d="M1.96 .62h16.07v2.08H1.96zM1.96 4.78h16.07v2.08H1.96zM1.96 8.93v11.02L10 14.63l8.04 5.32V8.93z" />
    </svg>
  );
}

export function FacebookIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z" />
    </svg>
  );
}

export function BitcointalkIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" {...base(props)}>
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm4.6 13.7c-.2 1.9-1.7 2.5-3.5 2.7v2.2h-1.3v-2.1h-1v2.1H9.4v-2.1H7v-1.4l1 .1c.5 0 .6-.3.6-.5V8.4c0-.3-.2-.5-.7-.5H7V6.5h2.4V4.4h1.3v2.1h1v-2.1h1.3v2.2c1.6.1 3 .6 3.2 2.2.1 1.1-.4 1.7-1.1 2 .9.3 1.6 1 1.5 2.9Zm-2.7-4.5c0-1.4-2.2-1.2-2.9-1.2v2.5c.7 0 2.9.2 2.9-1.3Zm.4 4.3c0-1.5-2.6-1.3-3.3-1.3v2.7c.7 0 3.3.2 3.3-1.4Z" />
    </svg>
  );
}

export const socialIcons: Record<string, (p: P) => React.JSX.Element> = {
  discord: DiscordIcon,
  github: GithubIcon,
  x: XIcon,
  telegram: TelegramIcon,
  'telegram-news': TelegramIcon,
  youtube: YoutubeIcon,
  medium: MediumIcon,
  substack: SubstackIcon,
  facebook: FacebookIcon,
  bitcointalk: BitcointalkIcon,
};
