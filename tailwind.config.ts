import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "site": "1400px",
      },
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbedfe",
          200: "#bfdffe",
          300: "#93cbfd",
          400: "#60adfa",
          500: "#3b8df5",
          600: "#2570e8",
          700: "#1d5bd5",
          800: "#1e4cad",
          900: "#1e4288",
          950: "#0b234d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0b234d 0%, #1e4288 45%, #1d5bd5 100%)",
        "hero-radial":
          "radial-gradient(circle at 20% 30%, rgba(96,173,250,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 20%, rgba(59,141,245,0.22) 0%, transparent 60%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(15, 49, 110, 0.18)",
        card: "0 8px 30px -10px rgba(15, 49, 110, 0.15)",
        ring: "0 0 0 6px rgba(37, 112, 232, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
