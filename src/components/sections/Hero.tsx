import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient-xy"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-left z-10"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-lg font-medium text-accent mb-2">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="animate-gradient-xy bg-hero-gradient bg-clip-text text-transparent">
                Md Ataullah
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-6 text-foreground/80 font-light">
              Frontend Developer with a passion for{" "}
              <span className="font-semibold">Full-stack Development</span>
            </h2>
            <p className="text-lg mb-8 text-foreground/60 max-w-xl">
              Crafting responsive and user-friendly web applications using
              modern technologies like Next.js, React, and TypeScript.
              Experienced with AI integrations and currently exploring mobile
              development with React Native.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
                href="/resume.pdf"
                target="_blank"
              >
                View Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-foreground/10 rounded-xl font-medium backdrop-blur-sm hover:bg-foreground/5 transition-colors"
                href="#contact"
              >
                Let&apos;s Connect
              </motion.a>
            </div>
          </motion.div>

          {/* Image/Avatar Section */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-background to-background/50 rounded-full p-4 backdrop-blur-sm border border-foreground/10">
                <Image
                  src="https://res.cloudinary.com/mdataullah/image/upload/v1739435780/md_ataullah_aqhvsf.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
