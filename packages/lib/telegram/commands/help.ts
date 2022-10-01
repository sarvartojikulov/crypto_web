/* eslint-disable no-console */
import { Message } from '../types';
import sendMessageToUser from '../utils/sendMessage';

export default async function runHelpCommand({ chat }: Message) {
  const message =
    'Help for <i>Krypto Swap bot</i>.%0AUse /set_percent <i>command</i> to setup <i>percent for calculator</i> in your web-page.%0A<b>Example for 3%:</b> %0A/set_percent 3';
  const send = await sendMessageToUser(chat.id, message);
  if (send) {
    console.log('[INFO]: MESSAGE SENDED');
  } else {
    console.log('[ERROR]: MESSAGE SENDED');
  }
}
