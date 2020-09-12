module.exports = {
  theme: {
    extend: {
      colors: {
        "gray-1": "#25282B",
        "gray-2": "#A0A4A8",
        "gray-3": "#CACCCF",
        "gray-4": "#F7F7F7",
        "gray-5": "#404345",
        "gray-6": "#AAAAAA",
        "gray-7": "#C4C4C4",

        "blue-1": "#4485FD",
        "purple-1": "#A584FF",
        "orange-1": "#FF7854",
        "yellow-1": "#FEA725",
        "yellow-2": "#FFE848",
        "green-1": "#00CC6A",
        "green-2": "#CCF5E1",
        "turquoise-1": "#00C9E4",
        "pink-1": "#FD44B3",
        "red-1": "#FD4444",
        "red-2": "#CC4900",
        "red-3": "#F7E4D9"
      }
    },
    container: {
      padding: "20px",
      center: true
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
