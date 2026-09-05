import type { Metadata } from 'next';
import { VideoCard } from '@/components/video-card';
import { Amber, ArrowLink, Bold, PageHero, Section } from '@/components/ui';
import { communityVideos, featuredVideos, miningVideos } from '@/content/videos';

export const metadata: Metadata = {
  title: 'Media & videos',
  description: 'Videos about Conceal: overviews, wallet walkthroughs, deposits and mining, from the team and from other people.',
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="In the media"
        title={
          <>
            People have made <Amber>videos.</Amber>
          </>
        }
        intro="Overviews, wallet walkthroughs, mining guides and a few interviews, from the team and from people who found the project on their own. Nothing loads from YouTube until you press play."
        actions={<ArrowLink href="https://www.youtube.com/channel/UC_YtRUcy0FR0yIc3H6DDxuw">Conceal on YouTube</ArrowLink>}
      />

      <Section className="pt-0" eyebrow="Featured" title="If you only watch one.">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredVideos.map((v) => (
            <VideoCard key={v.id} video={v} large />
          ))}
        </div>
      </Section>

      <Section eyebrow="Community" title="Made by other people.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communityVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Mining" title="How to mine it." intro="Setting up a miner, picking a pool, and the mistakes everyone makes the first time.">
        <div className="grid gap-4 md:grid-cols-3">
          {miningVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </Section>
    </>
  );
}
