# Gemini Chat App

Ứng dụng chat với AI Gemini của Google sử dụng React.

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Cấu hình API Key:
   - Mở file `src/key.js`
   - Thay thế `YOUR_API_KEY` bằng API key thực của bạn
   - Lấy API key từ [Google AI Studio](https://makersuite.google.com/app/apikey)

3. Chạy ứng dụng:
```bash
npm run dev
```

## Tính năng

- 💬 Chat với AI Gemini
- ⚡ Giao diện real-time
- 🔄 Loading state
- ⌨️ Hỗ trợ Enter để gửi tin nhắn
- 🚫 Disable input khi đang xử lý
- ❌ Xử lý lỗi thân thiện

## Cấu trúc file

- `src/App.jsx` - Component chính
- `src/key.js` - Cấu hình API key
- `src/App.css` - Styles cho ứng dụng

## Lưu ý

- Đảm bảo có API key hợp lệ từ Google AI Studio
- API key sẽ được sử dụng để gọi Gemini API
- Không chia sẻ API key công khai
