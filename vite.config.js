import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, readdirSync } from 'fs'

// ✅ Custom plugin to ensure public/ assets are copied manually
function copyPublicFiles() {
  return {
    name: 'copy-public-files',
    closeBundle() {
      const srcDir = resolve(__dirname, 'public')
      const destDir = resolve(__dirname, 'dist')
      const files = readdirSync(srcDir)
      for (const file of files) {
        copyFileSync(`${srcDir}/${file}`, `${destDir}/${file}`)
      }
      console.log('✅ Copied files from public/ to dist/')
    },
  }
}

export default defineConfig({
  plugins: [react(), copyPublicFiles()],
  base: '/bidyutforsac/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // prevents skipping image files
  },
})
