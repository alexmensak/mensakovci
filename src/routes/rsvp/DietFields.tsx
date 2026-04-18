import type { UseFormRegister } from 'react-hook-form';
import type { RsvpFormValues } from './schema';

export default function DietFields({ register }: { register: UseFormRegister<RsvpFormValues> }) {
  return (
    <div className="space-y-12">
      <div className="bg-background sticky top-24 z-10 mb-8 py-4">
        <h2 className="text-primary border-outline-variant/15 border-b pb-4 font-label text-[11px] tracking-[0.1rem] uppercase">
          02. Diéta & Alergie
        </h2>
      </div>
      <div className="relative">
        <label
          htmlFor="dietary"
          className="text-secondary mb-2 block font-label text-[10px] tracking-[0.1rem] uppercase"
        >
          Potravinové intolerancie a alergie
        </label>
        <input
          id="dietary"
          type="text"
          placeholder="Napr. Bezlepková, laktózová intolerancia..."
          {...register('dietary')}
          className="border-outline-variant focus:border-primary placeholder:text-on-surface/20 w-full border-0 border-b bg-transparent px-0 py-4 font-newsreader text-xl transition-all focus:ring-0"
        />
      </div>
    </div>
  );
}
