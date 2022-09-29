/* eslint-disable no-console */
import { writeAdminData } from '@streact/lib-admin';

import { Message } from '../types';
import sendMessageToUser from '../utils/sendMessage';

const SARVAR = 448599910;

const messages = {
  notAdmin: 'You are not admin!',
  bad_request: 'Wrong use of command. Please type /help for help.',
  failed: 'Process failed. please contact developer',
  success: 'New Calculator percent was updated successfully',
};

export default async function runSetPercentCommand({ chat, text }: Message) {
  if (chat.id !== SARVAR) {
    return sendMessageToUser(chat.id, messages['notAdmin']);
  }
  const input = text.split(' ')[1];
  if (input.length === 0 || typeof input === undefined) {
    return sendMessageToUser(chat.id, messages['bad_request']);
  }
  console.log('>> ', Number(input));
  const body = {
    admin: {
      calculator: {
        percent: Number(input),
      },
    },
  };
  const res = await writeAdminData(body);
  if (res === undefined) {
    return sendMessageToUser(chat.id, messages['failed']);
  }

  const send = await sendMessageToUser(chat.id, messages['success']);
  if (send) {
    console.log('[INFO]: MESSAGE SENDED');
  } else {
    console.log('[ERROR]: MESSAGE SENDED');
  }
}
