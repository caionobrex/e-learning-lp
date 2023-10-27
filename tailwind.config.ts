import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#B7CBFA',
          100: '#D9ECFF',
          300: '#B7CBFA',
          400: '#2D2752',
          500: '#A99CFF',
          DEFAULT: '#CBC2FF',
          600: '#1B143F',
        },
        secondary: {
          DEFAULT: '#B614DE',
        },
        third: {
          DEFAULT: '#7414DE',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
