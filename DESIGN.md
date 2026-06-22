# DESIGN.md
## Tangkahan: Guardians of the Leuser — Design System & Visual Specification

> Dokumen ini ditulis untuk dibaca developer/designer yang mengerjakan proyek ini. Tujuannya: menghilangkan ambiguitas. Setiap warna, jarak, ukuran, dan perilaku animasi dijelaskan secara eksplisit supaya tidak ada keputusan visual yang ditebak-tebak saat coding. Baca dokumen ini secara keseluruhan sebelum mulai membangun komponen apapun.

---

## 0. Sebelum Mulai — Aturan Tidak Tertulis yang Wajib Dipegang

Aku mau kamu paham dulu *kenapa* proyek ini harus terlihat seperti ini, bukan cuma *apa* yang harus dibuat.

Landing page ini bersaing di kompetisi yang dinilai 30% dari Visual Design dan 30% dari Inovasi & Fungsional. Itu artinya 60% nilai ditentukan oleh hal-hal yang sangat mudah terlihat "generic" kalau dikerjakan buru-buru: warna yang dipilih sembarang, spacing yang tidak konsisten, animasi yang dipasang random tanpa makna. Brief ini ada supaya semua keputusan itu sudah dipikirkan sebelumnya, dan tugas developer adalah mengeksekusi dengan presisi — bukan berimprovisasi di tengah jalan.

Tiga aturan keras yang berlaku di seluruh proyek, tanpa kecuali:

1. **TIDAK ADA EMOJI.** Di manapun. Bukan di UI, bukan di komentar kode yang akan terlihat user, bukan di placeholder text, bukan di micro-copy tombol. Kalau butuh elemen visual kecil untuk mendampingi teks, gunakan icon dari sistem icon yang ditentukan di Bab 5, bukan emoji Unicode (🌳🐘✅ dan sejenisnya dilarang total).

2. **TIDAK ADA ICON MAINSTREAM YANG OVERUSED.** Hindari icon set yang sudah jadi default di setiap produk AI-generated atau template SaaS (Heroicons default style, Font Awesome generic, Material Icons standar). Alasannya bukan estetika semata — icon yang terlalu familiar membuat keseluruhan halaman terasa "dibuat asal-asalan dari template", dan itu bertentangan langsung dengan narasi proyek ini yang soal keaslian dan kerja keras komunitas. Detail lengkap di Bab 5.

3. **SETIAP KEPUTUSAN VISUAL HARUS MEREPRESENTASIKAN NARASI TRANSFORMASI.** Proyek ini bercerita tentang perubahan dari rusak menjadi terjaga. Ini bukan slogan kosong — ini prinsip desain yang harus diterjemahkan secara literal ke palet warna per section, ke arah animasi (gelap ke terang), ke pemilihan kontras. Kalau ragu dalam mengambil keputusan desain di luar yang sudah dijelaskan di sini, kembalikan pertanyaannya ke: "apakah ini memperkuat rasa transformasi, atau cuma dekorasi?"

---

## 1. Filosofi Visual: "Misty Jungle Realism"

Ini bukan ilustrasi kartun ceria, dan bukan juga foto-dokumenter yang depresif. Bayangkan titik tengah antara editorial National Geographic dan ilustrasi vector modern studio desain — ada tekstur, ada kedalaman, ada rasa "nyata", tapi tetap digambar, bukan difoto.

Karakteristik yang harus terasa di setiap halaman:

- **Kedalaman berlapis (layered depth)** — bukan flat design satu lapis. Setiap section hutan punya minimal 3 layer visual (kanopi jauh, pohon tengah, semak/elemen depan) untuk menciptakan rasa ruang, terutama karena ini akan dipakai untuk efek parallax.
- **Tekstur grain halus** — tidak ada bidang warna solid yang benar-benar flat tanpa tekstur. Tambahkan noise/grain texture overlay tipis (opacity rendah, sekitar 3-5%) di atas ilustrasi besar supaya terasa "dicetak" bukan "vector generator otomatis".
- **Kontras dramatis, bukan datar** — gunakan rentang value (terang-gelap) yang lebar dalam satu komposisi. Hindari ilustrasi yang semua elemennya punya brightness serupa, karena itu yang membuat ilustrasi AI generic terlihat "flat dan membosankan".

---

## 2. Sistem Warna (Color System)

### 2.1 Filosofi Warna: Perjalanan dari Gelap ke Terang

Warna di seluruh halaman **tidak statis** — palet bergeser secara bertahap seiring scroll, merepresentasikan perjalanan dari masa kerusakan (gelap, redup, kebiruan-abu) menuju masa pemulihan (hangat, kaya, hijau-emas). Ini prinsip paling penting di seluruh dokumen ini — jangan dilewatkan.

### 2.2 Palet Warna Inti

