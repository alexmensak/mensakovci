import type { Venue } from '@/data/venues';

export default function MapCard({ venue }: { venue: Venue }) {
  return (
    <div className="bg-surface border-primary/10 rounded-lg border-l p-12">
      <h3 className="mb-4 font-newsreader text-3xl">{venue.title}</h3>
      <p className="text-secondary mb-8 font-body">
        {venue.lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < venue.lines.length - 1 && <br />}
          </span>
        ))}
      </p>
      <a
        href={venue.mapUrl}
        target="_blank"
        rel="noreferrer"
        className="text-primary border-primary eyebrow-sm inline-flex items-center gap-2 border-b pb-1"
      >
        Mapa
        <span className="material-symbols-outlined text-sm" aria-hidden="true">
          north_east
        </span>
      </a>
    </div>
  );
}
