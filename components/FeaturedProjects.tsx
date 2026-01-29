import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

const featuredProjects = [
  {
    title: "Man of Wisdom - Goal Setter",
    description: "Set and track your 2026 goals with this free goal-setting tool.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://goals.manofwisdom.co/",
    status: "live" as const,
  },
  {
    title: "AstroFacts",
    description: "Discover fascinating facts about the universe, planets, and space.",
    tech: ["Android", "Kotlin"],
    demo: "https://play.google.com/store/apps/details?id=com.friendwhocodes.astrofacts",
    status: "live" as const,
  },
  {
    title: "Focus Empire",
    description: "Build your focus empire one session at a time. Gamified productivity.",
    tech: ["Android", "Kotlin"],
    status: "upcoming" as const,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
