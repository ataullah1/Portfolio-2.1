import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
        },
        accent: {
          DEFAULT: "#ec4899",
          dark: "#db2777",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "gradient-xy": "gradient-xy 15s ease infinite",
        pulse: "pulse 6s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 0%",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "100% 100%",
          },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(-45deg, #3b82f6 0%, #8b5cf6 25%, #ec4899 50%, #8b5cf6 75%, #3b82f6 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
