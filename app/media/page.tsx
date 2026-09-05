import type { Metadata } from 'next';
import { VideoCard } from '@/components/video-card';
import { Amber, ArrowLink, Bold, PageHero, Section } from '@/components/ui';
import { communityVideos, featuredVideos, miningVideos } from '@/content/videos';

export const metadata: Metadata = {
  title: 'Media & videos',
  description: 'Videos about Conceal from the team and the community — overviews, wallets, deposits and mining.',
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="In the media"
        title={
          <>
            Going <Amber>noticed</Amber>, not <Bold>concealed.</Bold>
          </>
        }
        intro="Conceal has sparked a lot of videos. We gathered them in one place. Videos load from YouTube only after you press play."
        actions={<ArrowLink href="https://www.youtube.com/channel/UC_YtRUcy0FR0yIc3H6DDxuw">Conceal on YouTube</ArrowLink>}
      />

      <Section className="pt-0" eyebrow="Featured" title="Start here.">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredVideos.map((v) => (
            <VideoCard key={v.id} video={v} large />
          ))}
        </div>
      </Section>

      <Section eyebrow="Community" title="What people are saying.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Mining" title="Learn to mine CCX." intro="Conceal is 100 % proof of work. Learn how to mine it and the best practices for doing so.">
        <div className="grid gap-4 md:grid-cols-3">
          {miningVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </Section>
    </>
  );
}
