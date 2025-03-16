'use client'

import AboutSection from "@/components/landing/bottom";
import HeroSection from "@/components/landing/hero";
import RecentProjects from "@/components/landing/projects";
import { useState } from "react";

export default function Home() {
  
  return (
    <div onScroll={(e) => console.log("scrolling", e)}>
      <HeroSection />
      <RecentProjects />
      <AboutSection />
    </div>
  );
}
