import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // The app intentionally ships as a single JS bundle (no route-level
    // code-splitting), which lands at ~506 kB minified / ~141 kB gzipped —
    // fine for this site. Raise the warning threshold above that so the
    // build output stays clean.
    chunkSizeWarningLimit: 600,
  },
})
