import runHelpCommand from './commands/help';
import runSetPercentCommand from './commands/set-percent';
import runStartCommand from './commands/start';
import { RequestFromTelegram, TelegramRequestBody } from './types';

export { runStartCommand, runHelpCommand, runSetPercentCommand };
export type { TelegramRequestBody, RequestFromTelegram };
