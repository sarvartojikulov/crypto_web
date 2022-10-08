/* eslint-disable no-console */
import { getChatId, updatePercent } from '@streact/lib-admin';

import { Message } from '../types';
import sendMessageToUser from '../utils/sendMessage';

const messages = {
  notAdmin: 'You are not admin!',
  bad_request:
    '<b>Wrong use of command.</b>%0AInput should be positive number.Please type /help for help.',
  failed: 'Process failed. please contact developer',
  success: 'New Calculator percent was updated successfully!',
};

export default async function runSetPercentCommand({ chat, text }: Message) {
  const adminChatId = await getChatId();
  if (chat.id !== adminChatId) {
    return sendMessageToUser(chat.id, messages['notAdmin']);
  }
  const [_, percent] = text.split(' ');
  const num = Number(percent);
  if (
    typeof percent === 'undefined' ||
    percent.length === 0 ||
    Number.isNaN(num) ||
    num < 0
  ) {
    return sendMessageToUser(chat.id, messages['bad_request']);
  }
  const res = await updatePercent({
    percent: num / 100,
  });
  if (res === undefined) {
    return sendMessageToUser(chat.id, messages['failed']);
  }

  return sendMessageToUser(chat.id, messages['success']);
}
