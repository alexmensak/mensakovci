import { Link } from 'react-router-dom';
import { navLinks } from '@/data/navLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-px mt-24 flex w-full flex-col items-center gap-12 bg-[#f3f2ee] py-24 text-center dark:bg-[#252725]">
      <div className="font-newsreader text-3xl italic text-on-background dark:text-background">
        Veronika & Alexander
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {[...navLinks, { label: 'RSVP', to: '/rsvp' }].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="nav-link text-on-background/60 hover:text-on-background dark:text-background/60 dark:hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="nav-link text-on-background opacity-40 dark:text-background">
        © {year} Veronika & Alexander.
      </p>
    </footer>
  );
}
