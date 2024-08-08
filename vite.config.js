// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Configure the server to handle client-side routing correctly
    historyApiFallback: true,
  },
});
