import { defineConfig } from 'tailwindcss';

/
 * Tailwind CSS configuration for luxury LRP cosmetics
 * This configuration sets up a custom color palette and animations
 * tailored to evoke a luxury feel suited for the cosmetics industry.
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // Custom orange color for the brand
        },
        white: {
          DEFAULT: '#FFFFFF', // Custom white for the brand
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'hover-glow': 'glow 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
});