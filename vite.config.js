import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "192.168.139.219",
    port: 3000
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['react-pro-sidebar']
  }
})
