import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from "vite-plugin-sitemap";


// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://www.justkarabo.xyz",

      dynamicRoutes: [
        "/about",
        "/projects",
        
        "/projects/liveauth",
        "/projects/local-news-articles",
        "/projects/tenalink",
        "/projects/entrada",
        "/projects/contextos-ingestion",
        "/projects/ride-hailing-platform",

        "/contact",
        "/skills",
        "/resume",
      ],

      exclude: [
        "/404",
        "/blog/:slug",
        "/blog/:slug/comments",
        "/blog/:slug/comments/:commentId",
        "/blog/:slug/comments/:commentId/edit",
      ],
    }),
  ],
})
