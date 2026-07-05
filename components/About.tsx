const facts = [
  { label: "Based in", value: "India (remote)" },
  { label: "Focus", value: "Web · Android · AI tools" },
  { label: "Currently", value: "Building Focus Empire" },
  { label: "Contact", value: "contact@friendwhocodes.com" },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Kotlin",
  "Android",
];

export function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
          About
        </p>
        <h1 className="rise rise-1 font-display text-4xl md:text-6xl font-medium tracking-tight mb-14 max-w-2xl text-balance">
          The person behind the commits.
        </h1>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="rise rise-2 md:col-span-2 space-y-6">
            <p className="text-xl leading-relaxed">
              I&apos;m Alok Sharma, a software developer based in India, working
              remotely and shipping my own products on the side.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              I build across the stack — web apps in Next.js and TypeScript,
              Android apps in Kotlin, and increasingly tools where AI does part
              of the work. I care about clean code, honest products, and
              actually finishing things.
            </p>

            <div className="pt-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-5">
                Tools I reach for
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
            <div className="border border-line bg-surface rounded-xl p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-5">
                At a glance
              </p>
              <dl className="space-y-5">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent mb-1">
                      {fact.label}
                    </dt>
                    <dd className="text-sm">{fact.value}</dd>
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
