import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Rodeo Rodeio',
        short_name: 'Rodeio',
        description: 'Gestão Ganadera - Padrón 12163',
        theme_color: '#0f1a12',
        background_color: '#0f1a12',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['*/.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.\.google\.com\/./i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-tiles',
              expiration: { maxEntries: 200, m