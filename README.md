# 🐘 Tangkahan: Guardians of the Leuser
### Product Requirement Document (PRD) — SDGs Creative Web Competition, BytesFest 2026

> Landing page untuk subtema **Eco Journey: Sustainable Tourism Experience** (SDG 8 & 15), mengangkat kisah transformasi Tangkahan, Langkat, Sumatera Utara dari kawasan illegal logging menjadi destinasi ekowisata berbasis konservasi gajah Sumatra dan hutan Leuser Ecosystem.

---

## 1. Ringkasan Proyek

| Item | Detail |
|---|---|
| **Nama Proyek** | Tangkahan: Guardians of the Leuser |
| **Subtema** | Eco Journey: Sustainable Tourism Experience (SDG 8 & 15) |
| **Kompetisi** | SDGs Creative Web Competition — BytesFest 2026 |
| **Tipe Web** | Web statis (static export), front-end only, tanpa database/LocalStorage/SessionStorage |
| **Tech Stack Utama** | Next.js (App Router, static export) |
| **Tim** | 2 orang (developer mahir) |
| **Deadline Submit** | 11 Juli 2026 (cek timeline resmi BytesFest) |

### 1.1 Positioning Statement

Tangkahan bukan sekadar destinasi wisata gajah. Ia adalah cerita tentang **manusia yang berubah dari penebang menjadi penjaga hutan** — sebuah transformasi yang dimulai pada April 2001, ketika masyarakat dua desa (Namo Sialang dan Sei Serdang) membentuk Lembaga Pariwisata Tangkahan (LPT) dan secara kolektif menghentikan eksploitasi hutan Leuser Ecosystem.

Landing page ini dirancang untuk **menyampaikan dampak, bukan hanya keindahan** — dengan kejujuran penuh tentang tantangan yang masih berlangsung, supaya tidak terkesan greenwashing.

### 1.2 Tujuan Produk

1. Mengkomunikasikan narasi transformasi Tangkahan secara emosional & kredibel.
2. Mengedukasi pengunjung tentang konservasi berbasis komunitas (CRU — Conservation Response Unit) dan praktik wisata gajah yang etis (no-riding policy).
3. Menyediakan pengalaman interaktif yang **purposeful** — bukan dekorasi, tapi alat edukasi.
4. Memenuhi seluruh kriteria penilaian lomba: Kesesuaian Tema (25%), Visual Design (30%), Inovasi & Fungsional (30%), Responsive Design (15%).

### 1.3 Batasan Teknis dari Panitia (WAJIB DIPATUHI)

- ❌ Tidak boleh menggunakan database, LocalStorage, atau SessionStorage.
- ❌ Tidak boleh menggunakan template atau CMS.
- ❌ Tidak boleh menggunakan aset (ikon, logo, gambar, font) yang bukan buatan sendiri/lisensi bebas pakai dengan atribusi jelas.
- ✅ Boleh menggunakan web framework (Next.js termasuk yang diizinkan).
- ✅ Boleh menggunakan library/framework CSS (Tailwind, dst).
- ✅ Jika ada tahap build, **wajib** menyertakan instruksi run di `README.md` (lihat bagian 9).
- ✅ Sebelum submit, hapus folder `node_modules` dan cache build (`.next`, dst).

---

## 2. Sumber Kebenaran Konten (Content Source of Truth)

> ⚠️ **PENTING**: Semua data di bawah berasal dari riset awal dan **WAJIB diverifikasi ulang oleh tim sebelum dipublikasikan**, karena akan dipresentasikan ke juri pada sesi wawancara. Jangan menambah klaim/angka baru tanpa sumber.

### 2.1 Fakta Berkepercayaan Tinggi (boleh dipakai sebagai konten utama)

