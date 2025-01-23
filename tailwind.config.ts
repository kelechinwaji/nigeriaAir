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
        elevate_ops: "url('/ba-offload.jpg')",
        elevate_gradient: "linear-gradient(-30deg,  #737373, #EC1C24), ",
        logo: "url('/inter-air-logo.svg'), url('/white.png')",
      },
      backgroundPosition: {
        logo_position: "10px 50px, 40px 50px",
        // logo_position: "right center, left center",
      },
      dropShadow: {
        services: "0px 2.74px 6.5px 0px #00000040",
      },
      boxShadow: {
        services: "0px 2.74px 6.5px 0px #00000040",
        servicesList: "0px 2.36px 2.36px 0px #00000040",
        hero: "0px 2.16px 5.4px 0px #11118033",
      },
    },
  },
  plugins: [],
} satisfies Config;
