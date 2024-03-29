import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dashboard: {
          primary: "#003A46",
          secondary: "#8ABAC5",
          accent: "#006980",
          "base-100": "#F7F7F7",
          "text-base-content": "#003A46",
        },
      },
    ],
  },
};
export default config;