| Fakta | Detail |
|---|---|
| Periode kerusakan | Illegal logging marak 1980–1990an di kawasan penyangga TN Gunung Leuser |
| Titik balik | April 2001 — masyarakat Namo Sialang & Sei Serdang membentuk **Lembaga Pariwisata Tangkahan (LPT)**, menetapkan regulasi lokal larangan eksploitasi hutan |
| Tokoh kunci | **Rudikita Sembiring** — mantan penebang, kini pemimpin LPT ("dari penebang menjadi guardian") |
| Sistem konservasi | **CRU (Conservation Response Unit)** — tim gajah + mahout yang patroli rutin untuk mencegah illegal logging, encroachment, dan menangani konflik manusia-gajah |
| Data ekonomi | ±41.740 pengunjung/tahun (2023: 31.200 lokal + 10.540 asing); nilai ekonomi wisata diestimasi ±Rp 72 miliar/tahun (metode Travel Cost, riset 2022) |
| Model ekonomi | Mantan penebang beralih ke profesi: pemandu wisata, pengelola homestay/eco-lodge (mis. Bambu River Guesthouse) |
| Komunitas | Didominasi etnis Melayu dan Karo |

### 2.2 Hindari atau Sajikan dengan Hati-Hati

- ❌ Jangan klaim angka populasi gajah liar spesifik (data CRU adalah jumlah gajah tim patroli, bukan sensus populasi liar Leuser).
- ❌ Jangan klaim luas restorasi hutan dalam hektar tanpa sumber primer yang solid.
- ⚠️ Soal *riding* gajah: dulu ada untuk wisatawan, **kini dihentikan untuk turis** (mahout masih menunggangi untuk keperluan patroli/manajemen). Sampaikan ini sebagai **evolusi kebijakan**, bukan klaim "100% sempurna sejak awal".
- ⚠️ Akui masih ada tantangan: isu welfare gajah-mahout yang disorot pihak luar, risiko overtourism pasca-2023, dan konflik manusia-gajah yang masih terjadi sesekali.

### 2.3 Prinsip Penulisan Konten

> **Jujur lebih kuat daripada sempurna.** Setiap section yang mengklaim dampak positif harus diimbangi dengan transparansi tentang proses dan tantangan yang masih berjalan. Ini adalah pembeda utama dari landing page "wisata hijau" generik yang terkesan greenwashing.

---

## 3. Brief UI/UX

### 3.1 Prinsip Desain

1. **Storytelling-first, bukan brochure-first** — setiap section harus terasa seperti bab dalam sebuah cerita, bukan slot informasi terpisah.
2. **Kejujuran visual** — hindari gambar "hutan sempurna tanpa cela"; sertakan tekstur, kontras gelap-terang yang merepresentasikan dualitas masa lalu (rusak) vs masa kini (terjaga).
3. **Interaksi bermakna** — setiap elemen interaktif harus mengajarkan sesuatu, bukan sekadar animasi pemanis.
4. **Mobile-first** — mayoritas juri kemungkinan membuka link deploy dari HP saat penjurian awal.

### 3.2 Moodboard Direction

**Tone visual**: *Misty jungle realism* — perpaduan ilustrasi vector organik dengan palet gelap-kaya (bukan kartun ceria, bukan juga foto-realistis kelam).

| Elemen | Arahan |
|---|---|
| **Palet Warna** | Primer: Hijau hutan tua `#1B3A2B`, Hijau lumut `#3E5C44`. Aksen: Cokelat sungai `#8B6F4E`, Krem kabut `#E8E4D9`. Highlight/CTA: Kuning gajah hangat `#D9A441` atau Oranye senja `#C2622D` (representasi "harapan/transformasi") |
| **Tipografi** | Heading: serif/display bold dengan karakter kuat (kesan "warisan, keberanian") — contoh arah: font seperti *Fraunces* atau *Lora* (cek lisensi open-source/Google Fonts). Body: sans-serif netral mudah dibaca — contoh arah: *Inter* atau *Plus Jakarta Sans* |
| **Gaya Ilustrasi** | Vector/SVG flat-organic dengan tekstur grain halus (bukan flat design "datar" generik). Siluet gajah, kanopi hutan berlapis (untuk parallax), motif sungai mengalir |
| **Fotografi** | **Tidak digunakan** — seluruh visual berupa ilustrasi orisinal sesuai aturan lomba |
| **Motion Language** | Scroll = waktu berjalan. Transisi antar section merepresentasikan perjalanan dari "gelap/rusak" → "terang/terjaga" |

