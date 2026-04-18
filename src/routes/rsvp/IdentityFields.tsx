import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { RsvpFormValues } from './schema';

type Props = {
  register: UseFormRegister<RsvpFormValues>;
  errors: FieldErrors<RsvpFormValues>;
};

export default function IdentityFields({ register, errors }: Props) {
  return (
    <div className="space-y-12">
      <div className="bg-background sticky top-24 z-10 mb-8 py-4">
        <h2 className="text-primary border-outline-variant/15 border-b pb-4 font-label text-[11px] tracking-[0.1rem] uppercase">
          01. Osobné údaje
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative">
          <label
            htmlFor="fullName"
            className="text-secondary mb-2 block font-label text-[10px] tracking-[0.1rem] uppercase"
          >
            Celé meno
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Meno a priezvisko"
            {...register('fullName')}
            className="border-outline-variant focus:border-primary placeholder:text-on-surface/20 w-full border-0 border-b bg-transparent px-0 py-4 font-newsreader text-xl transition-all focus:ring-0"
          />
          {errors.fullName && (
            <p className="text-error mt-2 text-xs">{errors.fullName.message}</p>
          )}
        </div>
        <div className="relative">
          <label
            htmlFor="guests"
            className="text-secondary mb-2 block font-label text-[10px] tracking-[0.1rem] uppercase"
          >
            Počet hostí
          </label>
          <select
            id="guests"
            {...register('guests')}
            className="border-outline-variant focus:border-primary w-full appearance-none border-0 border-b bg-transparent px-0 py-4 font-newsreader text-xl transition-all focus:ring-0"
          >
            <option value={1}>1 osoba</option>
            <option value={2}>2 osoby</option>
            <option value={3}>3 osoby</option>
            <option value={4}>4 osoby</option>
            <option value={5}>5 osôb</option>
            <option value={6}>6 osôb</option>
          </select>
        </div>
      </div>
    </div>
  );
}
