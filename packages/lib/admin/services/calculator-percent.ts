import { readFile, writeData } from '@streact/services-database';

type UpdatePercentInput = {
  percent: number;
};

export async function updatePercent({ percent }: UpdatePercentInput) {
  const fileContent = await readFile();
  fileContent.admin.calculator.percent = percent;
  const newData = await writeData(fileContent);
  return newData;
}

export async function getPercent() {
  const fileContent = await readFile();

  return fileContent.admin.calculator;
}
