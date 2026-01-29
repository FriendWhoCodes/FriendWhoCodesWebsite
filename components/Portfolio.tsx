import { ProjectCard } from "./ProjectCard";

// TODO: Move to data file or CMS
const projects = [
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
  {
    title: "Project 4",
    description: "Description of project 4",
    tech: ["React Native", "Firebase"],
    github: "https://github.com/FriendWhoCodes/project4",
  },
  {
    title: "Project 5",
    description: "Description of project 5",
    tech: ["Go", "PostgreSQL", "Docker"],
    github: "https://github.com/FriendWhoCodes/project5",
    demo: "https://project5.com",
  },
  {
    title: "Project 6",
    description: "Description of project 6",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    github: "https://github.com/FriendWhoCodes/project6",
  },
];

export function Portfolio() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          A collection of projects I&apos;ve worked on.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
