'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { asset } from '@/lib/assets';

export function ScreenshotStrip({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  if (images.length === 0) return null;
  const go = (d: number) => setI((i + d + images.length) % images.length);

  return (
    <figure className="glass p-3">
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-background/60" style={{ minHeight: 320 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- screenshots with varying aspect ratios */}
        <img src={asset(images[i])} alt={`${alt} — screenshot ${i + 1} of ${images.length}`} className="max-h-[420px] w-auto max-w-full object-contain" loading="lazy" />
        {images.length > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className="keycap absolute left-2 top-1/2 -translate-y-1/2 p-2">
              <ChevronLeft size={16} />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className="keycap absolute right-2 top-1/2 -translate-y-1/2 p-2">
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <figcaption className="mt-3 flex justify-center gap-1.5">
          {images.map((_, j) => (
            <button
              key={j}
              type="button"
              onClick={() => setI(j)}
              aria-label={`Screenshot ${j + 1}`}
              aria-current={j === i}
              className={`h-1.5 rounded-full transition-all ${j === i ? 'w-6 bg-primary' : 'w-1.5 bg-border'}`}
            />
          ))}
        </figcaption>
      )}
    </figure>
  );
}
