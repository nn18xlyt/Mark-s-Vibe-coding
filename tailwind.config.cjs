/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0a08',
        fg: '#f7f2e8',
        panel: '#12100d',
        border: 'rgba(247,242,232,0.12)',
        ember: '#ff4d2e',
        moss: '#00d3a7',
        acid: '#d1ff2f',
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
        glow: '0 0 0 1px rgba(247,242,232,0.10), 0 14px 34px rgba(0,0,0,0.70)',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
    },
  },
  plugins: [],
}
