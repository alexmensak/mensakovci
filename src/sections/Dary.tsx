export default function Dary() {
  return (
    <section id="dary" className="liptov-pattern px-8 py-24 md:px-24 md:py-48">
      <div className="mx-auto max-w-3xl text-center">
        <div className="sticky-header-offset sticky py-4">
          <span className="eyebrow mb-8 block">Svadobné dary</span>
          <div className="mb-12">
            <span
              className="material-symbols-outlined text-primary/40 text-4xl"
              aria-hidden="true"
            >
              featured_seasonal_and_gifts
            </span>
          </div>
        </div>
        <p className="text-on-surface bg-surface/80 mt-12 inline-block rounded-lg p-8 font-newsreader text-3xl leading-snug italic backdrop-blur md:text-4xl">
          „Vaša prítomnosť je pre nás najväčším darom. Ak nás chcete potešiť, budeme vďační za
          príspevok do nášho svadobného prasiatka na spoločný štart do manželského života."
        </p>
        <p className="text-on-surface/80 mt-8 font-newsreader text-lg italic md:text-xl">
          Kvetov sa prosím zrieknite — nevesta ich, žiaľ, nebude môcť odviezť so sebou do Prahy.
        </p>
      </div>
    </section>
  );
}
