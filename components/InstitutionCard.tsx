import { InstitutionData } from "@/lib/financeData";

interface InstitutionCardProps {
  item: InstitutionData;
}

function InstitutionLogo({ name }: { name: string }) {
  switch (name) {
    case "East Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#1f2937" />
          <path d="M22 38 L32 24 L42 38 H34 V46 H30 V38 H22 Z" fill="#f59e0b" />
        </svg>
      );
    case "Alpha JWC Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#0f172a" />
          <path d="M18 44 L32 20 L46 44" stroke="#38bdf8" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M23 38 H41" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "AC Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="10" y="10" width="44" height="44" rx="14" fill="#0f172a" />
          <path d="M18 40 C26 16 38 16 46 40" stroke="#34d399" strokeWidth="6" fill="none" strokeLinecap="round" />
          <circle cx="22" cy="31" r="5" fill="#38bdf8" />
          <circle cx="42" cy="31" r="5" fill="#fbbf24" />
        </svg>
      );
    case "Intudo Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#111827" />
          <path d="M22 44 L32 20 L42 44" stroke="#a855f7" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M22 34 H42" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "MDI Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#111827" />
          <path d="M20 44 V24 H28 V44 H20 Z M32 44 V30 H36 V44 H32 Z M40 44 V18 H48 V44 H40 Z" fill="#f97316" />
        </svg>
      );
    case "Kejora Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#0f172a" />
          <path d="M32 14 L36 28 H50 L38 36 L42 50 L32 40 L22 50 L26 36 L14 28 H28 L32 14 Z" fill="#f59e0b" />
        </svg>
      );
    case "Convergence Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#0f172a" />
          <circle cx="24" cy="28" r="10" fill="#3b82f6" />
          <circle cx="40" cy="36" r="10" fill="#34d399" />
          <circle cx="30" cy="36" r="10" fill="#f97316" fillOpacity="0.85" />
        </svg>
      );
    case "Venturra Capital":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#111827" />
          <path d="M18 44 L28 20 L36 32 L46 18 L46 44 H18 Z" fill="#38bdf8" />
        </svg>
      );
    case "Openspace Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#111827" />
          <path d="M20 20 H44 V44 H20 Z" fill="none" stroke="#8b5cf6" strokeWidth="6" />
          <path d="M20 32 H44" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "Agaeti Ventures":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#0f172a" />
          <path d="M20 44 C28 24 36 24 44 44" stroke="#34d399" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M32 20 C34 18 38 18 40 22" stroke="#f59e0b" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "Bank Rakyat Indonesia (BRI)":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#1e3a8a" />
          <path d="M18 42 H46 V28 H34 V22 H18 V42 Z" fill="#bfdbfe" />
          <path d="M34 28 H46" stroke="#1e40af" strokeWidth="4" />
        </svg>
      );
    case "Bank Negara Indonesia (BNI)":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#7c2d12" />
          <path d="M20 44 L44 20" stroke="#fcd34d" strokeWidth="10" strokeLinecap="round" />
          <path d="M24 20 H44 V40" stroke="#fcd34d" strokeWidth="8" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "Bank Mandiri":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#0f172a" />
          <path d="M18 44 L26 26 L34 38 L42 22 L46 44" stroke="#22c55e" strokeWidth="8" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "Permodalan Nasional Madani (PNM)":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#111827" />
          <path d="M32 16 L44 32 L32 48 L20 32 Z" fill="#f97316" />
          <circle cx="32" cy="32" r="6" fill="#fbbf24" />
        </svg>
      );
    case "Lembaga Pengelola Dana Bergulir (LPDB-KUMKM)":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#0f172a" />
          <circle cx="32" cy="32" r="16" fill="none" stroke="#38bdf8" strokeWidth="8" />
          <path d="M32 16 V24 M32 40 V48 M16 32 H24 M40 32 H48" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "Pegadaian":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#111827" />
          <path d="M20 24 L44 24 L34 44 L24 44 Z" fill="#f59e0b" />
          <path d="M24 24 V18 H28 V24" fill="#fff" />
        </svg>
      );
    case "KoinWorks":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#0f172a" />
          <circle cx="32" cy="32" r="18" fill="#fbbf24" />
          <circle cx="32" cy="32" r="10" fill="#1f2937" />
          <path d="M32 18 V26" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" />
          <path d="M32 38 V46" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case "Investree":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#111827" />
          <path d="M24 42 C28 30 36 30 40 42" stroke="#34d399" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M32 24 V42" stroke="#34d399" strokeWidth="8" strokeLinecap="round" />
          <path d="M28 28 L36 28" stroke="#34d399" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
    case "Amartha":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#111827" />
          <path d="M32 18 C26 18 20 24 20 30 C20 36 32 46 32 46 C32 46 44 36 44 30 C44 24 38 18 32 18 Z" fill="#f97316" />
          <path d="M26 30 C26 24 30 20 32 20 C34 20 38 24 38 30" stroke="#fff" strokeWidth="3" fill="none" />
        </svg>
      );
    case "Kredivo":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#111827" />
          <rect x="18" y="24" width="28" height="20" rx="4" fill="#38bdf8" />
          <path d="M22 30 H34" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <path d="M22 36 H32" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          <path d="M42 32 L46 28 L54 36" stroke="#fbbf24" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "BTPN":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#0f172a" />
          <path d="M20 34 A12 12 0 0 1 44 34" stroke="#c084fc" strokeWidth="10" fill="none" />
          <circle cx="32" cy="22" r="6" fill="#c084fc" />
        </svg>
      );
    case "Bank Syariah Indonesia (BSI)":
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#0f172a" />
          <path d="M20 42 C24 30 28 24 32 24 C36 24 40 30 44 42" stroke="#22c55e" strokeWidth="8" fill="none" strokeLinecap="round" />
          <circle cx="32" cy="32" r="4" fill="#22c55e" />
        </svg>
      );
    default:
      return (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white font-bold text-lg">
          {name
            .split(" ")
            .filter((part) => part.length > 0)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase()}
        </div>
      );
  }
}

