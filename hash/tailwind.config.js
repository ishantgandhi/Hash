/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '35/8': '70px', 
      },
      width: {
        '85/4': '340px', 
      },
      colors: { 
        "h50":"#f9f5ff",
        "h100":"#f0e8ff",
        "h200":"#e6d9ff",
        "h300":"#ceb4fe",
        "h400":"#b084fc",
        "h500":"#9255f7",
        "h600":"#7a33ea",
        "h700":"#6722ce",
        "h800":"#5921a8",
        "h900":"#4a1c87",
        "h950":"#2f0764",
        "hAmber100":"#FED8A4",
        "hAmber200":"#EBA340",
        "hEasy":"#1cbaba",
        "hMedium":"#EBA340",
        "hHard":"#FF0000",
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        cprime: ["Courier-Prime", "sans-serif"],
        cprimebold: ["Courier-Prime-Bold", "sans-serif"],
        cprimeitalic: ["Courier-Prime-Italic", "sans-serif"],
        cprimebolditalic: ["Courier-Prime-BoldItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
}

