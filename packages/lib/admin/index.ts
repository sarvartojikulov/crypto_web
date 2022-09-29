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

export async function writeAdminData(
  data: AdminData
): Promise<AdminData | undefined> {
  const res = await axios.post('http://[::1]:3000/api/admin', {
    ...data,
  });
  if (res.status !== 200) {
    return undefined;
  }
  return res.data;
}
