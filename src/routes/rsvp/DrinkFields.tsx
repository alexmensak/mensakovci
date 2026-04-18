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
      <div className="bg-background sticky top-24 z-10 mb-8 py-4">
        <h2 className="text-primary border-outline-variant/15 border-b pb-4 font-label text-[11px] tracking-[0.1rem] uppercase">
          03. Nápojový lístok
        </h2>
      </div>
      <fieldset className="space-y-6">
        <legend className="text-secondary mb-2 block font-label text-[10px] tracking-[0.1rem] uppercase">
          Preferované nápoje
        </legend>
        <p className="text-secondary font-body text-sm leading-relaxed opacity-80">
          Zaujíma nás vaša preferencia, aby sme vedeli prispôsobiť množstvo vašich obľúbených nápojov. Môžete vybrať viacero možností.
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
              <span className="border-outline-variant/30 peer-checked:bg-on-background peer-checked:text-background peer-checked:border-on-background peer-focus-visible:ring-primary block rounded-lg border px-6 py-3 font-label text-[10px] tracking-[0.1rem] uppercase transition-all peer-focus-visible:ring-2">
                {drinkLabels[value]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
