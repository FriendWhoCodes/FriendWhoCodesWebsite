import Link from "next/link";

function RotatingBadge() {
  return (
    <Link
      href="/contact"
      aria-label="Open to interesting work — contact"
      className="group relative block w-32 h-32 md:w-40 md:h-40"
      data-cursor="Say hi"
    >
      <svg viewBox="0 0 100 100" className="spin-slow w-full h-full">
        <defs>
          <path
            id="circ"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-ink font-mono uppercase" style={{ fontSize: 6.8, letterSpacing: "0.14em" }}>
          <textPath href="#circ">
            open to staff-level work · ships things ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-3 h-3 rounded-full bg-live dot-live transition-transform group-hover:scale-150" />
      </span>
    </Link>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-between overflow-hidden">
      <div className="max-w-[92rem] mx-auto w-full px-4 sm:px-6 lg:px-10 pt-14 md:pt-20 flex-1 flex flex-col justify-center">
        <div className="flex items-start justify-between gap-8">
          <p className="rise font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-muted max-w-64 leading-loose">
            Alok Sharma
            <br />
            senior software engineer 2
            <br />
            10+ years · India · remote
          </p>
          <div className="rise rise-2 hidden md:block">
            <RotatingBadge />
          </div>
        </div>

        <h1 className="mt-8 md:mt-4 font-display font-bold uppercase leading-[0.92] tracking-tight">
          <span className="clip-line">
            <span
              style={{ animationDelay: "0.15s" }}
              className="text-[clamp(3.4rem,12.5vw,11.5rem)]"
            >
              Your friend
            </span>
          </span>
          <span className="clip-line">
            <span
              style={{ animationDelay: "0.3s" }}
              className="text-[clamp(3.4rem,12.5vw,11.5rem)]"
            >
              <span className="text-outline">who</span>{" "}
              <em className="font-serif italic font-medium normal-case text-accent tracking-normal">
                codes
              </em>
              <span className="text-accent">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-10 md:mt-14 flex flex-wrap items-end justify-between gap-8">
          <p className="rise rise-4 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            Ten years deep in distributed systems and observability — Atlan,
            Confluent, Sumo Logic. Lately: AI agents that run incident
            response on their own.
          </p>
          <div className="rise rise-5 flex items-center gap-8">
            <Link
              href="/work"
              data-cursor="Work"
              className="link-slide font-mono text-sm uppercase tracking-[0.15em] pb-1"
            >
              Selected work
            </Link>
            <Link
              href="/contact"
              data-cursor="Hello"
              className="link-slide font-mono text-sm uppercase tracking-[0.15em] pb-1 text-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="rise rise-5 max-w-[92rem] mx-auto w-full px-4 sm:px-6 lg:px-10 pb-8 mt-16 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <span className="flex items-center gap-2.5">
          <span className="dot-live inline-block w-2 h-2 rounded-full bg-live" />
          Now: AI SRE agents at Atlan · Focus Empire after hours
        </span>
        <span className="hidden sm:block">Scroll ↓</span>
      </div>
    </section>
  );
}
