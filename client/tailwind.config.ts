/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}", "./*.html"],
    theme: {
        extend: {
            colors: {
                dark: "#202216",       // Dark Olive
                darkHover: "#363A2D",  // Slightly lighter olive
                light: "#F2DE9B",      // Pale Gold
                primary: "#D2B863",    // Deeper gold (complementary)
                danger: "#B55B45",     // Terracotta red
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
}
