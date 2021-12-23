module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "hsl(209, 23%, 22%)",
        verydarkblue: "hsl(207, 26%, 17%)",
        textverydarkblue: "hsl(200, 15%, 8%)",
        darkgray: "hsl(0, 0%, 52%)",
        verylightgray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
