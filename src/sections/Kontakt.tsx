import { contacts } from '@/data/contacts';

export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="section-px border-t border-outline-variant/10 py-12 md:py-16 lg:py-20"
    >
      <div className="section-shell grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-12 lg:gap-16">
        <div className="sticky-header-offset self-start md:sticky md:col-span-1">
          <h3 className="mb-4 font-newsreader text-4xl">Otázky?</h3>
          <p className="font-body text-secondary">
            V prípade akýchkoľvek otázok ohľadom ubytovania alebo dopravy nás neváhajte kontaktovať.
          </p>
        </div>
        {contacts.map((contact) => (
          <div key={contact.name} className="md:col-span-1">
            <span className="eyebrow-sm mb-4 block tracking-widest text-primary">
              {contact.name}
            </span>
            <p className="mb-1 font-newsreader text-2xl">
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
