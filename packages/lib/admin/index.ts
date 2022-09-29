import axios from 'axios';
import { z } from 'zod';

export const adminSchema = z.object({
  admin: z.object({
    calculator: z.object({
      percent: z.number(),
    }),
  }),
});

export type AdminData = z.infer<typeof adminSchema>;

export async function getAdminData(): Promise<AdminData> {
  const { data } = await axios.get('http://[::1]:3000/api/admin');
  return data;
}
