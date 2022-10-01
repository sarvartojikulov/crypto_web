import { readFile } from '@streact/services-database';

import { AdminData } from './types';

export async function getAdminDataForApp(): Promise<AdminData> {
  const data = await readFile();
  return data;
}