```
PRIMER — Hijau Hutan
--forest-950: #0D1F16   (paling gelap, dipakai di section "The Wound")
--forest-900: #15291C
--forest-800: #1B3A2B   (hijau hutan tua — warna dasar dominan)
--forest-700: #2A4A35
--forest-600: #3E5C44   (hijau lumut — dipakai di section pertengahan/transisi)
--forest-500: #547A5C
--forest-400: #759C7E

SEKUNDER — Tanah & Sungai
--earth-900: #3D2E1F
--earth-700: #5C4530
--earth-500: #8B6F4E   (cokelat sungai — dipakai untuk elemen tanah/kayu/sungai)
--earth-300: #B8997A
--earth-100: #E8E4D9   (krem kabut — dipakai sebagai warna teks di atas background gelap, dan sebagai background di section terang)

AKSEN — Kehangatan/Harapan (dipakai TERBATAS, hanya untuk CTA & highlight transformasi)
--amber-600: #B8801F
--amber-500: #D9A441   (kuning gajah hangat — warna CTA utama)
--amber-400: #E5BC6C
--sunset-600: #A34D1F
--sunset-500: #C2622D  (oranye senja — dipakai di momen "titik balik"/transisi gelap-terang)

NETRAL — Teks & UI
--neutral-50: #FAFAF8
--neutral-200: #E0DED5
--neutral-400: #9C988A
--neutral-600: #5C5848
--neutral-900: #1A1814  (hampir hitam, dipakai untuk teks body di background terang)

SEMANTIK
--warning-amber: #C2622D   (dipakai khusus di section "Still Learning" untuk menandai isu yang belum sepenuhnya terselesaikan)
```

### 2.3 Mapping Warna per Section

Ini bagian paling krusial — setiap section punya "suhu warna" yang berbeda secara sengaja:

| Section | Background Dominan | Teks | Aksen | Suasana |
|---|---|---|---|---|
| Hero | `--forest-800` ke `--forest-900` (gradient vertikal halus) | `--earth-100` | `--amber-500` pada CTA | Misterius, mengundang |
| The Wound | `--forest-950` (paling gelap di seluruh halaman) + overlay desaturasi sedikit abu-kebiruan | `--neutral-200` | TIDAK ADA aksen hangat — ini sengaja, supaya kontras dengan section sesudahnya | Suram, berat, redup |
| The Turn | Gradient dari `--forest-950` (atas) ke `--sunset-600` (bawah) — literal merepresentasikan "matahari terbit"/titik balik | `--earth-100` | `--amber-500` mulai muncul di sini untuk pertama kali | Harapan mulai pecah |
| CRU System | `--forest-700` (medium, lebih hidup dari section sebelumnya) | `--earth-100` | `--amber-500` untuk elemen interaktif | Aktif, fokus, "bekerja" |
| Coexistence | `--earth-100` (background TERANG — section pertama yang benar-benar terang) | `--neutral-900` | `--forest-600` untuk aksen | Tenang, kehidupan normal |
| Impact Stats | `--neutral-50` (hampir putih, paling terang di seluruh halaman) | `--neutral-900` | `--amber-500` untuk angka statistik | Jernih, faktual, terpercaya |
| Still Learning | `--earth-900` (cokelat gelap, BUKAN hijau — sengaja beda nuansa untuk menandai "refleksi") | `--earth-100` | `--warning-amber` untuk poin-poin tantangan | Reflektif, jujur, sedikit berat tapi bukan suram |
| CTA Penutup | `--forest-800` ke `--forest-600` (gradient, kembali ke hijau tapi lebih hidup dari Hero) | `--earth-100` | `--amber-500` dominan di tombol | Mengundang aksi, optimis |
| Footer | `--neutral-900` | `--neutral-400` | minimal | Netral, informatif |

**Catatan penting untuk developer**: jangan menyimpan warna section sebagai hardcoded hex di tiap komponen. Definisikan sebagai CSS variables di `globals.css` per section (atau sebagai Tailwind config custom colors), supaya kalau ada revisi warna, tidak perlu cari satu-satu di kode.

### 2.4 Aturan Kontras & Aksesibilitas

- Rasio kontras teks-terhadap-background minimal **4.5:1** untuk body text, **3:1** untuk heading besar (≥24px) — ini standar WCAG AA, wajib dicek dengan tool seperti WebAIM Contrast Checker sebelum final.
- Warna aksen (`--amber-500`, `--sunset-500`) **tidak boleh** dipakai sebagai warna teks body di atas background terang — kontrasnya tidak cukup. Aksen hanya untuk: tombol, ikon kecil, garis pembatas, angka statistik besar.

---

## 3. Tipografi

### 3.1 Pilihan Font

| Peran | Font | Sumber | Alasan |
|---|---|---|---|
| **Display/Heading** | **Fraunces** (variable font, optical size besar) | Google Fonts | Serif modern dengan karakter "berat dan bersejarah" — punya kesan warisan dan keberanian tanpa terasa klasik kuno. Punya varian italic yang elegan untuk kutipan tokoh (Rudikita Sembiring) |
| **Body Text** | **Plus Jakarta Sans** | Google Fonts | Sans-serif netral, sangat mudah dibaca di ukuran kecil, terasa modern tapi tidak steril/dingin seperti Inter yang sudah terlalu sering dipakai di setiap produk SaaS |
| **Angka/Data Statistik** | **Fraunces** (weight Black, tabular numbers jika tersedia) | Google Fonts | Supaya angka di section Impact Stats terasa punya bobot visual, bukan angka kecil yang mudah diabaikan |

