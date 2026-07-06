import { Hero } from "@/components/Hero";
import { ProjectStack } from "@/components/ProjectStack";
import { StatsLedger } from "@/components/StatsLedger";
import { VelocityMarquee } from "@/components/fx/VelocityMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <VelocityMarquee text="Build · Ship · Repeat" />
      <ProjectStack />
      <StatsLedger />
    </>
  );
}
