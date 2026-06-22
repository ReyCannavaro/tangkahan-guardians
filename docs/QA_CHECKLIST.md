# QA Checklist

Gunakan checklist ini sebelum deploy final dan sebelum submit lomba.

## Desktop

- Navbar berubah warna dengan benar di setiap section.
- Klik navbar berpindah halus ke section tujuan.
- Horizontal scroll CRU terasa jelas dan tidak menjebak pengguna terlalu lama.
- CRU Patrol Simulator dapat dipakai dengan mouse dan keyboard.
- Counter Impact hanya berjalan sekali dan tidak mengulang berlebihan.
- CTA penutup terlihat jelas tanpa menutupi informasi penting.

## Mobile

- Navbar mobile dapat dibuka dan ditutup dengan jelas.
- Menu mobile tidak menutupi konten secara permanen.
- Semua teks hero dan section heading tidak terpotong.
- CRU cards tersusun vertikal dan tetap nyaman dibaca.
- Hotspot simulator cukup besar untuk disentuh.
- Tidak ada overflow horizontal yang tidak disengaja.

## Accessibility

- Skip link muncul saat fokus keyboard.
- Semua tombol interaktif memiliki focus state.
- Kontras teks body tetap terbaca di section gelap dan terang.
- Situs tetap dapat dibaca saat `prefers-reduced-motion: reduce` aktif.
- Tidak ada informasi penting yang hanya disampaikan lewat warna.

## Performance

- Jalankan `npm run build`.
- Uji halaman dari folder `out/` atau deploy preview.
- Jalankan Lighthouse jika memungkinkan.
- Target minimal: Performance di atas 85 dan Accessibility di atas 90.
