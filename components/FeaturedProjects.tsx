import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

const featuredProjects = [
  {
    title: "AI SRE Suite of Agents",
    description:
      "Autonomous incident detection, investigation and remediation on the Anthropic SDK — 95% autonomous resolution across a 650-tenant fleet. Built at Atlan.",
    tech: ["Anthropic SDK", "Kubernetes", "ClickHouse"],
    status: "live" as const,
  },
  {
    title: "Man of Wisdom — Goal Setter",
    description:
      "Set and track your 2026 goals with this free goal-setting tool.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://goals.manofwisdom.co/",
    status: "live" as const,
  },
  {
    title: "AstroFacts",
    description:
      "Facts about the universe, planets, and space — on the Play Store.",
    tech: ["Android", "Kotlin"],
    demo: "https://play.google.com/store/apps/details?id=com.friendwhocodes.astrofacts",
    status: "live" as const,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-4 md:mb-6">
          <div data-reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-3">
              01 — Selected work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight">
              Things I&apos;ve shipped
            </h2>
          </div>
          <Link
            href="/work"
            className="group hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-accent transition-colors pb-1"
          >
            All projects
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div data-reveal="2" className="border-t border-line">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

        <Link
          href="/work"
          className="sm:hidden mt-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-accent"
        >
          All projects
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
