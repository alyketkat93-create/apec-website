import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#0D9247", // Official APEC Primary Green
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          accent: "#10b981",
        },
        // Deep Architectural Midnight Navy & Slate (Distinctly Dark, NEVER pitch black)
        arch: {
          950: "#0A1120", // Deepest Midnight Navy (rich, tinted with deep oceanic blue)
          900: "#0F1A2E", // Dark Architectural Slate Navy
          850: "#15223A", // Midnight Indigo Surface
          800: "#1C2B47", // Elevated Card Surface
          750: "#243657", // Card Hover Surface
          700: "#324970", // Subtle Architectural Border
          600: "#44608E",
          500: "#64748B", // Slate Mid-tone
          400: "#94A3B8", // Crisp Subdued Text
          300: "#CBD5E1", // Secondary Body Text
          200: "#E2E8F0", // Primary High-Contrast Text
          100: "#F1F5F9", // Bright Heading Text
          50: "#F8FAFC",  // Pure Crisp White-Slate
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(71, 85, 105, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(71, 85, 105, 0.15) 1px, transparent 1px)",
        'grid-fine': "linear-gradient(to right, rgba(51, 65, 85, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(51, 65, 85, 0.18) 1px, transparent 1px)",
        'dots-pattern': "radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.18), transparent 70%)",
        'radial-glow-cyan': "radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15), transparent 70%)",
        'hero-gradient': "linear-gradient(to bottom, rgba(10, 17, 32, 0.85), rgba(15, 26, 46, 0.95))",
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '40px 40px',
        'grid-lg': '64px 64px',
        'dots-sm': '20px 20px',
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "Tajawal", "Cairo", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
