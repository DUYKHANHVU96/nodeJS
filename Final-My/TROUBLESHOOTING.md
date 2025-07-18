# 🔧 Hướng dẫn khắc phục lỗi

## Lỗi thường gặp và cách khắc phục

### 1. Lỗi Tailwind CSS không hoạt động
```bash
# Cài đặt lại dependencies
npm install

# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### 2. Lỗi "Module not found"
```bash
# Kiểm tra đường dẫn import
# Đảm bảo file tồn tại trong thư mục components/
```

### 3. Lỗi "Cannot read property of undefined"
- Kiểm tra props được truyền đúng cách
- Đảm bảo state được khởi tạo đúng

### 4. Lỗi "Port already in use"
```bash
# Tìm và kill process đang sử dụng port 5173
npx kill-port 5173

# Hoặc chạy trên port khác
npm run dev -- --port 3000
```

### 5. Lỗi "React is not defined"
- Đảm bảo import React trong mỗi component
- Kiểm tra cấu hình Vite

### 6. Lỗi "Tailwind classes not working"
```bash
# Rebuild Tailwind CSS
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

### 7. Lỗi "Image not loading"
- Kiểm tra URL hình ảnh
- Đảm bảo hình ảnh tồn tại
- Sử dụng placeholder image nếu cần

## Các lệnh hữu ích

### Kiểm tra lỗi
```bash
# Lint code
npm run lint

# Kiểm tra build
npm run build

# Preview build
npm run preview
```

### Debug
```bash
# Chạy với debug mode
npm run dev -- --debug

# Kiểm tra console trong browser
F12 > Console
```

### Reset dự án
```bash
# Xóa cache
npm cache clean --force

# Xóa node_modules
rm -rf node_modules package-lock.json

# Cài lại
npm install
```

## Liên hệ hỗ trợ
Nếu gặp lỗi không thể khắc phục, vui lòng:
1. Kiểm tra console trong browser
2. Kiểm tra terminal output
3. Tạo issue với thông tin lỗi chi tiết 