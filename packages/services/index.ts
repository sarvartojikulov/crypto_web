import { getBinanceData } from '@streact/lib-binance';

export async function getCurrenciesData() {
  try {
    const data = await getBinanceData();
    return data;
  } catch (error) {
    // TODO: handle error
    // eslint-disable-next-line no-console
    console.log('[ERROR]: error with currencies fetching!');
    return;
  }
}
