import { Link } from 'react-router-dom';

export default function Spomienky() {
  return (
    <section id="spomienky" className="bg-surface-container-low px-8 py-24 md:px-24 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-12">
        <div className="sticky-header-offset self-start md:col-span-5 md:sticky">
          <span className="eyebrow mb-4 block">Spoločné spomienky</span>
          <h2 className="section-title mb-8">Fotky na stenu</h2>
          <p className="text-on-surface-variant mb-6 font-body text-lg leading-relaxed">
            Máte spoločnú fotku s Alexandrom alebo Veronikou? Nahrajte ju pred svadbou do nášho
            archívu — počas svadobnej zábavy ju premietneme na stenu a pripomenieme si spoločné
            chvíle.
          </p>
          <p className="text-secondary font-body text-sm leading-relaxed">
            Staré i nové, vážne i veselé. Čím viac, tým lepšie.
          </p>
        </div>
        <div className="relative md:col-span-7">
          <div className="bg-surface border-outline-variant/20 relative overflow-hidden rounded-lg border p-12">
            <div className="relative z-10 flex flex-col gap-10">
              <div className="flex items-start gap-5">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  aria-hidden="true"
                >
                  camera
                </span>
                <div>
                  <p className="text-primary mb-2 font-label text-[11px] tracking-widest uppercase">
                    Pred svadbou
                  </p>
                  <p className="font-newsreader text-xl leading-snug md:text-2xl">
                    Fotky na projekciu, ktoré nám pripomenú spoločné chvíle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  aria-hidden="true"
                >
                  auto_stories
                </span>
                <div>
                  <p className="text-primary mb-2 font-label text-[11px] tracking-widest uppercase">
                    Po svadbe
                  </p>
                  <p className="font-newsreader text-xl leading-snug md:text-2xl">
                    Miesto pre vaše momentky, ktoré náš fotograf nestihol zachytiť.
                  </p>
                </div>
              </div>
              <div className="border-outline-variant/20 border-t pt-8">
                <Link
                  to="/rsvp#spomienky"
                  className="bg-on-background text-background hover:bg-primary inline-flex items-center gap-4 rounded-lg px-8 py-4 font-label text-[10px] tracking-[0.1rem] uppercase transition-colors"
                >
                  <span>Otvoriť archív</span>
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
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
      </div>
    </section>
  );
}
