import type { Metadata } from "next";
import { About } from "@/components/About";

const description =
  "About Alok Sharma — a software engineer with 10+ years across distributed systems, observability and AI agents, built at Atlan, Confluent and Sumo Logic.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Friend Who Codes",
    description,
    url: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}
