import { promises, writeFileSync } from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');

type CalculatorContent = {
  percent: number;
};

type TelegramContent = {
  chatId: number;
};

type FileContent = {
  admin: {
    calculator: CalculatorContent;
    telegram: TelegramContent;
  };
};

export async function readFile(): Promise<FileContent> {
  const content = await promises.readFile(
    dataDirectory + '/data.json',
    'utf-8'
  );
  return JSON.parse(content);
}

export async function writeData(data: FileContent) {
  writeFileSync(dataDirectory + '/data.json', JSON.stringify(data), 'utf-8');
  return writeData;
}
