import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "/SOAB/",  👈 AGREGÁ ESTA LÍNEA (con las barras al principio y al final) esto es pata git pages
  base: "/" // esto es para vercel
})