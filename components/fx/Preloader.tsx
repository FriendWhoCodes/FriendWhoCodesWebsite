"use client";

import { useEffect, useState } from "react";

/**
 * Introduction preloader: counts to 100 with the wordmark,
 * then lifts away. Shown once per browser session.
 */
export function Preloader() {
  const [state, setState] = useState<"hidden" | "counting" | "done">("hidden");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("fwc-intro")) return;
    sessionStorage.setItem("fwc-intro", "1");
    setState("counting");

    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const DURATION = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setState("done");
        document.documentElement.style.overflow = "";
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      className={`preloader ${state === "done" ? "done" : ""}`}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-60">
          friendwhocodes_
        </p>
        <p
          className="font-display font-bold text-7xl md:text-8xl tabular-nums"
          style={{ color: "#ff5a1f" }}
        >
          {count}
        </p>
      </div>
    </div>
  );
}
