/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // File HTML chính
    "./src/**/*.{js,ts,jsx,tsx}", // Tất cả file JS/TS/JSX/TSX trong thư mục src
  ],
  theme: {
    extend: {
      colors: {
        // Định nghĩa màu primary tùy chỉnh
        primary: {
          50: '#eff6ff', // Màu nhạt nhất
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Màu chính
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a', // Màu đậm nhất
        }
      },
      fontFamily: {
        // Định nghĩa font family mặc định
        sans: ['Inter', 'system-ui', 'sans-serif'], // Font Inter làm chính, fallback về system font
      },
      animation: {
        // Định nghĩa các animation tùy chỉnh
        'fade-in': 'fadeIn 0.6s ease-out', // Animation fade in
        'slide-up': 'slideUp 0.3s ease-out', // Animation slide up
      },
      keyframes: {
        // Định nghĩa keyframes cho animations
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' }, // Bắt đầu: trong suốt và dịch xuống 20px
          '100%': { opacity: '1', transform: 'translateY(0)' }, // Kết thúc: hiển thị và về vị trí gốc
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' }, // Bắt đầu: dịch xuống 100%
          '100%': { transform: 'translateY(0)' }, // Kết thúc: về vị trí gốc
        },
      },
    },
  },
  plugins: [], // Không có plugin bổ sung
} 