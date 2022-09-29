import { NextApiRequest } from 'next';

export type RequestFromTelegram = Omit<NextApiRequest, 'body'> & {
  body: TelegramRequestBody;
};

export type TelegramRequestBody = {
  update_id: number;
  message: Message;
};

export type Message = {
  message_id: number;
  from: From;
  chat: Chat;
  date: number;
  text: string;
  entities: Entity[];
};

export type Chat = {
  id: number;
  first_name: string;
  type: string;
};

export type Entity = {
  offset: number;
  length: number;
  type: string;
};

export type From = {
  id: number;
  is_bot: boolean;
  first_name: string;
  language_code: string;
};
