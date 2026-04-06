import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0a0a0c',
        'nebula-purple': '#6366f1',
        'moss-green': '#3e522d',
        'garden-white': '#fdfbf7',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'], // For that elegant art vibe
        mono: ['var(--font-fira-code)', 'monospace'], // For the space/NASA vibe
      },
    },
  },
  plugins: [],
};
export default config;
