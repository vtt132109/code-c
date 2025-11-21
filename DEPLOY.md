# Hướng dẫn Deploy lên Vercel

## Bước 1: Chuẩn bị

1. Tạo tài khoản tại [vercel.com](https://vercel.com)
2. Kết nối GitHub repository của bạn

## Bước 2: Cấu hình Environment Variables

Trong Vercel Dashboard, thêm các biến môi trường sau:

```
DATABASE_URL=your_neon_database_url
JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
JUDGE0_API_KEY=your_judge0_api_key
```

## Bước 3: Deploy

1. Trong Vercel Dashboard, chọn "Add New Project"
2. Import repository `code-c` từ GitHub
3. Vercel sẽ tự động phát hiện Next.js
4. Build Command: `prisma generate && next build`
5. Install Command: `npm install`
6. Click "Deploy"

## Bước 4: Chạy Database Migration

Sau khi deploy thành công, cần chạy migration:

1. Vào Settings > General > Framework Preset
2. Build Command: `prisma generate && npx prisma db push && next build`
3. Hoặc chạy local: `npx prisma db push` với DATABASE_URL từ production

## Bước 5: Seed Database (Lần đầu)

```bash
npx prisma db seed
```

## Lưu ý

- Neon Database đã được cấu hình sẵn (pooler connection)
- Judge0 API sử dụng RapidAPI hoặc self-hosted
- Mỗi lần thay đổi schema cần chạy `prisma generate`

## Domain

Vercel sẽ cung cấp domain miễn phí: `your-project.vercel.app`
Bạn có thể thêm custom domain trong Settings.
