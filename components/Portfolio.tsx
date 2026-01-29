import { ProjectCard } from "./ProjectCard";

const webApps = [
  {
    title: "Man of Wisdom - Goal Setter",
    description: "Set and track your 2026 goals with this free goal-setting tool. Philosophy-powered productivity for intentional living.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://goals.manofwisdom.co/",
    status: "live" as const,
  },
  {
    title: "Man of Wisdom - Online Journal",
    description: "A digital journaling platform for reflection and personal growth.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "upcoming" as const,
  },
  {
    title: "Man of Wisdom - Time Views",
    description: "Visualize and manage your time with philosophy-inspired time tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "upcoming" as const,
  },
];

const androidApps = [
  {
    title: "AstroFacts",
    description: "Discover fascinating facts about the universe, planets, stars, and space exploration.",
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
    description: "Build your focus empire one session at a time. Gamified productivity app.",
    tech: ["Android", "Kotlin"],
    status: "upcoming" as const,
  },
];

export function Portfolio() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          A collection of projects I&apos;ve built and am currently working on.
        </p>

        {/* Web Apps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Web Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webApps.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        {/* Android Apps */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Android Apps</h2>
            <a
              href="https://play.google.com/store/apps/dev?id=4655226390591902671"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on Play Store →
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {androidApps.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
