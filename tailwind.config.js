/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      2: "2rem",
      4: "4rem",
      8: "8rem",
      12: "12rem",
      16: "16rem",
      20: "20rem",
      24: "24rem",
      32: "32rem",
      40: "40rem",
    },
    typography: {
      head1: {
        css: {
          fontSize: "42rem",
          lineHeight: "48rem",
        },
      },
      head2: {
        css: {
          fontSize: "36rem",
          lineHeight: "40rem",
        },
      },
      head3: {
        css: {
          fontSize: "24rem",
          lineHeight: "32rem",
        },
      },
      head4: {
        css: {
          fontSize: "20rem",
          lineHeight: "24rem",
        },
      },
      head5: {
        css: {
          fontSize: "18rem",
          lineHeight: "24rem",
        },
      },
      body1: {
        css: {
          fontSize: "16rem",
          lineHeight: "24rem",
        },
      },
      body2: {
        css: {
          fontSize: "14rem",
          lineHeight: "16rem",
        },
      },
      body3: {
        css: {
          fontSize: "12rem",
          lineHeight: "16rem",
        },
      },
    },
    fontFamily: {
      sans: ["Pretendard"],
    },
    extend: {
      colors: {
        primary: {
          50: "#E5F3FF",
          100: "#B2DAFF",
          200: "#80C1FF",
          300: "#4DA8FF",
          400: "#1A8FFF",
          500: "#0076E5",
          600: "#005CB3",
          700: "#004280",
          800: "#00274D",
          900: "#000D1A",
        },
        secondary: {
          50: "#FFE5E6",
          100: "#FFB2B4",
          200: "#FF8082",
          300: "#FF4D4F",
          400: "#FF1A1D",
          500: "#E50004",
          600: "#B20003",
          700: "#800002",
          800: "#4D0001",
          900: "#1A0000",
        },
        tertiary: {
          50: "#FFF6E5",
          100: "#FFE4B2",
          200: "#FFD280",
          300: "#FFC14D",
          400: "#FFAF1A",
          500: "#E59500",
          600: "#B27400",
          700: "#805300",
          800: "#4D3200",
          900: "#1A1100",
        },
        gray: {
          50: "#F9F9FB",
          100: "#D8DEE9",
          200: "#B8C2D6",
          300: "#98A6C3",
          400: "#7689B0",
          500: "#5A709B",
          600: "#47587B",
          700: "#34415A",
          800: "#222A3A",
          900: "#0F131A",
        },
        white: "#FFFFFF",
        black: "#121212",
        background: "#F7F7F7",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/typography")({
      className: "text",
    }),
  ],
};
