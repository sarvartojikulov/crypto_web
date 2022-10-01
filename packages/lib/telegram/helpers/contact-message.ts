import { ContactMessage } from '@streact/components-form-contacts';
import { getChatId } from '@streact/lib-admin';

import sendMessageToUser from '../utils/sendMessage';

function generateMessage({
  name,
  phone,
  email,
  message,
}: ContactMessage): string {
  const info = '<b>Message from contact page!</b>';
  const _name = `Name: ${name}`;
  const _email = `Email: ${email}`;
  const _phone = `Phone: <code>${phone}</code>`;
  const _message = `Message:%0A${message}`;
  return [info, _name, _email, _phone, _message].join('%0A');
}

export default async function sendContactMessage(formMessage: ContactMessage) {
  const adminChatId = await getChatId();
  const message = generateMessage(formMessage);
  const send = await sendMessageToUser(adminChatId, message);
  return send;
}
