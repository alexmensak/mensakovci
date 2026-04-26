import {Link} from "react-router-dom";
import GooglePhotosIcon from "@/components/GooglePhotosIcon";

export default function PhotosUpload() {
  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h2 className="font-label text-[11px] uppercase tracking-[0.1rem] text-primary">
          Spoločné spomienky
        </h2>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-surface-container-low p-12 text-left">
        <div className="relative z-10 max-w-xl">
          <p className="mb-8 font-newsreader text-2xl leading-tight">
            Máte fotky zo spoločných zážitkov s nami? Nahrajte ich pred svadbou do nášho
            albumu — počas svadobnej zábavy ich premietneme na stenu.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
                camera
              </span>
              <p className="font-body text-xs uppercase leading-relaxed tracking-wider text-secondary">
                PRED SVADBOU: Fotky na projekciu, ktoré nám pripomenú spoločné chvíle.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
                auto_stories
              </span>
              <p className="font-body text-xs uppercase leading-relaxed tracking-wider text-secondary">
                PO SVADBE: Miesto pre vaše momentky, ktoré náš fotograf nestihol zachytiť.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link
                to="https://photos.app.goo.gl/mCPLaUgPwbA3PTdp8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-lg bg-on-background px-8 py-4 font-label text-[10px] uppercase tracking-[0.1rem] text-background transition-colors hover:bg-primary"
            >
              <span>Otvoriť album</span>
              <GooglePhotosIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 aspect-square w-[40%] max-w-[300px] translate-x-[15%] translate-y-[15%] opacity-5">
          <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
            <circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
