/* eslint-disable no-console */
import { env } from 'process';

import {
  RequestFromTelegram,
  runStartCommand,
  runHelpCommand,
  runSetPercentCommand,
} from '@streact/lib-telegram';
import { NextApiResponse } from 'next';

const SARVAR = 448599910;

const handler = async (req: RequestFromTelegram, res: NextApiResponse) => {
  const { message } = req.body;

  if (message.text === '/start') {
    runStartCommand(message);
  }
  if (message.text === '/help') {
    runHelpCommand(message);
  }
  if (message.text.includes('/set_percent')) {
    runSetPercentCommand(message);
  }
  res.status(200).send('OK');
};

export default handler;
