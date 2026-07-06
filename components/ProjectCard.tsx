"use client";

import { Github, ArrowUpRight } from "lucide-react";

function trackSpotlight(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status?: "live" | "upcoming";
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  status,
  index,
}: ProjectCardProps) {
  // Avoid nested anchors: only make the whole row a link when there's no inner link
  const isRowLink = Boolean(demo && !github);
  const Wrapper = isRowLink ? "a" : "div";
  const wrapperProps = isRowLink
    ? { href: demo, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      onMouseMove={trackSpotlight}
      className="spotlight group relative block border-b border-line py-8 md:py-10 transition-colors hover:bg-surface"
    >
      <div className="grid md:grid-cols-[4rem_1fr_auto] gap-4 md:gap-8 items-baseline px-1 md:px-4">
        {index !== undefined && (
          <span className="font-mono text-sm text-muted hidden md:block">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}

        <div className={index === undefined ? "md:col-span-2" : ""}>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight group-hover:text-accent transition-colors">
              {title}
            </h3>
            {status && (
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full ${
                    status === "live" ? "bg-live dot-live" : "bg-line-strong"
                  }`}
                />
                {status === "live" ? "Live" : "In progress"}
              </span>
            )}
          </div>
          <p className="text-muted max-w-xl leading-relaxed mb-3">{description}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
              >
                {t}
              </span>
            ))}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink hover:text-accent transition-colors"
              >
                <Github size={13} />
                Code
              </a>
            )}
            {demo && !isRowLink && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink hover:text-accent transition-colors"
              >
                <ArrowUpRight size={13} />
                {demo.includes("play.google.com") ? "Play Store" : "Live"}
              </a>
            )}
          </div>
        </div>

        {demo && (
          <span className="hidden md:flex items-center justify-center w-11 h-11 rounded-full border border-line text-muted transition-all group-hover:bg-accent group-hover:border-accent group-hover:text-accent-ink group-hover:-rotate-12">
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>
    </Wrapper>
  );
}
