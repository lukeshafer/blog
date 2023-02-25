const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      serif: ["Vollkorn", ...defaultTheme.fontFamily.serif],
      title: ["Righteous", ...defaultTheme.fontFamily.sans],
    },
    theme: {
      // defaults to these values
      textFillColor: (theme) => theme("borderColor"),
      textStrokeColor: (theme) => theme("borderColor"),
      textStrokeWidth: (theme) => theme("borderWidth"),
      paintOrder: {
        fsm: { paintOrder: "fill stroke markers" },
        fms: { paintOrder: "fill markers stroke" },
        sfm: { paintOrder: "stroke fill markers" },
        smf: { paintOrder: "stroke markers fill" },
        mfs: { paintOrder: "markers fill stroke" },
        msf: { paintOrder: "markers stroke fill" },
      },
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-text-fill-stroke"),
    require("@tailwindcss/typography"),
  ],
};