### 3.3 Struktur Halaman (Section by Section)

| # | Section | Tujuan | Konten Kunci |
|---|---|---|---|
| 1 | **Hero** | Hook emosional pertama | Headline kuat ("Dari Penebang, Menjadi Penjaga"), ilustrasi hutan berlapis (parallax), CTA scroll "Mulai Perjalanan" |
| 2 | **Masalah (The Wound)** | Membangun konteks krisis | Visualisasi era illegal logging 1980–90an, dampak ke hutan & gajah, tone gelap/dramatis |
| 3 | **Titik Balik (The Turn)** | Momen transformasi | April 2001, pembentukan LPT, kutipan/figur Rudikita Sembiring, transisi visual gelap→terang |
| 4 | **Solusi: CRU System** | Edukasi sistem konservasi | Penjelasan Conservation Response Unit, peran mahout & gajah patroli — **lokasi fitur interaktif utama** |
| 5 | **Kehidupan Sekarang (Coexistence)** | Menunjukkan hasil nyata | Profesi baru warga (pemandu, homestay), kehidupan sehari-hari, foto-ilustrasi suasana desa |
| 6 | **Dampak Terukur (Impact)** | Data viz kredibel | Counter animasi: jumlah pengunjung/tahun, estimasi nilai ekonomi — dengan disclaimer sumber |
| 7 | **Kejujuran (Still Learning)** | Diferensiasi dari greenwashing | Akui tantangan: evolusi kebijakan no-riding, isu welfare, overtourism risk — bagian ini krusial untuk kredibilitas |
| 8 | **Jadi Bagian dari Cerita (CTA)** | Penutup & aksi | Ajakan kunjungan bertanggung jawab, edukasi "do's & don'ts", kontak/link resmi (fiktif/ilustratif) |
| 9 | **Footer** | Kredit & informasi | Atribusi sumber data, tim pembuat, disclaimer karya kompetisi |

### 3.4 Spesifikasi Fitur Interaktif Utama

#### Fitur: **"CRU Patrol Simulator"** (di Section 4)

**Konsep**: Pengunjung "menjadi" bagian tim patroli CRU melalui sebuah interaksi naratif singkat berbasis pilihan, untuk memahami kompleksitas tugas menjaga hutan — bukan game menang-kalah, tapi simulasi pengambilan keputusan yang **mengajarkan trade-off nyata** yang dihadapi tim CRU.

**Alur Interaksi**:
1. Pengunjung disambut dengan ilustrasi peta hutan sederhana (SVG, bukan Google Maps) dengan 3–4 titik "skenario patroli" (misal: menemukan jejak illegal logging, menangani konflik gajah-warga, dst).
2. Klik satu titik → muncul skenario singkat (2-3 kalimat) + 2 pilihan tindakan.
3. Setiap pilihan menampilkan **konsekuensi naratif yang realistis** (tidak ada pilihan yang sempurna — merefleksikan kompleksitas konservasi nyata).
4. Di akhir, muncul ringkasan singkat: "Begini cara CRU menjaga seimbang antara manusia, gajah, dan hutan setiap hari."

**Alasan fitur ini dipilih**:
- Mengangkat elemen paling unik dari Tangkahan (CRU) yang tidak dimiliki destinasi lain.
- Edukatif tanpa terasa seperti kuis dangkal — fokus pada nuansa, bukan benar/salah.
- Teknis: hanya butuh React state (tidak ada DB), feasible untuk tim 2 orang dengan waktu wajar.

