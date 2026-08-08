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
        black: '#050505',
        accent: '#70C6FF',
        secondary: '#A855F7',
        glass: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        dark: '#050505',
      },
      borderColor: {
        glow: 'rgba(255,255,255,0.08)',
      },
      backdropBlur: {
        glass: '10px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(112, 198, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
