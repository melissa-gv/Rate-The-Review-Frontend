// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        // eslint-disable-next-line consistent-return
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
})
