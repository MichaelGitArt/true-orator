import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    Vue(),
    VitePWA(),
    WindiCSS({
      config: {
        attributify: true,
      },
      configFiles: [
        path.resolve(__dirname, 'windi.config.ts'),
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