**Wajib self-host via `next/font/google`** — jangan load dari CDN eksternal langsung, supaya tidak ada request runtime ke luar dan sesuai prinsip "static, self-contained" yang diminta lomba.

### 3.2 Skala Tipografi (Type Scale)

Gunakan skala berbasis rasio 1.25 (Major Third), dengan base size 16px:

```
--text-xs:    12px / line-height 16px   (caption, sumber data, footnote)
--text-sm:    14px / line-height 20px   (UI label kecil, navbar item)
--text-base:  16px / line-height 26px   (body text default)
--text-lg:    20px / line-height 30px   (body text besar, lead paragraph)
--text-xl:    25px / line-height 34px   (subheading kecil)
--text-2xl:   31px / line-height 38px   (heading section, mobile)
--text-3xl:   39px / line-height 46px   (heading section, desktop)
--text-4xl:   49px / line-height 54px   (heading besar, sub-hero)
--text-5xl:   61px / line-height 64px   (hero headline, mobile)
--text-6xl:   76px / line-height 78px   (hero headline, desktop)
--text-7xl:   95px / line-height 96px   (statistik angka besar di Impact Stats)
```

### 3.3 Aturan Pemakaian

- **Heading section (h2)** selalu pakai Fraunces, weight 600-700, letter-spacing sedikit negatif (-0.01em) di ukuran besar supaya tidak terasa "renggang kosong".
- **Body text** maksimal lebar baca **65-75 karakter per baris** (gunakan `max-width` dalam `ch` unit, misal `max-width: 65ch`) — ini standar keterbacaan, jangan biarkan paragraf melebar penuh di desktop.
- **Kutipan tokoh** (Rudikita Sembiring, dst) memakai Fraunces italic, ukuran `--text-xl` atau `--text-2xl`, dengan garis vertikal aksen `--amber-500` di sisi kiri (border-left 3px), bukan tanda kutip besar yang klise.
- Jangan pernah menggunakan lebih dari 2 family font dalam satu halaman (sudah ditentukan: Fraunces + Plus Jakarta Sans). Jangan tambah font ketiga "untuk variasi".

---

## 4. Grid, Spacing, dan Layout

### 4.1 Spacing Scale

Gunakan skala spacing berbasis 4px sebagai unit dasar (selaras dengan default Tailwind, tidak perlu custom):

```
1 = 4px, 2 = 8px, 3 = 12px, 4 = 16px, 6 = 24px, 8 = 32px,
12 = 48px, 16 = 64px, 20 = 80px, 24 = 96px, 32 = 128px
```

### 4.2 Container & Margin

| Breakpoint | Container Max-Width | Margin Kiri-Kanan |
|---|---|---|
| Mobile (< 640px) | 100% | 20px |
| Tablet (640–1024px) | 100% | 40px |
| Desktop (1024–1440px) | 1200px (centered) | auto |
| Large Desktop (> 1440px) | 1320px (centered) | auto |

### 4.3 Vertical Rhythm Antar Section

Jarak vertikal antar section **tidak boleh seragam kaku** — tapi juga tidak random. Gunakan aturan:

- Padding atas-bawah per section: `96px` di mobile, `160px` di desktop (kelas Tailwind: `py-24 lg:py-40`).
- Section yang menandai transisi emosional penting (The Turn, dari gelap ke terang) boleh punya padding lebih besar (`py-32 lg:py-48`) untuk memberi "ruang bernafas" sebelum perubahan suasana.

### 4.4 Grid Konten

