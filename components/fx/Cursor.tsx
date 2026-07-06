"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: an ember dot that eases after the pointer and
 * expands into a labelled disc over [data-cursor="Label"] targets.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const textEl = textRef.current;
    if (!el || !textEl) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let tx = -100;
    let ty = -100;
    let x = tx;
    let y = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (target) {
        textEl.textContent = target.dataset.cursor || "View";
        el.classList.add("is-label");
      } else {
        el.classList.remove("is-label");
      }
    };

    const loop = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div ref={ref} className="cursor-dot" aria-hidden>
      <span ref={textRef} className="cursor-text font-mono" />
    </div>
  );
}
