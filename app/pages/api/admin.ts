import { promises as fs, writeFileSync } from 'fs';
import path from 'path';

import { adminSchema } from '@streact/lib-admin';
import { NextApiRequest, NextApiResponse } from 'next';

const dataDirectory = path.join(process.cwd(), 'data');

type CalculatorContent = {
  percent: number;
};

type FileContent = {
  admin: {
    calculator: CalculatorContent;
  };
};

async function readFile(): Promise<FileContent> {
  const content = await fs.readFile(dataDirectory + '/data.json', 'utf-8');
  return JSON.parse(content);
}

async function writeData(data: FileContent) {
  return writeFileSync(
    dataDirectory + '/data.json',
    JSON.stringify(data),
    'utf-8'
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const data = await readFile();
    return res.status(200).json(data);
  }
  if (req.method === 'POST') {
    try {
      const validated = adminSchema.parse(req.body);
      await writeData(validated);
      return res.status(200).json({ result: 'OK' });
    } catch (error) {
      return res.status(400).json({ error: 'Invalid body' });
    }
  }
  return res.status(400).json({ error: 'Method not allowed' });
}
