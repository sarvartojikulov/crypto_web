import { z } from 'zod';

export const adminSchema = z.object({
  admin: z.object({
    calculator: z.object({
      percent: z.number(),
    }),
  }),
});

export type AdminData = z.infer<typeof adminSchema>;
