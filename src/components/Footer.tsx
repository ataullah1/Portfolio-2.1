import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-row justify-between items-center">
          <p className="text-center text-sm text-foreground/60">
            © {currentYear} Md Ataullah. All rights reserved.
          </p>
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
                {social.icon === "github" && <FaGithub className="w-5 h-5" />}
                {social.icon === "linkedin" && (
                  <FaLinkedin className="w-5 h-5" />
                )}
                {social.icon === "twitter" && <FaTwitter className="w-5 h-5" />}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
