/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Warm near-black — richer than pure #000
        ink: {
          DEFAULT: '#0F0E14',
          muted:   '#6B7280',
          faint:   '#9CA3AF',
        },
        // Clean surfaces with a very subtle lavender tint
        surface: {
          DEFAULT: '#FAFAFA',
          2:       '#F5F3F7',
          3:       '#E8E4ED',
        },
        // Single muted dusty mauve-rose — sophisticated, grown-up pink
        rose: {
          DEFAULT: '#9B6B7A',
          light:   '#F4EEF1',
          dark:    '#7A5362',
          faint:   '#FAF6F8',
        },
        // Night-sky palette for Hero
        sky: {
          deep:   '#060912',
          mid:    '#0B1020',
          horizon:'#111828',
        },
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      keyframes: {
        // Shooting star / meteor
        shoot: {
          '0%':   { opacity: '0',   transform: 'translateX(0) translateY(0)' },
          '5%':   { opacity: '1' },
          '90%':  { opacity: '0.6' },
          '100%': { opacity: '0',   transform: 'translateX(-520px) translateY(310px)' },
        },
        // Star twinkle
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.85)' },
          '50%':      { opacity: '1',   transform: 'scale(1.15)' },
        },
        // Slow pulse for glow effects
        glow: {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '0.7'  },
        },
        // Content fade-up
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        // Needle rise from bottom
        riseUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        // Blink — for the antenna light
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.1' },
        },
      },
      animation: {
        shoot:       'shoot linear forwards',
        twinkle:     'twinkle ease-in-out infinite',
        glow:        'glow ease-in-out infinite',
        fadeUp:      'fadeUp 0.8s ease-out forwards',
        riseUp:      'riseUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        blink:       'blink 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
