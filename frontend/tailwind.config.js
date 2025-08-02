/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-gray-900",
    "text-green-400",
    "text-green-300",
    "text-green-500",
    "bg-green-500",
    "hover:bg-green-600",
    "text-white",
    "font-semibold",
    "rounded-2xl",
    "shadow-lg",
    "transition",
    "text-center",
    "text-4xl",
    "text-5xl",
    "text-lg",
    "text-xl",
    "max-w-xl",
    "min-h-screen",
    "px-6",
    "py-3",
    "mb-6",
    "mb-10",
    "flex",
    "flex-col",
    "items-center",
    "justify-center"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}