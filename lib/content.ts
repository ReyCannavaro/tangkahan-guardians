export const cruCards = [
  {
    title: "Patroli Gajah Terpadu",
    eyebrow: "01 / CRU Patrol",
    description:
      "Mahout dan gajah Sumatra bergerak menyusuri batas hutan, membaca jejak, dan menjaga koridor satwa tetap aman dari konflik.",
    icon: "footprint",
  },
  {
    title: "Edukasi Konservasi",
    eyebrow: "02 / Community",
    description:
      "CRU menjadi ruang belajar hidup bagi warga dan pengunjung tentang perilaku gajah, restorasi hutan, dan etika berada di Leuser.",
    icon: "canopy",
  },
  {
    title: "Patroli Anti-Pembalakan Liar",
    eyebrow: "03 / Forest Guard",
    description:
      "Jalur lama pembalakan kini diawasi bersama. Setiap patroli mempersempit ruang perusakan dan memperkuat rasa kepemilikan warga.",
    icon: "patrol",
  },
] as const;

export const cruScenarios = [
  {
    id: "logging-trace",
    title: "Jejak Baru di Batas Hutan",
    x: "22%",
    y: "36%",
    description:
      "Tim menemukan bekas ban dan potongan ranting segar di jalur lama pembalakan. Suara mesin belum terdengar, tapi tanda-tandanya terlalu jelas untuk diabaikan.",
    choices: [
      {
        text: "Pantau diam-diam dan laporkan koordinat",
        consequence:
          "Tim mengurangi risiko konfrontasi langsung sambil mengumpulkan bukti. Dampaknya lebih lambat, tetapi laporan menjadi lebih kuat untuk tindakan bersama.",
      },
      {
        text: "Masuk lebih jauh untuk mencari pelaku",
        consequence:
          "Respons terasa cepat, tetapi risiko keselamatan mahout, gajah, dan ranger meningkat. Di lapangan, keberanian harus selalu ditimbang dengan prosedur.",
      },
    ],
  },
  {
    id: "elephant-farm",
    title: "Gajah Mendekati Kebun Warga",
    x: "68%",
    y: "28%",
    description:
      "Seekor gajah liar terlihat di dekat ladang. Warga cemas, sementara jalur kembali ke hutan melewati area yang ramai aktivitas manusia.",
    choices: [
      {
        text: "Buat jalur tenang kembali ke hutan",
        consequence:
          "Tim menurunkan ketegangan dan memberi ruang bagi gajah untuk bergerak. Cara ini membutuhkan koordinasi warga agar tidak ada kerumunan yang memicu panik.",
      },
      {
        text: "Minta warga mengusir secepat mungkin",
        consequence:
          "Kebun mungkin terasa aman sesaat, tetapi tekanan berlebihan bisa membuat gajah makin defensif. Konflik satwa jarang selesai dengan reaksi tergesa-gesa.",
      },
    ],
  },
  {
    id: "tourism-pressure",
    title: "Jalur Wisata Mulai Padat",
    x: "46%",
    y: "62%",
    description:
      "Hari libur membawa lebih banyak tamu ke sungai dan jalur hutan. Pendapatan warga naik, tetapi gajah dan mahout membutuhkan jeda yang jelas.",
    choices: [
      {
        text: "Batasi ritme kunjungan dan beri jeda",
        consequence:
          "Pendapatan harian mungkin tidak maksimal, tetapi daya dukung kawasan lebih terjaga. Wisata berkelanjutan hidup dari batas yang dihormati.",
      },
      {
        text: "Terima semua kunjungan yang datang",
        consequence:
          "Manfaat ekonomi terasa cepat, tetapi tekanan pada satwa, jalur, dan warga bisa menumpuk. Overtourism sering datang pelan, lalu sulit dibalik.",
      },
    ],
  },
] as const;

export const coexistencePillars = [
  {
    label: "Gajah",
    copy: "Kekuatan dan memori hutan yang membantu membuka jalur patroli tanpa memutus hubungan liar ekosistemnya.",
  },
  {
    label: "Mahout",
    copy: "Penjaga harian yang membaca bahasa tubuh gajah, arah angin, dan tanda kecil yang sering luput dari mata pengunjung.",
  },
  {
    label: "Hutan",
    copy: "Rumah bersama yang memberi air, pangan, perlindungan, dan alasan bagi masyarakat untuk terus menjaga.",
  },
] as const;

export const impactStats = [
  {
    label: "Pengunjung per tahun",
    value: 41740,
    suffix: "",
    display: "41.740",
    source: "Estimasi 2023: 31.200 lokal dan 10.540 asing. Perlu verifikasi final sebelum publikasi.",
  },
  {
    label: "Nilai ekonomi wisata",
    value: 72,
    suffix: " M",
    display: "Rp 72 M",
    source: "Estimasi Travel Cost Method, riset 2022. Angka disajikan sebagai estimasi, bukan klaim absolut.",
  },
  {
    label: "Titik balik komunitas",
    value: 2001,
    suffix: "",
    display: "2001",
    source: "April 2001: LPT dibentuk oleh masyarakat Namo Sialang dan Sei Serdang.",
  },
] as const;

export const learningPoints = [
  {
    title: "No-riding adalah evolusi kebijakan",
    copy: "Wisata menunggang gajah untuk turis telah dihentikan. Mahout masih dapat menunggang untuk kebutuhan patroli dan manajemen satwa.",
  },
  {
    title: "Kesejahteraan gajah tetap harus dipantau",
    copy: "Konservasi yang kredibel tidak berhenti pada narasi sukses. Kondisi kerja mahout dan kesejahteraan gajah harus terus dievaluasi.",
  },
  {
    title: "Daya dukung wisata punya batas",
    copy: "Kunjungan yang meningkat membawa manfaat ekonomi, tetapi juga risiko overtourism jika ritme, jalur, dan edukasi pengunjung tidak dijaga.",
  },
] as const;

export const visitorGuidelines = [
  "Pilih pemandu lokal dan ikuti jalur yang disepakati.",
  "Jaga jarak dari gajah, jangan memaksa kontak, dan ikuti arahan mahout.",
  "Bawa pulang sampah, kurangi plastik sekali pakai, dan hormati ruang warga.",
] as const;

export const contentSources = [
  "PRD internal project: riset awal Tangkahan, CRU, dan dampak ekonomi.",
  "Gunung Leuser National Park public references: konteks ekowisata Tangkahan dan ancaman illegal logging di kawasan Leuser.",
  "Catatan final: angka pengunjung dan estimasi ekonomi harus diverifikasi ulang ke sumber primer sebelum publikasi lomba.",
] as const;
