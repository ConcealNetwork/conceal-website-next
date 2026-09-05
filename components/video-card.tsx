'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';
import type { Video } from '@/content/videos';
import { asset } from '@/lib/assets';

/** YouTube is only loaded after the visitor clicks — no third-party requests on page load. */
export function VideoCard({ video, large = false }: { video: Video; large?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const thumb = video.thumb ? asset(video.thumb) : `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <figure className="glass overflow-hidden p-0">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play ${video.title} by ${video.author} (loads YouTube)`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- remote thumbnails, sizes vary */}
            <img src={thumb} alt="" loading="lazy" className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="pill h-14 w-14 justify-center p-0 group-hover:scale-105">
                <Play size={22} fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className={`px-4 py-3 ${large ? 'text-base' : 'text-sm'}`}>
        <span className="block">{video.title}</span>
        <span className="mt-0.5 block font-mono text-xs text-muted-foreground">{video.author}</span>
      </figcaption>
    </figure>
  );
}
