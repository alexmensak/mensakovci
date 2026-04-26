import MapCard from '@/components/MapCard';
import { features, venue, type Feature } from '@/data/venues';

const VENUE_IMAGE = '/images/miesto-banner.webp';

export default function Miesto() {
  return (
    <section id="miesto" className="section-px section-py bg-surface-container-low">
      <div className="section-shell">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:sticky-header-offset space-y-8 md:sticky md:col-span-4 md:self-start">
            <div>
              <span className="eyebrow mb-4 block">Lokalita</span>
              <h2 className="section-title mb-8">Miesto konania</h2>
              <p className="max-w-xs font-body leading-relaxed text-secondary">
                Slávnosť sa uskutoční v Jánskej doline pod Nízkymi Tatrami, v tradičnej liptovskej
                stodole, na dohľad od potoka Štiavnica.
              </p>
              <a
                href="https://liptovskydvor.sk/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-3 border-b border-on-background/30 pb-2 font-label text-[11px] uppercase tracking-[0.2rem] text-on-background transition-colors hover:border-on-background"
              >
                <span>Liptovský dvor</span>
                <span
                  className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  north_east
                </span>
              </a>
            </div>
            <MapCard venue={venue} />
          </div>
          <div className="space-y-12 md:col-span-8">
            <div className="relative">
              <div className="image-frame" />
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
                <img
                  alt="Liptovský dvor — sála, drevenice, areál"
                  className="h-full w-full object-cover"
                  src={VENUE_IMAGE}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col rounded-lg border border-outline-variant/20 bg-surface p-8">
      <span className="material-symbols-outlined mb-6 text-3xl text-primary" aria-hidden="true">
        {feature.icon}
      </span>
      <h3 className="mb-3 font-newsreader text-2xl">{feature.title}</h3>
      <p className="font-body text-sm leading-relaxed text-secondary">{feature.description}</p>
    </div>
  );
}
