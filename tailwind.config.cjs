module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto",
      },
      gridTemplateRows: {
        header: "64px auto",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "4kol": "1800px",
      "3kol": "1510px",
      "2kol": "1024px",
      "1kol": "880px",
    },
  },
  plugins: [],
};
