export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-neutral-900)] px-5 py-12 text-[var(--color-neutral-400)]"
      data-navbar-theme="dark"
      data-navbar-bg="rgba(26, 24, 20, 0.8)"
      data-navbar-color="var(--color-neutral-400)"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-display text-2xl text-[var(--color-earth-100)]">
            TANGKAHAN
          </p>
          <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed">
            Guardians of the Leuser. Karya landing page statis untuk SDGs
            Creative Web Competition BytesFest 2026.
          </p>
        </div>

        <div className="grid gap-4 font-sans text-sm leading-relaxed lg:grid-cols-2">
          <p>
            Data konten berasal dari ringkasan riset awal di PRD dan wajib
            diverifikasi ulang oleh tim sebelum publikasi atau presentasi final.
          </p>
          <p>
            Seluruh visual utama dibuat sebagai ilustrasi/SVG dalam project.
            Website ini tidak menggunakan database, LocalStorage, atau
            SessionStorage.
          </p>
        </div>
      </div>
    </footer>
  );
}
