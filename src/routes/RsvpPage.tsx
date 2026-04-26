import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { getDb } from '@/lib/firebase';
import { postRsvpToSheet } from '@/lib/sheets';
import DietFields from './rsvp/DietFields';
import DrinkFields from './rsvp/DrinkFields';
import IdentityFields from './rsvp/IdentityFields';
import PhotosUpload from './rsvp/PhotosUpload';
import { rsvpSchema, type RsvpFormValues } from './rsvp/schema';

const RSVP_IMAGE = '/images/rsvp.webp';

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
    defaultValues: { drinks: [], dietary: '' },
  });

  const onSubmit = async (values: RsvpFormValues) => {
    if (values.website) {
      setStatus('success');
      return;
    }
    setStatus('submitting');
    setErrorMessage(null);
    const writeToFirestore = async () => {
      const write = addDoc(collection(getDb(), 'rsvps'), {
        fullName: values.fullName,
        guests: values.guests,
        dietary: values.dietary,
        drinks: values.drinks,
        submittedAt: serverTimestamp(),
      });
      const timeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Časový limit vypršal. Skúste to znova.')), 15000),
      );
      return Promise.race([write, timeout]);
    };
    const [firestoreResult, sheetsResult] = await Promise.allSettled([
      writeToFirestore(),
      postRsvpToSheet(values),
    ]);
    if (sheetsResult.status === 'rejected') {
      console.warn('Sheets sync failed (non-blocking)', sheetsResult.reason);
    }
    if (firestoreResult.status === 'fulfilled') {
      setStatus('success');
      return;
    }
    console.error('RSVP submit failed', firestoreResult.reason);
    setStatus('error');
    setErrorMessage(
      firestoreResult.reason instanceof Error
        ? firestoreResult.reason.message
        : 'Nepodarilo sa odoslať.',
    );
  };

  const onInvalid = () => {
    setErrorMessage('Skontrolujte vyplnené polia vyššie.');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">
        <section className="section-px relative mx-auto flex max-w-7xl flex-col items-end justify-between gap-12 py-24 md:flex-row md:py-32 lg:py-40">
          <div className="sticky top-32 max-w-2xl">
            <span className="eyebrow mb-6 block">Prítomnosť je dar</span>
            <h1 className="font-headline text-6xl leading-[0.9] tracking-tight text-on-background md:text-8xl">
              Potvrdenie účasti
            </h1>
          </div>
          <div className="hidden text-right md:block md:w-1/3">
            <p className="font-body text-sm leading-relaxed text-secondary opacity-70">
              Prosíme o potvrdenie vašej účasti do konca mája, aby sme mohli doladiť každý detail
              našej spoločnej oslavy.
            </p>
          </div>
        </section>

        <section className="section-px pb-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div className="relative">
                  <div className="image-frame" />
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-container">
                    <img
                      alt="Detail svadobnej pozvánky"
                      className="h-full w-full object-cover"
                      src={RSVP_IMAGE}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              {status === 'success' ? (
                <div className="space-y-16">
                  <div className="rounded-lg bg-surface-container-low p-12 text-center">
                    <h2 className="mb-4 font-newsreader text-4xl">Ďakujeme!</h2>
                    <p className="font-body text-secondary">Vaše potvrdenie sme prijali.</p>
                  </div>
                  <PhotosUpload />
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit, onInvalid)}
                  className="space-y-24"
                  noValidate
                >
                  <input
                    type="text"
                    {...register('website')}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      width: '1px',
                      height: '1px',
                      overflow: 'hidden',
                    }}
                  />
                  <IdentityFields register={register} errors={errors} />
                  <DietFields register={register} />
                  <DrinkFields register={register} />

                  {errorMessage && (
                    <p className="font-body text-sm text-error" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex justify-end pt-12">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group relative flex items-center gap-6 overflow-hidden rounded-lg bg-primary px-12 py-6 font-label text-[12px] uppercase tracking-[0.2rem] text-on-primary transition-all disabled:opacity-60"
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
                      <div className="absolute inset-0 bg-on-background opacity-0 transition-opacity group-hover:opacity-10" />
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
