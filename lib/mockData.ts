export type BeritaItem = {
  id: string | number;
  slug: string;
  judul: string;
  konten: string;
  thumbnail?: string;
  tanggal?: string;
  tanggal_mulai?: string;
  tanggal_selesai?: string;
  lokasi?: string;
  sumber?: string;
  created_at?: string;
};

export const homePembiayaans: BeritaItem[] = [
  {
    id: 1,
    slug: "vc-funding-2026-meningkat",
    judul: "VC Funding Indonesia Capai Rekor Tertinggi di Semester I 2026",
    konten: "Berdasarkan laporan terbaru, startup Indonesia telah menerima pendanaan Venture Capital senilai USD 2,8 miliar pada semester pertama 2026, meningkat 45% dibanding tahun lalu. Sektor fintech, e-commerce, dan logistik menjadi fokus utama investor.",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-06-02",
    created_at: "2026-06-02",
    sumber: "https://www.techinasia.com/funding-tracker",
  },
  {
    id: 2,
    slug: "program-kur-umkm-2026",
    judul: "Program KUR 2026: Bunga 0% untuk UMKM Lokal hingga Rp 500 Juta",
    konten: "OJK dan Bank Indonesia meluncurkan program KUR Plus dengan bunga 0% khusus untuk UMKM yang telah tersertifikasi dan memiliki track record bisnis yang baik. Program ini tersedia hingga akhir tahun 2026 dengan proses approval yang dipercepat hingga 7 hari kerja.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-06-01",
    created_at: "2026-06-01",
    sumber: "https://www.ojk.go.id/id/berita-dan-kegiatan/siaran-pers",
  },
  {
    id: 3,
    slug: "startup-decacorn-indonesia-2026",
    judul: "Indonesia Targetkan 20 Startup Decacorn pada 2030 - CEO Forum VC",
    konten: "Dalam acara Indonesia Tech Summit 2026, para pemimpin venture capital dan startup ecosystem memaparkan roadmap untuk menciptakan ekosistem bisnis digital yang lebih kuat. Target utamanya adalah membentuk 20 perusahaan bernilai USD 10 miliar dengan fokus pada inovasi teknologi dan ekspor digital.",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-05-28",
    created_at: "2026-05-28",
    sumber: "https://www.depkop.go.id/artikel/berita-terkini",
  },
];

export const homeEvents: BeritaItem[] = [
  {
    id: 11,
    slug: "indonesia-startup-day-2026",
    judul: "Indonesia Startup Day 2026: Networking dengan 150+ Investor",
    konten: "<p>Acara tahunan terbesar untuk startup dan entrepreneur Indonesia, dihadiri oleh lebih dari 500 startup, 150+ investor, dan accelerator terkemuka. Agenda mencakup pitch competition, sesi workshop dengan founder unicorn, dan networking session eksklusif.</p><p>📍 Jakarta Convention Center | 📅 10-11 Juni 2026</p><p><a href='https://indoniastartupday.com' target='_blank'>→ Daftar di sini</a></p>",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    tanggal_mulai: "2026-06-10",
    tanggal_selesai: "2026-06-11",
    lokasi: "Jakarta Convention Center",
    created_at: "2026-05-28",
  },
  {
    id: 12,
    slug: "fintech-umkm-summit-2026",
    judul: "Fintech & UMKM Summit 2026: Digital Transformation for Business",
    konten: "<p>Konferensi tahunan yang mempertemukan 200+ fintech company, bank digital, dan UMKM untuk membahas solusi pembiayaan, payment gateway, dan strategi digitalisasi. Tema utama: 'Digital Economy for All'.</p><p>🎤 Pembicara: CEO GCash, Founder OVO, dan Direktur OJK</p><p>📍 Jakarta & Online Streaming | 📅 20-22 Juni 2026</p><p><a href='https://www.fintechsummit.id' target='_blank'>→ Daftar sekarang</a></p>",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    tanggal_mulai: "2026-06-20",
    lokasi: "Jakarta Convention Center & Online",
    created_at: "2026-05-25",
  },
  {
    id: 13,
    slug: "workshop-pitch-deck-juli-2026",
    judul: "Workshop Pitch Deck & VC Fundraising (Intensif 2 Hari)",
    konten: "<p>Pelatihan intensif dari mentor berpengalaman yang pernah raise funding >$100 juta. Peserta akan mempelajari cara membuat pitch deck yang menarik, strategi raise funding, dan tips deal closing dengan VC.</p><p>✓ Mentor: Founder Bukalapak, Investor Sequoia Capital Indonesia</p><p>✓ Max 30 peserta, sudah termasuk review personal pitch deck</p><p>📍 Bandung Digital Hub | 📅 8-9 Juli 2026</p><p><a href='https://www.generasi-muda.co/workshop-pitching' target='_blank'>→ Daftar workshop</a></p>",
    thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
    tanggal_mulai: "2026-07-08",
    lokasi: "Bandung Digital Hub",
    created_at: "2026-05-20",
  },
];

export const eventItems: BeritaItem[] = homeEvents;

export const pembiayaanItems: BeritaItem[] = homePembiayaans;

export function getEventBySlug(slug: string) {
  return eventItems.find((item) => item.slug === slug);
}

export function getPembiayaanBySlug(slug: string) {
  return pembiayaanItems.find((item) => item.slug === slug);
}