**Yang harus DIHINDARI dalam eksekusi**:
- Jangan jadikan ini "game" dengan skor/menang-kalah — ini bukan tujuannya.
- Jangan oversimplify isu welfare gajah menjadi pilihan biner yang naif.

---

## 4. Brief Frontend

### 4.1 Tech Stack

| Layer | Pilihan | Alasan |
|---|---|---|
| **Framework** | Next.js 14+ (App Router), `output: 'export'` | Sesuai permintaan tim; static export menghasilkan HTML/CSS/JS murni tanpa server, sesuai aturan lomba |
| **Styling** | Tailwind CSS | Diizinkan eksplisit oleh panitia; mempercepat development konsisten |
| **Animasi Scroll & Interaksi** | **GSAP** + plugin **ScrollTrigger** | Direkomendasikan dibanding Framer Motion karena superior untuk scroll-driven storytelling kompleks (parallax multi-layer, sequencing timeline) — standar yang dipakai situs-situs pemenang Awwwards |
| **Ilustrasi/Grafis Interaktif** | SVG manual/React components, opsional **Lottie** (via `lottie-react`) untuk animasi karakter gajah yang lebih hidup jika dibuat di After Effects/Figma | SVG ringan, scalable, mudah dianimasikan dengan GSAP |
| **Font** | Google Fonts (self-hosted via `next/font` agar tetap statis & cepat) | Gratis, lisensi jelas, tidak butuh koneksi eksternal saat runtime |
| **Icon** | **Lucide React** atau ikon custom SVG buatan sendiri | Lucide gratis & ringan; tapi cek ulang — jika panitia strict soal "semua aset dibuat sendiri", pertimbangkan custom SVG icon set sendiri untuk elemen kunci |
| **Linting/Formatting** | ESLint + Prettier (default Next.js) | Konsistensi kode untuk kerja tim 2 orang |
| **Deployment** | Vercel atau Netlify (static hosting) | Mendukung `next export` dengan mudah, gratis untuk kebutuhan kompetisi |

### 4.2 Struktur Folder (Rekomendasi)

```
tangkahan-guardians/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # Single-page landing (semua section di-render disini)
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TheWound.tsx
│   │   ├── TheTurn.tsx
│   │   ├── CRUSystem.tsx        # Berisi fitur interaktif "CRU Patrol Simulator"
│   │   ├── Coexistence.tsx
│   │   ├── ImpactStats.tsx
│   │   ├── StillLearning.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── interactive/
│   │   ├── CRUPatrolSimulator.tsx
│   │   ├── ScenarioCard.tsx
│   │   └── ImpactCounter.tsx    # Animated number counter
│   ├── illustrations/           # Komponen SVG ilustrasi (gajah, hutan, sungai, dst)
│   │   ├── ForestCanopy.tsx
│   │   ├── ElephantSilhouette.tsx
│   │   └── RiverPattern.tsx
│   └── ui/
│       ├── Button.tsx
│       └── SectionHeading.tsx
├── lib/
│   ├── gsap-config.ts           # Setup GSAP + ScrollTrigger registration
│   └── content.ts               # Semua teks/data konten terpisah dari komponen (mudah di-edit & di-cek fakta)
├── public/
│   ├── illustrations/           # Aset SVG/gambar statis
│   └── fonts/
├── next.config.js               # output: 'export'
├── tailwind.config.ts
├── package.json
└── README.md
```

### 4.3 Konvensi Penting

- **Pisahkan konten dari komponen** — semua teks (headline, body, data fakta) disimpan di `lib/content.ts` sebagai object/array terstruktur. Ini memudahkan proses fact-checking ulang sebelum submit, tanpa harus bongkar JSX.
- **Komponen ilustrasi sebagai SVG React Component**, bukan file `.svg` statis di `<img>`, supaya bisa dianimasikan langsung dengan GSAP (akses ke path/elemen individual).
- **Lazy-load section di bawah fold** dengan `next/dynamic` jika ada komponen berat (terutama CRU Patrol Simulator) untuk menjaga performa.
- **Aksesibilitas dasar**: semua interaksi (klik skenario, dst) harus bisa diakses keyboard, dan ada `alt`/`aria-label` di elemen visual penting.

