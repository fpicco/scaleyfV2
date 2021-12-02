module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "scaleyf-dark-grey": "#9194a2",
        "scaleyf-white": "#f7f7f7",
        "scaleyf-green": "#419669",
        "scaleyf-blue": "#28427A",
        "scaleyf-grey": "#CACACA",
      },
      linearBorderGradients: {
        // https://www.npmjs.com/package/tailwindcss-border-gradient-radius
        directions: {
          r: "to right",
        },
        colors: {
          "blue-green": ["#28427A", "#419669"],
        },
        background: {
          "white": "#ffffff",
          "scaleyf-blue":"#28427A",
          "transparent":"transparent",
        },
        border: {
          1: "1px",
          2: "2px",
          4: "4px",
        },
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    linearBorderGradients: ["responsive", "hover", "dark"], // defaults to ['responsive']
  },
  plugins: [require("tailwindcss-border-gradient-radius")],
};
