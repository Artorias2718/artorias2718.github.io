import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // build: {
  //     rollupOptions: {
  //         output: {
  //             manualChunks: (id) => {
  //                 if(id.includes('node_modules')) {
  //                     if(id.includes('mui')) {
  //                         return 'mui';
  //                     }
  //
  //                     if(id.includes('firebase')) {
  //                         return 'firebase';
  //                     }
  //
  //                     return id.toString()
  //                         .split('node_modules/')[1]
  //                         .split('/')[0]
  //                         .toString();
  //                 }
  //             }
  //         }
  //     }
  // },
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
