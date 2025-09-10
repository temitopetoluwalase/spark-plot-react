import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/spark-plot-react/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
