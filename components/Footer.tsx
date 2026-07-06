import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { href: "https://x.com/FriendWhoCodes", icon: Twitter, label: "X (Twitter)" },
  { href: "https://github.com/FriendWhoCodes", icon: Github, label: "GitHub" },
  { href: "https://youtube.com/@FriendWhoCodes", icon: Youtube, label: "YouTube" },
  { href: "https://instagram.com/FriendWhoCodes", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com/company/friendwhocodes", icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com/FriendWhoCodes", icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-line mt-16">
      {/* Big invitation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
          Next step
        </p>
        <Link data-reveal="2" href="/contact" className="group inline-block">
          <span className="font-display text-4xl md:text-6xl font-medium tracking-tight text-balance transition-colors group-hover:text-accent group-hover:italic">
            Let&apos;s build something
            <ArrowUpRight
              className="inline-block ml-2 mb-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              size={32}
            />
          </span>
        </Link>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Alok Sharma · friendwhocodes
            <span className="text-accent">_</span>
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
            <a
              href="mailto:contact@friendwhocodes.com"
              className="text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
