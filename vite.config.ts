import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 1. Configuración para CALLAR las advertencias de Sass
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Usa el compilador moderno y adiós alertas
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@n8n/chat')) {
              return 'n8n-chat';
            }
            if (id.includes('react')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});