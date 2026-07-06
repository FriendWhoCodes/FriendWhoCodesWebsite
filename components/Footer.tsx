import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { LocalTime } from "./fx/LocalTime";

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
    <footer className="border-t border-line mt-20 overflow-hidden">
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10 py-20 md:py-28 text-center">
        <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-8">
          Got an idea? — Let&apos;s talk
        </p>
        <Link href="/contact" data-cursor="Hello" className="block" data-reveal="2">
          <span className="fill-hover font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(3rem,11vw,10rem)] block">
            Let&apos;s build
          </span>
          <span className="fill-hover font-display font-bold uppercase tracking-tight leading-[0.95] text-[clamp(3rem,11vw,10rem)] block">
            something
          </span>
        </Link>
        <a
          href="mailto:contact@friendwhocodes.com"
          data-reveal="3"
          className="link-slide inline-block mt-10 font-mono text-sm md:text-base text-muted hover:text-ink pb-1"
        >
          contact@friendwhocodes.com
        </a>
      </div>

      <div className="border-t border-line">
        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Alok Sharma · friendwhocodes
            <span className="text-accent">_</span>
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            India · <LocalTime />
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
