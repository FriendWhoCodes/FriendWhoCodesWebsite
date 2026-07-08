import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";

const description =
  "Systems shipped professionally at Atlan, Confluent and Sumo Logic, plus products built and shipped independently.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Friend Who Codes",
    description,
    url: "/work",
  },
};

const professional = [
  {
    title: "AI SRE Suite of Agents",
    description:
      "Suite of autonomous agents for incident detection, investigation and remediation on the Anthropic SDK — 40+ skills, 15+ data-source integrations, dynamic runtime skill selection. 95% autonomous resolution across 150 host clusters and 650 tenants. Built at Atlan, 2025.",
    tech: ["Anthropic SDK", "Kubernetes", "VictoriaMetrics", "ClickHouse"],
    status: "live" as const,
  },
  {
    title: "Logwatcher",
    description:
      "Sensitive-data scanner for logs that unblocked FedRAMP GA for Confluent Cloud. Built at Confluent.",
    tech: ["Java", "Kafka", "Cloud logging"],
    status: "live" as const,
  },
  {
    title: "Konton",
    description:
      "Chaos-testing framework for fault-injection and resilience testing of production services — Hackathon Judge's Choice Award. Built at Sumo Logic.",
    tech: ["Scala", "Fault injection"],
    status: "live" as const,
  },
];

const products = [
  {
    title: "Goal Setter",
    description: "AI-powered goal-tracking and productivity web app — designed, built, and deployed end-to-end.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://goals.manofwisdom.co/",
    status: "live" as const,
  },
  {
    title: "AstroFacts",
    description: "A curated collection of facts about the Universe — published on Google Play.",
    tech: ["Android", "Kotlin"],
    demo: "https://play.google.com/store/apps/details?id=com.friendwhocodes.astrofacts",
    status: "live" as const,
  },
];

const pipeline = [
  {
    title: "Focus Empire",
    description: "Gamified productivity for Android — build your focus empire one session at a time.",
    tech: ["Android", "Kotlin"],
    status: "upcoming" as const,
  },
  {
    title: "Man of Wisdom — Journal",
    description: "A digital journaling platform for reflection and personal growth.",
    tech: ["Next.js", "TypeScript"],
    status: "upcoming" as const,
  },
  {
    title: "9Months",
    description: "A pregnancy companion app to track the journey to parenthood.",
    tech: ["Android", "Kotlin"],
    status: "upcoming" as const,
  },
];

interface WorkItem {
  title: string;
  description: string;
  tech: string[];
  status: "live" | "upcoming";
  demo?: string;
}

function Section({
  kicker,
  items,
  reveal,
  extra,
}: {
  kicker: string;
  items: WorkItem[];
  reveal: string;
  extra?: React.ReactNode;
}) {
  return (
    <div data-reveal={reveal} className="mb-16">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{kicker}</h2>
        {extra}
      </div>
      <div className="border-t border-line">
        {items.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
          The work
        </p>
        <h1 className="rise rise-1 font-display text-4xl md:text-6xl font-medium tracking-tight mb-4">
          Systems <em className="italic text-accent">&amp; side quests.</em>
        </h1>
        <p className="rise rise-2 text-muted text-lg max-w-xl mb-14 leading-relaxed">
          A decade of professional systems at Atlan, Confluent and Sumo Logic
          — and the products I design, build and ship on my own.
        </p>

        <Section kicker="Professional systems" items={professional} reveal="3" />
        <Section
          kicker="Products — live"
          items={products}
          reveal="4"
          extra={
            <a
              href="https://play.google.com/store/apps/dev?id=4655226390591902671"
              target="_blank"
              rel="noopener noreferrer"
              className="link-slide font-mono text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink pb-0.5"
            >
              Play Store profile →
            </a>
          }
        />
        <Section kicker="In the works" items={pipeline} reveal="5" />
      </div>
    </section>
  );
}
