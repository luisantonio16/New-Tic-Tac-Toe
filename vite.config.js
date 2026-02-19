import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Mi App",
        short_name: "MiApp",
        description: "Mi aplicación PWA",
        theme_color: "#0d6efd",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/src/assets/icon.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/src/assets/icon.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});