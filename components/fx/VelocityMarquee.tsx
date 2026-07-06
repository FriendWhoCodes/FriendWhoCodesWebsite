"use client";

import { useEffect, useRef } from "react";

/**
 * Giant outline marquee whose direction and speed react to scroll
 * velocity — drifts slowly at rest, whips when you scroll.
 */
export function VelocityMarquee({ text }: { text: string }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let offset = 0;
    let lastY = window.scrollY;
    let velocity = 0;
    let raf = 0;

    const loop = () => {
      const y = window.scrollY;
      velocity += ((y - lastY) - velocity) * 0.12;
      lastY = y;
      // Base drift + scroll kick, direction follows scroll
      offset -= 0.6 + Math.min(18, Math.abs(velocity) * 0.45) * Math.sign(velocity || 1) * 0.9;
      const width = track.scrollWidth / 2;
      if (width > 0) {
        offset = ((offset % width) + width) % width;
        track.style.transform = `translateX(${-offset}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const chunk = (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} className="inline-flex items-baseline">
          <span className="text-outline font-display font-bold uppercase text-[clamp(4rem,11vw,9rem)] leading-none tracking-tight px-6">
            {text}
          </span>
          <span className="text-accent font-serif italic text-[clamp(2.5rem,6vw,5rem)] px-6">
            *
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div className="overflow-hidden py-10 md:py-16 border-y border-line select-none" aria-hidden>
      <div ref={trackRef} className="marquee-row flex w-max items-baseline">
        <div className="flex items-baseline">{chunk}</div>
        <div className="flex items-baseline">{chunk}</div>
      </div>
    </div>
  );
}
