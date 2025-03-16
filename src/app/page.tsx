'use client'

import AboutSection from "@/components/landing/bottom";
import HeroSection from "@/components/landing/hero";
import RecentProjects from "@/components/landing/projects";
import { useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(0);

  return (
    <div className="h-screen overflow-y-auto" onScroll={(e) => setScroll(e.currentTarget.scrollTop)}>
      <HeroSection scrollPosition={scroll} />
      <RecentProjects />
      <AboutSection />
    </div>
  );
}
