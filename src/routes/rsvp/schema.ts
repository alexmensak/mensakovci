import { z } from 'zod';

export const drinkValues = ['vino', 'pivo', 'whisky', 'palene', 'gin', 'aperol', 'nealko'] as const;

export const rsvpSchema = z.object({
  fullName: z.string().min(2, 'Meno je povinné'),
  guests: z.coerce
    .number({ invalid_type_error: 'Vyberte počet hostí' })
    .int()
    .min(1, 'Vyberte počet hostí')
    .max(6),
  dietary: z.string().optional().default(''),
  drinks: z.array(z.enum(drinkValues)).default([]),
  website: z.string().max(0).optional().default(''),
});

export type RsvpFormValues = z.infer<typeof rsvpSchema>;
