import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/spark-plot-react/', // 👈 required for GitHub Pages
});
