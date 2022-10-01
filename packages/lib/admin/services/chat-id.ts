import { readFile, writeData } from '@streact/services-database';

type ChatIdInput = {
  chatId: number;
};

export async function updateChatId({ chatId }: ChatIdInput) {
  const fileContent = await readFile();
  fileContent.admin.telegram.chatId = chatId;
  const newData = await writeData(fileContent);
  return newData;
}

export async function getChatId(): Promise<number> {
  const fileContent = await readFile();
  return fileContent.admin.telegram.chatId;
}
