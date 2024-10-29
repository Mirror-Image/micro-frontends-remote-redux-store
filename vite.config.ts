import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_store',
      filename: 'remoteEntry.js',
      exposes: {
        './Wrapper': './src/App',
        './storeHooks': './src/store/hooks',
        './counterSlice': './src/store/counter/slice',
        './counterSelectors': './src/store/counter/selector',
      },
      shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
