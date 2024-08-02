import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';

const portNumber = Number(process.env.PORT);
const port = !isNaN(portNumber) ? portNumber : 3000;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port,
    watch: {
      usePolling: true,
    },

  },
  plugins: [react(),
    checker({
      typescript: true,
    })
  ],
})
