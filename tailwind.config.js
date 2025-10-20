/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        card: 'var(--card)',
        border: 'var(--border)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.35)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    },
  },
  plugins: [],
}