- Section dengan teks naratif panjang (The Wound, The Turn, Still Learning): gunakan layout 1 kolom, teks center atau left-aligned dengan max-width 65ch, ilustrasi sebagai background/layer belakang (bukan di samping).
- Section dengan data/list (Impact Stats, Coexistence profesi warga): grid 2 kolom di tablet, 3-4 kolom di desktop, 1 kolom di mobile (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` sebagai contoh, sesuaikan jumlah item).
- CRU Patrol Simulator: layout 2 kolom di desktop (peta kiri 60%, panel skenario kanan 40%), stacked penuh di mobile (peta di atas, panel skenario full-width di bawah, idealnya sebagai bottom-sheet/modal yang slide-up).

---

## 5. Sistem Icon — PENTING, BACA DENGAN SEKSAMA

### 5.1 Mengapa Bab Ini Krusial

Kamu (developer) mungkin tergoda untuk import Heroicons atau Lucide langsung karena cepat dan sudah terintegrasi baik dengan React/Tailwind. **Jangan lakukan itu untuk icon-icon kunci yang sering terlihat user.** Icon-icon itu sudah dipakai di ribuan produk dan dashboard SaaS generic — termasuk hasil-hasil AI page builder. Begitu user melihat icon "envelope" atau "user circle" yang persis sama dengan yang mereka lihat di tempat lain, kesan "dibuat asal/template" langsung muncul meski sisanya didesain dengan baik.

### 5.2 Strategi Icon (Dua Lapis)

**Lapis 1 — Icon Fungsional/UI (frekuensi tinggi, ukuran kecil)**

Gunakan **Phosphor Icons**, varian weight **"thin"** atau **"light"** (BUKAN "regular" atau "bold", karena varian itu yang paling mirip gaya umum). Phosphor punya lebih dari 1.200 icon, masih jarang dipakai dibanding Lucide/Heroicons di proyek-proyek umum, dan varian thin/light punya karakter garis halus yang selaras dengan estetika "misty jungle" yang ingin dicapai.

Dipakai untuk: navigasi (menu hamburger, close, arrow), UI kontrol (play/pause jika ada audio narasi, expand/collapse), elemen kecil berulang.

Install: `npm install @phosphor-icons/react`

```tsx
import { ArrowDown, X, List } from "@phosphor-icons/react";

<ArrowDown size={20} weight="thin" color="currentColor" />
```

**Lapis 2 — Icon Naratif/Tematik (frekuensi rendah, ukuran besar, makna penting)**

Untuk icon yang merepresentasikan elemen inti cerita — gajah, hutan, sungai, patroli, kapak/gergaji (era kerusakan), rumah/homestay, pemandu wisata — **gambar sendiri sebagai custom SVG line-art**, bukan dari library manapun. Ini yang membuat identitas visual proyek benar-benar unik dan personal, dan jadi pembeda terbesar dari kompetitor yang kemungkinan besar pakai icon library standar.

Gaya yang harus diikuti untuk custom icon ini:
- Garis tunggal (single-line/monoline), stroke-width konsisten 1.5px pada viewBox 24x24 atau 32x32.
- Tidak ada fill solid, hanya outline — selaras dengan gaya ilustrasi besar yang juga line-art organik.
- Sudut sedikit membulat (stroke-linecap: round, stroke-linejoin: round) untuk kesan "digambar tangan", bukan digital kaku.
- Simpan sebagai React component terpisah di `components/illustrations/icons/`, contoh: `ElephantIcon.tsx`, `CanopyIcon.tsx`, `RiverIcon.tsx`, `PatrolIcon.tsx`.

**Daftar minimal custom icon yang wajib dibuat**:
1. Gajah (siluet samping, sederhana)
2. Kanopi/pohon hutan
3. Sungai/aliran air
4. Gergaji/kapak (representasi era kerusakan — dipakai HANYA di section The Wound)
5. Rumah panggung/homestay
6. Jejak kaki gajah
7. Mahout/figur penjaga (siluet manusia sederhana dengan tongkat patroli)
8. Daun tunggal (untuk bullet point/list marker, sebagai pengganti bullet point default)

### 5.3 Larangan Eksplisit

- DILARANG memakai emoji Unicode dalam bentuk apapun (termasuk di alt text yang terlihat, commit message yang terekspos, atau placeholder).
- DILARANG memakai Font Awesome (terlalu generic/overused).
- DILARANG memakai icon dengan style "flat filled" warna-warni ala ikon mobile app store — bertentangan dengan estetika monoline/line-art yang konsisten.

---

## 6. Navigasi — Floating Navbar (Sticky, Frosted Glass)

### 6.1 Konsep

Navbar bersifat **mengambang/floating di posisi atas viewport** (memiliki jarak/margin dari ujung layar atas, kiri, dan kanan), dengan bentuk membulat (border-radius penuh ala "pill" design) terinspirasi dari UI modern ala iOS yang mengambang. Menggunakan efek **frosted glass (background blur)** dengan `backdrop-filter: blur()`.

### 6.2 Perilaku Warna — Adaptif Sesuai Section

Ini permintaan spesifik yang harus diimplementasikan dengan presisi: **warna navbar berubah secara dinamis sesuai section yang sedang aktif di viewport**, menggunakan logika "warna kontras dengan section di belakangnya", bukan warna statis.

**Mekanisme teknis**:

1. Gunakan **GSAP ScrollTrigger** dengan `onEnter`/`onEnterBack` di setiap section untuk mendeteksi section mana yang sedang berada di area navbar (top of viewport).
2. Setiap section punya atribut data (misal `data-navbar-theme="dark"` atau `data-navbar-theme="light"`) yang mendefinisikan tema navbar saat section itu aktif.
3. Saat trigger berubah, animasikan transisi warna navbar (background blur tint, warna teks/logo, warna icon) dengan GSAP `.to()` selama `0.4s`, easing `power2.inOut` — transisi harus terasa halus, tidak "snap" tiba-tiba.

**Mapping tema navbar per section**:

| Section Aktif di Belakang Navbar | Tema Navbar | Background Blur Tint | Warna Teks/Logo Navbar |
|---|---|---|---|
| Hero | Dark | `rgba(13, 31, 22, 0.55)` + blur 16px | `--earth-100` |
| The Wound | Dark | `rgba(8, 18, 13, 0.6)` + blur 16px | `--neutral-200` |
| The Turn | Dark→Warm | `rgba(90, 45, 20, 0.5)` + blur 16px | `--earth-100` |
| CRU System | Dark | `rgba(27, 58, 43, 0.55)` + blur 16px | `--earth-100` |
| Coexistence | Light | `rgba(232, 228, 217, 0.65)` + blur 16px | `--neutral-900` |
| Impact Stats | Light | `rgba(250, 250, 248, 0.7)` + blur 16px | `--neutral-900` |
| Still Learning | Dark | `rgba(61, 46, 31, 0.6)` + blur 16px | `--earth-100` |
| CTA Penutup | Dark | `rgba(27, 58, 43, 0.55)` + blur 16px | `--earth-100` |

### 6.3 Spesifikasi Visual Detail

```css
/* Spesifikasi dasar navbar container */
position: fixed;
top: 16px; /* Jarak dari atas (mengambang) */
left: 50%;
transform: translateX(-50%);
width: 92%; /* Lebar relatif */
max-width: 1200px;
border-radius: 9999px; /* Membulat penuh (pill) */
height: 72px;        /* desktop */
height: 64px;         /* mobile, breakpoint < 640px */
z-index: 50;
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px); /* Safari */
border: 1px solid rgba(255, 255, 255, 0.08); /* Garis tepi halus keliling */
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Bayangan melayang */
transition: background-color 0.4s ease;
```

**Detail krusial yang sering terlewat saat mereplikasi efek iOS**:
- Border tipis sekeliling (`1px solid rgba(255,255,255,0.08)`) WAJIB ada — ini elemen yang membuat efek frosted glass terasa "fisik" alih-alih transparan flat.
- Tambahkan bayangan (box-shadow) agar jelas bahwa ia mengambang di atas konten.
- Saat scroll ke bawah lebih dari `80px`, kurangi height navbar sedikit (dari 72px ke 60px) dengan transisi smooth — pola "navbar mengecil saat scroll" yang umum di iOS, menambah kesan dinamis tanpa berlebihan.

### 6.4 Struktur Konten Navbar

```
[Logo/Wordmark kiri] -------- [Nav items tengah/kanan, desktop only] -------- [CTA button kanan]
```

- **Mobile**: Logo kiri, hamburger icon (Phosphor `List`, weight thin) di kanan. Menu mobile terbuka sebagai overlay full-screen dengan background blur yang sama, bukan dropdown kecil.
- **Desktop**: Logo kiri, 4-5 nav item di tengah/kanan (contoh: "Kisah Kami", "Konservasi", "Dampak", "Kunjungi"), 1 CTA button di paling kanan (misal "Mulai Perjalanan" — scroll ke hero CTA atau ke CTA penutup).
- Nav item text: `--text-sm`, Plus Jakarta Sans medium (500), letter-spacing 0.01em.
- Logo: wordmark "TANGKAHAN" dalam Fraunces, atau logo mark custom (siluet gajah sederhana + wordmark) — bukan logo generic "shield" atau "leaf" yang sering dipakai brand eco-tourism abal-abal.

### 6.5 Interaksi & Animasi Navbar

- **Saat halaman pertama dimuat**: navbar transparan total (tanpa blur) selama berada tepat di atas Hero sebelum scroll dimulai, lalu blur muncul fade-in begitu user scroll melebihi `20px` — ini supaya Hero terasa benar-benar immersive tanpa elemen UI di awal.
- **Saat scroll ke atas (scroll up)** setelah sebelumnya scroll ke bawah: navbar tetap muncul (sticky biasa). **Saat scroll ke bawah cepat** (opsional, nice-to-have bukan wajib): navbar bisa hide sementara untuk memberi ruang konten lebih immersive, muncul lagi saat user scroll up sedikit. Implementasi dengan GSAP `ScrollTrigger` membandingkan `direction`.

---

## 7. Spesifikasi Animasi GSAP (Detail Teknis Lengkap)

> Bagian ini ditulis rinci karena diminta eksplisit. Developer wajib mengikuti angka timing dan easing di bawah, bukan menebak "yang kira-kira pas".

### 7.1 Setup Dasar

```ts
// lib/gsap-config.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

