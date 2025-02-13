"use client";

import Hero from "@/components/sections/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Experience />
      {/* Other sections will be moved to components */}
    </div>
  );
}
