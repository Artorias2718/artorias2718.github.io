import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
      rollupOptions: {
          output: {
              manualChunks: (id) => {
                  if(id.includes('node_modules')) {
                      if(id.includes('mui')) {
                          const componentPath = id
                              .toString()
                              .split('node_modules/@mui/')[1];

                          if(componentPath) {
                              // Example logic to categorize MUI components
                              if (componentPath.startsWith('material')) {
                                  // Extract the component name
                                  const componentName = componentPath.split('/')[1];
                                  return `mui-${componentName}`; // Create a chunk per component
                              }
                              else if (componentPath.startsWith('icons')) {
                                  return 'mui-icons'; // Bundle all icons together
                              }
                          }
                      }

                      if(id.includes('firebase')) {
                          return 'firebase';
                      }

                      return id.toString()
                          .split('node_modules/')[1]
                          .split('/')[0]
                          .toString();
                  }
              }
          }
      }
  },
  plugins: [
      react(),
      viteStaticCopy({
        targets: [{
          src: 'ads.txt',
          dest: ''
        }]
      })
  ],
})
