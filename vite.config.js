import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react(),],
   server: {
    host: true,   // allow access from local network
    port: 5173    // default port, can change
  },
  theme: {
  extend: {
    colors: {
      primary: "#2D283E",
      secondary: "#564F6F",
      darkcard: "#4C495D",
      lightbg: "#D1D7E0"
    }
  }
}

})
