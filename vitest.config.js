import { defineConfig } from 'vitest/config';
import preactCompat from '@preact/preset-vite';

export default defineConfig({
  plugins: [preactCompat()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
