import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        savanna: { DEFAULT: "#C8893B", dark: "#A56E28", light: "#E9C68B" },
        forest: { DEFAULT: "#1F3D2B", dark: "#142A1D", light: "#3E6B4F" },
        sand: "#F5EEDF",
        earth: "#3B2A1A",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
