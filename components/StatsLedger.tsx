import { CountUp } from "./fx/CountUp";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years engineering",
    note: "distributed systems & observability",
  },
  {
    value: 15,
    suffix: "×",
    label: "Faster incident mitigation",
    note: "P90: 3+ hours → under 15 minutes",
  },
  {
    value: 300,
    prefix: "$",
    suffix: "K+",
    label: "Saved per year",
    note: "observability cost engineering",
  },
  {
    value: 650,
    suffix: "",
    label: "Tenant fleet",
    note: "Kubernetes · 150 host clusters",
  },
];

export function StatsLedger() {
  return (
    <section className="border-y border-line bg-surface/60">
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-10">
          Receipts — from the last two roles
        </p>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((stat, i) => (
            <div key={stat.label} data-reveal={String(i + 1)}>
              <dd className="font-display font-bold text-5xl md:text-7xl tracking-tight tabular-nums mb-3">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-1">
                {stat.label}
              </dt>
              <p className="font-mono text-[11px] text-muted">{stat.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
