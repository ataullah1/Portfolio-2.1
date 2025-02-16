"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github: string;
}

const projects = [
  {
    title: "AI-Powered Chat Application",
    description:
      "A real-time chat application with AI integration for smart responses and content generation. Built with Next.js and OpenAI API.",
    image:
      "https://res.cloudinary.com/mdataullah/image/upload/v1718852905/img_1-min_zopmih.png",
    tech: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS", "Prisma"],
    link: "https://project1.demo",
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Full-featured admin dashboard for e-commerce platforms with real-time analytics, order management, and inventory tracking.",
    image:
      "https://res.cloudinary.com/mdataullah/image/upload/v1718852905/img_1-min_zopmih.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    link: "https://project2.demo",
    github: "https://github.com/yourusername/project2",
  },
  {
    title: "Portfolio Website Generator",
    description:
      "A tool that generates professional portfolio websites using AI to create personalized content and layouts.",
    image:
      "https://res.cloudinary.com/mdataullah/image/upload/v1718852905/img_1-min_zopmih.png",
    tech: ["Next.js", "Framer Motion", "TailwindCSS", "AI Integration"],
    link: "https://project3.demo",
    github: "https://github.com/yourusername/project3",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative task management platform with real-time updates, team chat, and project analytics.",
    image:
      "https://res.cloudinary.com/mdataullah/image/upload/v1718852905/img_1-min_zopmih.png",
    tech: ["React", "Firebase", "TailwindCSS", "TypeScript"],
    link: "https://project4.demo",
    github: "https://github.com/yourusername/project4",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const container = containerRef.current;

    if (!line || !container) return;

    gsap.to(line, {
      height: "100%",
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient-xy">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Progress Line */}
      <div className="fixed left-10 top-1/2 w-1 h-96 -translate-y-1/2 bg-foreground/10 rounded-full hidden lg:block">
        <div
          ref={lineRef}
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full origin-top"
          style={{ height: "0%" }}
        />
      </div>

      <div className="container mx-auto">
        <div className="relative max-w-6xl mx-auto z-10">
          <h2 className="text-4xl font-bold mb-16 text-gradient text-center">
            Featured Projects
          </h2>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative group"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          index % 2 === 0 ? "" : "lg:flex-row-reverse"
        }`}
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-foreground/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 group-hover:opacity-80 transition-opacity duration-300" />
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
          <p className="text-foreground/70 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-sm bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg backdrop-blur-sm border border-foreground/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Demo
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-foreground/10 rounded-lg font-medium backdrop-blur-sm hover:bg-foreground/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Source Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
