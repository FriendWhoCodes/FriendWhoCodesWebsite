import { Github, Linkedin, Twitter, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";

const socials = [
  { href: "https://x.com/FriendWhoCodes", icon: Twitter, label: "X (Twitter)", handle: "@FriendWhoCodes" },
  { href: "https://github.com/FriendWhoCodes", icon: Github, label: "GitHub", handle: "FriendWhoCodes" },
  { href: "https://youtube.com/@FriendWhoCodes", icon: Youtube, label: "YouTube", handle: "@FriendWhoCodes" },
  { href: "https://instagram.com/FriendWhoCodes", icon: Instagram, label: "Instagram", handle: "@FriendWhoCodes" },
  { href: "https://linkedin.com/company/friendwhocodes", icon: Linkedin, label: "LinkedIn", handle: "friendwhocodes" },
  { href: "https://facebook.com/FriendWhoCodes", icon: Facebook, label: "Facebook", handle: "FriendWhoCodes" },
];

export function Contact() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
          Contact
        </p>
        <h1 className="rise rise-1 font-display text-4xl md:text-6xl font-medium tracking-tight mb-6">
          Say hello.
        </h1>
        <p className="rise rise-2 text-muted text-lg max-w-xl mb-14 leading-relaxed">
          Have a question, an idea, or want to work together? One email away —
          I&apos;m in India, working remotely.
        </p>

        <a
          href="mailto:contact@friendwhocodes.com"
          className="rise rise-3 group inline-block mb-20"
        >
          <span className="font-display text-[clamp(1.4rem,4.5vw,3.2rem)] font-medium tracking-tight border-b-2 border-line group-hover:border-accent group-hover:text-accent transition-colors break-all">
            contact@friendwhocodes.com
          </span>
        </a>

        <div className="rise rise-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
            Elsewhere
          </h2>
          <div className="border-t border-line">
            {socials.map(({ href, icon: Icon, label, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-line transition-colors hover:bg-surface px-1 md:px-4"
              >
                <span className="flex items-center gap-4">
                  <Icon size={18} className="text-muted group-hover:text-accent transition-colors" />
                  <span className="font-medium">{label}</span>
                  <span className="font-mono text-xs text-muted hidden sm:inline">
                    {handle}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
