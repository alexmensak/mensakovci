import { Link } from 'react-router-dom';
import { navLinks } from '@/data/navLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 flex w-full flex-col items-center gap-12 bg-[#f3f2ee] px-8 py-24 text-center dark:bg-[#252725]">
      <div className="text-on-background dark:text-background font-newsreader text-3xl italic">
        Alexander & Veronika
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {[...navLinks, { label: 'RSVP', to: '/rsvp' }].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="nav-link text-on-background/60 dark:text-background/60 hover:text-on-background dark:hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="nav-link text-on-background dark:text-background opacity-40">
        © {year} Alexander & Veronika. Created with Heritage.
      </p>
    </footer>
  );
}
