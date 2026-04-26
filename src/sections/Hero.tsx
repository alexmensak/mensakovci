import { Link } from 'react-router-dom';

const HERO_IMAGE = '/images/hero.webp';

export default function Hero() {
  return (
    <header className="section-px relative flex min-h-screen flex-col justify-center overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="grid w-full max-w-7xl grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
        <div className="md:col-span-7 lg:col-span-8">
          <h1 className="fluid-display font-newsreader italic tracking-tighter text-on-background">
            Veronika &
            <br />
            <span className="ml-[8%] md:ml-[12%]">Alexander</span>
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
              className="group inline-flex items-center gap-3 border-b border-on-background/30 pb-2 font-label text-[11px] uppercase tracking-[0.2rem] text-on-background transition-colors hover:border-on-background"
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
        <div className="relative md:col-span-5 lg:col-span-4">
          <div className="image-frame" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <img
              alt="Veronika a Alexander v cyprusovej aleji"
              className="h-full w-full object-cover"
              src={HERO_IMAGE}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-8 hidden md:block">
        <span
          className="material-symbols-outlined animate-bounce text-4xl text-primary"
          aria-hidden="true"
        >
          south
        </span>
      </div>
    </header>
  );
}
