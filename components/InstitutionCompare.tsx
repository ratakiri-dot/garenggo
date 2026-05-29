"use client";

import { useMemo, useState } from "react";
import { InstitutionData } from "@/lib/financeData";

const stages = ["Semua", "Ide", "Awal", "Berkembang"] as const;

interface InstitutionCompareProps {
  institutions: InstitutionData[];
}

export function InstitutionCompare({ institutions }: InstitutionCompareProps) {
  const [activeStage, setActiveStage] = useState<typeof stages[number]>("Semua");
  const [selected, setSelected] = useState<string[]>([]);

  const filteredInstitutions = useMemo(
    () =>
      institutions.filter((institution) =>
        activeStage === "Semua"
          ? true
          : institution.stages?.includes(activeStage),
      ),
    [activeStage, institutions],
  );

  const selectedItems = useMemo(
    () => institutions.filter((institution) => selected.includes(institution.name)),
    [institutions, selected],
  );

  const toggleSelection = (name: string) => {
    setSelected((current) => {
      if (current.includes(name)) {
        return current.filter((item) => item !== name);
      }
      if (current.length >= 3) {
        return current;
      }
      return [...current, name];
    });
  };

  return (
    <section className="mb-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Bandingkan Lembaga</h2>
        <p className="text-gray-600">
          Filter berdasarkan tahap usaha dan pilih hingga 3 lembaga VC atau pembiayaan untuk dibandingkan secara side-by-side.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {stages.map((stage) => (
          <button
            key={stage}
            type="button"
            onClick={() => setActiveStage(stage)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeStage === stage
                ? "bg-primary-600 text-white border-primary-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {stage}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-10">
        {filteredInstitutions.map((institution) => (
          <div key={institution.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{institution.name}</h3>
                <p className="text-sm uppercase tracking-[0.24em] text-primary-600 font-semibold mt-1">{institution.type}</p>
              </div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={selected.includes(institution.name)}
                  onChange={() => toggleSelection(institution.name)}
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                Pilih
              </label>
            </div>

            <p className="text-gray-600 text-sm leading-6 mb-4">{institution.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {institution.stages?.map((stage) => (
                <span key={stage} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                  {stage}
                </span>
              ))}
            </div>
            <div className="grid gap-2 text-sm text-gray-600 mb-4">
              {institution.requirements ? (
                <div>
                  <span className="font-semibold text-gray-900">Syarat:</span> {institution.requirements}
                </div>
              ) : null}
              <div>
                <span className="font-semibold text-gray-900">Rentang:</span>{' '}
                {institution.minAmount || '-'} - {institution.maxAmount || '-'}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {institution.applyLink ? (
                <a
                  href={institution.applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary-700"
                >
                  Ajukan / Hubungi
                </a>
              ) : institution.website ? (
                <a
                  href={institution.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary-700"
                >
                  Kunjungi Situs
                </a>
              ) : null}
              {institution.contact?.email ? (
                <a href={`mailto:${institution.contact.email}`} className="text-sm text-primary-600 hover:underline">
                  {institution.contact.email}
                </a>
              ) : null}
              {institution.contact?.phone ? (
                <a href={`tel:${institution.contact.phone}`} className="text-sm text-primary-600 hover:underline">
                  {institution.contact.phone}
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {selectedItems.length > 0 ? (
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Perbandingan Side-by-Side</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 text-left text-sm text-gray-700">
              <thead>
                <tr>
                  <th className="border-b border-gray-200 p-3"></th>
                  {selectedItems.map((item) => (
                    <th key={item.name} className="border-b border-gray-200 p-3 text-left text-sm font-semibold text-gray-900">
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Tipe', value: (item: InstitutionData) => item.type },
                  { label: 'Tahap', value: (item: InstitutionData) => item.stages?.join(', ') || '-' },
                  { label: 'Syarat', value: (item: InstitutionData) => item.requirements || '-' },
                  { label: 'Nominal', value: (item: InstitutionData) => `${item.minAmount || '-'} - ${item.maxAmount || '-'}` },
                  { label: 'Kontak', value: (item: InstitutionData) => item.contact?.email || item.contact?.phone || '-' },
                  { label: 'Tautan', value: (item: InstitutionData) => item.applyLink || item.website || '-' },
                ].map((row) => (
                  <tr key={row.label}>
                    <th className="border-b border-gray-200 px-3 py-4 font-medium text-gray-900 align-top">{row.label}</th>
                    {selectedItems.map((item) => (
                      <td key={item.name} className="border-b border-gray-200 px-3 py-4 align-top">
                        {row.label === 'Tautan' && (item.applyLink || item.website) ? (
                          <a
                            href={item.applyLink || item.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary-600 hover:underline"
                          >
                            {item.applyLink ? 'Ajukan / Hubungi' : 'Kunjungi Situs'}
                          </a>
                        ) : (
                          row.value(item)
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">Pilih sampai 3 lembaga untuk perbandingan. Klik kembali pada checkbox untuk menghapus pilihan.</p>
        </div>
      ) : (
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-gray-600">
          Pilih minimal 1 lembaga untuk melihat perbandingan detail.
        </div>
      )}
    </section>
  );
}
