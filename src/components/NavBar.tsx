import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/data/navLinks';

export default function NavBar() {
  const location = useLocation();
  const isRsvp = location.pathname === '/rsvp';

  return (
    <nav className="bg-background/80 dark:bg-on-background/80 sticky top-0 z-[100] flex w-full items-center justify-between px-8 py-6 backdrop-blur-md">
      <Link
        to="/"
        className="text-on-background dark:text-background font-newsreader text-2xl font-bold tracking-tighter"
      >
        A&V
      </Link>
      <div className="hidden items-center gap-12 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="nav-link text-on-background dark:text-background hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
        {isRsvp ? (
          <span className="nav-link text-primary border-primary/20 border-b pb-1">RSVP</span>
        ) : (
          <Link
            to="/rsvp"
            className="nav-link bg-primary text-on-primary rounded-lg px-6 py-2 hover:opacity-90"
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
