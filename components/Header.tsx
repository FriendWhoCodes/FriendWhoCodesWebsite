"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ScrollProgress } from "./fx/ScrollProgress";
import { LocalTime } from "./fx/LocalTime";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the overlay on navigation and lock scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
        <ScrollProgress />
        <nav className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="font-mono text-sm tracking-tight lowercase">
              friendwhocodes<span className="text-accent">_</span>
            </Link>

            <div className="flex items-center gap-6">
              <span className="hidden md:block font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                <LocalTime />
              </span>
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                data-cursor={open ? "Close" : "Menu"}
                className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]"
              >
                {open ? "Close" : "Menu"}
                <span className="relative w-8 h-3 flex flex-col justify-between">
                  <span
                    className={`h-[1.5px] bg-ink transition-all duration-300 ${
                      open ? "rotate-[18deg] translate-y-[5px]" : "group-hover:w-5 w-8"
                    }`}
                  />
                  <span
                    className={`h-[1.5px] bg-ink transition-all duration-300 ${
                      open ? "-rotate-[18deg] -translate-y-[5px]" : "w-8 group-hover:w-8"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open
            ? "[clip-path:inset(0_0_0%_0)]"
            : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="max-w-[92rem] mx-auto h-full px-4 sm:px-6 lg:px-10 pt-28 pb-10 flex flex-col justify-between">
          <nav>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-8">
              Navigation
            </p>
            <ul>
              {navItems.map((item, i) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href + "/"));
                return (
                  <li key={item.href} className="overflow-hidden">
                    <Link
                      href={item.href}
                      className={`group flex items-baseline gap-5 font-display font-bold uppercase tracking-tight leading-[1.05] text-[clamp(2.4rem,7vw,5.5rem)] transition-all duration-500 ${
                        open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                      } ${active ? "text-accent" : "hover:text-accent"}`}
                      style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                    >
                      <span className="font-mono text-xs tracking-[0.2em] text-muted font-normal">
                        0{i + 1}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <a
              href="mailto:contact@friendwhocodes.com"
              className="link-slide pb-1 text-ink normal-case tracking-normal text-sm"
            >
              contact@friendwhocodes.com
            </a>
            <span>
              India · <LocalTime />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
