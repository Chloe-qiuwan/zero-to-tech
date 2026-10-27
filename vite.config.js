// import { defineConfig } from 'vite'
// export default defineConfig({
//   base: '/zero-to-tech/'
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
