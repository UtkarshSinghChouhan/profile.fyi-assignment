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
        primary: {
          DEFAULT: '#E5E9EA',
        },
        'pf-image-bg': '#E5E9EA',
        'pf-dark-gray' : '#616161',
        'pf-gray' : '#B2B2B2',
        'pf-light-gray' : '#EBEBEB',


        // Dark Theme
        'pf-darktheme-text' : '#B0B3B8', 

        'pf-darktheme-text-header' : '#ffffff',

        'pf-darktheme-bg-dark' : '#18191B',
        'pf-darktheme-bg' : '#242526',
        'pf-darktheme-bg-light' : '#3B3B3D',
        'pf-darktheme-bg-extra-light' : '#4e4f50',    //hover-state

        'pf-darktheme-border' : '#383B3B',
        'pf-darktheme-border-light' : '#575b5b',
      },
      fontSize: {
        'productName' : '18px',
        'value' : '15px'
      },
      padding: {
        '2px': '2px',
      },
      maxWidth: {
        '8xl': '85rem' 
      },
      gridTemplateColumns: {
        'pf-product': 'repeat(auto-fill, 18.75rem)',
        'pf-product-sm': 'repeat(auto-fill, 12.25rem)',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
