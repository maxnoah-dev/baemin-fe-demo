# Baemin FE Demo

Dự án demo frontend cho ứng dụng giao đồ ăn Baemin, được xây dựng với Next.js.

## Tính năng

- 🏠 Trang chủ hiển thị danh sách nhà hàng
- 🍽️ Trang chi tiết nhà hàng với menu
- 📦 Trang quản lý đơn hàng
- 🎨 UI hiện đại với Tailwind CSS

## Công nghệ sử dụng

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **App Router** - Next.js routing system

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## Cấu trúc dự án

```
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Trang chủ
│   ├── orders/       # Trang đơn hàng
│   └── restaurant/   # Trang chi tiết nhà hàng
├── data/             # Mock data
│   └── mockData.ts   # Dữ liệu mẫu
└── public/           # Static files
```

## Mock Data

Dự án sử dụng mock data bao gồm:
- 5 nhà hàng với menu đầy đủ
- 3 đơn hàng mẫu với các trạng thái khác nhau

## Lưu ý

Đây là dự án demo với mock data, không có logic backend thực tế. Phù hợp cho việc học và thực hành deployment.
