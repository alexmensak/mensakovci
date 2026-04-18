import MapCard from '@/components/MapCard';
import { features, venue, type Feature } from '@/data/venues';

const MAP_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBUr-aVMfHKx2wvpQzrr5ZAmHqUykuob21VfvCF16_KVL7F_qfNY1LiTkrkRXdQEXnWmI1iJzhWKutSHokb3rq8DEnZzYfoUg8VSV6uiuVmN109bU65T5Ht_9zQb0-j5ETzd6UqyPFmrIL3wNZmLMK8wiuPXoqIoPCVbXlbuKWk9Opu7mIP3Fz_AW2FbD4nAFLdTA6IQI_RM2Z09vcFV02uK2MP9T_k5Kn0MEYVeGHDwCNZtnpLR0_jqGOT8Xn6AjMCHfim0yJNlUFP';

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
            </div>
            <MapCard venue={venue} />
          </div>
          <div className="space-y-12 md:col-span-8">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img alt="Liptovský dvor" className="h-full w-full object-cover" src={MAP_IMAGE} />
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