### 4.4 Responsive Design

- **Breakpoint**: mobile (< 640px), tablet (640–1024px), desktop (> 1024px) — gunakan default breakpoint Tailwind (`sm`, `md`, `lg`, `xl`).
- Parallax multi-layer di Hero **disederhanakan di mobile** (kurangi jumlah layer animasi untuk performa & karena efek parallax kurang terasa di layar kecil).
- Fitur CRU Patrol Simulator: di desktop bisa side-by-side (peta + skenario), di mobile jadi stacked/full-screen modal per skenario.

### 4.5 Performance Checklist

- [ ] Optimasi SVG (compress dengan SVGO) sebelum dimasukkan ke project.
- [ ] Font di-subset hanya karakter yang dipakai (kurangi file size).
- [ ] Lighthouse score target: Performance > 85, Accessibility > 90.
- [ ] Test build statis (`next build && next export` atau `next build` dengan `output: export`) berjalan tanpa error sebelum submit.

---

## 5. Brief Backend (Tipis)

> Karena ini web statis tanpa database, "backend" di sini sebatas **build process & data handling lokal**, bukan server aktif.

### 5.1 Lingkup

- **Tidak ada API call ke server eksternal saat runtime** (kecuali font loading dari Google Fonts jika tidak di-self-host — tapi direkomendasikan self-host untuk kepatuhan penuh & performa).
- **Tidak ada autentikasi, tidak ada penyimpanan data pengguna** (sesuai aturan lomba — no DB, no LocalStorage, no SessionStorage).
- Semua "state" interaktif (misal progress di CRU Patrol Simulator) **hanya hidup di memory React (useState)** selama sesi browsing — hilang saat refresh, dan itu **sesuai aturan**, bukan bug.

### 5.2 Build Process

```
Source code (Next.js + TSX + Tailwind)
        ↓ next build (output: export)
Static HTML/CSS/JS murni
        ↓ next export
Folder /out — siap deploy ke Vercel/Netlify/static hosting apapun
```

### 5.3 Konfigurasi `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // wajib true untuk static export jika pakai next/image
  },
};

module.exports = nextConfig;
```

### 5.4 Data Konten

Karena tidak ada database, seluruh data (teks narasi, data statistik, skenario CRU Simulator) disimpan sebagai **TypeScript object/array statis** di `lib/content.ts`, di-import langsung ke komponen saat build time. Contoh struktur:

```ts
// lib/content.ts
export const impactStats = [
  { label: "Pengunjung per tahun (2023)", value: 41740, source: "Estimasi riset 2022-2023" },
  { label: "Estimasi nilai ekonomi wisata", value: "Rp 72 Miliar/tahun", source: "Travel Cost Method, riset 2022" },
];

