import { getChatId } from '@streact/lib-admin';
import { z } from 'zod';

import sendMessageToUser from '../utils/sendMessage';

const calculatorMessageSchema = z.object({
  action: z.string(),
  buyWith: z.string(),
  getIn: z.string(),
  pay: z.number(),
  get: z.number(),
  totals: z.object({
    fees: z.number(),
    sum: z.number(),
  }),
  name: z.string(),
  phone: z.number(),
  email: z.string().email(),
});

type CalculatorMessage = z.infer<typeof calculatorMessageSchema>;

function generateMessage({
  action,
  buyWith,
  getIn,
  get,
  pay,
  totals: { fees, sum },
  name,
  phone,
  email,
}: CalculatorMessage): string {
  const fiat = action === 'sell' ? getIn : buyWith;
  const info = '<b>Message from calculator!</b>';
  const _action = `Action: <b>${action}</b>`;
  const _conversion = `Conversion: ${pay} ${buyWith} - ${get} ${getIn}`;
  const _totals = `Totals: fees - ${fees.toFixed(
    2
  )} ${fiat}, sum - ${sum.toFixed(2)} ${fiat}`;
  const _name = `Name: ${name}`;
  const _email = `Email: ${email}`;
  const _phone = `Phone: <code>${phone}</code>`;
  return [info, _action, _conversion, _totals, _name, _email, _phone].join(
    '%0A'
  );
}

async function sendCalculatorMessage(formMessage: CalculatorMessage) {
  const adminChatId = await getChatId();
  const message = generateMessage(formMessage);
  const send = await sendMessageToUser(adminChatId, message);
  return send;
}

export { sendCalculatorMessage, calculatorMessageSchema };
export type { CalculatorMessage };
