import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Option A: project page (replace <REPO_NAME>)
export default defineConfig({
  base: 'vs-unicraft-creation',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  // GitHub Pages configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

// Option B: use relative paths (works for many setups)
// export default defineConfig({
//   base: './',
//   plugins: [react()],
// })