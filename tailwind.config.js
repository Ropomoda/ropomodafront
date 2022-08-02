module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      borderWidth: {
        1: "1px",
      },
      opacity: {
        15: "0.15",
      },
      boxShadow: {
        check: "0 1px 4px -1px #065F46, 0 2px 4px -1px #064E3B",
        times: "0 1px 4px -1px #B91C1C, 0 2px 4px -1px #7F1D1D",
      },
      fontFamily: {
        // sans: ["IrYekan"],
      },
      backgroundImage: {
        header: "url('/img/hero-pattern.svg')",
      },
      border: {
        1: "1px",
      },
      rotate: {
        60: "60deg",
        "-60": "-60deg",
      },
      colors: {
        primary: {
          DEFAULT: "#F9AFEC",
        },
        secondary: {
          DEFAULT: "#2dcbb2ff",
        },
        light: {
        },
        dark: {
        },
        green: {
        },
        red: {
        },
        yellow: {
        },
      },
    },
  },
  plugins: [require("tailwindcss-rtl"), require("postcss-import")],
}