import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface StackProject {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  status: "live" | "upcoming";
  tint: string; // color-mix hue source
}

const projects: StackProject[] = [
  {
    title: "Goal Setter",
    description:
      "Free 2026 goal-setting tool under the Man of Wisdom banner. Set goals, break them down, track the year.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://goals.manofwisdom.co/",
    status: "live",
    tint: "var(--accent)",
  },
  {
    title: "AstroFacts",
    description:
      "Facts about the universe, planets, and space exploration — live on the Play Store.",
    tech: ["Android", "Kotlin"],
    href: "https://play.google.com/store/apps/details?id=com.friendwhocodes.astrofacts",
    status: "live",
    tint: "var(--live)",
  },
  {
    title: "Focus Empire",
    description:
      "Build your focus empire one session at a time. Gamified productivity, in active development.",
    tech: ["Android", "Kotlin"],
    status: "upcoming",
    tint: "var(--line-strong)",
  },
];

function Card({ project, index }: { project: StackProject; index: number }) {
  const inner = (
    <div
      className="stack-card border border-line px-6 py-10 md:px-14 md:py-14 min-h-[70svh] flex flex-col justify-between"
      style={{
        top: `calc(10vh + ${index * 2.5}rem)`,
        background: `linear-gradient(140deg, color-mix(in srgb, ${project.tint} 14%, var(--surface)), var(--surface) 60%)`,
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <span
          aria-hidden
          className="font-display font-bold text-[clamp(4rem,10vw,8rem)] leading-none text-outline opacity-40 select-none"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted mt-4">
          <span
            className={`inline-block w-2 h-2 rounded-full ${
              project.status === "live" ? "bg-live dot-live" : "bg-line-strong"
            }`}
          />
          {project.status === "live" ? "Live" : "In progress"}
        </span>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-8 mt-10">
        <div className="max-w-2xl">
          <h3 className="font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(2.6rem,6.5vw,5.5rem)] mb-6">
            {project.title}
          </h3>
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-lg mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {project.href && (
          <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-accent-ink group-hover:-rotate-12">
            <ArrowUpRight size={28} />
          </span>
        )}
      </div>
    </div>
  );

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      data-cursor="Visit"
    >
      {inner}
    </a>
  ) : (
    <div className="group block">{inner}</div>
  );
}

export function ProjectStack() {
  return (
    <section className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <div data-reveal className="flex items-end justify-between mb-14">
        <h2 className="font-display font-bold uppercase tracking-tight leading-none text-[clamp(2.2rem,5vw,4rem)]">
          Selected
          <br />
          <span className="text-outline">work</span>
          <em className="font-serif italic normal-case text-accent font-medium">
            {" "}
            /26
          </em>
        </h2>
        <Link
          href="/portfolio"
          data-cursor="All"
          className="link-slide font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink pb-1 hidden sm:block"
        >
          All projects →
        </Link>
      </div>

      <div className="flex flex-col gap-10 pb-[6vh]">
        {projects.map((project, i) => (
          <Card key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
