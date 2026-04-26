export default function Dary() {
  return (
    <section id="dary" className="section-px section-py bg-surface-container-low">
      <div className="section-shell grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-12 lg:gap-20">
        <div className="md:sticky-header-offset self-start md:sticky md:col-span-5">
          <span className="eyebrow mb-4 block">Pre novomanželov</span>
          <h2 className="section-title">Dary</h2>
          <p className="mt-8 font-body text-lg leading-relaxed text-on-surface-variant">
            Vaša prítomnosť je pre nás najväčším darom. Nič viac od vás neočakávame — no ak nás
            chcete potešiť, budeme vďační za finančný príspevok na spoločný štart do manželského
            života.
          </p>
        </div>
        <div className="space-y-6 md:col-span-7">
          <div className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-10 md:p-14">
            <span className="eyebrow-sm mb-4 block text-primary">Kvety</span>
            <p className="font-newsreader text-lg italic leading-relaxed text-on-surface-variant md:text-xl">
              Kvety, prosím, vynechajte. Keďže naše kroky po svadbe smerujú rovno do Prahy, kytice
              by nám po ceste zvädli.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
