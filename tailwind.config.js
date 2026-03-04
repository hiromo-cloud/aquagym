/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // AQUAGYM専用の丸文字フォント設定
        rounded: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      // 必要に応じてここにカスタムカラーやアニメーションを追加可能
    },
  },
  plugins: [],
}
