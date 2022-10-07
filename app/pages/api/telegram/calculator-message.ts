import {
  calculatorMessageSchema,
  sendCalculatorMessage,
} from '@streact/lib-telegram';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  if (method !== 'POST') {
    return res.status(400).send('BAD_REQUEST');
  }
  try {
    const validated = await calculatorMessageSchema.parseAsync(body);
    const isSended = await sendCalculatorMessage(validated);
    if (isSended) {
      return res.status(200).send('OK');
    } else {
      res.status(500).send('SERVER_ERROR');
    }
  } catch (error) {
    res.status(400).send('BAD_REQUEST');
  }
};

export default handler;
