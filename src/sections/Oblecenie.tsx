import { dresscodePalette } from '@/data/palette';

const DRESSCODE_IMAGE = '/images/dresscode/hero.png';

export default function Oblecenie() {
  return (
    <section
      id="oblecenie"
      className="bg-background text-on-background px-8 py-24 md:px-24 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-24 md:grid-cols-12">
        <div className="sticky-header-offset self-start md:col-span-6 md:sticky">
          <span className="eyebrow mb-4 block">Dresscode</span>
          <h2 className="section-title mb-8">Oblečenie</h2>
          <p className="text-on-surface-variant mb-12 font-body text-lg leading-relaxed">
            Naša svadba je ladená do prírodných, zemitých tónov. Budeme vďační, ak svoj outfit
            prispôsobíte tejto palete. Prosíme o formálne oblečenie (Black Tie Optional).
          </p>
          <ul className="flex flex-wrap gap-4">
            {dresscodePalette.map((swatch) => (
              <li key={swatch.name} className="flex flex-col gap-3">
                <img
                  src={swatch.image}
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-16 rounded-lg object-cover"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span className="font-label text-center text-[9px] tracking-tighter uppercase">
                  {swatch.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative md:col-span-6">
          <div className="border-primary/20 absolute inset-0 translate-x-4 translate-y-4 rounded-lg border" />
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
