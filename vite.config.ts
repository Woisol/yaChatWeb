import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    // host: true,
    proxy: {
      '/update': {
        target: 'http://localhost:6999',
        changeOrigin: true,
        // !傻了加这个当然就404了……
        // rewrite: (path) => path.replace(/^\/update/, '')
      },
      '/send': {
        target: 'http://localhost:6999',
        changeOrigin: true,
      }
    }
  }
})
