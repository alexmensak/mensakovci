import { contacts } from '@/data/contacts';

export default function Kontakt() {
  return (
    <section id="kontakt" className="border-outline-variant/10 border-t px-8 py-24 md:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-3">
        <div className="sticky-header-offset self-start md:col-span-1 md:sticky">
          <h3 className="mb-4 font-newsreader text-4xl">Otázky?</h3>
          <p className="text-secondary font-body">
            V prípade akýchkoľvek otázok ohľadom ubytovania alebo dopravy nás neváhajte
            kontaktovať.
          </p>
        </div>
        {contacts.map((contact) => (
          <div key={contact.name} className="md:col-span-1">
            <span className="eyebrow-sm text-primary mb-4 block tracking-widest">
              {contact.name}
            </span>
            <p className="mb-1 font-newsreader text-2xl">
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </p>
            <p className="text-secondary font-body text-sm">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