Set default easing global di awal aplikasi agar konsisten:
```ts
gsap.defaults({ ease: "power2.out", duration: 0.6 });
```

### 7.2 Prinsip Easing — Jangan Pakai Linear, Jangan Pakai Bounce

- **Easing default untuk seluruh proyek**: `power2.out` (masuk) dan `power2.in` (keluar), atau `power2.inOut` untuk transisi dua arah.
- **Khusus untuk efek "reveal" elemen besar (heading, ilustrasi utama)**: gunakan `power3.out` — sedikit lebih dramatis di awal, melambat halus di akhir.
- **DILARANG** menggunakan `bounce`, `elastic`, atau `back` easing di manapun — easing jenis ini terasa playful/kartun, bertentangan dengan tone "misty jungle realism" yang serius dan emosional.

### 7.3 Animasi per Section

#### Hero
```
Elemen: Layer kanopi belakang (jauh) → Layer pohon tengah → Layer semak depan → Headline → Subheading → CTA button

Sequence saat page load (tidak menunggu scroll):
1. Layer kanopi belakang: fade in + scale dari 1.05 → 1, duration 1.2s, delay 0s, ease "power2.out"
2. Layer pohon tengah: fade in + translateY dari 20px → 0, duration 1s, delay 0.2s, ease "power2.out"
3. Layer semak depan: fade in + translateY dari 30px → 0, duration 1s, delay 0.35s, ease "power2.out"
4. Headline: fade in + translateY dari 24px → 0, duration 0.8s, delay 0.6s, ease "power3.out"
5. Subheading: fade in + translateY dari 16px → 0, duration 0.7s, delay 0.8s, ease "power2.out"
6. CTA button: fade in + scale dari 0.95 → 1, duration 0.5s, delay 1.0s, ease "power2.out"

Parallax saat scroll (ScrollTrigger, scrub: true):
- Layer kanopi belakang: translateY 0 → -60px sepanjang scroll Hero (paling lambat, paling jauh)
- Layer pohon tengah: translateY 0 → -120px (kecepatan medium)
- Layer semak depan: translateY 0 → -200px (paling cepat, paling dekat ke viewer)
- Headline & subheading: opacity 1 → 0 ditambah translateY 0 → -40px saat mendekati 80% scroll Hero (supaya teks "menghilang" sebelum section berikutnya muncul, bukan terpotong tiba-tiba)

scrub: true (animasi terikat langsung ke posisi scroll, bukan terpicu sekali)
```

