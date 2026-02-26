import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dental: { 50: "#eff8ff", 100: "#dbeffe", 200: "#bfe3fe", 400: "#60b5fa", 500: "#3b9df0", 600: "#2580d4", 700: "#1a66ab" },
        mint: { 50: "#f0fdf4", 100: "#dcfce7", 500: "#22c55e" },
      },
    },
  },
  plugins: [],
};

export default config;
