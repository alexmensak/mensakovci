import { Link } from 'react-router-dom';

export default function Spomienky() {
  return (
    <section id="spomienky" className="section-px section-py bg-surface-container-low">
      <div className="section-shell grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="sticky-header-offset self-start md:sticky md:col-span-5">
          <span className="eyebrow mb-4 block">Spoločné spomienky</span>
          <h2 className="section-title mb-8">Fotky na stenu</h2>
          <p className="mb-6 font-body text-lg leading-relaxed text-on-surface-variant">
            Máte spoločnú fotku s Alexandrom alebo Veronikou? Nahrajte ju pred svadbou do nášho
            archívu — počas svadobnej zábavy ju premietneme na stenu a pripomenieme si spoločné
            chvíle.
          </p>
          <p className="font-body text-sm leading-relaxed text-secondary">
            Staré i nové, vážne i veselé. Čím viac, tým lepšie.
          </p>
        </div>
        <div className="relative md:col-span-7">
          <div className="relative overflow-hidden rounded-lg border border-outline-variant/20 bg-surface p-12">
            <div className="relative z-10 flex flex-col gap-10">
              <div className="flex items-start gap-5">
                <span
                  className="material-symbols-outlined text-3xl text-primary"
                  aria-hidden="true"
                >
                  camera
                </span>
                <div>
                  <p className="mb-2 font-label text-[11px] uppercase tracking-widest text-primary">
                    Pred svadbou
                  </p>
                  <p className="font-newsreader text-xl leading-snug md:text-2xl">
                    Fotky na projekciu, ktoré nám pripomenú spoločné chvíle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <span
                  className="material-symbols-outlined text-3xl text-primary"
                  aria-hidden="true"
                >
                  auto_stories
                </span>
                <div>
                  <p className="mb-2 font-label text-[11px] uppercase tracking-widest text-primary">
                    Po svadbe
                  </p>
                  <p className="font-newsreader text-xl leading-snug md:text-2xl">
                    Miesto pre vaše momentky, ktoré náš fotograf nestihol zachytiť.
                  </p>
                </div>
              </div>
              <div className="border-t border-outline-variant/20 pt-8">
                <Link
                  to="/rsvp#spomienky"
                  className="inline-flex items-center gap-4 rounded-lg bg-on-background px-8 py-4 font-label text-[10px] uppercase tracking-[0.1rem] text-background transition-colors hover:bg-primary"
                >
                  <span>Otvoriť archív</span>
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    arrow_forward
                  </span>
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
      </div>
    </section>
  );
}
