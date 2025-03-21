import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'swipe-hint': {
          '0%, 100%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
        }
      },
      animation: {
        'swipe-hint': 'swipe-hint 2s ease-in-out infinite',
      },
      spacing: {
        '128': '32rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    }
  },
  plugins: [],
};

export default config;
