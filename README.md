# TetanggaUMKM

Landing page responsif untuk brand UMKM snack Indonesia dengan nama dummy `Lokaloka Snacks`.

Project ini dibuat dengan pendekatan visual product-focused: clean, premium, editorial, dan conversion-oriented untuk 2 target utama:
- B2C: pembelian langsung oleh konsumen
- B2B: reseller, grosir, cafe, toko, kantor, event, dan corporate hampers

## Tech Stack

- Next.js 14+
- App Router
- TypeScript
- Tailwind CSS

## Menjalankan Project

Install dependency:

```bash
npm install
```

Jalankan mode development:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

## Struktur Folder Penting

```txt
app/
  page.tsx
  product/page.tsx

components/
  HeroSection.tsx
  CategoriesSection.tsx
  BestSellerSection.tsx
  BrandStorySection.tsx
  BusinessSection.tsx
  JournalSection.tsx
  Footer.tsx
  ui/

data/
  site.ts

public/
  products/
  journal/
  brand/
```

## Lokasi Gambar Lokal

Semua gambar produk sekarang diarahkan ke folder lokal `public/products/`.

Nama file yang perlu disiapkan:

- `public/products/basreng-daun-jeruk.jpg`
- `public/products/makaroni-chili-oil.jpg`
- `public/products/keripik-pisang-caramel.jpg`
- `public/products/snack-hampers-box.jpg`

Path gambar tersebut sudah dipakai di:

- [data/site.ts](./data/site.ts)

Kalau ingin menambah gambar lain:
- simpan file ke `public/`
- panggil dengan path seperti `/products/nama-file.jpg`

## File yang Paling Sering Diedit

Untuk konten:
- [data/site.ts](./data/site.ts)

Untuk homepage:
- [app/page.tsx](./app/page.tsx)
- [components/HeroSection.tsx](./components/HeroSection.tsx)
- [components/CategoriesSection.tsx](./components/CategoriesSection.tsx)
- [components/BestSellerSection.tsx](./components/BestSellerSection.tsx)

Untuk halaman produk:
- [app/product/page.tsx](./app/product/page.tsx)

Untuk styling global:
- [app/globals.css](./app/globals.css)
- [tailwind.config.ts](./tailwind.config.ts)

## Navigasi Utama

Navbar saat ini:
- `Product` -> `/product`
- `About Us` -> `/#tentang-kami`
- `Contact` -> `/#kontak`

## Catatan Deploy

Sebelum push/deploy:
- pastikan `node_modules/` dan `.next/` tidak ikut ke Git
- pastikan gambar lokal yang dipakai sudah ada di `public/products/`

Deploy ke Netlify bisa dilakukan lewat repository GitHub setelah project berhasil di-push.

Build command:

```bash
npm run build
```

## Catatan Tambahan

- Project ini memakai gambar lokal/static path dari folder `public/`
- Beberapa animasi halus sudah ditambahkan untuk kesan premium
- Layout mobile sudah diarahkan agar gambar tampil lebih rapi dengan proporsi kotak pada area tertentu
