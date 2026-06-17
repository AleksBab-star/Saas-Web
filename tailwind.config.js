/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                recoleta: ['Playfair Display', 'serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}