export const cruScenarios = [
  {
    id: "scenario-1",
    title: "Jejak di Tepi Hutan",
    description: "Tim patroli menemukan jejak alat berat di batas kawasan lindung...",
    choices: [
      { text: "Laporkan & pantau diam-diam", consequence: "..." },
      { text: "Konfrontasi langsung", consequence: "..." },
    ],
  },
  // ...
];
```

---

## 6. Deliverables Sesuai Ketentuan Lomba

Wajib dikumpulkan via Google Form (`uns.id/SUBMIT_CWC_BYTESFEST26`):

- [ ] **Link Deploy** (Vercel/Netlify, hasil static export)
- [ ] **Link Repository GitHub** (public, hapus `node_modules` & `.next` sebelum push final/sertakan `.gitignore`)
- [ ] **Dokumentasi pembuatan** (PDF: wireframe, fungsi, tampilan, alur kerja situs)
- [ ] **Dokumentasi wireframe/mockup + konsep** (PDF: detail fungsi tiap halaman/section)
- [ ] **Surat Pernyataan Orisinalitas** (PDF, ambil template dari `uns.id/Bytesfest2026-KebutuhanPesertaCWC`)
- [ ] **README.md di repo** wajib mencantumkan instruksi build & run (lihat bagian 9)

---

## 7. Kriteria Penilaian — Mapping ke Keputusan Desain

| Kriteria | Bobot | Bagaimana Brief Ini Menjawabnya |
|---|---|---|
| **Kesesuaian Tema** | 25% | Narasi berbasis SDG 8 (decent work — transisi ekonomi warga) & SDG 15 (life on land — konservasi Leuser Ecosystem), didukung data riset nyata |
| **Visual Design** | 30% | Ilustrasi vector orisinal, palet warna naratif (gelap→terang), tipografi ekspresif, motion language yang merepresentasikan transformasi |
| **Inovasi & Fungsional** | 30% | CRU Patrol Simulator sebagai fitur edukatif unik, bukan dekorasi; data viz dampak ekonomi; section kejujuran "Still Learning" sebagai diferensiasi dari kompetitor |
| **Responsive Design** | 15% | Mobile-first approach, parallax disesuaikan per breakpoint, simulator adaptif desktop/mobile |

---

## 8. Timeline Kerja Internal (Saran)

> Disusun mundur dari estimasi deadline submit (cek ulang tanggal resmi di guidebook: pengumpulan karya 8–11 Juli 2026).

| Minggu | Fokus |
|---|---|
| 1 | Finalisasi & verifikasi ulang seluruh konten/fakta, wireframe low-fidelity, setup project Next.js + GSAP + Tailwind |
| 2 | Desain high-fidelity (Figma) seluruh section, mulai produksi ilustrasi SVG |
| 3 | Development section 1–5 (Hero s/d Coexistence), termasuk animasi GSAP dasar |
| 4 | Development CRU Patrol Simulator (fitur paling kompleks), section Impact & Still Learning |
| 5 | Testing responsive, performance optimization, penulisan dokumentasi PDF (wireframe, fungsi, alur kerja) |
| 6 | Buffer, review tim, Surat Pernyataan Orisinalitas, submit |

---

## 9. Instruksi Build & Run (untuk README repo GitHub)

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
# Buka http://localhost:3000

# Build untuk production (static export)
npm run build
# Output statis akan ada di folder /out

# Preview hasil build statis secara lokal (opsional)
npx serve out
```

**Catatan sebelum submit ke panitia**:
1. Hapus folder `node_modules` dan `.next` dari repository.
2. Pastikan `.gitignore` mencakup `node_modules/`, `.next/`, `out/`.
3. Pastikan link deploy (Vercel/Netlify) sudah live dan diuji di mobile & desktop.

---

## 10. Catatan Akhir & Risiko yang Perlu Diwaspadai Tim

1. **Verifikasi ulang semua sumber data** di bagian 2 sebelum dipublikasikan — riset awal berasal dari AI research assistant dan perlu cross-check manual ke sumber primer (jurnal, artikel resmi) agar tahan ditanya juri.
2. **Jangan over-promise pada fitur CRU Simulator** — lebih baik 1 interaksi yang dieksekusi matang & bermakna, daripada banyak fitur dangkal.
3. **Cek ulang lisensi font & ikon** yang dipakai — pastikan semua free-to-use dengan atribusi jelas, atau buat sendiri jika ragu.
4. **Jaga nada "kejujuran"** di section 7 (Still Learning) — ini elemen pembeda penting, jangan dihilangkan demi kelihatan "sempurna".
5. **Siapkan jawaban presentasi** — karena masuk 10 besar berarti presentasi + tanya jawab (60%/40%), tim harus siap menjelaskan *mengapa* setiap keputusan desain & fakta diambil, termasuk dari mana sumber datanya.

---

*Dokumen ini adalah living document — update sesuai temuan riset tambahan atau perubahan keputusan tim selama proses development.*
