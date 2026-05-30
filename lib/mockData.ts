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
    slug: "akses-modal-bootstrapping",
    judul: "Strategi Pembiayaan untuk Startup Bootstrapping",
    konten: "Pelajari cara mengelola arus kas, membangun revenue stream, dan menarik modal awal dari investor yang tepat.",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-06-01",
    created_at: "2026-05-20",
    sumber: "https://example.com/bootstrapping",
  },
  {
    id: 2,
    slug: "kredit-umkm-digital",
    judul: "Kredit UMKM Digital: Solusi Akses Modal Cepat",
    konten: "Solusi pembiayaan digital kini semakin mudah diakses oleh UMKM yang ingin mempercepat ekspansi usaha.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-05-15",
    created_at: "2026-05-10",
    sumber: "https://example.com/kredit-umkm",
  },
  {
    id: 3,
    slug: "vc-untuk-growth",
    judul: "Venture Capital untuk Pertumbuhan Bisnis Skala Menengah",
    konten: "Bahas jawaban umum VC, persyaratan, dan tips memperkuat pitch deck untuk menarik perhatian investor.",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    tanggal: "2026-05-10",
    created_at: "2026-05-08",
    sumber: "https://example.com/vc-growth",
  },
];

export const homeEvents: BeritaItem[] = [
  {
    id: 11,
    slug: "indonesia-startup-day-2026",
    judul: "Indonesia Startup Day 2026: Akses Modal & Pitch Deck",
    konten: "<p>Acara tahunan untuk startup dan entrepreneur yang ingin mengembangkan usaha, membangun pitch deck yang kuat, serta bertemu investor lokal dan regional.</p><p>Termasuk sesi mentoring singkat, demo day, dan panel diskusi dengan accelerator serta venture capital.</p>",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    tanggal_mulai: "2026-06-10",
    tanggal_selesai: "2026-06-11",
    lokasi: "Jakarta Convention Center",
    created_at: "2026-05-28",
  },
  {
    id: 12,
    slug: "fintech-umkm-summit-2026",
    judul: "Fintech UMKM Summit 2026: Pendanaan Digital & Skala Usaha",
    konten: "<p>Sebuah konferensi hybrid yang membahas solusi pembiayaan digital untuk UMKM, strategi akuisisi pelanggan, dan praktik terbaik dalam risk management.</p><p>Hadiri sesi panel, studi kasus, dan networking dengan penyelenggara fintech serta pemimpin bank digital.</p>",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    tanggal_mulai: "2026-06-25",
    lokasi: "Hybrid - Online & Bali Creative Hub",
    created_at: "2026-05-25",
  },
  {
    id: 13,
    slug: "pelatihan-pitch-deck-umkm-2026",
    judul: "Pelatihan Pitch Deck & Akses Modal untuk UMKM",
    konten: "<p>Pelatihan praktis bagi pemilik UMKM untuk menyusun pitch deck, memahami metrik bisnis yang dicari investor, dan memetakan jalur pembiayaan yang tepat.</p><p>Peserta juga mendapatkan review langsung dari mentor bisnis berpengalaman.</p>",
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
