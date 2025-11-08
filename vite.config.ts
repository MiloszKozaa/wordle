import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_animations.scss";
          @import "@/styles/_sizes.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/_colors.scss";
        `,
      },
    },
  },
});
