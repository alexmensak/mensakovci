import type { UseFormRegister } from 'react-hook-form';
import { drinkValues, type RsvpFormValues } from './schema';

const drinkLabels: Record<(typeof drinkValues)[number], string> = {
  vino: 'Víno',
  pivo: 'Pivo',
  whisky: 'Whisky / Rum',
  palene: 'Pálené',
  gin: 'Gin Tonic',
  aperol: 'Aperol',
  nealko: 'Iba nealko',
};

export default function DrinkFields({ register }: { register: UseFormRegister<RsvpFormValues> }) {
  return (
    <div className="space-y-12">
      <div className="sticky top-24 z-10 mb-8 bg-background py-4">
        <h2 className="border-b border-outline-variant/15 pb-4 font-label text-[11px] uppercase tracking-[0.1rem] text-primary">
          03. Nápojový lístok
        </h2>
      </div>
      <fieldset className="space-y-6">
        <legend className="mb-2 block font-label text-[10px] uppercase tracking-[0.1rem] text-secondary">
          Preferované nápoje
        </legend>
        <p className="font-body text-sm leading-relaxed text-secondary opacity-80">
          Zaujíma nás vaša preferencia, aby sme vedeli prispôsobiť množstvo vašich obľúbených
          nápojov. Môžete vybrať viacero možností.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          {drinkValues.map((value) => (
            <label key={value} className="group cursor-pointer">
              <input
                type="checkbox"
                value={value}
                {...register('drinks')}
                className="peer sr-only"
              />
              <span className="block rounded-lg border border-outline-variant/30 px-6 py-3 font-label text-[10px] uppercase tracking-[0.1rem] transition-all peer-checked:border-on-background peer-checked:bg-on-background peer-checked:text-background peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                {drinkLabels[value]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
