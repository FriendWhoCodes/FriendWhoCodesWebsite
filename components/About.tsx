import { ArrowUpRight, FileDown } from "lucide-react";

const facts = [
  { label: "Role", value: "Senior Software Engineer 2 · Atlan" },
  { label: "Experience", value: "10+ years" },
  { label: "Focus", value: "Distributed systems · Observability · AI agents" },
  { label: "Open to", value: "Staff-level IC roles, remote-first" },
  { label: "Based in", value: "India (remote)" },
  { label: "Contact", value: "contact@friendwhocodes.com" },
];

const skills = [
  "Python",
  "Java",
  "Go",
  "Kubernetes",
  "AWS",
  "Terraform",
  "Kafka",
  "ClickHouse",
  "VictoriaMetrics",
  "Prometheus · Grafana",
  "Anthropic SDK",
  "PostgreSQL",
];

export function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
          About
        </p>
        <h1 className="rise rise-1 font-display text-4xl md:text-6xl font-medium tracking-tight mb-14 max-w-2xl text-balance">
          Ten years of systems{" "}
          <em className="italic text-accent">&amp; shipping.</em>
        </h1>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="rise rise-2 md:col-span-2 space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              I&apos;m Alok Sharma — a senior software engineer with 10+ years
              building distributed systems and observability platforms at
              Atlan, Confluent and Sumo Logic.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Most recently I built the AI SRE Suite of Agents on the Anthropic SDK that
              handles incident detection, investigation and remediation on its
              own — 95% autonomous resolution across a 650-tenant Kubernetes
              fleet, cutting P90 incident mitigation from 3+ hours to under 15
              minutes and saving $300K+ a year.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Before that: logging infrastructure that unblocked FedRAMP GA at
              Confluent, five years of metrics and log-search backend at Sumo
              Logic (including killing an 8-year-old DST bug), and a
              chaos-testing framework that won a company hackathon.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              After hours I design, build and ship my own products — a goal
              tracker, Android apps, and whatever else earns its place. The
              open half lives at{" "}
              <a
                href="https://github.com/FriendWhoCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="link-slide text-accent pb-0.5"
              >
                github.com/FriendWhoCodes
              </a>
              .
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href="/Alok-Sharma-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-ink font-mono text-sm uppercase tracking-[0.12em] rounded-full transition-transform hover:-translate-y-0.5"
              >
                <FileDown size={16} />
                Resume
              </a>
              <a
                href="https://linkedin.com/in/aloks1701"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-line-strong font-mono text-sm uppercase tracking-[0.12em] rounded-full transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="pt-8">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-5">
                Daily drivers
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm text-muted border-b border-line pb-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rise rise-3">
            <div className="border border-line bg-surface rounded-2xl p-6 sticky top-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
                At a glance
              </p>
              <dl className="space-y-5">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent mb-1">
                      {fact.label}
                    </dt>
                    <dd className="text-sm leading-relaxed">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
