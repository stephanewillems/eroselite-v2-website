import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "eros-black": "var(--eros-black)",
        "eros-blacker": "var(--eros-blacker)",
        "eros-white": "var(--eros-white)",
        "eros-pink": "var(--eros-pink)",
        "eros-purple": "var(--eros-purple)",
        "eros-green": "var(--eros-green)",
        "eros-orange": "var(--eros-orange)",
        "eros-blue": "var(--eros-blue)",
        "eros-grey": "var(--eros-grey)",
        "eros-red": "var(--eros-red)",
        "eros-yellow": "var(--eros-yellow)",
        "eros-bg": "var(--eros-bg)",
      },
      fontSize: {
        "4xl": ["2.986rem", "3.75rem"],
        "3xl": ["2.488rem", "3.75rem"],
        "2xl": ["2.074rem", "2.5rem"],
        xl: ["1.728rem", "2.5rem"],
        lg: ["1.44rem", "2.5rem"],
        md: ["1.2rem", "2.5rem"],
        base: ["1rem", "2.5rem"],
        sm: ["0.833rem", "1.25rem"],
        xs: ["0.694rem", "1.25rem"],
      },
      spacing: {
        quarter: "0.3125rem",
        half: "0.625rem",
        one: "1.25rem",
        two: "2.5rem",
        three: "3.75rem",
        four: "5rem",
        five: "6.25rem",
        six: "7.5rem",
        eight: "10rem",
        twelve: "15rem",
        sixteen: "20rem",
      },
      fontFamily: {
        cerapro: ["Cera Pro", "sans-serif"],
      },
      dropShadow: {
        "eros-pink":
          "0 10px 15px -3px rgba(239, 120, 120, 1), 0 4px 6px -4px rgba(239, 120, 120, 1);",
        "eros-blue":
          "0 10px 15px -3px rgba(94, 147, 232, 1), 0 4px 6px -4px rgba(94, 147, 232, 1);",
        "eros-green":
          "0 10px 15px -3px rgba(33, 208, 154, 1), 0 4px 6px -4px rgba(33, 208, 154, 1);",
        "eros-purple":
          "0 10px 15px -3px rgba(166, 35, 235, 1), 0 4px 6px -4px rgba(166, 35, 235, 1);",
        "eros-orange":
          "0 10px 15px -3px rgba(239, 120, 120, 1), 0 4px 6px -4px rgba(239, 120, 120, 1);",
        right: "8px 0 15px -3px rgba(0, 0, 0, 0.1)",
      },
      // TODO: uncomment once we get assets
      // backgroundImage: {
      //   "eros-1": "url('/src/assets/images/eros-bg-1.jpg')",
      //   "eros-2": "url('/src/assets/images/eros-bg-2.jpg')",
      //   "eros-3": "url('/src/assets/images/eros-bg-3.jpg')",
      //   purplePerson: "url('/src/assets/images/figurePurple.svg')",
      // },
    },
  },
  plugins: [],
};
export default config;
