import { CountUp } from "./fx/CountUp";

const stats = [
  {
    value: 4035,
    suffix: "",
    label: "GitHub contributions",
    note: "past 12 months, both accounts",
  },
  {
    value: 8,
    suffix: "+",
    label: "Years engineering",
    note: "senior software engineer",
  },
  {
    value: 40,
    suffix: "+",
    label: "Public repos",
    note: "github.com/FriendWhoCodes",
  },
  {
    value: 2,
    suffix: "",
    label: "Products live",
    note: "web + Play Store",
  },
];

export function StatsLedger() {
  return (
    <section className="border-y border-line bg-surface/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-10">
          02 — The ledger
        </p>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((stat, i) => (
            <div key={stat.label} data-reveal={String(i + 1)}>
              <dd className="font-display font-bold text-5xl md:text-6xl tracking-tight tabular-nums mb-3">
                <CountUp value={stat.value} suffix={stat.suffix} />
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