#### The Wound (transisi masuk)
```
Trigger: ScrollTrigger start "top 75%", end "top 25%" pada container section

1. Background: tidak ada gerakan besar, tapi tambahkan subtle vignette darkening dari opacity 0 → 0.3 di tepi viewport saat section masuk (efek "menggelap")
2. Heading: fade in + translateY dari 30px → 0, duration 0.9s, ease "power2.out"
3. Body text paragraf: fade in stagger per paragraf (jika lebih dari 1), stagger 0.15s antar elemen, masing-masing duration 0.7s, ease "power2.out"
4. Ilustrasi kerusakan hutan (pohon tumbang/kapak): fade in + scale dari 0.9 → 1, duration 1s, delay 0.3s setelah heading, ease "power3.out"

Tidak ada parallax kompleks di section ini — section ini sengaja "diam dan berat", kontras dengan Hero yang banyak gerakan. Diam = representasi kelumpuhan/kerusakan.
```

#### The Turn (titik balik — PALING PENTING secara emosional)
```
Ini section dengan transisi background gradient gelap→hangat yang sudah didefinisikan di Bab 2.3. 

1. Background gradient: animasikan CSS custom property (atau interpolasi warna via GSAP) dari kombinasi forest-950/forest-900 menjadi sunset-600 sepanjang scroll section ini (scrub: true, terikat penuh ke posisi scroll, bukan sequence waktu).
2. Tahun "2001" (angka besar, --text-6xl atau --text-7xl, Fraunces Black): fade in + scale dari 0.8 → 1, duration 1s, ease "power3.out", trigger saat section masuk 60% viewport.
3. Heading "Lembaga Pariwisata Tangkahan dibentuk": fade in + translateY 24px → 0, delay 0.2s setelah angka tahun, duration 0.8s.
4. Kutipan Rudikita Sembiring (italic, border-left aksen amber): fade in dari opacity 0 + translateX dari -16px → 0, duration 0.8s, delay 0.5s — garis aksen kiri (border) di-animate height dari 0 → 100% secara terpisah, duration 0.6s, delay 0.4s, ease "power2.inOut" (efek garis "tumbuh" dari atas ke bawah).

Detail krusial: karena ini momen paling emosional di seluruh halaman, JANGAN buru-buru. Total durasi sequence dari section ini masuk viewport sampai semua elemen selesai animasi sebaiknya terasa sekitar 2-2.5 detik total (bukan semua elemen muncul bersamaan dalam 0.3 detik seperti section lain). Beri ruang untuk pembaca "merasakan" momen ini.
```

#### CRU System (fitur interaktif)
```
1. Heading & deskripsi: standard fade in + translateY, duration 0.8s, ease "power2.out" (pola sama seperti section umum lainnya).
2. Peta SVG hutan (untuk simulator): fade in + scale dari 0.95 → 1, duration 1s.
3. Titik-titik skenario di peta (4 titik): stagger entrance, masing-masing scale dari 0 → 1 dengan sedikit overshoot terkontrol — KHUSUS di sini boleh pakai ease "back.out(1.4)" dengan overshoot kecil, karena titik-titik ini representasi elemen interaktif yang harus terasa "hidup dan mengundang klik" (satu-satunya pengecualian dari larangan bounce/back easing di Bab 7.2, karena konteksnya beda — bukan storytelling emosional, tapi affordance UI). Stagger antar titik: 0.1s. Duration tiap titik: 0.4s.
4. Saat titik diklik (interaksi, bukan scroll): panel skenario slide-in dari kanan (desktop, translateX 40px → 0) atau slide-up dari bawah (mobile, translateY 100% → 0), duration 0.4s, ease "power2.out". Backdrop dim fade in bersamaan, opacity 0 → 0.5, duration 0.3s.
```

