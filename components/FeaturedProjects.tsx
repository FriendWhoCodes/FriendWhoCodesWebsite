import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

// TODO: Move to data file or CMS
const featuredProjects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/FriendWhoCodes/project1",
    demo: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/FriendWhoCodes/project2",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    tech: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/FriendWhoCodes/project3",
    demo: "https://project3.com",
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
