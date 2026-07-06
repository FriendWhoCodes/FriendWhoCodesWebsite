import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { StatsLedger } from "@/components/StatsLedger";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <StatsLedger />
    </>
  );
}
