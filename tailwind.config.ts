import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cursor: {
        drag: 'url(/svg/left-right-cursor.svg), pointer',
      },
    },
    colors: {
      black: 'rgb(var(--color-black) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      gray: 'rgb(var(--color-gray) / <alpha-value>)',
      eerieBlack: 'rgb(var(--color-eerie-black) / <alpha-value>)',
      honeydew: 'rgb(var(--color-honeydew) / <alpha-value>)',
      paynesGray: 'rgb(var(--color-paynes-gray) / <alpha-value>)',
      persianGreen: 'rgb(var(--color-persian-green) / <alpha-value>)',
      burntUmber: 'rgb(var(--color-burnt-umber) / <alpha-value>)',
    },
    fontFamily: {},
  },
  plugins: [],
};
export default config;
