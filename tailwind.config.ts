import {
  tailwindSimplifyPlugin,
  tailwindSimplifyPreset,
} from 'simplify-dev/utils';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/simplify-dev/**/*',
  ],
  theme: {
    extend: {
      maxWidth: {
        pc: '1440px',
      },
      padding: {
        20: '20px',
      },
      colors: {
        'blue-100': '#D8DEF5',
        'blue-400': '#547DE6',
        'blue-500': '#2358E1',
        'blue-600': '#1A43AD',
        'grey-50': '#F7F8FA',
        'grey-100': '#F2F3F5',
        'grey-300': '#B3B5BB',
        'grey-400': '#93959D',
        'grey-600': '#484D59',
      },
      borderRadius: {
        12: '12px',
        8: '8px',
      },
      keyframes: {
        hbounce: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        hbounce: 'hbounce .75s ease-in-out infinite',
      },
    },
  },
  plugins: [tailwindSimplifyPlugin],
  presets: [tailwindSimplifyPreset],
} satisfies Config;
