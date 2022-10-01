import { getAdminDataForApp } from './services/app-data';
import { updatePercent, getPercent } from './services/calculator-percent';
import { updateChatId, getChatId } from './services/chat-id';
import { AdminData } from './services/types';

export {
  getAdminDataForApp,
  updatePercent,
  getPercent,
  updateChatId,
  getChatId,
};

export type { AdminData };
