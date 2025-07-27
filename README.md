# Dashboard Catatan Keuangan - NextAuth.js Authentication

Project ini adalah aplikasi Dashboard Catatan Keuangan yang mengimplementasikan sistem autentikasi menggunakan NextAuth.js dengan Next.js 14.

## 🚀 Fitur Utama

- **Authentication System**: Login dan Register dengan email & password
- **Protected Routes**: Middleware untuk melindungi halaman dashboard
- **Session Management**: Menggunakan NextAuth.js untuk manajemen session
- **Database**: SQLite dengan Prisma ORM
- **Modern UI**: Tailwind CSS untuk tampilan yang responsif

## 📋 Ketentuan yang Dipenuhi

✅ **NextAuth.js** sebagai solusi otentikasi utama  
✅ **Middleware** untuk proteksi route  
✅ **Halaman Login** dengan email & password  
✅ **Halaman Register** untuk pendaftaran user  
✅ **Halaman A**: Landing page (terbuka untuk umum)  
✅ **Halaman B**: Dashboard (hanya untuk user yang login)  
✅ **Informasi User** ditampilkan di dashboard  
✅ **Sign In & Sign Out** menggunakan NextAuth

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js
- **Database**: SQLite
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Password Hashing**: bcryptjs

## 📁 Struktur Project

```
jda-auth/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts    # NextAuth API
│   │   │   └── register/route.ts              # Register API
│   │   ├── dashboard/page.tsx                 # Protected Dashboard
│   │   ├── login/page.tsx                     # Login Page
│   │   ├── register/page.tsx                  # Register Page
│   │   ├── layout.tsx                         # Root Layout
│   │   └── page.tsx                           # Landing Page
│   ├── lib/auth.ts                            # Auth Configuration
│   ├── providers.tsx                          # NextAuth Provider
│   └── types/next-auth.d.ts                   # TypeScript Types
├── prisma/
│   └── schema.prisma                          # Database Schema
├── middleware.ts                              # Route Protection
└── package.json
```

## 🚀 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Database

```bash
npx prisma generate
npx prisma db push
```

### 3. Setup Environment Variables

Buat file `.env.local` dengan konfigurasi berikut:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## 📱 Halaman yang Tersedia

### 1. Landing Page (`/`)

- **Akses**: Terbuka untuk umum
- **Fitur**:
  - Informasi aplikasi
  - Tombol Register/Login
  - Jika sudah login, tombol ke Dashboard

### 2. Register Page (`/register`)

- **Akses**: Terbuka untuk umum
- **Fitur**:
  - Form pendaftaran dengan validasi
  - Password confirmation
  - Redirect ke login setelah berhasil

### 3. Login Page (`/login`)

- **Akses**: Terbuka untuk umum
- **Fitur**:
  - Form login dengan email & password
  - Error handling
  - Redirect ke dashboard setelah berhasil

### 4. Dashboard (`/dashboard`)

- **Akses**: Hanya untuk user yang sudah login
- **Proteksi**: Middleware NextAuth
- **Fitur**:
  - Informasi user yang sedang login
  - Dashboard keuangan (template)
  - Tombol logout
  - Quick actions untuk transaksi

## 🔐 Sistem Autentikasi

### NextAuth.js Configuration

- **Provider**: Credentials (Email & Password)
- **Strategy**: JWT
- **Database**: SQLite dengan Prisma
- **Password Hashing**: bcryptjs

### Middleware Protection

```typescript
// src/middleware.ts
export const config = {
  matcher: ["/dashboard/:path*"],
};
```

### Database Schema

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  password      String?
  // ... other fields
}
```

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean dan professional
- **Loading States**: Feedback visual untuk user
- **Error Handling**: Pesan error yang informatif
- **Navigation**: Intuitive navigation flow

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/signin` - Login
- `POST /api/auth/signout` - Logout
- `GET /api/auth/session` - Get session

### Registration

- `POST /api/register` - Create new user

## 📊 Database

### Tables

- **User**: Informasi user
- **Account**: NextAuth accounts
- **Session**: NextAuth sessions
- **VerificationToken**: Email verification

### Sample Data

```sql
-- User akan dibuat melalui form register
-- Password di-hash menggunakan bcryptjs
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy

### Environment Variables untuk Production

```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**

   ```bash
   npx prisma db push
   ```

2. **NextAuth Secret Missing**

   - Generate secret: `openssl rand -base64 32`
   - Add to `.env.local`

3. **TypeScript Errors**
   ```bash
   npm run build
   ```

## 📝 TODO

- [ ] Implementasi fitur transaksi keuangan
- [ ] Dashboard charts dan analytics
- [ ] Email verification
- [ ] Password reset
- [ ] Profile management
- [ ] Export data functionality

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Dibuat untuk memenuhi ketentuan tugas authentication dan session management menggunakan NextAuth.js**
