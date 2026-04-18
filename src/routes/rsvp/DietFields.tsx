import type { UseFormRegister } from 'react-hook-form';
import { drinkValues, type RsvpFormValues } from './schema';

const drinkLabels: Record<(typeof drinkValues)[number], string> = {
  vino: 'Víno',
  whisky: 'Whisky / Rum',
  gin: 'Gin Tonic',
  nealko: 'Nealko',
};

export default function DietFields({ register }: { register: UseFormRegister<RsvpFormValues> }) {
  return (
    <div className="space-y-12">
      <div className="bg-background sticky top-24 z-10 mb-8 py-4">
        <h2 className="text-primary border-outline-variant/15 border-b pb-4 font-label text-[11px] tracking-[0.1rem] uppercase">
          02. Gastronómia & Diéta
        </h2>
      </div>
      <div className="space-y-8">
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
        <fieldset>
          <legend className="text-secondary mb-4 block font-label text-[10px] tracking-[0.1rem] uppercase">
            Preferovaný nápoj (Barový lístok)
          </legend>
          <div className="flex flex-wrap gap-4">
            {drinkValues.map((value) => (
              <label key={value} className="group cursor-pointer">
                <input
                  type="radio"
                  value={value}
                  {...register('drink')}
                  className="peer sr-only"
                />
                <span className="border-outline-variant/30 peer-checked:bg-on-background peer-checked:text-background peer-checked:border-on-background peer-focus-visible:ring-primary block rounded-lg border px-6 py-3 font-label text-[10px] tracking-[0.1rem] uppercase transition-all peer-focus-visible:ring-2">
                  {drinkLabels[value]}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
