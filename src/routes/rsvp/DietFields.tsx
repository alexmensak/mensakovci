import type { UseFormRegister } from 'react-hook-form';
import type { RsvpFormValues } from './schema';

export default function DietFields({ register }: { register: UseFormRegister<RsvpFormValues> }) {
  return (
    <div className="space-y-12">
      <div className="sticky top-24 z-10 mb-8 bg-background py-4">
        <h2 className="border-b border-outline-variant/15 pb-4 font-label text-[11px] uppercase tracking-[0.1rem] text-primary">
          02. Diéta & Alergie
        </h2>
      </div>
      <div className="relative">
        <label
          htmlFor="dietary"
          className="mb-2 block font-label text-[10px] uppercase tracking-[0.1rem] text-secondary"
        >
          Potravinové intolerancie a alergie
        </label>
        <input
          id="dietary"
          type="text"
          placeholder="Napr. Bezlepková, laktózová intolerancia..."
          {...register('dietary')}
          className="w-full border-0 border-b border-outline-variant bg-transparent px-0 py-4 font-newsreader text-xl transition-all placeholder:text-on-surface/20 focus:border-primary focus:ring-0"
        />
      </div>
    </div>
  );
}
