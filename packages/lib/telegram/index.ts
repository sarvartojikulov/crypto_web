import runHelpCommand from './commands/help';
import runSetPercentCommand from './commands/set-percent';
import runStartCommand from './commands/start';
import sendContactMessage from './helpers/contact-message';
import { RequestFromTelegram, TelegramRequestBody } from './types';

export {
  runStartCommand,
  runHelpCommand,
  runSetPercentCommand,
  sendContactMessage,
};
export type { TelegramRequestBody, RequestFromTelegram };
