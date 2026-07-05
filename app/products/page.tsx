import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Products',
  description: 'Digital products for developers — what is shipped and what is in the works.',
};

const pipeline = [
  {
    title: 'Focus Empire',
    description: 'Gamified productivity for Android. In active development.',
    stage: 'In development',
  },
  {
    title: 'Developer resources',
    description: 'Cheatsheets, roadmaps, and learning bundles.',
    stage: 'Planned',
  },
];

export default function ProductsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
          Products
        </p>
        <h1 className="rise rise-1 font-display text-4xl md:text-6xl font-medium tracking-tight mb-4">
          Things you&apos;ll be able to buy.
        </h1>
        <p className="rise rise-2 text-muted text-lg max-w-xl mb-14 leading-relaxed">
          Nothing is for sale here yet — I&apos;d rather ship late than ship
          junk. Here&apos;s what&apos;s in the pipeline.
        </p>

        <div className="rise rise-3 border-t border-line mb-16">
          {pipeline.map((item) => (
            <div
              key={item.title}
              className="grid md:grid-cols-[1fr_auto] gap-3 md:gap-8 items-baseline py-8 border-b border-line px-1 md:px-4"
            >
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2">
                  {item.title}
                </h2>
                <p className="text-muted leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-line-strong" />
                {item.stage}
              </span>
            </div>
          ))}
        </div>

        <div className="rise rise-4 border border-line bg-surface rounded-xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
            Want to hear when something ships?
          </h2>
          <p className="text-muted mb-6 max-w-lg leading-relaxed">
            Drop me a line and I&apos;ll let you know. No list, no spam — just
            an email from me when it&apos;s real.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-ink font-mono text-sm uppercase tracking-[0.12em] rounded-full transition-transform hover:-translate-y-0.5"
          >
            Contact me
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
