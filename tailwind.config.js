// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'blue-600',
        secondary: 'slate-600',
        background: 'slate-100',
        card: 'white',
        textPrimary: 'slate-800',
        textSecondary: 'slate-600',
        borderLight: 'slate-300',
        borderDark: 'slate-400',
      }
    },
  },
  plugins: [],
  corePlugins: {
    // Add this to ensure backdrop-blur works
    backdropBlur: true,
  }
}