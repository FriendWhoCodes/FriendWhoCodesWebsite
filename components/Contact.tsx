"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Implement form submission (e.g., Formspree, EmailJS, or custom API)
    // For now, just simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
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
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-none"
                />
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
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-sm">
                  Failed to send message. Please try again.
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
                  {/* TODO: Add location */}
                  Location, Country
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Social</h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com/FriendWhoCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
