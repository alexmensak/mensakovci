import { Link } from 'react-router-dom';

export default function RsvpCta() {
  return (
    <section
      id="rsvp"
      className="section-px bg-surface-container-highest py-24 text-center md:py-32 lg:py-40"
    >
      <div className="section-shell">
        <h2 className="section-title mb-12">Budete tam s nami?</h2>
        <Link
          to="/rsvp"
          className="inline-block rounded-lg bg-primary px-16 py-6 font-label text-[12px] uppercase tracking-[0.2rem] text-on-primary shadow-xl shadow-primary/10 transition-all hover:opacity-90"
        >
          Potvrdiť účasť
        </Link>
        <p className="mt-8 font-label text-[10px] uppercase tracking-widest text-secondary">
          Prosíme o potvrdenie do 31. Mája 2026
        </p>
      </div>
    </section>
  );
}
