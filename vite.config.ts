import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    adonisjs({
      entrypoints: ['resources/css/app.css', 'resources/js/app.js'],
      reload: ['resources/views/**/*.edge'],
    }),
    UnoCSS(),
  ],
})
