import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { RsvpFormValues } from './schema';

type Props = {
  register: UseFormRegister<RsvpFormValues>;
  errors: FieldErrors<RsvpFormValues>;
};

export default function IdentityFields({ register, errors }: Props) {
  return (
    <div className="space-y-12">
      <div className="sticky top-24 z-10 mb-8 bg-background py-4">
        <h2 className="border-b border-outline-variant/15 pb-4 font-label text-[11px] uppercase tracking-[0.1rem] text-primary">
          01. Osobné údaje
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative">
          <label
            htmlFor="fullName"
            className="mb-2 block font-label text-[10px] uppercase tracking-[0.1rem] text-secondary"
          >
            Celé meno
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Meno a priezvisko"
            {...register('fullName')}
            className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-4 font-newsreader text-xl transition-all placeholder:text-on-surface/20 focus:border-primary focus:ring-0"
          />
          {errors.fullName && <p className="mt-2 text-xs text-error">{errors.fullName.message}</p>}
        </div>
        <div className="relative">
          <label
            htmlFor="guests"
            className="mb-2 block font-label text-[10px] uppercase tracking-[0.1rem] text-secondary"
          >
            Počet hostí
          </label>
          <select
            id="guests"
            defaultValue=""
            {...register('guests')}
            className="w-full appearance-none border-0 border-b border-outline-variant bg-transparent px-0 py-4 font-newsreader text-xl transition-all focus:border-primary focus:ring-0"
          >
            <option value="" disabled>
              Vyberte počet
            </option>
            <option value={1}>1 osoba</option>
            <option value={2}>2 osoby</option>
            <option value={3}>3 osoby</option>
            <option value={4}>4 osoby</option>
            <option value={5}>5 osôb</option>
            <option value={6}>6 osôb</option>
          </select>
          {errors.guests && <p className="mt-2 text-xs text-error">{errors.guests.message}</p>}
        </div>
      </div>
    </div>
  );
}
