import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Base URL configuration for GitHub Pages deployment
  // This ensures assets are loaded correctly when deployed to:
  // https://reaper1067msx.github.io/react-functional-components/
  base: '/react-functional-components/',
  
  // Build configuration
  build: {
    // Generate source maps for better debugging experience
    sourcemap: true,
    
    // Output directory (default is 'dist')
    outDir: 'dist',
    
    // Clean the output directory before build
    emptyOutDir: true,
  }
})