#### Coexistence & Impact Stats
```
Pola standar "fade up on scroll" untuk seluruh card/grid item:
- Trigger: ScrollTrigger start "top 80%" (memicu sedikit sebelum elemen benar-benar masuk penuh ke viewport, supaya tidak terlambat)
- Stagger antar card dalam grid: 0.12s
- Tiap card: opacity 0 → 1, translateY 24px → 0, duration 0.6s, ease "power2.out"

Khusus Impact Stats — Counter Animasi Angka:
- Gunakan GSAP plugin angka (lihat 7.4) untuk menghitung dari 0 ke nilai final.
- Duration count-up: 1.5s - 2s tergantung besar angka (angka lebih besar = durasi sedikit lebih lama agar tidak terasa terlalu cepat/blur).
- Trigger: ScrollTrigger "top 75%", sekali saja per page load (once: true) — jangan re-trigger berulang setiap kali user scroll naik-turun melewati section ini, karena counter berulang akan terasa mengganggu/aneh.
- Easing count: "power1.out" (count-up yang melambat di akhir terasa lebih natural daripada linear).
```

#### Still Learning
```
Section ini harus terasa "tenang dan reflektif", bukan dramatis. Animasi paling minimal di seluruh halaman:
- Heading & paragraf: fade in standar, duration 0.8s, ease "power2.out", TANPA translateY besar (maksimal translateY 12px, lebih subtle dari section lain) — supaya terasa "berbicara pelan", bukan "muncul dengan dramatis".
- List poin tantangan (jika dalam bentuk list): fade in stagger 0.15s, tanpa translateY sama sekali, hanya opacity 0 → 1.
```

#### CTA Penutup
```
1. Background gradient kembali menghangat (forest-800 → forest-600), animasikan dengan scrub sepanjang section, sama prinsipnya dengan The Turn tapi arah sebaliknya (kembali ke hijau, bukan ke oranye) — merepresentasikan "siklus yang berlanjut".
2. Heading CTA: fade in + scale dari 0.96 → 1, duration 0.8s, ease "power3.out".
3. Button CTA utama: fade in + translateY 16px → 0, delay 0.3s, duration 0.6s. Tambahkan subtle pulsing glow di sekitar button (box-shadow opacity berosilasi 0.3 ↔ 0.6, duration 2s, repeat infinite, ease "sine.inOut") untuk menarik perhatian tanpa terasa annoying — TIDAK boleh pakai animasi scale pulsing (terlalu "iklan murahan"), HANYA glow/shadow yang berosilasi halus.
```

### 7.4 Plugin Tambahan yang Dibutuhkan

- **ScrollTrigger** (wajib, untuk semua scroll-based animation di atas) — termasuk di paket GSAP core sejak versi GSAP yang sudah bebas lisensi penuh (GSAP 3.13+), tidak perlu Club GreenSock lagi.
- Untuk counter angka di Impact Stats, tidak perlu plugin terpisah — cukup `gsap.to({value: 0}, {value: targetNumber, duration: 1.8, onUpdate: () => setDisplayValue(Math.round(this.targets()[0].value))})` atau gunakan helper React custom dengan `useRef` + `gsap.to`.

### 7.5 Hal yang Wajib Dihindari di Seluruh Animasi

- Jangan animasikan `width`/`height` langsung untuk performa (gunakan `scale` + `transform-origin` sebagai gantinya).
- Jangan animasikan lebih dari 1 properti `box-shadow` kompleks secara bersamaan di banyak elemen sekaligus (mahal secara performa, terutama di mobile).
- Selalu set `will-change: transform` pada elemen yang akan di-parallax (lewat CSS), tapi hapus property itu setelah animasi selesai jika elemen sudah statis, supaya tidak membebani GPU terus-menerus tanpa alasan.
- Test seluruh animasi di throttle "Slow 3G + 4x CPU slowdown" via Chrome DevTools sebelum dianggap selesai — banyak animasi yang terasa smooth di laptop developer tapi patah-patah di HP juri.

---

## 8. Komponen UI — Spesifikasi Detail

### 8.1 Button (CTA Utama)

```
Padding: 16px 32px (py-4 px-8)
Border-radius: 9999px (full rounded/pill shape) — selaras dengan kesan "organik, tidak kaku" dibanding rectangular sharp corner
Background: --amber-500
Text: Plus Jakarta Sans, weight 600, --text-base, warna --forest-950 (gelap di atas kuning, bukan putih — kontras lebih baik)
Hover state: background transisi ke --amber-400, scale 1.02, duration 0.25s ease "power2.out"
Active/pressed state: scale 0.98
Focus state (aksesibilitas): outline 2px solid --amber-300, offset 2px — JANGAN hilangkan focus state demi estetika, ini wajib untuk keyboard navigation
```

### 8.2 Button (Secondary/Outline)

```
Padding: 16px 32px
Border-radius: 9999px
Background: transparent
Border: 1.5px solid currentColor (mengikuti warna teks section aktif)
Text: sama seperti primary tapi warna mengikuti tema section
Hover: background rgba(255,255,255,0.08) (di atas background gelap) atau rgba(0,0,0,0.05) (di atas background terang)
```

### 8.3 Card (untuk grid Coexistence/Impact)

