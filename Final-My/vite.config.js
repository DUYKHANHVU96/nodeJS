import { defineConfig } from 'vite' // Import hàm defineConfig từ Vite
import react from '@vitejs/plugin-react' // Import plugin React cho Vite

export default defineConfig({
  plugins: [react()], // Cấu hình plugin React để Vite có thể build React app
})