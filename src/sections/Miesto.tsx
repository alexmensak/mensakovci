import MapCard from '@/components/MapCard';
import { features, venue, type Feature } from '@/data/venues';

const MAP_IMAGE_BASE =
  'https://images.squarespace-cdn.com/content/v1/60507de0d0d313245a0c79cf/3a6fb481-3a53-4f46-9569-a8f0ba5c6148/ACS_0002+%282%29.jpg';
const MAP_IMAGE_SRCSET = [100, 300, 500, 750, 1000, 1500, 2500]
  .map((w) => `${MAP_IMAGE_BASE}?format=${w}w ${w}w`)
  .join(', ');

export default function Miesto() {
  return (
    <section id="miesto" className="bg-surface-container-low px-8 py-24 md:px-24 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-12">
          <div className="sticky-header-offset sticky self-start space-y-8 md:col-span-4">
            <div>
              <span className="eyebrow mb-4 block">Lokalita</span>
              <h2 className="section-title mb-8">Miesto konania</h2>
              <p className="text-secondary max-w-xs font-body leading-relaxed">
                Slávnosť sa uskutoční v Jánskej doline pod Nízkymi Tatrami, v tradičnej liptovskej
                stodole s drevenou konštrukciou a hlinenými omietkami, na dohľad od potoka
                Štiavnica.
              </p>
              <a
                href="https://liptovskydvor.sk/"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-on-background/30 hover:border-on-background text-on-background mt-6 inline-flex items-center gap-3 border-b pb-2 font-label text-[11px] tracking-[0.2rem] uppercase transition-colors"
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
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                alt="Liptovský dvor"
                className="h-full w-full object-cover"
                src={`${MAP_IMAGE_BASE}?format=1500w`}
                srcSet={MAP_IMAGE_SRCSET}
                sizes="(min-width: 768px) 66vw, 100vw"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
    <div className="border-outline-variant/20 bg-surface flex flex-col rounded-lg border p-8">
      <span
        className="material-symbols-outlined text-primary mb-6 text-3xl"
        aria-hidden="true"
      >
        {feature.icon}
      </span>
      <h3 className="mb-3 font-newsreader text-2xl">{feature.title}</h3>
      <p className="text-secondary font-body text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}
