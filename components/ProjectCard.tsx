import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status?: "live" | "upcoming";
}

export function ProjectCard({ title, description, tech, github, demo, status }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {status && (
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              status === "live"
                ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
            }`}
          >
            {status === "live" ? "Live" : "Coming Soon"}
          </span>
        )}
      </div>
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
            className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} />
            {demo.includes("play.google.com") ? "Play Store" : "Live Demo"}
          </a>
        )}
      </div>
    </div>
  );
}
