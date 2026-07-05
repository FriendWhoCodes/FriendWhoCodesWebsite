import { ProjectCard } from "./ProjectCard";

const webApps = [
  {
    title: "Man of Wisdom — Goal Setter",
    description:
      "Set and track your 2026 goals with this free goal-setting tool.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://goals.manofwisdom.co/",
    status: "live" as const,
  },
  {
    title: "Man of Wisdom — Online Journal",
    description: "A digital journaling platform for reflection and personal growth.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "upcoming" as const,
  },
  {
    title: "Man of Wisdom — Time Views",
    description: "Visualize and manage your time with philosophy-inspired time tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "upcoming" as const,
  },
];

const androidApps = [
  {
    title: "AstroFacts",
    description:
      "Facts about the universe, planets, stars, and space exploration.",
    tech: ["Android", "Kotlin"],
    demo: "https://play.google.com/store/apps/details?id=com.friendwhocodes.astrofacts",
    status: "live" as const,
  },
  {
    title: "9Months",
    description: "A pregnancy companion app to track your journey to parenthood.",
    tech: ["Android", "Kotlin"],
    status: "upcoming" as const,
  },
  {
    title: "Focus Empire",
    description:
      "Build your focus empire one session at a time. Gamified productivity.",
    tech: ["Android", "Kotlin"],
    status: "upcoming" as const,
  },
];

export function Portfolio() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
          The work
        </p>
        <h1 className="rise rise-1 font-display text-4xl md:text-6xl font-medium tracking-tight mb-4">
          Projects
        </h1>
        <p className="rise rise-2 text-muted text-lg max-w-xl mb-14 leading-relaxed">
          What I&apos;ve built and what&apos;s on the bench right now.
        </p>

        {/* Web Apps */}
        <div className="rise rise-3 mb-16">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
            Web applications
          </h2>
          <div className="border-t border-line">
            {webApps.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>

        {/* Android Apps */}
        <div className="rise rise-4">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Android apps
            </h2>
            <a
              href="https://play.google.com/store/apps/dev?id=4655226390591902671"
              target="_blank"
              rel="noopener noreferrer"
              className="link-slide font-mono text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink pb-0.5"
            >
              Play Store profile →
            </a>
          </div>
          <div className="border-t border-line">
            {androidApps.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
