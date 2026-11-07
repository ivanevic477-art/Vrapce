import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        momcad: resolve(__dirname, "momcad.html"),
        raspored: resolve(__dirname, "raspored.html"),
        rezultati:resolve(__dirname, "rezultati.html"),
        oklubu: resolve(__dirname, "o-klubu.html"),
        igrac: resolve(__dirname, "igrac.html")
      }
    }
  }
});
