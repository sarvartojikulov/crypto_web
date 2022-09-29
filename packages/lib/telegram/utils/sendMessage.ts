import axios from 'axios';

import { getTelegramUrlSendMessage } from './telegramUrl';

const TOKEN = process.env.NEXT_TELEGRAM_TOKEN;

export default async function sendMessageToUser(
  chatId: number,
  message: string
) {
  const sendMessage = await axios.get(
    getTelegramUrlSendMessage(chatId, TOKEN!, message)
  );
  if (sendMessage.status === 200) {
    return true;
  }
  return false;
}
