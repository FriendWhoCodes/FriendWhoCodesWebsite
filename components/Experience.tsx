const roles = [
  {
    company: "Atlan",
    role: "Senior Software Engineer 2 · Platform",
    period: "2025 — Now",
    summary:
      "Built the AI SRE Suite of Agents on the Anthropic SDK — 40+ skills, 15+ integrations, 95% autonomous incident resolution across a 650-tenant Kubernetes fleet.",
    chips: ["P90: 3+ hrs → <15 min", "$300K+/yr saved", "99.9% platform reliability"],
  },
  {
    company: "Confluent",
    role: "Senior Software Engineer · Observability",
    period: "2022 — 2024",
    summary:
      "Logging at cloud scale — built Logwatcher (unblocked FedRAMP GA), led the company-wide HashiCorp Vault migration, onboarded 30+ services.",
    chips: ["Provisioning 3 mo → 2 wks", "FedRAMP GA", "Vault migration lead"],
  },
  {
    company: "Sumo Logic",
    role: "Senior Software Engineer · Metrics & Log Search",
    period: "2017 — 2022",
    summary:
      "Five years of core observability backend — Alert Response Page, metrics dashboards, and a fix for an 8-year-old DST bug that cut related tickets 95%.",
    chips: ["Konton chaos framework", "Hackathon Judge's Choice", "−95% DST tickets"],
  },
  {
    company: "Wiser Solutions",
    role: "Software Engineer · Data Platform",
    period: "2016 — 2017",
    summary:
      "Core metadata extractor and crawler for the pricing-intelligence platform.",
    chips: ["MongoDB", "Redshift", "Crawling at scale"],
  },
];

export function Experience() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal className="mb-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-3">
            02 — Experience
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight">
            Ten years of systems
          </h2>
        </div>

        <div className="border-t border-line">
          {roles.map((r, i) => (
            <div
              key={r.company}
              data-reveal={String(Math.min(i + 1, 5))}
              className="group grid md:grid-cols-[10rem_1fr] gap-2 md:gap-10 items-start py-8 md:py-10 border-b border-line px-1 md:px-4 transition-colors hover:bg-surface"
            >
              <span className="font-mono text-xs text-muted tabular-nums mt-1.5">
                {r.period}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight group-hover:text-accent transition-colors">
                    {r.company}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                    {r.role}
                  </p>
                </div>
                <p className="text-muted leading-relaxed max-w-2xl mb-3">
                  {r.summary}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {r.chips.map((chip) => (
                    <span
                      key={chip}
                      className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
