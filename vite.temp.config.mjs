import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  cacheDir: '/tmp/vite-cache',
  plugins: [react()],
  server: { port: 5174, host: true, strictPort: true },
})
