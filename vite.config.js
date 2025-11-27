import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['familyraksha.com'],
    port: 3007,
    host: '0.0.0.0',
    strictPort: true,
  },
  server: {
    allowedHosts: ['familyraksha.com'],
    port: 3007,
    host: '0.0.0.0',
  },
})
