import { z } from 'zod';

export const drinkValues = ['vino', 'whisky', 'gin', 'nealko'] as const;

export const rsvpSchema = z.object({
  fullName: z.string().min(2, 'Meno je povinné'),
  guests: z.coerce.number().int().min(1).max(4),
  dietary: z.string().optional().default(''),
  drink: z.enum(drinkValues),
});

export type RsvpFormValues = z.infer<typeof rsvpSchema>;
