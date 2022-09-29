/* eslint-disable no-console */
import { Message } from '../types';
import sendMessageToUser from '../utils/sendMessage';

export default async function runStartCommand({ from, chat }: Message) {
  const message =
    'Welcome to <i>Krypto Swap</i> bot <b>' +
    from.first_name +
    '</b>.%0ATo get a list of commands sends /help';
  const send = await sendMessageToUser(chat.id, message);
  if (send) {
    console.log('[INFO]: MESSAGE SENDED');
  } else {
    console.log('[ERROR]: MESSAGE SENDED');
  }
}
