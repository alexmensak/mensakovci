const TESIME_BANNER = '/images/rsvp-banner.webp';

export default function TesimeSa() {
  return (
    <section id="tesime-sa" className="section-px section-py">
      <div className="section-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <h2 className="section-title text-center lg:text-left">Tešíme sa na vás!</h2>
        <div className="relative">
          <div className="image-frame" />
          <div className="relative overflow-hidden rounded-lg">
            <img
              alt="Liptovský dvor — drevenice"
              className="aspect-[2/1] h-full w-full object-cover"
              src={TESIME_BANNER}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
