import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-three": ["three", "three-stdlib"],
          "vendor-r3f": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          "vendor-rapier": ["@react-three/rapier"],
          "vendor-gsap": ["gsap"],
        },
      },
    },
  },
});
