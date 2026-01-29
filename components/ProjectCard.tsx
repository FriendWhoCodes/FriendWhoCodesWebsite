import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
