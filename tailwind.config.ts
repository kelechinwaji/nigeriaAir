import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: {
          10: "#ED1D24",
        },
        black: "#00000099",
      },
      maxWidth: {
        mac: "1440px",
      },
      backgroundImage: {
        layout_hero: "url('/heroBg.png')",
        elevate_ops:
          "linear-gradient(-30deg,  #737373, #EC1C24), url('/ba-offload.jpg')",
      },
      dropShadow: {
        services: "0px 2.74px 6.5px 0px #00000040",
      },
      boxShadow: {
        services: "0px 2.74px 6.5px 0px #00000040",
      },
    },
  },
  plugins: [],
} satisfies Config;
