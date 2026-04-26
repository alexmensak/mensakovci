import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/data/navLinks';

export default function NavBar() {
  const location = useLocation();
  const isRsvp = location.pathname === '/rsvp';

  return (
    <nav className="section-px sticky top-0 z-[100] flex w-full items-center justify-between bg-background/80 py-6 backdrop-blur-md dark:bg-on-background/80">
      <Link
        to="/"
        className="font-newsreader text-2xl font-bold tracking-tighter text-on-background dark:text-background"
      >
        V&A
      </Link>
      <div className="hidden items-center gap-12 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="nav-link text-on-background hover:text-primary dark:text-background"
          >
            {link.label}
          </Link>
        ))}
        {isRsvp ? (
          <span className="nav-link border-b border-primary/20 pb-1 text-primary">RSVP</span>
        ) : (
          <Link
            to="/rsvp"
            className="nav-link rounded-lg bg-primary px-6 py-2 text-on-primary hover:opacity-90"
          >
            RSVP
          </Link>
        )}
      </div>
      <button
        type="button"
        aria-label="Menu"
        className="text-on-background dark:text-background md:hidden"
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          menu
        </span>
      </button>
    </nav>
  );
}
