import { Link } from 'react-router-dom';

export default function RsvpCta() {
  return (
    <section id="rsvp" className="bg-surface-container-highest px-8 py-32 text-center">
      <div className="sticky-header-offset sticky py-4">
        <h2 className="section-title mb-12">Budete tam s nami?</h2>
      </div>
      <div className="mt-8">
        <Link
          to="/rsvp"
          className="bg-primary text-on-primary shadow-primary/10 inline-block rounded-lg px-16 py-6 font-label text-[12px] tracking-[0.2rem] uppercase shadow-xl transition-all hover:opacity-90"
        >
          Potvrdiť účasť (RSVP)
        </Link>
        <p className="text-secondary mt-8 font-label text-[10px] tracking-widest uppercase">
          Prosíme o potvrdenie do 15. augusta 2024
        </p>
      </div>
    </section>
  );
}
