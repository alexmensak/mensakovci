import { schedule } from '@/data/schedule';

export default function Harmonogram() {
  return (
    <section id="harmonogram" className="section-px section-py">
      <div className="section-shell grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-12 lg:gap-20">
        <div className="md:sticky-header-offset self-start md:sticky md:col-span-5">
          <span className="eyebrow mb-4 block">Časová os</span>
          <h2 className="section-title">Harmonogram</h2>
        </div>
        <ul className="space-y-0 md:col-span-7">
          {schedule.map((item, index) => (
            <li
              key={item.time}
              className={`flex flex-col rounded-lg border-t border-outline-variant/20 px-4 py-12 transition-colors hover:bg-surface-container-low md:flex-row md:items-center ${
                index === schedule.length - 1 ? 'border-b' : ''
              }`}
            >
              <span className="mb-4 font-newsreader text-3xl md:mb-0 md:w-48">{item.time}</span>
              <div className="flex-grow">
                <h3 className="mb-2 font-label text-[11px] uppercase tracking-widest text-primary">
                  {item.label}
                </h3>
                {item.title && <p className="font-newsreader text-2xl">{item.title}</p>}
                {item.subitems && (
                  <ul className="mt-3 space-y-1 font-newsreader text-lg text-on-surface-variant">
                    {item.subitems.map((sub) => (
                      <li key={sub}>{sub}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