```
Padding: 32px (p-8)
Border-radius: 24px (rounded-3xl) — radius besar, selaras dengan bentuk organik keseluruhan desain, hindari radius kecil (8px) yang terasa "kotak SaaS standar"
Background: rgba sesuai tema section, dengan sedikit transparansi + subtle border (1px solid rgba(255,255,255,0.1) di atas gelap, atau rgba(0,0,0,0.06) di atas terang) — efek "glass card" ringan, BUKAN frosted blur penuh (blur penuh disimpan khusus untuk navbar agar tetap jadi elemen yang spesial/distinctive)
Shadow: halus, jangan terlalu tegas — box-shadow: 0 8px 24px rgba(0,0,0,0.12)
```

### 8.4 CRU Patrol Simulator — Detail UI

```
Container peta: aspect-ratio 4:3 (desktop) atau 1:1 (mobile), border-radius 24px, background --forest-700 dengan ilustrasi SVG hutan custom di dalamnya.

Titik skenario (hotspot): 
- Ukuran: 48px x 48px (desktop), 56px x 56px (mobile, lebih besar untuk kemudahan tap)
- Bentuk: lingkaran dengan border 2px --amber-500, background rgba(217, 164, 65, 0.2), berisi custom icon kecil di tengah (mis. icon jejak kaki)
- Efek "breathing" idle (saat belum diklik): scale berosilasi halus 1 ↔ 1.05, duration 2s, repeat infinite, ease "sine.inOut" — supaya user sadar elemen ini interaktif tanpa perlu label "klik disini"

Panel skenario (muncul setelah klik):
- Desktop: muncul di sisi kanan peta, lebar 40% container, fixed height mengikuti konten
- Mobile: muncul sebagai bottom sheet, slide up dari bawah, max-height 70vh, dengan handle bar kecil di atas (garis horizontal 40px x 4px, rounded, warna neutral-400) sebagai indikator "bisa di-swipe/close" — pola UI familiar dari iOS bottom sheet
- Isi panel: judul skenario (--text-xl, Fraunces), deskripsi singkat (--text-base, Plus Jakarta Sans, max 3-4 baris), 2 pilihan tindakan sebagai button list vertikal (gunakan style Secondary/Outline button dari 8.2, full width)
- Setelah memilih salah satu opsi: konten panel transisi (fade out lalu fade in konten konsekuensi, duration masing-masing 0.3s) menampilkan teks konsekuensi singkat + tombol "Tutup" atau "Lanjut ke skenario lain"
```

---

## 9. Responsive — Detail Per Breakpoint

| Elemen | Mobile (<640px) | Tablet (640-1024px) | Desktop (>1024px) |
|---|---|---|---|
| Navbar height | 64px | 68px | 72px |
| Hero headline size | --text-5xl | --text-6xl (sedikit dikecilkan dari max) | --text-6xl penuh |
| Parallax layer count (Hero) | 2 layer (kurangi 1 layer untuk performa & karena efek kurang terasa) | 3 layer | 3 layer penuh |
| Section padding vertikal | 96px (py-24) | 128px (py-32) | 160px (py-40) |
| Grid columns (Coexistence/Impact) | 1 kolom | 2 kolom | 3 kolom |
| CRU Simulator layout | Stacked (peta atas, panel bottom-sheet) | Stacked (sama seperti mobile, beri sedikit lebih banyak padding) | Side-by-side (peta kiri, panel kanan) |
| Custom cursor effects (jika ada nice-to-have hover effect) | Tidak ada (touch device tidak punya hover) | Tidak ada | Boleh ditambahkan sebagai enhancement opsional |

---

## 10. Checklist Sebelum Dianggap "Selesai"

Sebelum komponen/section dianggap final, developer wajib mengecek seluruh poin berikut:

- [ ] Tidak ada satupun emoji di kode maupun output visual.
- [ ] Tidak ada icon dari Heroicons/Font Awesome/Material Icons default style di seluruh halaman.
- [ ] Semua custom icon kunci (gajah, kanopi, sungai, dst) sudah dibuat sebagai SVG line-art sendiri, bukan ditarik dari library.
- [ ] Warna navbar berubah sesuai section secara halus (sudah ditest scroll dari atas ke bawah penuh tanpa ada warna yang "salah"/tidak sinkron).
- [ ] Backdrop blur navbar terlihat jelas (test di browser yang support `backdrop-filter`; siapkan fallback solid color dengan opacity untuk browser yang tidak support, cek dengan `@supports (backdrop-filter: blur(1px))`).
- [ ] Semua animasi GSAP sudah dites di mobile dengan CPU throttling, tidak ada yang patah-patah.
- [ ] Rasio kontras teks sudah dicek minimal 4.5:1 di setiap section.
- [ ] Font sudah self-hosted via `next/font`, tidak ada request ke Google Fonts CDN saat runtime.
- [ ] Focus state keyboard navigation berfungsi di semua elemen interaktif (button, hotspot CRU Simulator).
- [ ] Tidak ada section yang terasa "kosong"/template karena lupa mengisi dengan ilustrasi/tekstur grain sesuai filosofi Bab 1.

---

*Dokumen ini melengkapi README.md (PRD). Baca keduanya sebelum mulai development. Jika ada keputusan visual yang tidak tercakup di sini dan terasa ambigu, kembalikan ke prinsip Bab 0: apakah pilihan ini memperkuat narasi transformasi, atau cuma dekorasi tambahan?*