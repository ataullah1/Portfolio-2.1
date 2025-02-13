import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const skills = {
  frontend: [
    "Next.js",
    "React.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "NextAuth.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Firebase",
  ],
  other: [
    "OpenAI API",
    "AI Integration",
    "Mobile Development",
    "Responsive Design",
    "Authentication",
  ],
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient-xy"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto z-10"
        >
          <h2 className="text-4xl font-bold mb-12 text-gradient text-center">
            About Me
          </h2>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Introduction */}
            <div className="bg-background/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-foreground/10">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                Background
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                As a Frontend Developer, I specialize in creating responsive and
                intuitive user interfaces. My journey in web development is
                driven by a passion for combining creative design with technical
                excellence.
              </p>
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-foreground/10">
                <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
                <p className="text-foreground/80">
                  Expanding into mobile development with React Native while
                  leveraging AI technologies in web applications. Experienced in
                  implementing OpenAI API integrations for enhanced user
                  experiences.
                </p>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-8">
              {/* Frontend Skills */}
              <div className="bg-background/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-foreground/10">
                <h3 className="text-xl font-semibold mb-6">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-sm font-medium backdrop-blur-sm border border-foreground/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-background/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-foreground/10">
                <h3 className="text-xl font-semibold mb-6">
                  Backend Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg text-sm font-medium backdrop-blur-sm border border-foreground/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Additional Skills */}
              <div className="bg-background/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-foreground/10">
                <h3 className="text-xl font-semibold mb-6">
                  Specialized Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.other.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg text-sm font-medium backdrop-blur-sm border border-foreground/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
