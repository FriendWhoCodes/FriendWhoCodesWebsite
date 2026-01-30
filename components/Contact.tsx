"use client";

import { Mail, Github, Linkedin, MapPin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import { useState } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

// Input constraints
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const MIN_MESSAGE_LENGTH = 10;

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize input: trim whitespace and limit length
function sanitize(input: string, maxLength: number): string {
  return input.trim().slice(0, maxLength);
}

// Strip potentially dangerous characters (basic XSS prevention for display)
function stripHtml(input: string): string {
  return input.replace(/[<>]/g, "");
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (): string | null => {
    const name = sanitize(formData.name, MAX_NAME_LENGTH);
    const email = sanitize(formData.email, MAX_EMAIL_LENGTH);
    const message = sanitize(formData.message, MAX_MESSAGE_LENGTH);

    if (!name || name.length < 2) {
      return "Please enter your name (at least 2 characters).";
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!message || message.length < MIN_MESSAGE_LENGTH) {
      return `Please enter a message (at least ${MIN_MESSAGE_LENGTH} characters).`;
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      setStatus("sent");
      return;
    }

    // Validate inputs
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus("error");
      return;
    }

    // Check if Formspree is configured
    if (!FORMSPREE_ID) {
      setErrorMessage("Contact form is not configured. Please email directly.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      // Sanitize all inputs before sending
      const sanitizedData = {
        name: stripHtml(sanitize(formData.name, MAX_NAME_LENGTH)),
        email: sanitize(formData.email, MAX_EMAIL_LENGTH),
        message: stripHtml(sanitize(formData.message, MAX_MESSAGE_LENGTH)),
      };

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(", "));
        } else {
          setErrorMessage("Failed to send message. Please try again.");
        }
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    // Reset error state when user starts typing
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
    setFormData({ ...formData, [field]: value });
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users, catches bots */}
              <input
                type="text"
                name="_gotcha"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  maxLength={MAX_NAME_LENGTH}
                  minLength={2}
                  autoComplete="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  maxLength={MAX_EMAIL_LENGTH}
                  autoComplete="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  maxLength={MAX_MESSAGE_LENGTH}
                  minLength={MIN_MESSAGE_LENGTH}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-none"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {formData.message.length}/{MAX_MESSAGE_LENGTH} characters
                </p>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="text-green-600 dark:text-green-400 text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-sm">
                  {errorMessage || "Failed to send message. Please try again."}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
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
