import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // ローカル開発時にポートを固定したい場合はここを設定
    port: 3000,
    // ブラウザを自動で開く設定
    open: true
  },
  build: {
    // Vercelデプロイ用にビルド成果物の出力を最適化
    outDir: 'dist',
  }
})
