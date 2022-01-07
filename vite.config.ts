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
      manifest: {
        name: 'True Orator',
        short_name: 'Orator',
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
