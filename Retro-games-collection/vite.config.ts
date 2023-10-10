import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url))
      },
      { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
      {
        find: '@stores',
        replacement: fileURLToPath(new URL('./src/stores', import.meta.url))
      },
      { find: '@games', replacement: fileURLToPath(new URL('./src/games', import.meta.url)) },
      { find: '@ui', replacement: fileURLToPath(new URL('./src/components/ui', import.meta.url)) }
    ]
  }
})
