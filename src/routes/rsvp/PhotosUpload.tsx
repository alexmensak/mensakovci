export default function PhotosUpload() {
  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h2 className="text-primary font-label text-[11px] tracking-[0.1rem] uppercase">
          Spoločné spomienky
        </h2>
      </div>
      <div className="bg-surface-container-low relative overflow-hidden rounded-lg p-12 text-left">
        <div className="relative z-10 max-w-xl">
          <p className="mb-8 font-newsreader text-2xl leading-tight">
            Staňte sa kurátorom nášho dňa. Máte spoločnú fotku s Alexandrom alebo Veronikou?
            Nahrajte ju do nášho archívu.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">
                camera
              </span>
              <p className="text-secondary font-body text-xs leading-relaxed tracking-wider uppercase">
                PRED SVADBOU: Fotky na projekciu, ktoré nám pripomenú spoločné chvíle.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">
                auto_stories
              </span>
              <p className="text-secondary font-body text-xs leading-relaxed tracking-wider uppercase">
                PO SVADBE: Miesto pre vaše momentky, ktoré náš fotograf nestihol zachytiť.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <label
              htmlFor="photos"
              className="bg-on-background text-background hover:bg-primary inline-flex cursor-pointer items-center gap-4 rounded-lg px-8 py-4 font-label text-[10px] tracking-[0.1rem] uppercase transition-colors"
            >
              <span>Otvoriť archív</span>
              <input id="photos" type="file" multiple accept="image/*" className="hidden" />
            </label>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-12 -bottom-12 opacity-5">
          <svg height="300" viewBox="0 0 100 100" width="300" aria-hidden="true">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
            <circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
