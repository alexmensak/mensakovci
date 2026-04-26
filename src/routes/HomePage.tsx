import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { useScrollToHash } from '@/hooks/useScrollToHash';
import Dary from '@/sections/Dary';
import Harmonogram from '@/sections/Harmonogram';
import Hero from '@/sections/Hero';
import Kontakt from '@/sections/Kontakt';
import Miesto from '@/sections/Miesto';
import Oblecenie from '@/sections/Oblecenie';
import RsvpCta from '@/sections/RsvpCta';
import Spomienky from '@/sections/Spomienky';
import TesimeSa from '@/sections/TesimeSa';

export default function HomePage() {
  useScrollToHash();

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Miesto />
      <Harmonogram />
      <Oblecenie />
      <Dary />
      <Spomienky />
      <RsvpCta />
      <TesimeSa />
      <Kontakt />
      <Footer />
    </div>
  );
}
