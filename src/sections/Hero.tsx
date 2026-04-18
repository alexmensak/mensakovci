import {Link} from 'react-router-dom';

const HERO_IMAGE = '/images/hero.webp';

export default function Hero() {
  return (
      <header className="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 py-24 md:px-24">
        <div className="bg-surface-container-low absolute top-0 right-0 -z-10 h-full w-1/3"/>
        <div className="grid w-full max-w-7xl grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="text-on-background font-newsreader text-7xl leading-[0.85] tracking-tighter italic md:text-[10rem]">
              Veronika &
              <br/>
              <span className="ml-12 md:ml-32">Alexander</span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:mt-24 md:flex-row md:items-center md:gap-16">
              <div className="flex flex-col">
                <span className="eyebrow mb-2">Dátum konania</span>
                <p className="font-newsreader text-4xl">26. 09. 2026</p>
              </div>
              <div className="flex flex-col">
                <span className="eyebrow mb-2">Miesto</span>
                <p className="font-newsreader text-4xl">Liptovský Ján</p>
              </div>
            </div>
            <div className="mt-10 md:mt-16">
              <Link
                  to="/rsvp"
                  className="group border-on-background/30 hover:border-on-background text-on-background inline-flex items-center gap-3 border-b pb-2 font-label text-[11px] tracking-[0.2rem] uppercase transition-colors"
              >
                <span>Potvrdiť účasť</span>
                <span
                    className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                >
                arrow_forward
              </span>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg md:col-span-4">
            <img
                alt="Veronika a Alexander v cyprusovej aleji"
                className="h-full w-full object-cover"
                src={HERO_IMAGE}
            />
          </div>
        </div>
        <div className="absolute bottom-12 left-8 hidden md:block">
        <span
            className="material-symbols-outlined text-primary animate-bounce text-4xl"
            aria-hidden="true"
        >
          south
        </span>
        </div>
      </header>
  );
}