export function InstitutionCard({ item }: InstitutionCardProps) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-950/95 shadow-[0_32px_90px_rgba(15,23,42,0.24)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_36px_100px_rgba(15,23,42,0.3)]">
      <div className="relative overflow-hidden px-6 pt-6 pb-5">
        <div className="absolute -right-10 -top-8 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="flex items-start justify-between gap-4 relative">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-slate-900 text-white shadow-lg shadow-slate-900/20">
              <InstitutionLogo name={item.name} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400 font-semibold mt-1">{item.type}</p>
            </div>
          </div>
          <span className="rounded-full border border-slate-800/90 bg-slate-900/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-sky-300">
            VC Ready
          </span>
        </div>
      </div>

      <div className="space-y-5 border-t border-slate-800/70 px-6 pb-6 pt-4">
        <p className="text-slate-300 text-sm leading-7">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.stages?.map((stage) => (
            <span key={stage} className="rounded-full bg-slate-800/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
              {stage}
            </span>
          ))}
        </div>

        <div className="grid gap-3 text-sm text-slate-300">
          {item.requirements ? (
            <div className="rounded-3xl bg-slate-900/80 p-4 border border-slate-800/80">
              <p className="text-[0.78rem] uppercase tracking-[0.18em] text-slate-500">Syarat</p>
              <p className="mt-2 text-sm text-slate-200">{item.requirements}</p>
            </div>
          ) : null}
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-4 border border-slate-800/80">
              <p className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-500">Nominal</p>
              <p className="mt-2 text-sm font-semibold text-white">{item.minAmount || "-"} – {item.maxAmount || "-"}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-4 border border-slate-800/80">
              <p className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-500">Kota</p>
              <p className="mt-2 text-sm font-semibold text-white">{item.location}</p>
            </div>
          </div>
          {(item.contact?.email || item.contact?.phone) && (
            <div className="rounded-3xl bg-slate-900/80 p-4 border border-slate-800/80">
              <p className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-500">Kontak</p>
              <div className="mt-2 space-y-2 text-sm text-slate-300">
                {item.contact?.email ? <p>Email: {item.contact.email}</p> : null}
                {item.contact?.phone ? <p>Telepon: {item.contact.phone}</p> : null}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4">
          {(item.applyLink || item.website) && (
            <a
              href={item.applyLink || item.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              {item.applyLink ? "Daftar / Hubungi" : "Kunjungi Situs"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
