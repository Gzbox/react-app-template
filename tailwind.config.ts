import { Config } from "tailwindcss";

export default {
  important: "#root",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0070f0", // 主题颜色
      },
    },
  },
  plugins: [],
} satisfies Config;
