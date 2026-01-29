import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="text-blue-600 dark:text-blue-400">Alok Sharma</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200 mb-4">
            Your Friend Who Codes
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Software Developer based in India, working remotely to build great products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
