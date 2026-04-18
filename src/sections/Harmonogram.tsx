import { schedule } from '@/data/schedule';

export default function Harmonogram() {
  return (
    <section id="harmonogram" className="px-8 py-24 md:px-24 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-12">
        <div className="sticky-header-offset sticky self-start md:col-span-4">
          <span className="eyebrow mb-4 block">Časová os</span>
          <h2 className="section-title">Harmonogram</h2>
        </div>
        <ul className="space-y-0 md:col-span-8">
          {schedule.map((item, index) => (
            <li
              key={item.time}
              className={`border-outline-variant/20 hover:bg-surface-container-low flex flex-col rounded-lg border-t px-4 py-12 transition-colors md:flex-row md:items-center ${
                index === schedule.length - 1 ? 'border-b' : ''
              }`}
            >
              <span className="mb-4 font-newsreader text-3xl md:mb-0 md:w-48">{item.time}</span>
              <div className="flex-grow">
                <h3 className="text-primary mb-2 font-label text-[11px] tracking-widest uppercase">
                  {item.label}
                </h3>
                <p className="font-newsreader text-2xl">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
