import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <motion.a
              href="#home"
              className="inline-block text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AT
            </motion.a>
            <p className="text-sm text-foreground/60 max-w-xs">
              Frontend Developer specializing in building exceptional digital
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/yourusername",
                  icon: "github",
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/yourusername",
                  icon: "linkedin",
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com/yourusername",
                  icon: "twitter",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {/* Add your social icons here */}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10">
          <p className="text-center text-sm text-foreground/60">
            © {currentYear} Md Ataullah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
