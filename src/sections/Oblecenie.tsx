import { dresscodePalette } from '@/data/palette';

const DRESSCODE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAWAOUR70zXeeztSwL4vKuZkJXiSnz2gBUBb76BfulG68kMFPO8hkpGXuR2ECowsmNj9-dTLjeSKJeIJZQtHRAVt5EDDeFnucBQmy_jemJi1k_nEBM1Qe6lsMD6ZIW4tZrMXy55blU8XoJXKL99I780SXdm5N8zButHaS9kGbfXtRusVzDQtT-HnW9rgN4rXscDfHf6qZ-2i7u9-jp5ufEKlftHNir9ipvhkmNnwIoK0RYTcJ_Slz__XUhhsnItnj3KZc606CsHbTiI';

export default function Oblecenie() {
  return (
    <section
      id="oblecenie"
      className="bg-on-background text-background px-8 py-24 md:px-24 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-24 md:grid-cols-12">
        <div className="sticky-header-offset self-start md:col-span-6 md:sticky">
          <span className="eyebrow mb-4 block">Dresscode</span>
          <h2 className="section-title mb-8">Oblečenie</h2>
          <p className="text-surface-variant/80 mb-12 font-body text-lg leading-relaxed">
            Naša svadba je ladená do prírodných, zemitých tónov. Budeme vďační, ak svoj outfit
            prispôsobíte tejto palete. Prosíme o formálne oblečenie (Black Tie Optional).
          </p>
          <ul className="flex flex-wrap gap-4">
            {dresscodePalette.map((swatch) => (
              <li key={swatch.name} className="flex flex-col gap-3">
                <div
                  className="h-16 w-16 rounded-lg"
                  style={{ backgroundColor: swatch.hex }}
                  aria-hidden="true"
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
            className="relative aspect-[4/5] w-full rounded-lg object-cover grayscale"
            src={DRESSCODE_IMAGE}
          />
        </div>
      </div>
    </section>
  );
}
