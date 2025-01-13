import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/jora/',
  plugins: [react()],
  resolve: {
    alias: [{ find: 'src', replacement: resolve(__dirname, 'src') }],
  },
})
