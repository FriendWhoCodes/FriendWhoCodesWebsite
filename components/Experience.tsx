const roles = [
  {
    company: "Atlan",
    role: "Senior Software Engineer 2 · Platform",
    period: "2025 — Now",
    summary:
      "Built an AI SRE agent on the Anthropic SDK — 40+ skills, 15+ integrations, 95% autonomous incident resolution across a 650-tenant Kubernetes fleet.",
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
    <section className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <div data-reveal className="mb-14">
        <h2 className="font-display font-bold uppercase tracking-tight leading-none text-[clamp(2.2rem,5vw,4rem)]">
          Where I&apos;ve
          <br />
          <span className="text-outline">been</span>
          <em className="font-serif italic normal-case text-accent font-medium"> /10 yrs</em>
        </h2>
      </div>

      <div className="border-t border-line">
        {roles.map((r, i) => (
          <div
            key={r.company}
            data-reveal={String(Math.min(i + 1, 5))}
            className="group grid md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-10 items-start py-10 md:py-12 border-b border-line px-1 md:px-4 transition-colors hover:bg-surface"
          >
            <div>
              <h3 className="font-display font-bold uppercase tracking-tight text-3xl md:text-4xl group-hover:text-accent transition-colors">
                {r.company}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted mt-2">
                {r.role}
              </p>
            </div>
            <div>
              <p className="text-muted text-lg leading-relaxed max-w-2xl mb-4">
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
            <span className="font-mono text-xs text-muted tabular-nums md:mt-2">
              {r.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
