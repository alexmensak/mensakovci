export default function Dary() {
  return (
    <section
      id="dary"
      className="bg-surface-container-low px-8 py-24 md:px-24 md:py-48"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-12 md:gap-20">
        <div className="md:sticky-header-offset self-start md:sticky md:col-span-5">
          <span className="eyebrow mb-4 block">Pre novomanželov</span>
          <h2 className="section-title">Dary</h2>
          <p className="text-on-surface-variant mt-8 font-body text-lg leading-relaxed">
            Vaša prítomnosť je pre nás najväčším darom. Nič viac od vás neočakávame — no ak nás
            chcete potešiť, budeme vďační za finančný príspevok na spoločný štart do manželského života.
          </p>
        </div>
        <div className="space-y-6 md:col-span-7">
          <div className="bg-surface-container-lowest border-outline-variant/30 rounded-lg border p-10 md:p-14">
            <span className="eyebrow-sm text-primary mb-4 block">Kvety</span>
            <p className="text-on-surface-variant font-newsreader text-lg leading-relaxed italic md:text-xl">
              Kvety, prosím, vynechajte. Keďže naše kroky po svadbe smerujú rovno do Prahy, kytice by nám po ceste rýchlo zvädli.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
