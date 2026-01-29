/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        fg: '#ffffff',
        panel: '#111111',
        border: 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 10px 30px rgba(0,0,0,0.60)',
      },
    },
  },
  plugins: [],
}
