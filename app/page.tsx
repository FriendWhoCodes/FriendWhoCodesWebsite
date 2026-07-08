import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { StatsLedger } from "@/components/StatsLedger";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alok Sharma | Friend Who Codes",
    description:
      "Senior software engineer — distributed systems, observability, AI agents. 10+ years at Atlan, Confluent and Sumo Logic.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Experience />
      <StatsLedger />
    </>
  );
}
