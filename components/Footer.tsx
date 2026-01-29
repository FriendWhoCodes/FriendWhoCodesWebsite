import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

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
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Alok Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href="mailto:contact@friendwhocodes.com"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
