import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    important: "#app",
    corePlugins: {
        preflight: false,
    },
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.5rem",
                md: "2rem",
            },
        },
        extend: {
            screens: {
                xs: "375px",
            },
            fontFamily: {
                dmSans: ["DM Sans", "sans-serif"],
            },
            colors: {
                primary: "rgb(27 161 253 / <alpha-value>)",
                "dark-primary": "#0B9EDB",
                success: "#26D962",
                "dark-success": "#20B75B",
                warning: "#FFB152",
                "dark-warning": "#DFAE4C",
                error: "#FF5740",
                "dark-error": "#D94A2C",
            },
        },
    },
    plugins: [
        require("tailwindcss-animated"),
        require("tailwindcss-safe-area"),
    ],
};

export default config;
