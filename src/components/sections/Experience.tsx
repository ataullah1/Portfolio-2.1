import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full-stack Developer",
    company: "GenRes Agency",
    period: "Present",
    type: "Full-time",
    description:
      "Developing full-stack web applications with modern technologies and integrating AI solutions for enhanced user experiences.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "PostgreSQL",
      "MongoDB",
      "Node.js",
      "Express.js",
      "OpenAI API",
    ],
    highlights: [
      "Building scalable web applications using Next.js and TypeScript",
      "Implementing AI-powered features using OpenAI API",
      "Managing database architecture with PostgreSQL and MongoDB",
      "Creating responsive and intuitive user interfaces",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Softvence Agency",
    period: "4-month intern",
    type: "Internship (Full-time)",
    description:
      "Focused on front-end development and custom Shopify solutions, gaining hands-on experience with modern web technologies.",
    technologies: [
      "TailwindCSS",
      "React.js",
      "Next.js",
      "TanStack Query",
      "Shopify",
    ],
    highlights: [
      "Developed custom Shopify themes and functionalities",
      "Implemented responsive designs using TailwindCSS",
      "Worked with TanStack Query for efficient data fetching",
      "Collaborated with team members on various projects",
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Experience() {
  return (
    <section
      id="experience"
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
          className="relative max-w-5xl mx-auto z-10"
        >
          <h2 className="text-4xl font-bold mb-12 text-gradient text-center">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-background/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-foreground/10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gradient">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-medium text-foreground/80">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full backdrop-blur-sm border border-foreground/10">
                      {experience.period}
                    </span>
                    <p className="text-sm text-foreground/60 mt-2">
                      {experience.type}
                    </p>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6">
                  {experience.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {experience.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-foreground/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
