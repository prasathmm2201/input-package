import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve(__dirname, "index.jsx"),
      name: "inputPackage",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react()],
});
