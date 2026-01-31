import { Mail, Github, Linkedin, MapPin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="max-w-md">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
              <div className="space-y-4">
                <a
                  href="mailto:contact@friendwhocodes.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={20} />
                  contact@friendwhocodes.com
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} />
                  India (Working Remotely)
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Social</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "https://x.com/FriendWhoCodes", icon: Twitter, label: "X (Twitter)" },
                  { href: "https://github.com/FriendWhoCodes", icon: Github, label: "GitHub" },
                  { href: "https://youtube.com/@FriendWhoCodes", icon: Youtube, label: "YouTube" },
                  { href: "https://instagram.com/FriendWhoCodes", icon: Instagram, label: "Instagram" },
                  { href: "https://linkedin.com/company/friendwhocodes", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://facebook.com/FriendWhoCodes", icon: Facebook, label: "Facebook" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
