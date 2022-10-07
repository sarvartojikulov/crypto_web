import runHelpCommand from './commands/help';
import runSetPercentCommand from './commands/set-percent';
import runStartCommand from './commands/start';
import {
  CalculatorMessage,
  calculatorMessageSchema,
  sendCalculatorMessage,
} from './helpers/calculator-message';
import sendContactMessage from './helpers/contact-message';
import { RequestFromTelegram, TelegramRequestBody } from './types';

export {
  runStartCommand,
  runHelpCommand,
  runSetPercentCommand,
  sendContactMessage,
  calculatorMessageSchema,
  sendCalculatorMessage,
};
export type { TelegramRequestBody, RequestFromTelegram, CalculatorMessage };
