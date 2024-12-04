import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#afafaf",
        "grey-1": "#d8d8d8",
        "grey-2": "#f5f5f5",
        "light-green": "#66dc7d"
      }
    },
  },
  plugins: [],
} satisfies Config;
