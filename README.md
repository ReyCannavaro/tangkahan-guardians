# Tangkahan: Guardians of the Leuser

Landing page statis untuk subtema **Eco Journey: Sustainable Tourism Experience** pada SDGs Creative Web Competition BytesFest 2026. Situs ini mengangkat transformasi Tangkahan, Langkat, Sumatera Utara dari kawasan yang pernah tertekan illegal logging menjadi destinasi ekowisata berbasis komunitas, Conservation Response Unit, dan konservasi gajah Sumatra.

## Fokus Produk

- Storytelling satu halaman dari krisis, titik balik, CRU, coexistence, dampak, kejujuran, sampai ajakan kunjungan bertanggung jawab.
- CRU Patrol Simulator sebagai fitur interaktif utama untuk memahami trade-off patroli konservasi.
- Static export, front-end only, tanpa database, LocalStorage, atau SessionStorage.
- Visual berbasis ilustrasi SVG/line-art orisinal di dalam project.

## Tech Stack

- Next.js App Router dengan `output: "export"`
- React dan TypeScript
- Tailwind CSS
- GSAP ScrollTrigger
- `next/font/google` untuk self-hosted font saat build

## Struktur Penting

```txt
app/
  layout.tsx
  page.tsx
  globals.css
components/
  sections/
  interactive/
  illustrations/
  ui/
lib/
  content.ts
  gsap-config.ts
```

Semua teks dan data yang perlu mudah diverifikasi disimpan di [lib/content.ts](./lib/content.ts).

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build Production

```bash
npm run build
```

Karena `next.config.ts` memakai `output: "export"`, hasil static export akan dibuat di folder `out/`.

## Preview Static Export

```bash
npx serve out
```

## Verifikasi Terakhir

```bash
npm run lint
npm run build
```

Keduanya harus lolos sebelum deploy atau submit.

## Catatan Fakta dan Sumber

Beberapa angka pada section Impact sengaja ditulis sebagai estimasi karena masih perlu verifikasi sumber primer sebelum presentasi final. Jangan menaikkan angka tersebut menjadi klaim absolut tanpa dokumen pendukung.

Prioritas fact-check sebelum submit:

- Estimasi jumlah pengunjung tahunan.
- Estimasi nilai ekonomi wisata.
- Detail historis pembentukan LPT dan kebijakan wisata gajah.
- Klaim operasional CRU yang perlu dicocokkan dengan sumber resmi atau dokumen lapangan.

## Kepatuhan Lomba

- Tidak menggunakan database.
- Tidak menggunakan LocalStorage atau SessionStorage.
- Tidak menggunakan CMS atau template.
- Tidak memakai gambar fotografi eksternal.
- Ilustrasi utama dan icon naratif dibuat sebagai komponen SVG di repository.
- Font memakai mekanisme `next/font`, bukan request runtime langsung ke CDN.

## Sebelum Submit

1. Uji tampilan desktop dan mobile dari hasil deploy.
2. Jalankan `npm run lint` dan `npm run build`.
3. Pastikan folder `node_modules`, `.next`, dan `out` tidak ikut dikomit.
4. Siapkan link deploy dan link repository publik.
5. Siapkan dokumentasi PDF: wireframe, fungsi, tampilan, dan alur kerja situs.
6. Siapkan surat pernyataan orisinalitas sesuai ketentuan panitia.
