import { defineConfig } from 'vite';
import preactCompat from '@preact/preset-vite';

export default defineConfig({
  plugins: [preactCompat()],
});
