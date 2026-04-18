import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { getDb } from '@/lib/firebase';
import DietFields from './rsvp/DietFields';
import DrinkFields from './rsvp/DrinkFields';
import IdentityFields from './rsvp/IdentityFields';
import PhotosUpload from './rsvp/PhotosUpload';
import { rsvpSchema, type RsvpFormValues } from './rsvp/schema';

const RSVP_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAifhAFyu5UQoJibxHU53sCpyUCrpv9nZ_zMmuofO693nLbUiE09Oa44auYV1Zcpv7u291vIEoNZuDByrjvv9R86L2COVZTWqvFMx4eIsfWYdyarucgpz1V3aGf7UJsMzs9yYCLwm--m78XK282xTM53wh21qu-joXxGu80AmoRpotXZxCDfoLxhOUt0eZyw4n2ZrUxNI62s9hQL7EjVg1MMy86znxzHqEOWeg6qtOW7C3Rzkw1KysH27Eedf6RMZJEWe2-pcrybrqN';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function RsvpPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RsvpFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { guests: 1, drinks: [], dietary: '' },
  });

  const onSubmit = async (values: RsvpFormValues) => {
    setStatus('submitting');
    setErrorMessage(null);
    try {
      await addDoc(collection(getDb(), 'rsvps'), {
        ...values,
        submittedAt: serverTimestamp(),
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Nepodarilo sa odoslať.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">
        <section className="relative mx-auto flex max-w-7xl flex-col items-end justify-between gap-12 px-8 py-24 md:flex-row md:py-32">
          <div className="sticky top-32 max-w-2xl">
            <span className="eyebrow mb-6 block">Prítomnosť je dar</span>
            <h1 className="text-on-background font-headline text-6xl leading-[0.9] tracking-tight md:text-8xl">
              Potvrdenie účasti
            </h1>
          </div>
          <div className="hidden text-right md:block md:w-1/3">
            <p className="text-secondary font-body text-sm leading-relaxed opacity-70">
              Prosíme o potvrdenie vašej účasti do konca mája, aby sme mohli doladiť každý
              architektonický detail našej spoločnej oslavy.
            </p>
          </div>
        </section>

        <section className="px-8 pb-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div className="bg-surface-container relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    alt="Wedding invitation detail"
                    className="h-full w-full object-cover contrast-125 grayscale"
                    src={RSVP_IMAGE}
                  />
                  <div className="bg-primary/5 absolute inset-0 mix-blend-multiply" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              {status === 'success' ? (
                <div className="space-y-16">
                  <div className="bg-surface-container-low rounded-lg p-12 text-center">
                    <h2 className="mb-4 font-newsreader text-4xl">Ďakujeme!</h2>
                    <p className="text-secondary font-body">Vaše potvrdenie sme prijali.</p>
                  </div>
                  <PhotosUpload />
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-24" noValidate>
                  <IdentityFields register={register} errors={errors} />
                  <DietFields register={register} />
                  <DrinkFields register={register} />

                  {errorMessage && (
                    <p className="text-error font-body text-sm" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex justify-end pt-12">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group bg-primary text-on-primary relative flex items-center gap-6 overflow-hidden rounded-lg px-12 py-6 font-label text-[12px] tracking-[0.2rem] uppercase transition-all disabled:opacity-60"
                    >
                      <span className="relative z-10">
                        {status === 'submitting' ? 'Odosielam…' : 'Odoslať'}
                      </span>
                      <span
                        className="material-symbols-outlined relative z-10 transition-transform group-hover:translate-x-2"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                      <div className="bg-on-background absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
