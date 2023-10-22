/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '30rem',
      sm: '37.5rem',
      md: '50rem',
      lg: '62.5rem',
      xl: '75rem',
      '2xl': '90rem',
      '3xl': '106.25rem',
    },
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        "bg-secondary": 'hsl(var(--bg-secondary))',
      },
    }
  },
  plugins: [],
}

