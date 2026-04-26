import { dresscodePalette } from '@/data/palette';

const DRESSCODE_IMAGE = '/images/dresscode/hero.png';

export default function Oblecenie() {
  return (
    <section id="oblecenie" className="section-px section-py bg-background text-on-background">
      <div className="section-shell grid grid-cols-1 items-start gap-16 md:grid-cols-12 md:gap-12 lg:gap-20">
        <div className="sticky-header-offset self-start md:sticky md:col-span-6">
          <span className="eyebrow mb-4 block">Dresscode</span>
          <h2 className="section-title mb-8">Oblečenie</h2>
          <p className="mb-12 font-body text-lg leading-relaxed text-on-surface-variant">
            Naša svadba bude ladená do prírodných, zemitých tónov. Budeme vďační, ak svoj outfit
            prispôsobíte uvedenej farebnej palete. Prosíme o formálne oblečenie.
          </p>
          <ul className="grid grid-cols-5 gap-2 sm:gap-4">
            {dresscodePalette.map((swatch) => (
              <li key={swatch.name} className="flex flex-col gap-3">
                <img
                  src={swatch.image}
                  alt=""
                  aria-hidden="true"
                  className="aspect-square w-full rounded-lg object-cover"
                  style={{ backgroundColor: swatch.hex }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="relative md:col-span-6">
          <div className="image-frame" />
          <img
            alt="Textile textures"
            className="relative aspect-square w-full rounded-lg object-contain"
            src={DRESSCODE_IMAGE}
          />
        </div>
      </div>
    </section>
  );
}
