import { defineConfig, rollupVersion } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
    // "build:
  build: {
    lib: {
      entry: resolve(__dirname, 'src/App.tsx'),
      name: "af-widget",
    },
    sourcemap: 'inline',
    rollupOptions: {
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'react',
        },
      },
    }
  }
})
