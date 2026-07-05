import { ArrowRight } from "lucide-react";
import Link from "next/link";

const marqueeItems = [
  "Next.js",
  "TypeScript",
  "Android",
  "Kotlin",
  "AI agents",
  "Python",
  "Postgres",
  "Tailwind",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Oversized decorative glyph */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -right-10 -top-24 font-display text-[26rem] leading-none text-accent/8 hidden lg:block"
        >
          *
        </span>

        <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
          Alok Sharma — software engineer, India
        </p>

        <h1 className="rise rise-1 font-display font-medium tracking-tight text-balance text-[clamp(3rem,9vw,6.5rem)] leading-[0.98] mb-8">
          Your friend
          <br />
          <em className="text-accent not-italic md:italic">who codes.</em>
        </h1>

        <p className="rise rise-2 text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10">
          I build web apps, Android apps, and AI-assisted tools — and I ship
          them. This is where the work lives.
        </p>

        <div className="rise rise-3 flex flex-wrap items-center gap-6">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-ink font-mono text-sm uppercase tracking-[0.12em] rounded-full transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/contact"
            className="link-slide font-mono text-sm uppercase tracking-[0.12em] text-ink pb-0.5"
          >
            Get in touch
          </Link>
        </div>

        <p className="rise rise-4 mt-14 flex items-center gap-2.5 font-mono text-xs text-muted">
          <span className="dot-live inline-block w-2 h-2 rounded-full bg-live" />
          Currently building: Focus Empire
        </p>
      </div>

      {/* Tech marquee */}
      <div className="rise rise-5 border-y border-line py-3 overflow-hidden">
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-muted px-8 flex items-center gap-8"
                >
                  {item}
                  <span className="text-accent">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
