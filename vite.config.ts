import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue(),
    VitePWA({
      includeAssets: [
        'icons/favicon.svg',
        'icons/favicon.ico',
        'icons/apple-touch-icon.png',
        'robots.txt',
      ],
      manifest: {
        name: 'True Orator',
        short_name: 'Orator',
        display: 'standalone',
        start_url: '.',
        background_color: '#fff',
        description: 'Сайт для покращення мовлення і дикції',

        icons: [
          {
            src: 'icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    WindiCSS({
      configFiles: [
        path.resolve(__dirname, 'windi.config.ts'),
      ],
    }),
    Icons({ compiler: 'vue3' }),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: './src/auto-imports.d.ts',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
