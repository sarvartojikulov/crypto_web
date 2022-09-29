export function getTelegramUrlSendMessage(
  chatId: number,
  botKey: string,
  message: string
) {
  return `https://api.telegram.org/bot${botKey}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=HTML`;
}
